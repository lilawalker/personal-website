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
import tat3 from './images/tat3.jpg';
import tat4 from './images/tat4.jpg';
import tat5 from './images/tat5.jpg';

class Interests extends React.Component {

  render() {

    const interests = [
      {
        header: "Photographing neighbourhood cats on my daily-mandated walk",
        img1: cat1,
        img2: cat3,
        img3: cat2,
        img4: cat4,
        img5: cat5,
      },
      {
        header: "Cycling to cool places",
        img1: cycle1,
        img2: cycle7,
        img3: cycle2,
        img4: cycle3,
        img5: cycle5,
      },
      {
        header: "Sewing beautiful works of art",
        img1: sew5,
        img2: sew2,
        img3: sew4,
        img4: sew1,
        img5: sew3,
      },
      {
        header: "Collecting eclectic tattoos",
        img1: tat5,
        img2: tat1,
        img3: tat4,
        img4: tat3,
        img5: tat1,
      },
    ];

    return (
      <div className="w-1/2 mx-auto">
        {
          interests.map((interest, index) => {
            return(
              <div key={index} className="flex flex-col my-6 border-pink-200 border rounded">
                <div className="text-center pt-6 pb-6 font-logo text-xl text-pink-700">
                  {interest.header}
                </div>

                <div className="flex justify-evenly pb-6">
                  <img src={interest.img1} alt="img1" className="rounded-full h-24" />
                  <img src={interest.img2} alt="img2" className="rounded-full h-24" />
                  <img src={interest.img3} alt="img3" className="rounded-full h-24" />
                  <img src={interest.img4} alt="img4" className="rounded-full h-24" />
                  <img src={interest.img5} alt="img5" className="rounded-full h-24" />
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Interests;
