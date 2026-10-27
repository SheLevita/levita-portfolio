
const projects = [
  {
    title: "Happy Tails",
    description:
      "A pet care application for managing feeding schedules, vet appointments, and pet health records.",
  },
  {
    title: "Creative Designs",
    description:
      "A collection of graphic designs and digital materials created using design tools.",
  },
];

function Projects() {
  return (
    <section className="page">
      <h1>My Projects</h1>
      <p>Here are some of my projects and creative works.</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className={`project-image image-${index + 1}`}>
              Project {index + 1}
            </div>

            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
