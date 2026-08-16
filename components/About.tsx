"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-section py-24">
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
            About Me
          </p>

          <h2 className="text-4xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
        </motion.div>

        {/* About Content */}
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >

          <p className="text-lg leading-8 text-muted">
            I&apos;m Beshoy Eissa Azer, a Frontend Developer passionate about
            building modern, responsive and user-friendly web applications.
          </p>

          <p className="mt-5 text-lg leading-8 text-muted">
            I have experience working with HTML, CSS, JavaScript, React,
            TypeScript and Next.js. I enjoy turning ideas and designs into
            clean and interactive web experiences.
          </p>

          <p className="mt-5 text-lg leading-8 text-muted">
            I&apos;m always learning new technologies and improving my skills
            to build better and more efficient web applications.
          </p>

        </motion.div>

      </div>
    </section>
  );
}