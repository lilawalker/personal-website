import React from "react";
import Hi from "./images/Hi.JPG";

const Profile = () => {
  return (
    <div className="lg:w-2/3 md:flex flex-row-reverse justify-between mx-auto px-10 mt-16">
      <div className="w-full md:w-5/12 lg:pl-12 mb-6">
        <img
          src={Hi}
          alt="Hi"
          className="h-48 w-48 mx-auto md:h-auto md:w-auto"
        />
      </div>

      <div className="w-full md:w-7/12 pr-12 my-auto">
        <h2 className="font-logo text-xl lg:text-3xl text-pink-700 mb-4">
          Hi, I'm Lila, a Software Developer based in London.
        </h2>
        <p className="mb-4 text-xl text-gray-700">
          I write Ruby and Javascript, but I'm eager to learn new technologies.
        </p>
        <p className="mb-4 text-xl text-gray-700">
          I'm a graduate of Makers Academy's intensive coding bootcamp and I
          currently work at AND Digital.
          <a
            href="/contact"
            className="font-logo text-pink-500 hover:text-pink-400 active:text-pink-300"
          >
            {" "}
            Contact me!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
