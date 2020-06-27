import React from 'react';
import Header from './Header'
import Nav from './Nav'
import Profile from './Profile';
import Projects from './Projects';
import Experience from './Experience';
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
      projects: <Projects />,
      experience: <Experience />,
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
