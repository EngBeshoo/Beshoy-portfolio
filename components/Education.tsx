"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="bg-background py-24">
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
            My Journey
          </p>

          <h2 className="text-4xl font-bold">
            Education &{" "}
            <span className="text-primary">
              Certificates
            </span>
          </h2>
        </motion.div>

        {/* Education & Training */}
        <div className="mx-auto max-w-4xl space-y-6">

          {/* University */}
          <motion.div
            className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                <GraduationCap size={28} />
              </div>

              <div>
                <span className="text-sm font-medium text-primary">
                  Education
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  Faculty of Computers and Information
                </h3>

                <p className="mt-2 text-muted">
                  Tanta University
                </p>

                <p className="mt-4 leading-7 text-muted">
                  Information Technology Department with a focus on software
                  development and modern web technologies.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Route Academy */}
          <motion.div
            className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                <Award size={28} />
              </div>

              <div>
                <span className="text-sm font-medium text-primary">
                  Training
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  Front-End Development
                </h3>

                <p className="mt-2 text-muted">
                  Route Academy
                </p>

                <p className="mt-4 leading-7 text-muted">
                  Training covering HTML, CSS, JavaScript, DOM, CRUD, ES6,
                  React, TypeScript and Next.js.
                </p>
              </div>

            </div>
          </motion.div>

          {/* ITI */}
          <motion.div
            className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                <Award size={28} />
              </div>

              <div>
                <span className="text-sm font-medium text-primary">
                  Training
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  Front-End using Vue.js
                </h3>

                <p className="mt-2 text-muted">
                  ITI
                </p>

                <p className="mt-4 leading-7 text-muted">
                  Front-End development training focused on Vue.js and modern
                  frontend development practices.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}