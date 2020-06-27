import React from 'react';
import Hi from './images/Hi.JPG'

class Profile extends React.Component {

  render() {

    return (
      <div className="profile-container">
        <div className="profile-content">
          <p>Hi, I'm Lila! I'm a Junior Software Engineer based in London.</p>
          <p>
            I'm a career changer with a background in finance and several years experience as a
            team leader and mentor. I’ve always been inquisitive and artistic;
            whether it be crocheting, sewing, or dismantling something just to
            see how it works. Unfortunately finance wasn't bringing the personal and career
            satisfaction I was looking for, so I started learning how to code!
          </p>
          <p>
            Learning to code allowed me to combine my existing skills of problem
            solving, leadership and analysis with my creative side. This
            inspired me to become a fully fledged developer, and led me to complete an
            intensive coding bootcamp at Makers Academy.
          </p>
        </div>

        <div className="profile-content">
          <img src={Hi} alt="Hi" />
        </div>
      </div>
    );
  }
}

export default Profile;
