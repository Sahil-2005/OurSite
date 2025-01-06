import React, { useState } from "react";
import "./Project.css";

const ProjectSection = () => {
  const projects = [
    { id: 1, videoUrl: "/video1.mp4" },
    { id: 2, videoUrl: "/video.mp4" },
    { id: 3, videoUrl: "/video.mp4" },
    { id: 4, videoUrl: "/video.mp4" },
    { id: 5, videoUrl: "/video1.mp4" },
    { id: 6, videoUrl: "/video.mp4" },
    { id: 7, videoUrl: "/video.mp4" },
    { id: 8, videoUrl: "/video.mp4" },
    { id: 9, videoUrl: "/video1.mp4" },
  ];

  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleMouseEnter = (columnIndex) => {
    setHoveredColumn(columnIndex);
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
  };

  return (
    <div className="project-section">
      <div className="project-grid">
        {projects.map((project, index) => {
          const columnIndex = index % 3; 
          return (
            <div
              key={project.id}
              className={`project-block ${
                hoveredColumn === columnIndex ? "paused" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(columnIndex)}
              onMouseLeave={handleMouseLeave}
            >
              <video
                src={project.videoUrl}
                autoPlay
                muted
                loop
                className="project-video"
              ></video>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSection;


