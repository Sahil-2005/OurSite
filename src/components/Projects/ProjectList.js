import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const ProjectList = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Project 1 Description' },
    { id: 2, title: 'Project 2', description: 'Project 2 Description' },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
