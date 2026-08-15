const projects = [
  {
    title: "GameStore",
    description:
      "A responsive game store website built using HTML, CSS and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/gamestore.png",
    demo: "https://engbeshoo.github.io/GameStore/",
    github: "https://github.com/EngBeshoo/GameStore",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application that displays weather information using an API.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    image: "/images/weather.png",
    demo: "https://engbeshoo.github.io/TaskWeather/",
    github: "https://github.com/EngBeshoo/TaskWeather",
  },
  {
    title: "Book Store",
    description:
      "A simple responsive book management website built with JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/books.png",
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <p className="mb-2 text-primary">My Work</p>

          <h2 className="text-4xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-2 hover:border-primary"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-secondary"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}