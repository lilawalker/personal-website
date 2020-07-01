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
      <nav className="flex justify-between text-pink-700">
        <h1 className="text-4xl my-1 font-logo pl-10"><a href="/">Lila Walker</a></h1>
        <ul className="mt-6 pr-10 font-logo">
          {
            navLinks.map((component, index) => {
              return(
                <li key={index} className="inline ml-20">
                  <a href="/#" component={component.name} onClick={this.handleClick}>{component.title}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    );
  }
}

export default Nav;
