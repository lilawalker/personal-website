import React from 'react';
import TwitterLogo from './TwitterLogo.svg';
import LinkedInLogo from "./LinkedInLogo.svg";
import GitHubLogo from "./GitHubLogo.svg";
import GmailLogo from "./GmailLogo.svg";

class Contact extends React.Component {

  render() {

    const contact = [
      {
        link: "https://www.linkedin.com/in/lila-walker/",
        logo: LinkedInLogo,
      },
      {
        link: "https://github.com/lilawalker",
        logo: GitHubLogo,
      },
      {
        link: "https://twitter.com/_lilaw_",
        logo: TwitterLogo,
      },
      {
        link: "mailto:lilawlker@gmail.com",
        logo: GmailLogo
      },
    ];

    return (
      <div>
        <div className="contact-header">Find Me Below</div>
        <div className="icon-container">
          {
            contact.map((details, index) => {
              return (
                <div key={index}>
                  <a href={details.link}>
                    <img src={details.logo} alt="Logo" className="icon" />
                  </a>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Contact;
