import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    icon: FaJs,
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
  {
    name: "GitHub",
    icon: FaGithub,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Title */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-primary">
            My Skills
          </p>

          <h2 className="text-4xl font-bold">
            Technologies I{" "}
            <span className="text-primary">
              Use
            </span>
          </h2>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >

                {/* Icon */}
                <Icon
                  size={55}
                  className="mb-4 text-muted transition duration-300 group-hover:scale-110 group-hover:text-primary"
                />

                {/* Skill Name */}
                <h3 className="font-semibold">
                  {skill.name}
                </h3>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}