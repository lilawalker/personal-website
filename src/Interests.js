import React from 'react';
import cat1 from './images/cat1.JPG';
import cat2 from './images/cat2.JPG';
import cat3 from './images/cat3.JPG';
import cat4 from './images/cat4.JPG';
import cat5 from './images/cat5.JPG';
import cycle1 from './images/cycle1.jpg';
import cycle2 from './images/cycle2.jpg';
import cycle3 from './images/cycle3.jpg';
import cycle7 from './images/cycle7.jpg';
import cycle5 from './images/cycle5.jpg';
import sew1 from './images/sew1.jpg';
import sew2 from './images/sew2.jpg';
import sew3 from './images/sew3.jpg';
import sew4 from './images/sew4.jpg';
import sew5 from './images/sew5.jpg';
import tat1 from './images/tat1.jpg';
import tat2 from './images/tat2.jpg';
import tat3 from './images/tat3.jpg';
import tat4 from './images/tat4.jpg';
import tat5 from './images/tat5.jpg';

const Img = ({ name }) => {
  return(
    <img
      src={name}
      alt={name}
      className="inline-block rounded-full h-32 w-32"
    />
  )
}

class Interests extends React.Component {

  render() {

    const interests = [
      {
        header: "Photographing neighbourhood cats on my daily-mandated walk",
        images: [
          cat1,
          cat3,
          cat2,
          cat4,
          cat5,
        ]
      },
      {
        header: "Cycling to cool places",
        images: [
          cycle1,
          cycle7,
          cycle2,
          cycle3,
          cycle5,
        ]
      },
      {
        header: "Sewing beautiful works of art",
        images: [
          sew5,
          sew2,
          sew4,
          sew1,
          sew3,
        ]
      },
      {
        header: "Collecting eclectic tattoos",
        images: [
          tat5,
          tat1,
          tat4,
          tat2,
          tat3,
        ]
      },
    ];

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
}

export default Interests;
