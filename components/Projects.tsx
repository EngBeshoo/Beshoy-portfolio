"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "GameStore",
    description:
      "A responsive game store website built using HTML, CSS and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript","API"],
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
    technologies: ["HTML", "CSS", "JavaScript","API"],
    image: "/images/books.png",
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-primary">
            My Work
          </p>

          <h2 className="text-4xl font-bold">
            Featured{" "}
            <span className="text-primary">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
            >

              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

              </div>

              {/* Project Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-muted">
                  {project.description}
                </p>

                {/* Technologies */}
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

                {/* Buttons */}
                <div className="mt-6 flex gap-3">

                  {/* Live Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-secondary"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}