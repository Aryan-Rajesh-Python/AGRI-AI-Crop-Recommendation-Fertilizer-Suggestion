import os
import cv2
from PIL import Image
import numpy as np
from io import BytesIO
import tensorflow as tf
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .forms import ImageUploadForm
from django.core.files.storage import FileSystemStorage

potato = tf.keras.models.load_model("./Potato_Model")
apple = tf.keras.models.load_model("./Apple_Model")

EXPECTED_SHAPE = (256, 256, 3)

POTATO_NAMES = [
    "Potato bacterial_wilt",
    "Potato early_blight",
    "Potato healthy",
    "Potato late_blight",
    "Potato nematode",
    "Potato pests",
    "Potato phytophthora",
    "Potato virus",
]


def hello(request):
    return HttpResponse("hello world")


def read_file_as_image(data) -> np.ndarray:
    try:
        image = np.array(Image.open(BytesIO(data)))
        return image
    except Exception as e:
        return None


def resize_image(image: np.ndarray, target_shape: tuple) -> np.ndarray:
    resized_image = cv2.resize(image, (target_shape[1], target_shape[0]))
    return resized_image


@csrf_exempt
def upload_image(request):
    if request.method == "POST":
        form = ImageUploadForm(request.POST, request.FILES)
        try:
            if form.is_valid():
                uploaded_image = form.cleaned_data["image"]
                image_size = uploaded_image.size
                size_kb = image_size / 1024.0
                image = read_file_as_image(uploaded_image.read())

                if image is not None:
                    resized_image = resize_image(image, EXPECTED_SHAPE)
                    img_batch = np.expand_dims(resized_image, 0)

                    predictions = potato.predict(img_batch)

                    predicted_class = POTATO_NAMES[np.argmax(predictions[0])]
                    confidence = float(np.max(predictions[0]))

                    response_data = {
                        "class": predicted_class,
                        "confidence": confidence,
                        "size_kb": size_kb,
                    }
                    return JsonResponse(response_data)
                else:
                    return JsonResponse({"error": "Invalid image file."})
        except Exception as e:
            return JsonResponse({"error": str(e)})
    else:
        form = ImageUploadForm()

    return JsonResponse({"message": "Use POST and upload an image."})
