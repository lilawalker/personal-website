import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const component = event.target.attributes["component"].value;
    this.props.handleChange(component);
  }

  render() {

    return (
      <div className="nav-bar">
        <a href="/#" component="profile" onClick={this.handleClick}>Profile</a>
        <a href="/#" component="techskills" onClick={this.handleClick}>Tech Skills</a>
        <a href="/#" component="projects" onClick={this.handleClick}>Projects</a>
        <a href="/#" component="careerhistory" onClick={this.handleClick}>Career History</a>
        <a href="/#" component="education" onClick={this.handleClick}>Education</a>
        <a href="/#" component="interests" onClick={this.handleClick}>Interests</a>
        <a href="/#" component="contact" onClick={this.handleClick}>Contact Me</a>
      </div>
    );
  }
}

export default Nav;
