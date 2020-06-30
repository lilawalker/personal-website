import React from 'react';
import calendar from './Calendar'
import pin from './Pin'

class ExperienceCard extends React.Component {

  render() {

    const institution = this.props.institution;

    return(
      <div className="w-full lg:flex mt-6 mb-6 border-gray-400 border rounded">
        <div className="h-48 lg:h-auto lg:w-48 w-full flex items-center bg-gray-400">
          <span className="block mx-auto">{institution.icon}</span>
        </div>

        <div className="w-full p-4 leading-normal">

          <div className="font-bold text-xl mb-2">
            {institution.title}
          </div>

          <div className="text-gray-700 text-base">
            {institution.name}
          </div>

          <div className="flex py-2">
            <div className="flex lg:w-1/3 w-1/2">
              <div>
                <svg className="fill-current text-gray-600 w-4 h-4 mr-1" xmlns={pin.xmlns} viewBox={pin.viewBox}>
                  {pin.path}
                </svg>
              </div>
              <div className="text-gray-600 text-sm px-1">
                {institution.location}
              </div>
            </div>
            <div className="flex lg:w-1/3 w-1/2">
              <div>
                <svg className="fill-current text-gray-600 w-4 h-4 mr-1" xmlns={calendar.xmlns} viewBox={calendar.viewBox}>
                  {calendar.path}
                </svg>
              </div>
              <div className="text-gray-600 text-sm px-1">
                {institution.dates}
              </div>
            </div>
          </div>

          <div className="text-gray-700 text-sm">
            {institution.description}
          </div>
        </div>
      </div>
    )
  }
}

export default ExperienceCard;
