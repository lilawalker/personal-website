import React from 'react';
import Nav from './Nav'
import Profile from './Profile';
import Projects from './Projects';
import Experience from './Experience';
import Interests from './Interests';
import Contact from './Contact';
import 'fontsource-permanent-marker';
import 'typeface-roboto';

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
      projects: <Projects />,
      experience: <Experience />,
      interests: <Interests />,
      contact: <Contact />
    };

    return components[component]
  }

  render() {

    return (
      <div className="font-sans">
        <Nav handleChange={this.handleChange} />
        {this.changeComponent(this.state.active)}
      </div>
    );
  }
}

export default App;
