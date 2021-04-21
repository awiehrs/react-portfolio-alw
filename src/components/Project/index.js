// Import React
import React from 'react';

// Import stylesheet
import './style.css';

// Create and export project card component
export default function Project(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card border-0">
        <div className="img-overlay">
          <img src={props.thumbnail}
          alt="Weather Memory screenshot" className="card-img-top" />
        </div>
        <div className="card-body">
          <p className="project-title h4">{props.title}</p>
          <p className="project-description font-weight-light">{props.description}</p>
          <div className="row">
            <div className="col-6">
              <a href={props.app} target="_blank" rel="noreferrer">Deployed App</a>
            </div>
            <div className="col-6">
              <a href={props.repo} target="_blank" rel="noreferrer">Github Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}