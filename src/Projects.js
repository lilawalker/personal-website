import React from 'react';
import ProjectCard from './ProjectCard'
import Volunteer from './images/VolunteerMatchingScreenshot.png'
import MySite from './images/MySiteScreenshot.png'
import MixTape from './images/MixTapeScreenshot.png'
import Bank from './images/BankScreenshot.png'
import Acebook from './images/AcebookScreenshot.png'
import Chitter from "./images/ChitterScreenshot.png";
import Instagram from "./images/InstagramScreenshot.png";

const projects = [
  {
    title: "Volunteer Matching",
    githubLink: "https://github.com/Age-UK-Voluteer-Matching/Match-App",
    demoLink: "https://volunteer-match-app.herokuapp.com",
    description:
      "An app developed at Hack for Heroes hackathon for Age UK's brief - helping to create relationships between volunteers and senior community members. The app won second place in the competition!",
    techStack: [
      "Ruby",
      "Rails",
      "PostgreSQL",
      "ImageMagick",
      "AWS S3",
      "RESTful",
      "Travis CI",
      "Heroku",
      "Pair Programming",
      "Agile Development",
      "Hackathon",
    ],
    image: Volunteer,
  },
  {
    title: "Personal Website",
    githubLink: "https://github.com/lilawalker/personal-website",
    demoLink: "",
    description: "You're looking at it now!",
    techStack: ["JavaScript", "React", "HTML", "Tailwind CSS", "Netlify"],
    image: MySite,
  },
  {
    title: "MixTape",
    githubLink: "https://github.com/lilawalker/mix-tape",
    demoLink: "https://mix-tape-makers.herokuapp.com/signin",
    description: "A collaborative playlist generator using Spotify's API.",
    techStack: [
      "Ruby",
      "Rails",
      "JavaScript",
      "React",
      "PostgreSQL",
      "CSS",
      "RSpec",
      "Rubocop",
      "SimpleCov",
      "ESLint",
      "Spotify API",
      "Travis CI",
      "Heroku",
      "Pair Programming",
      "Agile Development",
    ],
    image: MixTape,
  },
  {
    title: "Instagram Clone",
    githubLink: "https://github.com/lilawalker/instagram-challenge-lw",
    demoLink: "https://instagram-challenge-lw.herokuapp.com/",
    description:
      "An Instagram clone featuring user authentication, image uploads, comments and likes.",
    techStack: [
      "Ruby",
      "Rails",
      "PostgreSQL",
      "ImageMagick",
      "AWS S3",
      "Capybara",
      "RSpec",
      "Rubocop",
      "SimpleCov",
      "OOP",
      "TDD",
      "MVC",
      "RESTful",
      "Travis CI",
      "Heroku",
    ],
    image: Instagram,
  },
  {
    title: "Chitter",
    githubLink: "https://github.com/lilawalker/chitter-challenge",
    demoLink: "",
    description: "A Twitter clone featuring user authentication and posts.",
    techStack: [
      "Ruby",
      "Sinatra",
      "PostgreSQL",
      "ActiveRecord",
      "CSS",
      "Capybara",
      "RSpec",
      "Rubocop",
      "SimpleCov",
      "OOP",
      "TDD",
      "MVC",
      "RESTful",
      "Travis CI",
    ],
    image: Chitter,
  },

  {
    title: "Bank Account",
    githubLink: "https://github.com/lilawalker/bank-tech-test",
    demoLink: "",
    description:
      "Practice tech test to demonstrate OOP and TDD skills. IRB app to deposit/withdraw funds, check balance and print a statement of account.",
    techStack: ["Ruby", "IRB", "RSpec", "Rubocop", "SimpleCov", "OOP", "TDD"],
    image: Bank,
  },
  {
    title: "Acebook",
    githubLink: "https://github.com/lilawalker/acebook-smooth-railing",
    demoLink: "https://acebook-smooth-railing.herokuapp.com/users/sign_in",
    description:
      "A Facebook clone featuring user authentication, posts and comments.",
    techStack: [
      "Ruby",
      "Rails",
      "PostgreSQL",
      "CSS",
      "Capybara",
      "RSpec",
      "Rubocop",
      "SimpleCov",
      "OOP",
      "TDD",
      "MVC",
      "RESTful",
      "Travis CI",
      "Heroku",
      "Pair Programming",
      "Agile Development",
    ],
    image: Acebook,
  },
];

class Projects extends React.Component {

  render() {
    return (
      <div className="mt-9 mb-3 w-5/6 md:w-1/2 mx-auto">
        {
          projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                index={index}
                project={project}
              />
            );
          })
        }
      </div>
    )
  }
}

export default Projects;
