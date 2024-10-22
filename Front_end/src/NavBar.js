import React from "react";
import icon from "./assets/img/crop.png";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex items-center ml-10">
          <img src={icon} className="object-contain w-8 mr-2" />
          <div className="text-2xl text-green-600 font-extrabold font-sans">
            AGRI AI
          </div>
        </div>
        <div className="flex m-1">
          <div className="btn btn-ghost m-1 font-bold text-green-600  rounded-full">
            Home
          </div>
          <div className="btn btn-ghost m-1 font-bold  text-green-600  rounded-full">
            Predictions
          </div>
          <div className="btn btn-ghost m-1 font-bold text-green-600  rounded-full">
            Market Place{" "}
          </div>
          <div className="btn btn-ghost m-1 font-bold text-green-600  rounded-full ">
            Sign Up/Login{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
