import React from 'react';
import cat1 from './cat1.JPG';
import cat2 from "./cat2.JPG";
import cat3 from "./cat3.JPG";
import cat4 from "./cat4.JPG";
import cat5 from "./cat5.JPG";
import cycle1 from "./cycle1.jpg";
import cycle2 from "./cycle2.jpg";
import cycle3 from "./cycle3.jpg";
import cycle7 from "./cycle7.jpg";
import cycle5 from "./cycle5.jpg";
import sew1 from "./sew1.jpg";
import sew2 from "./sew2.jpg";
import sew3 from "./sew3.jpg";
import sew4 from "./sew4.jpg";
import sew5 from "./sew5.jpg";
import tat1 from "./tat1.jpg";
import tat3 from "./tat3.jpg";
import tat4 from "./tat4.jpg";
import tat5 from "./tat5.jpg";

class Interests extends React.Component {

  render() {

    const interests = [
      {
        header: "Photographing neighbourhood cats on my daily-mandated walk",
        img1: cat1,
        img2: cat2,
        img3: cat3,
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
      <div>
        {
          interests.map((interest, index) => {
            return(
              <div key={index}>
                <div className="interest-header">
                  {interest.header}
                </div>

                <div className="image-container">
                  <img src={interest.img1} alt="img1" className="interest-image" />
                  <img src={interest.img2} alt="img2" className="interest-image" />
                  <img src={interest.img3} alt="img3" className="interest-image" />
                  <img src={interest.img4} alt="img4" className="interest-image" />
                  <img src={interest.img5} alt="img5" className="interest-image" />
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
