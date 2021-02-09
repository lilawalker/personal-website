import Volunteer from "../images/VolunteerMatchingScreenshot.png";
import MySite from "../images/MySiteScreenshot.png";
import MixTape from "../images/MixTapeScreenshot.png";
import Bank from "../images/BankScreenshot.png";
import Acebook from "../images/AcebookScreenshot.png";
import Chitter from "../images/ChitterScreenshot.png";
import Instagram from "../images/InstagramScreenshot.png";
import Kittymapper from "../images/KittymapperScreenshot.png";
import KittymapperAPI from "../images/KittymapperAPIScreenshot.png";
import GoldenShoe from "../images/GoldenShoeScreenshot.png";

const projectData = [
  {
    title: "kittymapper",
    githubLink: "https://github.com/lilawalker/kittymapper",
    demoLink: "https://kittymapper.netlify.app/",
    description:
      "During lockdown, I found myself photographing neighbourhood cats on my daily mandated walk. I wanted a way to share that joy with other people and to be able to locate on a map where and when the cats were seen. And thus, kittymapper was born. Now you can upload and automatically plot cats on Google Maps!",
    techStack: [
      "JavaScript",
      "React",
      "JWT Auth",
      "Google Maps API",
      "CSS",
      "Responsive Design",
      "Netlify",
    ],
    image: Kittymapper,
  },
  {
    title: "kittymapper API",
    githubLink: "https://github.com/lilawalker/kittymapper-api",
    demoLink: "",
    description:
      "An API developed in Rails to support the kittymapper app. JWT's have been used to ensure secure authentication. Using an EXIF tool, images uploaded to the server are analysed for GPS coordinates so that the image can be automatically plotted on the map. AWS Rekognition software is used to detect the contents of the photo, ensuring only photos of cats can be uploaded.",
    techStack: [
      "Ruby",
      "Rails API",
      "RSpec",
      "PostgreSQL",
      "JWT Auth",
      "AWS S3",
      "AWS Rekognition",
      "ImageMagick",
      "EXIF Tool",
      "RESTful API",
      "Heroku",
    ],
    image: KittymapperAPI,
  },
  {
    title: "Golden Shoe",
    githubLink: "https://github.com/lilawalker/AND-Digital-Golden-Shoe",
    demoLink: "https://golden-shoe-shop.herokuapp.com/",
    description:
      "An ecommerce shoe shop. Built for mobile-first responsive design. Features include a stock checking system, filters for colour, style and size, user account, shopping basket, checkout and order history.",
    techStack: [
      "Ruby",
      "Rails",
      "RSpec",
      "Capybara",
      "PostgreSQL",
      "Tailwind CSS",
      "Responsive Design",
      "Heroku",
    ],
    image: GoldenShoe,
  },
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
    description:
      "A collaborative playlist generator using Spotify's API. Built during my final group project while at Makers Academy.",
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

export default projectData;
