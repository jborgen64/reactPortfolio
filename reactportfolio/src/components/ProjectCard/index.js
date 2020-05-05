import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <a href={props.link}>{props.name}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
