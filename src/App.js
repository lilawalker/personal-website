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
  constructor(props) {
    super(props)
    this.state = {
      active: 'profile'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(component) {
    this.setState({ active: component})
  }

  changeComponent(component) {
    const components = {
      profile: <Profile />,
      techskills: <TechSkills />,
      projects: <Projects />,
      careerhistory: <CareerHistory />,
      education: <Education />,
      interests: <Interests />,
      contact: <Contact />
    };

    return components[component]
  }

  render() {

    return (
      <div>
        <div className="main-header"> 
          <Header />
          <Nav handleChange={this.handleChange} />
        </div>
        {this.changeComponent(this.state.active)}
      </div>
    );
  }
}

export default App;
