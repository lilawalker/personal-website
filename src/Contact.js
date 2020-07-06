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
        <div className="text-center py-12 font-logo text-xl text-pink-700">
          Find Me Below
        </div>

        <ul className="flex justify-evenly m-auto p-4 lg:w-1/2">
          {contact.map((details, index) => {
            return (
              <li key={index}>
                <a href={details.link} target="blank">
                  <img src={details.logo} alt="Logo" className="h-16 w-16" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="text-center mt-12">
          <a
            href="/LilaWalkerCV.pdf"
            download
            className="font-logo text-pink-500 text-xs bg-pink-200 hover:bg-pink-400 active:bg-pink-300 rounded-full px-3 py-1"
          >
            Download CV
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
