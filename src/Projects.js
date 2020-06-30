import React from 'react';
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Volunteer Matching',
    githubLink: 'https://github.com/Age-UK-Voluteer-Matching/Match-App',
    demoLink: 'https://volunteer-match-app.herokuapp.com',
    description: 'An app designed for the charity Age UK that brings together volunteers and elderly people. Users sign up to the site and are matched based on common interests. Volunteers can then reach out offline to offer friendship and support. The app has a clear and clean design to make it as easy to use as possible, is quick-to-offline so that matches are easily made for offline connections, and allows for shared experiences over common interests.',
    techStack: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'ImageMagick',
      'AWS S3',
      'Travis CI',
      'Heroku',
      'Pair Programming',
      'Agile Development',
      'Hackathon'
    ]
  },
  {
    title: 'Personal Website',
    githubLink: 'https://github.com/lilawalker/personal-website',
    demoLink: 'https://lilawalker.dev',
    description: "A site all about me! You're looking at it now.",
    techStack: [
      'JavaScript',
      'React',
      'HTML',
      'Tailwind CSS',
      'Netlify'
    ]
  },
  {
    title: 'MixTape',
    githubLink: 'https://github.com/lilawalker/mix-tape',
    demoLink: 'https://mix-tape-makers.herokuapp.com/signin',
    description: "A collaborative playlist generator using Spotify's API.",
    techStack: [
      'Ruby',
      'Rails',
      'JavaScript',
      'React',
      'PostgreSQL',
      'CSS',
      'RSpec',
      'Rubocop',
      'SimpleCov',
      'ESLint',
      'Spotify API',
      'Travis CI',
      'Heroku',
      'Pair Programming',
      'Agile Development',
    ]
  },
  {
    title: 'Instagram Clone',
    githubLink: 'https://github.com/lilawalker/instagram-challenge-lw',
    demoLink: 'https://instagram-challenge-lw.herokuapp.com/',
    description: "An Instagram clone featuring user authentication, image uploads, comments and likes.",
    techStack: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'ImageMagick',
      'AWS S3',
      'Capybara',
      'RSpec',
      'Rubocop',
      'SimpleCov',
      'Travis CI',
      'Heroku',
    ]
  },
  {
    title: 'Chitter',
    githubLink: 'https://github.com/lilawalker/chitter-challenge',
    demoLink: '',
    description: "A Twitter clone featuring user authentication and posts.",
    techStack: [
      'Ruby',
      'Sinatra',
      'PostgreSQL',
      'ActiveRecord',
      'CSS',
      'Capybara',
      'RSpec',
      'Rubocop',
      'SimpleCov',
      'Travis CI',
    ]
  },

  {
    title: 'Bank Account',
    githubLink: 'https://github.com/lilawalker/bank-tech-test',
    demoLink: '',
    description: "Practice tech test to demonstrate OOP and TDD skills. IRB app to deposit/withdraw funds, check balance and print a statement of account.",
    techStack: [
      'Ruby',
      'IRB',
      'RSpec',
      'Rubocop',
      'SimpleCov',
    ]
  },
  {
    title: 'Acebook',
    githubLink: 'https://github.com/lilawalker/acebook-smooth-railing',
    demoLink: 'https://acebook-smooth-railing.herokuapp.com/users/sign_in',
    description: "A Facebook clone featuring user authentication, posts and comments.",
    techStack: [
      'Ruby',
      'Rails',
      'PostgreSQL',
      'Capybara',
      'RSpec',
      'Rubocop',
      'SimpleCov',
      'HTML',
      'Bootstrap',
      'Travis CI',
      'Heroku',
      'Pair Programming',
      'Agile Development',
    ]
  },
]

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
