import React from 'react';
import Hi from './images/Hi.JPG'

class Profile extends React.Component {

  render() {

    return (
      <div className="lg:w-2/3 flex justify-between mx-auto px-10 mt-16">
        <div className="w-full lg:w-7/12 pr-12 my-auto">
          <h2 className="font-logo text-3xl text-pink-700 mb-4">
            Hi, I'm Lila, a Junior Software Engineer based in London.
          </h2>
          <p className="mb-4 text-xl text-gray-700">
            I write Ruby and Javascript, but I'm eager to learn new
            technologies.
          </p>
          <p className="mb-4 text-xl text-gray-700">
            I've recently graduated from Makers Academy's intensive coding
            bootcamp and I'm on the lookout for a job.
            <a
              href="mailto:lilawlkr@gmail.com"
              className="font-logo text-pink-500 hover:text-pink-400 active:text-pink-300"
            >
              {" "}
              Hire me!
            </a>
          </p>
        </div>

        <div className="w-full lg:w-5/12 pl-12">
          <img src={Hi} alt="Hi" />
        </div>
      </div>
    );
  }
}

export default Profile;
