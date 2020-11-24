import React from 'react';
import interests from './data/interestData'

const Interests = () => {

  const Img = ({ name }) => {
    return(
      <img
        src={name}
        alt={name}
        className="inline-block rounded-full h-32 w-32"
      />
    )
  }

  return (
    <div className="w-full lg:w-1/2 mx-auto px-4">
      {
        interests.map((interest, index) => {
          return (
            <div
              key={index}
              className="flex flex-col my-12 border-pink-200 border rounded bg-gray-100 px-2"
            >
              <div className="text-center pt-6 pb-6 font-logo text-xl text-pink-700">
                {interest.header}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 pb-6 mx-auto">
              {
                interest.images.map((img, index) => <Img name={img} key={index}/>)
              }
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Interests;
