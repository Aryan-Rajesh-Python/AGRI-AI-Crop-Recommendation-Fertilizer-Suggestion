import React, { useState } from "react";
import bg2 from "../assets/img/bg2.jpg";
function Form({ onSubmit }) {
  const crops = [
    "Rice",
    "Grape",
    "Apple",
    "Corn",
    "Potato",
    "Sugarcane",
    "Tomato",
  ];

  const [selectedCrop, setSelectedCrop] = useState("Select Crop");
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      image: image,
    };
    onSubmit(formValues);
  };

  const handleCropSelect = (crop) => {
    setSelectedCrop(crop);
    setIsOpen(false);
  };

  return (
    <div className="flex items-start justify-center h-screen w-full ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-6 bg-green-700 min-h-[80vh] min-w-[90vw] rounded-xl items-stretch gap-8">
          <div className="text-2xl text-white font-extrabold m-4 flex justify-center">
            DISEASE DETECTION SYSTEM
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
              <div className="dropdown dropdown-hover p-8">
                <div
                  tabIndex="0"
                  role="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="btn m-1 w-64"
                >
                  {selectedCrop}
                  <div>
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {isOpen && (
                  <ul
                    tabIndex="0"
                    className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-40"
                  >
                    {crops.map((crop) => (
                      <li key={crop}>
                        <a onClick={() => handleCropSelect(crop)}>{crop}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-52 p-12 mb-4 border-2 border-green-700 border-dashed rounded-lg cursor-pointer bg-green-300 hover:bg-green-400"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-black-900"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-black-900">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-black-500 dark:text-black-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    onChange={handleInputChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <button
              className="btn btn-square btn-ghost text-base mt-6 font-bold text-white w-80 h-16 flex justify-center items-center rounded-md"
              style={{
                background: "linear-gradient(to right, #00441b, #00a74a)",
              }}
            >
              Get Recommendations
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function ResultCard({ result, onBack }) {
  return (
    <div className="flex items-start justify-center h-screen w-full ">
      <div className="flex flex-col p-6 bg-green-700 min-h-[80vh] min-w-[90vw] rounded-xl items-stretch gap-8">
        <div className="text-2xl text-white font-extrabold m-4 flex justify-center">
          CROP RECOMMENDATION SYSTEM
        </div>

        <div className="flex flex-row">
          {/* First Column (Image) */}
          <div className="w-full md:w-1/2 py-4">
            <img
              src={bg2}
              alt="Image Description"
              className="w-full h-[calc(100vh-300px)] rounded-2xl"
            />
          </div>

          {/* Vertical Line */}
          <div className="ml-10 hidden md:block w-0.5 bg-white h-[calc(100vh-240px)] rounded-lg"></div>

          {/* Second Column (Text) */}
          <div className="w-full md:w-1/2 p-8">
            <div className="text-2xl font-bold text-white text-center">
              {result}
            </div>
            <p className="mt-4 text-xl text-white justify-center text-center">
              The result predicted may not be accurate. it is a approximate
              choice one can choose and it may vary depending upon several
              factors. Predicted outcome is based on the past data and choosed
              with limited factors only. this is not be taken as the primary
              choice.
            </p>
            <button
              className="btn btn-square text-center btn-ghost text-base m-3 font-bold text-white w-80 h-16 flex justify-center items-center rounded-md"
              style={{
                background: "linear-gradient(to right, #00441b, #00a74a)",
              }}
              onClick={onBack}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Model3() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formValues) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", formValues.image);

      const response = await fetch(
        "https://agriaibackend.onrender.com/upload/",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
      setTimeout(() => {
        setResponse(data.class);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleBack = () => {
    setResponse(null);
  };

  return (
    <div className="flex items-start justify-center h-screen w-full ">
      {loading ? (
        <div className="flex flex-col p-6 bg-green-700 min-h-[80vh] min-w-[90vw] rounded-xl justify-center items-center gap-8">
          <span className="loading loading-spinner loading-lg text-green-100"></span>
        </div>
      ) : response ? (
        <ResultCard result={response} onBack={handleBack} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}
