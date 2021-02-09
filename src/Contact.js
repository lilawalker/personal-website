import React from "react";
import contact from "./data/contactData";

const Contact = () => {
  return (
    <div>
      <div className="text-center py-12 font-logo text-xl text-pink-700">
        Find Me Below
      </div>

      <ul className="flex justify-evenly m-auto p-4 lg:w-1/2">
        {contact.map((details, index) => {
          return (
            <li key={index}>
              <a href={details.link} target="blank">
                <img src={details.logo} alt="Logo" className="h-16 w-16" />
              </a>
            </li>
          );
        })}
      </ul>

      {/* <div className="text-center mt-12">
        <a
          href="/LilaWalkerCV.pdf"
          download
          className="font-logo text-pink-500 text-xs bg-pink-200 hover:bg-pink-400 active:bg-pink-300 rounded-full px-3 py-1"
        >
          Download CV
        </a>
      </div> */}
    </div>
  );
};

export default Contact;
