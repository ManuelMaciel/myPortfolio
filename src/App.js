import React from 'react';
import projects from './projects.json';

function App() {
  return (
    <ul>
      {projects.map((project, index) => (
        <li key={project.link}
          style={{
            animationDelay: `${index / projects.length}s`
          }}>
          <a href={project.link}>
            <img src={project.image} alt=""/>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default App;
