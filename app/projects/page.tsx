import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      {projects.map((project) => (
        <div
          key={project.title}
          style={{
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
            background: "#583a9e",
          }}
        >
          <h2>{project.title}</h2>

          <p>{project.description}</p>

          <p>
            <strong>Tech:</strong> {project.tech.join(", ")}
          </p>
          <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#60a5fa",
      textDecoration: "none",
    }}>Github</a>
    <p>{project.status}</p>
  
    
        </div>
      ))}
    </div>
  );
}