import React from "react";
import one from "../assets/img/first1.jpg";
import second from "../assets/img/first2.jpg";
import third from "../assets/img/first3.jpg";

const First = () => {
  return (
    <>
      <div className="grid grid-cols-4 items-center justify-center h-screen w-full text-black">
        <div className="col-span-1 p-8 ">
          <h4 className="text-3xl font-bold text-green-600 font-serif p-2 m-2">
            {" "}
            Features{" "}
          </h4>
          <p className="text-xl font-semibold text-green-600 font-serif ml-2 mb-10">
            What All Can AGRI AI Do?
          </p>
          <button className="m-10 font-bold btn btn-ghost rounded-full w-2/3 text-white  bg-green-600 font-mono ">
            {" "}
            Learn More{"     "}
          </button>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-4 p-4">
          <div>
            <img
              src={one}
              alt="Image 1"
              className="w-4/5 h-3/4 object-cover rounded-xl"
            />
            <p className="text-xl font-semibold p-2">
              CROP RECCOMMENDATION SYSTEM
            </p>
            <p>
              Using nitrogen, potassium, phosphorous levels, temperature,
              humidity, and pH of the soil.predicts the most suitable crop
              varieties that can be grown, ensuring optimal yield and resource
              utilization.
            </p>
          </div>

          <div>
            <img
              src={second}
              alt="Image 2"
              className="w-4/5 h-3/4 object-cover rounded-xl"
            />
            <p className="text-xl font-semibold p-2">
              FERTILIZER PREDICTION SYSTEM
            </p>
            <p>
              Using nitrogen, potassium, phosphorous levels, temperature,
              humidity, and pH of the soil.predicts the most suitable fertilizer
              varieties that can be grown, ensuring optimal yield.
            </p>
          </div>
          <div>
            <img
              src={third}
              alt="Image 3"
              className="w-4/5 h-3/4 object-cover rounded-xl"
            />
            <p className="text-xl font-semibold p-2">Disease Detection</p>
            <p>
              Detects the type of disease the plant is having based on the
              uploaded image.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
