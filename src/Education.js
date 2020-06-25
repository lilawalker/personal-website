import React from 'react';
import ACCALogo from './ACCALogo.png'
import RyersonLogo from './RyersonLogo.jpg'
import MakersLogo from './MakersLogo.png'
import pin from './pin.svg'
import calendar from './calendar.svg'

class Education extends React.Component {

  render() {

    const education = [
      {
      schoolName: 'Makers Academy',
      certification: 'Software Development Bootcamp',
      location: 'London, UK',
      dates: 'Jan 2020 - May 2020',
      logo: MakersLogo
    },
    {
      schoolName: 'ACCA',
      certification: 'Financial Accountancy',
      location: 'London, UK',
      dates: '2011 - 2014',
      logo: ACCALogo
    },
    {
      schoolName: 'Ryerson University',
      certification: 'Bachelor of Technology, Graphic Communications Management',
      location: 'Toronto, Canada',
      dates: '2001 - 2006',
      logo: RyersonLogo
    }
  ]

    return (
      <div>
        {
          education.map((school, index) => {
            return(
              <div key={index} className="education-container">
                <div className="education-content">
                  <img src={school.logo} alt="Logo" className="edu-image"/>
                </div>
                <div className="education-content">
                  <p>{school.schoolName}</p>
                  <p>{school.certification}</p>
                  <p>
                    <img src={pin} alt="pin" className="edu-logo" />
                    {school.location}
                    <img src={calendar} alt="calendar" className="edu-logo" />
                    {school.dates}
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Education;
