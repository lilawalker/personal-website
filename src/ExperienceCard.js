import React from 'react';
import calendar from './logos/Calendar'
import pin from './logos/Pin'

const ExperienceCard = ({ institution }) => {
  return (
    <div className="w-full lg:flex my-12 border-pink-200 border rounded bg-gray-100">
      <div className="min-h-48 lg:h-auto lg:w-1/3 w-full flex items-center bg-pink-200">
        <span className="block mx-auto">{institution.icon}</span>
      </div>

      <div className="w-full lg:w-2/3 p-4 leading-normal">
        <div className="font-bold text-2xl mb-2 font-logo text-pink-700">
          {institution.title}
        </div>

        <div className="text-gray-700 text-lg">{institution.name}</div>

        <div className="flex py-2 text-pink-500">
          <div className="flex w-1/2">
            <div>
              <svg
                className="fill-current sm:w-4 sm:h-4 w-3 h-3 mr-1"
                xmlns={calendar.xmlns}
                viewBox={calendar.viewBox}
              >
                {calendar.path}
              </svg>
            </div>
            <div className="sm:text-sm text-xs px-1">{institution.dates}</div>
          </div>
          <div className="flex w-1/2">
            <div>
              <svg
                className="fill-current sm:w-4 sm:h-4 w-3 h-3 mr-1"
                xmlns={pin.xmlns}
                viewBox={pin.viewBox}
              >
                {pin.path}
              </svg>
            </div>
            <div className="sm:text-sm text-xs px-1">{institution.location}</div>
          </div>
        </div>

        <div className="text-gray-700 text-md">{institution.description}</div>
      </div>
    </div>
  );
}

export default ExperienceCard;
