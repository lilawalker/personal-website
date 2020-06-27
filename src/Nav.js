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

    const navLinks = [
      {
        name: "profile",
        title: "Profile",
      },
      {
        name: "projects",
        title: "Projects",
      },
      {
        name: "experience",
        title: "Experience",
      },
      {
        name: "interests",
        title: "Interests",
      },
      {
        name: "contact",
        title: "Contact",
      },
    ];

    return (
      <div className="nav-bar">
        {
          navLinks.map((component, index) => {
            return(
              <div key={index}>
                <a href="/#" component={component.name} onClick={this.handleClick}>{component.title}</a>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Nav;
