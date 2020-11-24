import React from 'react';
import link from './logos/Link';
import GitHubLogo from './logos/GitHubLogo';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full lg:flex my-12 border-pink-200 border rounded bg-gray-100">
      <div className="min-h-48 lg:h-auto lg:w-1/3 w-full flex items-center bg-pink-200">
        {project.image !== "" && (
          <img src={project.image} alt="img" className="block mx-auto" />
        )}
      </div>

      <div className="w-full lg:w-2/3 p-4 leading-normal">
        <div className="font-bold text-2xl mb-2 font-logo text-pink-700">
          {project.title}
        </div>

        <div className="inline-flex pr-6 text-pink-500">
          <svg
            className="fill-current w-3 h-3 mr-1 mt-1"
            xmlns={GitHubLogo.xmlns}
            viewBox={GitHubLogo.viewBox}
          >
            {GitHubLogo.path}
          </svg>
          <a
            href={project.githubLink}
            className="text-sm pl-1 hover:text-pink-400 active:text-pink-300"
            target="blank"
          >
            GitHub
          </a>
        </div>

        {project.demoLink !== "" && (
          <div className="inline-flex text-pink-500">
            <svg
              className="fill-current w-3 h-3 mr-1 mt-1"
              xmlns={link.xmlns}
              viewBox={link.viewBox}
            >
              {link.path}
            </svg>
            <a
              href={project.demoLink}
              className="text-sm pl-1 hover:text-pink-400 active:text-pink-300"
              target="blank"
            >
              Demo
            </a>
          </div>
        )}

        <p className="text-gray-700 text-md py-2">{project.description}</p>

        <ul className="mt-4">
          {project.techStack.map((tech, index) => {
            return (
              <li key={index} className="py-1 inline">
                <span className="inline-block bg-pink-200 rounded-full px-3 py-1 mb-2 text-xs font-semibold text-gray-700 mr-2">
                  {tech}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
