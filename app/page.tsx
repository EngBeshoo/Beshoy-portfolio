"use client";

import Image from "next/image";

import {
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground">

        <section className="min-h-screen overflow-hidden">

          <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-24 md:flex-row md:gap-0">

            <motion.div
              className="order-2 w-full md:order-1 md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <motion.p
                className="text-lg font-medium text-primary text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Beshoy Eissa Azer
              </motion.h1>

              <motion.h2
                className="mt-4 text-2xl font-semibold text-muted sm:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Frontend Developer
              </motion.h2>

              <motion.p
                className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                I build modern, responsive and interactive web experiences
                using React, Next.js and modern frontend technologies.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >

                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-secondary"
                >
                  View My Work

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="https://drive.google.com/file/d/1wZWbOjBwfq9QN2AARsA_nl-iSLyD6iJQ/view?usp=sharing"
                  download
                  className="flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
                >
                  <Download size={18} />
                  Download CV
                </a>

              </motion.div>

              <motion.div
                className="mt-8 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >

                <a
                  href="https://github.com/EngBeshoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full border border-border bg-card p-3 text-muted transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <FaGithub size={21} />
                </a>

                <a
                  href="https://www.linkedin.com/in/beshoy-essa-azer-98a117363/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-border bg-card p-3 text-muted transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <FaLinkedinIn size={21} />
                </a>

                <a
                  href="mailto:bghazr@gmail.com"
                  aria-label="Email"
                  className="rounded-full border border-border bg-card p-3 text-muted transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <Mail size={21} />
                </a>

              </motion.div>

            </motion.div>

            <motion.div
              className="order-1 flex w-full justify-center md:order-2 md:w-1/2"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >

              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <div className="absolute -inset-6 -z-10 rounded-full bg-primary/20 blur-3xl" />

                <div className="relative h-[380px] w-[300px] overflow-hidden rounded-[40px] border border-primary/30 bg-card shadow-2xl shadow-primary/10 sm:h-[470px] sm:w-[360px] md:h-[520px] md:w-[400px]">

                  <Image
                    src="/images/profile.jpg"
                    alt="Beshoy Eissa Azer"
                    fill
                    priority
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-cover object-top"
                  />

                </div>

                <motion.div
                  className="absolute -right-5 -top-5 h-16 w-16 rounded-full border border-primary/40"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="absolute -bottom-5 -left-5 h-12 w-12 rounded-full bg-primary/20"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

              </motion.div>

            </motion.div>

          </div>

        </section>

        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />

      </main>
    </>
  );
}