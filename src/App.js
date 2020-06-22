import React from 'react';
import Header from './Header'
import Nav from './Nav'
import Profile from './Profile';
import TechSkills from './TechSkills';
import Projects from './Projects';
import CareerHistory from './CareerHistory';
import Education from './Education';
import Interests from './Interests';
import Contact from './Contact';

class App extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <Nav />
        <Profile />
        <TechSkills />
        <Projects />
        <CareerHistory />
        <Education />
        <Interests />
        <Contact />
      </div>
    );
  }
}

export default App;
