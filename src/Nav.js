import React from 'react';

class Nav extends React.Component {

  handleClick(event) {
    event.preventDefault();
    console.log('The link was clicked');
  }

  render() {

    return (
      <div className="nav-bar">
        <a href="/#" onClick={this.handleClick}>Profile</a>
        <a href="/#" onClick={this.handleClick}>Tech Skills</a>
        <a href="/#" onClick={this.handleClick}>Projects</a>
        <a href="/#" onClick={this.handleClick}>Career History</a>
        <a href="/#" onClick={this.handleClick}>Education</a>
        <a href="/#" onClick={this.handleClick}>Interests</a>
        <a href="/#" onClick={this.handleClick}>Contact</a>
      </div>
    );
  }
}

export default Nav;
