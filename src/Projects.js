import React from 'react';
import ProjectCard from './ProjectCard'
import projects from "./data/projectData.js"

const Projects = () => {
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

export default Projects;
