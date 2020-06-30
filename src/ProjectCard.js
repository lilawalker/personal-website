import React from 'react';
import link from './Link'

class ProjectCard extends React.Component {

  render() {

    const project = this.props.project;

    return (
      <div className="w-full lg:flex mt-6 mb-6 border-gray-400 border rounded">
        <div className="h-48 lg:h-auto lg:w-1/3 w-full flex items-center bg-gray-400">
          <span className="block mx-auto">{project.icon}</span>
        </div>

        <div className="w-2/3 p-4 leading-normal">

          <div className="font-bold text-xl mb-2">
            {project.title}
          </div>

          <div className="inline-flex">
            <svg className="fill-current text-gray-600 w-3 h-3 mr-1 mt-1" xmlns={link.xmlns} viewBox={link.viewBox}>
              {link.path}
            </svg>
            <a href={project.githubLink} className="text-gray-600 text-sm">{project.githubLink}</a>
          </div>

          <div className="inline-flex">
            <svg className="fill-current text-gray-600 w-3 h-3 mr-1 mt-1" xmlns={link.xmlns} viewBox={link.viewBox}>
              {link.path}
            </svg>
            <a href={project.demoLink} className="text-gray-600 text-sm">{project.demoLink}</a>
          </div>

          <p className="text-gray-700 text-sm py-2">
            {project.description}
          </p>

          {
            project.techStack.map((tech, index) =>{
              return(
                <div key={index} className="inline-flex py-1">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">{tech}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}

export default ProjectCard;
