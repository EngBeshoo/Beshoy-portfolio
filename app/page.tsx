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

import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">

      {/* Hero */}
      <section className="min-h-screen">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">

          {/* Hero Content */}
          <div className="w-full md:w-1/2">

            <p className="text-lg font-medium text-primary">
              Hello, I&apos;m
            </p>

            <h1 className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Beshoy Eissa Azer
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-muted sm:text-3xl">
              Frontend Developer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              I build modern, responsive and interactive web experiences
              using React, Next.js and modern frontend technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* View Projects */}
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

              {/* Download CV */}
              <a
                href="/Beshoy_Eissa_Azer.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
              >
                <Download size={18} />

                Download CV
              </a>

            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/EngBeshoo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-border bg-card p-3 text-muted transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <FaGithub size={21} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/beshoy-essa-azer-98a117363/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-border bg-card p-3 text-muted transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <FaLinkedinIn size={21} />
              </a>

              {/* Email */}
              <a
                href="https://bghazr@gmail.com"
                target="_blank"
                aria-label="Email"
                className="rounded-full border border-border bg-card p-3 text-muted transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <Mail size={21} />
              </a>

            </div>

          </div>

          {/* Hero Image */}
          <div className="hidden w-1/2 justify-center md:flex">

            <div className="relative">

              {/* Purple Glow */}
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" />

              <Image
                src="/images/profile.jpg"
                alt="Beshoy Eissa Azer"
                width={550}
                height={650}
                priority
                className="object-contain"
              />

            </div>

          </div>

        </div>
      </section>

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Education */}
      <Education />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

    </main>
  );
}