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
        <h1 className="text-4xl my-1 font-logo pl-10">
          <a href="/" className="hover:text-pink-400 active:text-pink-300">
            Lila Walker
          </a>
        </h1>
        <ul className="mt-6 pr-10 font-logo">
          {navLinks.map((component, index) => {
            return (
              <li key={index} className="inline ml-20">
                <a
                  href="/#"
                  className="hover:text-pink-400 active:text-pink-300"
                  component={component.name}
                  onClick={this.handleClick}
                >
                  {component.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
