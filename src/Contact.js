import React from 'react';
import TwitterLogo from './images/TwitterLogo.svg';
import LinkedInLogo from './images/LinkedInLogo.svg';
import GitHubLogo from './images/GitHubLogo.svg';
import GmailLogo from './images/GmailLogo.svg';

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
        logo: GmailLogo,
      },
    ];

    return (
      <div>
        <div className="text-center pt-12 pb-6 font-logo text-xl text-pink-700">
          Find Me Below
        </div>
        <div className="flex justify-evenly m-auto p-4 w-1/3">
          {
            contact.map((details, index) => {
              return (
                <div key={index}>
                  <a href={details.link}>
                    <img src={details.logo} alt="Logo" className="h-16" />
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
