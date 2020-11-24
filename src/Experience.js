import React from 'react';
import ExperienceCard from './ExperienceCard';
import experience from './data/experienceData'

const Experience = () => {
  return (
    <div className="mt-9 mb-3 w-5/6 md:w-1/2 mx-auto">
      {
        experience.map((institution, index) => {
          return (
            <ExperienceCard
              key={index}
              index={index}
              institution={institution}
            />
          );
        })
      }
    </div>
  )
}

export default Experience;
