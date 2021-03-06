// Import React and project card component
import React from 'react';
import Project from '../Project';

// Import stylesheet
import './style.css';

// Import data (TEMP)
import { data } from '../../data';

// Create and export Portfolio page component
export default function Portfolio() {
  return (
    <section className="container">
      <div className="row">
        {data.map((project, index) => {
          return (
            <Project
              id={index}
              key={index}
              title={project.title}
              thumbnail={project.thumbnail}
              description={project.description}
              app={project.app}
              repo={project.repo}
            />
          )
        })}
      </div>
    </section>
  );
}