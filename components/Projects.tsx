"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";




const frontendProjects = [
  {
    title: "GameStore",
    description:
      "A responsive game store website built using HTML, CSS and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    image: "/images/gamestore.png",
    demo: "https://engbeshoo.github.io/GameStore/",
    github: "https://github.com/EngBeshoo/GameStore",
  },

  {
    title: "Weather App",
    description:
      "A responsive weather application that displays weather information using an API.",
    technologies: ["HTML", "CSS", "JS", "API"],
    image: "/images/weather.png",
    demo: "https://engbeshoo.github.io/TaskWeather/",
    github: "https://github.com/EngBeshoo/TaskWeather",
  },

  {
    title: "Quiz App",
    description:
      "A responsive Quiz App built with JavaScript, featuring multiple-choice questions, difficulty levels, categories, and score tracking.",
    technologies: ["HTML", "CSS", "JS", "API"],
    image: "/images/QuizApp.png",
    demo: "https://engbeshoo.github.io/QuizApp/",
    github: "https://github.com/EngBeshoo/QuizApp",
  },

  {
    title: "Login App",
    description:
      "A responsive Login & Sign Up system built with JS, featuring form validation, Regular Expressions, Local Storage, and user authentication.",
    technologies: ["HTML", "CSS", "JS"],
    image: "/images/login.png",
    demo: "https://engbeshoo.github.io/LogInTask3/",
    github: "https://github.com/EngBeshoo/LogInTask3",
  },

  {
    title: "Yummy",
    description:
      "A responsive food website that allows users to explore and discover a variety of meals with detailed information and an interactive user-friendly interface.",
    technologies: ["HTML", "CSS", "JS", "API"],
    image: "/images/Yummy.png",
    demo: "https://engbeshoo.github.io/BeshoyWorkShop/",
    github: "https://github.com/EngBeshoo/BeshoyWorkShop",
  },
];


const reactProjects = [
  {
    title: "Social App",
    description:
      "A modern social media application built with React and , featuring user authentication, posts, profiles, and an interactive social experience.",
    technologies: ["React", "JSX", "API"],
    image: "/images/social-app.png",
     demo: "https://social-app-qsni-git-main-engbeshoos-projects.vercel.app/",
    github: "https://github.com/EngBeshoo/Social-app.git",
  },
  {
  title: "BUBBLES & BLISS",
  description:
    "A modern perfume e-commerce website built with Next.js, developed as a full-stack project in collaboration with a backend developer, featuring product browsing, authentication, and API integration.",
  technologies: ["Next.js",  "TSX", "API"],
  image: "/images/BUBBLES.png",
  github: "https://github.com/malakehab2003/Bubbles-and-bliss.git",
  },
  {
  title: "DAY3",
  description:
    "Graduation project focused on lost and found items, allowing users to report lost belongings, search for found items, and connect with others to recover their missing items.",
  technologies: ["React", "TSX", "API"],
  image: "/images/day3.png",
  github: "YOUR_GITHUB_LINK",
  category: "Graduation Project",
},
];

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demo?: string;
  github: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        transition-colors
        duration-300
        hover:border-primary
        hover:shadow-xl
        hover:shadow-primary/10
      "
    >
      {/* Project Image */}

      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="
            object-cover
            transition
            duration-500
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition
            duration-300
            group-hover:bg-black/20
          "
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
              className="
                rounded-full
                bg-primary/10
                px-3
                py-1
                text-sm
                text-primary
              "
            >
              {tech}
            </span>
          ))}
        </div>


        <div className="mt-6 flex gap-3">

          {project.demo &&           <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              bg-primary
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:bg-secondary
            "
          >
            <ExternalLink size={16} />
            Live Demo
          </a> }

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-border
              px-4
              py-2
              text-sm
              font-medium
              transition
              hover:border-primary
              hover:text-primary
            "
          >
            <FaGithub size={17} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {

  const [showMore, setShowMore] = useState(false);

  const visibleFrontendProjects = showMore
    ? frontendProjects
    : frontendProjects.slice(0, 3);


  return (
    <section
      id="projects"
      className="bg-section py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          className="mb-16 text-center"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
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


        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-10"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <h3 className="whitespace-nowrap text-2xl font-bold">
              HTML - CSS - JavaScript{" "}
              <span className="text-primary">
                Projects
              </span>
            </h3>

            <div className="h-px flex-1 bg-border" />
          </div>
        </motion.div>


        <motion.div
          layout
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {visibleFrontendProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </motion.div>


        {frontendProjects.length > 3 && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <button
              onClick={() => setShowMore(!showMore)}
              className="
                group
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-primary
                px-6
                py-3
                font-medium
                text-primary
                transition
                duration-300
                hover:bg-primary
                hover:text-white
              "
            >
              {showMore ? "Show Less" : "Show More"}

              <ChevronDown
                size={20}
                className={`
                  transition-transform
                  duration-300
                  ${showMore ? "rotate-180" : ""}
                `}
              />
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-10 mt-24"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <h3 className="whitespace-nowrap text-2xl font-bold">
              React - Next.js{" "}
              <span className="text-primary">
                Projects
              </span>
            </h3>

            <div className="h-px flex-1 bg-border" />
          </div>
        </motion.div>

        <motion.div
          layout
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {reactProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
