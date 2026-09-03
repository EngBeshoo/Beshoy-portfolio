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

        {/* ================= HERO ================= */}
        <section className="relative min-h-screen overflow-hidden">

          {/* Animated Background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {/* Large left circle */}
            <motion.div
              className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cherry/20 blur-3xl"
              animate={{
                x: [0, 60, 0],
                y: [0, 40, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Right circle */}
            <motion.div
              className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-tomato/10 blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, -40, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Small glowing orb */}
            <motion.div
              className="absolute left-[45%] top-[20%] h-4 w-4 rounded-full bg-tomato shadow-lg shadow-tomato/50"
              animate={{
                y: [0, -30, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Another orb */}
            <motion.div
              className="absolute right-[20%] top-[35%] h-2 w-2 rounded-full bg-cream"
              animate={{
                y: [0, 25, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Decorative rotating ring */}
            <motion.div
              className="absolute -right-20 top-20 h-80 w-80 rounded-full border border-tomato/20"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Second ring */}
            <motion.div
              className="absolute -left-20 bottom-20 h-64 w-64 rounded-full border border-cherry/20"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />

          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-24 md:flex-row md:gap-0">

            {/* ================= LEFT ================= */}
            <motion.div
              className="order-2 w-full md:order-1 md:w-1/2"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* Small Label */}
              <motion.div
                className="mb-6 inline-flex items-center gap-3 rounded-full border border-tomato/30 bg-cocoa/40 px-4 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="h-2 w-2 rounded-full bg-tomato shadow-lg shadow-tomato/50" />

                <span className="text-sm font-medium tracking-wide text-cream">
                  FRONTEND DEVELOPER
                </span>
              </motion.div>

              {/* Hello */}
              <motion.p
                className="text-2xl font-medium text-cream sm:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Hello, I&apos;m
              </motion.p>

              {/* Name */}
              <motion.h1
                className="mt-3 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="text-cream">
                  Beshoy Eissa
                </span>{" "}
                <span className="text-tomato">
                  Azer
                </span>
              </motion.h1>

              {/* Job */}
              <motion.h2
                className="mt-4 text-2xl font-semibold text-soft-clay sm:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Frontend Developer
              </motion.h2>

              {/* Description */}
              <motion.p
                className="mt-6 max-w-xl text-base leading-8 text-soft-clay sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                I build modern, responsive and interactive web experiences
                using React, Next.js and modern frontend technologies.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >

                {/* View Projects */}
                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-xl bg-tomato px-6 py-3 font-medium text-white shadow-lg shadow-tomato/20 transition duration-300 hover:-translate-y-1 hover:bg-deep-cherry"
                >
                  View My Work

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                {/* Contact */}
                <a
                  href="#contact"
                  className="flex items-center gap-2 rounded-xl border border-tomato/50 px-6 py-3 font-medium text-cream transition duration-300 hover:-translate-y-1 hover:bg-tomato hover:text-white"
                >
                  <Mail size={18} />

                  Contact Me
                </a>

                {/* CV */}
                <a
                  href="https://drive.google.com/file/d/1cxiSYL_18JKI0BBzlh2CAmm8TJpO2zw3/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium text-soft-clay transition duration-300 hover:border-tomato hover:text-cream"
                >
                  <Download size={18} />

                  CV
                </a>

              </motion.div>

              {/* Social */}
              <motion.div
                className="mt-8 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >

                <a
                  href="https://github.com/EngBeshoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full border border-border bg-cocoa/40 p-3 text-soft-clay transition duration-300 hover:-translate-y-1 hover:border-tomato hover:text-tomato"
                >
                  <FaGithub size={21} />
                </a>

                <a
                  href="https://www.linkedin.com/in/beshoy-eissa-azer-98a117363/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-border bg-cocoa/40 p-3 text-soft-clay transition duration-300 hover:-translate-y-1 hover:border-tomato hover:text-tomato"
                >
                  <FaLinkedinIn size={21} />
                </a>

                <a
                  href="mailto:bghazr@gmail.com"
                  aria-label="Email"
                  className="rounded-full border border-border bg-cocoa/40 p-3 text-soft-clay transition duration-300 hover:-translate-y-1 hover:border-tomato hover:text-tomato"
                >
                  <Mail size={21} />
                </a>

              </motion.div>

            </motion.div>

            <motion.div
              className="order-1 flex w-full justify-center md:order-2 md:w-1/2"
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >

              <motion.div
                className="relative"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                {/* Glow */}
                <div className="absolute -inset-8 -z-10 rounded-full bg-tomato/20 blur-3xl" />

                {/* Image */}
                <div className="relative h-[380px] w-[300px] overflow-hidden rounded-[40px] border border-tomato/40 bg-cocoa shadow-2xl shadow-tomato/10 sm:h-[470px] sm:w-[360px] md:h-[520px] md:w-[400px]">

                  <Image
                    src="/images/profile.jpg"
                    alt="Beshoy Eissa Azer"
                    fill
                    priority
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-cover object-top"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-cherry/50 via-transparent to-transparent" />

                </div>

                {/* Rotating Ring */}
                <motion.div
                  className="absolute -right-5 -top-5 h-16 w-16 rounded-full border border-tomato/50"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-tomato" />
                </motion.div>

                {/* Bottom Bubble */}
                <motion.div
                  className="absolute -bottom-5 -left-5 h-14 w-14 rounded-full border border-soft-clay/20 bg-cocoa"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Experience Card */}
                <motion.div
                  className="absolute -bottom-6 -left-10 rounded-2xl border border-tomato/30 bg-cocoa/90 px-6 py-4 shadow-xl backdrop-blur-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <p className="text-3xl font-bold text-cream">
                    10+
                  </p>

                  <p className="text-sm text-soft-clay">
                    Projects
                  </p>
                </motion.div>

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