import React from 'react';
import Profile from './Profile';
import TechSkills from './TechSkills';
import Projects from './Projects';
import CareerHistory from './CareerHistory';
import Education from './Education';
import Interests from './Interests';
import Contact from './Contact';

class Nav extends React.Component {

  render() {

    return (
      <div className="nav-bar">
        <Profile />
        <TechSkills />
        <Projects />
        <CareerHistory />
        <Education />
        <Interests />
        <Contact />
      </div>
    )
  }
}

export default Nav;
