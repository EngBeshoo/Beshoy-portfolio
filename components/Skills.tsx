"use client";

import { motion } from "framer-motion";

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
    color: "var(--html)",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "var(--css)",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "var(--javascript)",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "var(--bootstrap)",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "var(--tailwind)",
  },
  {
    name: "React",
    icon: FaReact,
    color: "var(--react)",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "var(--typescript)",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "var(--nextjs)",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "var(--git)",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "var(--github)",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-background py-24">
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
            My Skills
          </p>

          <h2 className="text-4xl font-bold">
            Technologies{" "}
            <span className="text-primary">
              I Use
            </span>
          </h2>
        </motion.div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                className="group relative flex h-36 items-center justify-center rounded-xl border border-border bg-card text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >

                {/* Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <Icon
                    size={60}
                    className="text-muted transition-colors duration-300 group-hover:text-[var(--skill-color)]"
                    style={
                      {
                        "--skill-color": skill.color,
                      } as React.CSSProperties
                    }
                  />
                </motion.div>

                {/* Tooltip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -top-12
                    left-1/2
                    -translate-x-1/2
                    translate-y-2
                    whitespace-nowrap
                    rounded-lg
                    bg-primary
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {skill.name}

                  {/* Tooltip Arrow */}
                  <span
                    className="
                      absolute
                      -bottom-1
                      left-1/2
                      h-2
                      w-2
                      -translate-x-1/2
                      rotate-45
                      bg-primary
                    "
                  />
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}