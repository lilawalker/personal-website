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
      <div className="sticky top-0 bg-black w-full pb-1 lg:pb-0">
        <nav className="lg:flex justify-between text-pink-700">
          <h1 className="text-4xl lg:my-1 font-logo lg:pl-10 text-center">
            <a href="/" className="hover:text-pink-400 active:text-pink-300">
              Lila Walker
            </a>
          </h1>
          <ul className="lg:mt-6 lg:pr-10 text-center font-logo">
            {navLinks.map((component, index) => {
              return (
                <li key={index} className="inline-block mr-4 lg:mr-0 lg:ml-20">
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
      </div>
    );
  }
}

export default Nav;
