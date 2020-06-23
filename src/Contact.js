import React from 'react';
import TwitterLogo from './TwitterLogo.svg';
import LinkedInLogo from "./LinkedInLogo.svg";
import GitHubLogo from "./GitHubLogo.svg";
import GmailLogo from "./GmailLogo.svg";

class Contact extends React.Component {

  render() {

    return (
      <div>
        <div className="contact-header">Find Me Below</div>
        <div className="icon-container">
          <a href="https://twitter.com/_lilaw_">
            <img
              src={TwitterLogo}
              alt="TwitterLogo"
              className="icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/lila-walker/">
            <img
              src={LinkedInLogo}
              alt="LinkedInLogo"
              className="icon"
            />
          </a>
          <a href="https://github.com/lilawalker">
            <img src={GitHubLogo} alt="GitHubLogo"
            className="icon" />
          </a>
          <a href="mailto:lilawlker@gmail.com">
            <img src={GmailLogo} alt="GmailLogo"
            className="icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
