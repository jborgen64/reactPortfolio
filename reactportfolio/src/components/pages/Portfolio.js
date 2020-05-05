import React from "react";
import projects from "../../db.json";
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";

console.log(projects)
const Portfolio = () => (
  
  <Wrapper>
  {projects.map(projects => (
    <ProjectCard
      id={projects.id}
      key={projects.id}
      name={projects.name}
      image={projects.image}
      link={projects.link}
    />
  ))}
</Wrapper>
);


export default Portfolio;
