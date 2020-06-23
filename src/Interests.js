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

    return (
      <div>
        <div className="interest-header">
          Photographing neighbourhood cats on my daily-mandated walk
        </div>

        <div className="image-container">
          <img src={cat1} alt="cat1" className="interest-image" />
          <img src={cat2} alt="cat2" className="interest-image" />
          <img src={cat3} alt="cat3" className="interest-image" />
          <img src={cat4} alt="cat4" className="interest-image" />
          <img src={cat5} alt="cat5" className="interest-image" />
        </div>

        <div className="interest-header">Cycling to cool places</div>

        <div className="image-container">
          <img src={cycle1} alt="cycle1" className="interest-image" />
          <img src={cycle7} alt="cycle7" className="interest-image" />
          <img src={cycle2} alt="cycle2" className="interest-image" />
          <img src={cycle3} alt="cycle3" className="interest-image" />
          <img src={cycle5} alt="cycle5" className="interest-image" />
        </div>

        <div className="interest-header">Sewing beautiful works of art</div>

        <div className="image-container">
          <img src={sew5} alt="sew5" className="interest-image" />
          <img src={sew2} alt="sew2" className="interest-image" />
          <img src={sew4} alt="sew4" className="interest-image" />
          <img src={sew1} alt="sew1" className="interest-image" />
          <img src={sew3} alt="sew3" className="interest-image" />
        </div>

        <div className="interest-header">Collecting eclectic tattoos</div>

        <div className="image-container">
          <img src={tat5} alt="tat5" className="interest-image" />
          <img src={tat1} alt="tat1" className="interest-image" />
          <img src={tat4} alt="tat4" className="interest-image" />
          <img src={tat3} alt="tat3" className="interest-image" />
        </div>
      </div>
    );
  }
}

export default Interests;
