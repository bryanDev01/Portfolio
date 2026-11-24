"use client";

import { GitHubSVG, LinkedInSVG } from "@/components/icons/icons";
import { projects, skills } from "@/data/data";
import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight, ChevronRight, Briefcase, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { useInView } from "@/hooks/useInView";
import Reveal from "@/components/Reveal";
import Image from "next/image";

// Badge colors per technology (module scope: built once, not per list item)
const techColors: Record<string, string> = {
  React: "bg-cyan-100 text-cyan-800",
  TypeScript: "bg-blue-100 text-blue-800",
  JavaScript: "bg-yellow-100 text-yellow-800",
  HTML5: "bg-orange-100 text-orange-800",
  CSS3: "bg-blue-50 text-blue-700",
  "Tailwind CSS": "bg-teal-100 text-teal-800",
  Zustand: "bg-amber-100 text-amber-800",
  "Next.js": "bg-gray-200 text-gray-800",
  "Astro.js": "bg-orange-50 text-orange-700",
  "Shad Cn UI": "bg-purple-100 text-purple-800",
  "Node js": "bg-lime-100 text-lime-800",
  "Express js": "bg-green-100 text-green-800",
  Supabase: "bg-emerald-100 text-emerald-800",
  Strapi: "bg-indigo-100 text-indigo-800",
  PostgreSQL: "bg-sky-100 text-sky-800",
  Prisma: "bg-teal-50 text-teal-700",
  "Git/GitHub": "bg-gray-100 text-gray-800",
  Figma: "bg-pink-100 text-pink-800",
  Docker: "bg-blue-200 text-blue-900",
};

/**
 * Home Component - Main landing page of the portfolio
 * Includes sections: Home, About, Skills, Projects, and Contact
 * Features intersection observer for section highlighting
 */
export default function Home() {
  // State to track which section is currently active in the viewport
  const [activeSection, setActiveSection] = useState<string>("Home");

  // Setup intersection observers for each section to handle scroll-based navigation

  const { ref: homeRef } = useInView({ threshold: 0.4 }, "Home");
  const { ref: aboutRef } = useInView({ threshold: 0.4 }, "About");
  const { ref: skillsRef } = useInView({ threshold: 0.4 }, "Skills");
  const { ref: projectsRef } = useInView({ threshold: 0.4 }, "Projects");
  const { ref: contactRef } = useInView({ threshold: 0.4 }, "Contact");

  // Event listener setup for section visibility changes
  useEffect(() => {
    const handleSectionVisible = (e: CustomEvent) => {
      setActiveSection(e.detail);
    };

    document.addEventListener(
      "sectionVisible",
      handleSectionVisible as EventListener
    );

    return () => {
      document.removeEventListener(
        "sectionVisible",
        handleSectionVisible as EventListener
      );
    };
  }, []);

  /**
   * Handles smooth scrolling to a section when clicked in the navigation
   * @param id - The ID of the section to scroll to
   */
  const changeActiveSection = (id: string) => {
    setActiveSection(id);
    const elementActive = document.getElementById(id);

    if (elementActive) {
      elementActive.scrollIntoView({ behavior: "smooth" });
    }
  };

  /** Shared markup so both masonry columns render identical cards */
  const renderProjectCard = (project: (typeof projects)[keyof typeof projects]) => (
    <ProjectCard
      src={project.src}
      name={project.name}
      stars={project.stars}
      stack={project.stack}
      description={project.description}
      gitHref={project.gitHref}
      pageHref={project.pageHref}
    />
  );

  return (
    <main className=" flex flex-col relative">
      <NavBar
        changeActiveSection={changeActiveSection}
        activeSectionID={activeSection}
      />

      {/* Hero Section - Introduction and call-to-action */}
      <section
        id="Home"
        className="relative overflow-hidden flex lg:flex-row flex-col-reverse gap-10 bg-gradient-to-b from-white to-slate-200 w-full items-center justify-center pt-28 pb-16 px-4"
        ref={homeRef}
      >
        {/* Ambient color blobs for depth */}
        <div
          aria-hidden
          className="ambient-blob w-[420px] h-[420px] bg-baseColor/20 -top-32 -left-32"
        />
        <div
          aria-hidden
          className="ambient-blob w-[380px] h-[380px] bg-secondColor/15 top-1/3 -right-28"
        />

        <Reveal className="relative z-10 lg:w-1/2 w-full px-4 flex flex-col justify-center items-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-cyan-200 px-4 py-1.5 text-xs sm:text-sm font-semibold text-gray-600 shadow-sm backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for work
          </span>
          <h1 className=" text-2xl sm:text-3xl lg:text-[2.6rem] lg:leading-[1.2] text-pretty font-bold tracking-tight">
            Frontend Developer | Passionate about{" "}
            <span className=" text-gradient">
              Technology, Innovation, and Continuous Learning
            </span>{" "}
            ❤️
          </h1>
          <p className=" lg:text-xl sm:text-lg text-sm py-4 text-gray-600 leading-relaxed">
            {" "}
            Welcome to my online portfolio! Here, you&apos;ll find a collection
            of my frontend development projects, showcasing{" "}
            <b className="text-gray-800">responsive designs, interactive web applications</b>, and{" "}
            <b className="text-gray-800">user-centric</b> solutions. Each project reflects my ability to
            blend technical expertise with creativity, turning ideas into{" "}
            <b className="text-gray-800">engaging and functional digital experiences</b>. Explore my work
            to see how I can bring your vision to life!
          </p>
          <div className=" self-start flex gap-8 justify-center items-center py-2">
            <button
              className=" group bg-gradient-to-r from-baseColor to-secondColor hover:from-secondColor hover:to-baseColor text-sm sm:text-lg p-3 rounded-xl flex gap-2 items-center justify-center text-white font-semibold shadow-lg shadow-cyan-300/60 hover:shadow-xl hover:shadow-cyan-400/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              onClick={() => changeActiveSection("Projects")}
            >
              View Projects{" "}
              <ArrowRight className=" w-4 lg:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              className=" border-2 border-baseColor text-baseColor hover:bg-baseColor hover:text-white text-sm sm:text-lg px-5 py-3 rounded-xl font-semibold flex items-center justify-center hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-300/50 active:translate-y-0 transition-all duration-300"
              onClick={() => changeActiveSection("Contact")}
            >
              Contact Me
            </button>
          </div>
        </Reveal>
        <Reveal
          delay={150}
          className="relative z-10 lg:w-1/2 w-full"
        >
          <div className=" w-full h-5/6 flex justify-center items-center ">
            <div className="relative animate-float">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-baseColor/40 to-secondColor/40 blur-2xl scale-110"
              />
              <Image
                src="/Side.jpg"
                alt="devPhoto"
                width={500}
                height={500}
                priority
                className="relative shadow-2xl shadow-cyan-300/60 ring-4 ring-white rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[380px] lg:h-[380px] object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* About Section - Personal introduction and background */}
      <section
        id="About"
        className=" relative w-full h-full pt-28 px-4 bg-gradient-to-b from-slate-200 to-cyan-200 flex flex-col gap-10 justify-center items-center"
        ref={aboutRef}
      >
        <div
          aria-hidden
          className="ambient-blob w-[360px] h-[360px] bg-baseColor/10 top-24 right-0"
        />
        <Reveal className=" flex flex-col justify-center items-center xl:gap-2 gap-1 pb-5">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-secondColor/80">
            Know me
          </p>
          <h2 className=" text-center text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-bold">
            About Me
          </h2>
          <div className=" bg-gradient-to-r from-baseColor to-secondColor rounded-full xl:w-20 lg:w-10 sm:w-9 w-8 h-1"></div>
        </Reveal>

        <Reveal
          delay={100}
          className=" w-full px-4 xl:w-11/12 flex flex-col xl:flex-row items-center justify-center gap-12"
        >
          {" "}
          <div className="w-2/6 flex justify-center items-center">
            <div className=" bg-gradient-to-br from-baseColor to-secondColor transform rotate-6 w-fit h-[200px] sm:h-[350px] lg:h-[400px] rounded-2xl shadow-xl shadow-cyan-300/60 transition-all duration-500 hover:rotate-0 hover:shadow-2xl hover:shadow-cyan-400/60">
              <div className=" bg-violet-600 transform -rotate-6 w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/Bryan.jpeg"
                  alt="hero-image"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-2xl transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
          <div className=" xl:w-8/12 w-full">
            <div className=" flex flex-col justify-center items-center text-pretty py-4 gap-4">
              <h3 className=" lg:text-xl sm:text-lg text-sm font-semibold self-start">
                Who I am?
              </h3>
              <p className=" lg:text-xl sm:text-lg text-sm text-pretty text-gray-600 leading-relaxed">
                <b className="text-gray-800">Hello!</b> I&apos;m a passionate junior web developer with
                strong problem-solving skills and an insatiable thirst for
                learning. As a self-taught programmer, I&apos;ve built multiple
                personal projects that have helped me solidify my core web
                development skills. I&apos;m eager to join a development team
                where I can contribute my knowledge while continuing to grow
                professionally in a collaborative environment.
              </p>
            </div>
            <div className=" flex flex-col sm:flex-row gap-2 justify-between items-center lg:gap-8 py-4">
              <div className=" w-full flex flex-col justify-center items-start gap-4 text-gray-600">
                <span className=" flex justify-center items-center gap-2 text-lg hover:text-black hover:bg-white/60 rounded-lg p-2 cursor-pointer transition-all duration-300 ">
                  <User className="text-baseColor" />
                  <p className="lg:text-lg text-sm">Bryan.dev</p>
                </span>{" "}
                <span className=" flex justify-center items-center gap-2 text-lg hover:text-black hover:bg-white/60 rounded-lg p-2 cursor-pointer transition-all duration-300 ">
                  <Briefcase className="text-baseColor" />
                  <p className="lg:text-lg text-sm">Frontend Developer</p>
                </span>
              </div>
              <div className=" w-full flex flex-col justify-center items-start gap-4 text-gray-600">
                <span className=" flex justify-center items-center gap-2 text-lg hover:text-black hover:bg-white/60 rounded-lg p-2 cursor-pointer transition-all duration-300 ">
                  <Mail className="text-baseColor" />
                  <p className="lg:text-lg text-sm">breyessrr@gmail.com</p>
                </span>
                <span className=" flex justify-center items-center gap-2 text-lg hover:text-black hover:bg-white/60 rounded-lg p-2 cursor-pointer transition-all duration-300 ">
                  <GitHubSVG className=" w-6 h-6" />
                  <p className="lg:text-lg text-sm">
                    <Link
                      href="https://github.com/bryanDev01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondColor transition-colors duration-300"
                    >
                      https://github.com/bryanDev01
                    </Link>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Skills Section - Technical expertise and tools */}
      <section
        id="Skills"
        className=" w-full h-full bg-gradient-to-b from-cyan-200 to-white px-4 pt-28 flex flex-col justify-center items-center gap-10"
        ref={skillsRef}
      >
        <Reveal className=" flex flex-col justify-center items-center gap-2">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-secondColor/80">
            My stack
          </p>
          <h2 className=" text-center text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-bold">
            My Skills
          </h2>

          <div className="flex flex-col items-center mb-12">
            <div className="w-20 h-1 bg-gradient-to-r from-baseColor to-secondColor rounded-full"></div>
            <p className="text-gray-600 mt-4 text-center lg:text-xl sm:text-lg text-sm font-semibold text-pretty max-w-2xl">
              Crafting digital experiences with cutting-edge technologies
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], index) => (
            <Reveal key={key} delay={index * 120} className="h-full">
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-lg shadow-cyan-200/50 hover:shadow-2xl hover:shadow-cyan-300/60 hover:-translate-y-2 transition-all duration-500 p-6 group overflow-hidden">
                {/* soft corner glow on hover */}
                <div
                  aria-hidden
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-baseColor/10 to-secondColor/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-purple-50 group-hover:from-cyan-50 group-hover:to-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-secondColor transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 lg:text-lg text-sm font-semibold text-pretty">
                  {category.description}
                </p>

                <div className="space-y-4">
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const colorClass =
                        techColors[skill.name] ||
                        "bg-slate-100 text-slate-800";
                      return (
                        <li
                          key={skill.name}
                          className={`px-3 py-1 rounded-full text-sm font-semibold ring-1 ring-inset ring-black/5 hover:scale-105 cursor-default transition-transform duration-200 ${colorClass}`}
                        >
                          {skill.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-12 text-center">
          <p className="text-gray-600 mb-6 lg:text-xl sm:text-lg text-sm font-semibold text-pretty">
            Always learning and exploring new technologies to stay at the
            forefront of web development
          </p>
          <div className="inline-flex items-center justify-center space-x-2 text-sm text-indigo-600">
            <span className="lg:text-lg text-sm font-semibold text-pretty">
              <Link
                href="https://github.com/bryanDev01"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-indigo-950 transition-colors duration-300"
              >
                View my latest work
              </Link>
            </span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </Reveal>
      </section>

      {/* Projects Section - Portfolio of work */}
      <section
        id="Projects"
        className=" relative overflow-hidden bg-gradient-to-b from-white to-slate-200 pt-28 pb-16 flex flex-col gap-10"
        ref={projectsRef}
      >
        <div
          aria-hidden
          className="ambient-blob w-[400px] h-[400px] bg-secondColor/10 -left-40 bottom-0"
        />
        <Reveal className=" flex flex-col justify-center items-center gap-2">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-secondColor/80">
            My work
          </p>
          <h2 className=" text-center text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-bold">
            My Projects
          </h2>
          <div className=" bg-gradient-to-r from-baseColor to-secondColor rounded-full xl:w-20 lg:w-10 sm:w-9 w-8 h-1"></div>
        </Reveal>

        {/* Project cards - two flex columns; the filler stretches with
            flex-1 so the masonry fills all the way to the panel bottom */}
        <div className="relative z-10 w-full px-4">
          <div className="rounded-3xl bg-gradient-to-b from-white/70 to-cyan-50/60 shadow-xl shadow-cyan-300/40 ring-1 ring-white p-4 sm:p-5">
            <div className="flex flex-col md:flex-row md:items-stretch gap-5">
              <div className="flex flex-col gap-5 md:w-1/2">
                {Object.entries(projects)
                  .slice(0, 2)
                  .map(([key, project], index) => (
                    <Reveal key={key} delay={index * 120}>
                      {renderProjectCard(project)}
                    </Reveal>
                  ))}
              </div>
              <div className="flex flex-col gap-5 md:w-1/2">
                {Object.entries(projects)
                  .slice(2)
                  .map(([key, project], index) => (
                    <Reveal key={key} delay={(index + 2) * 120}>
                      {renderProjectCard(project)}
                    </Reveal>
                  ))}

                {/* Filler card: flex-1 stretches it to close any height
                    gap and align its bottom with the other column */}
                <Reveal delay={360} className="flex-1 min-h-[240px]">
                  <Link
                    href="https://github.com/bryanDev01?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/filler h-full flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-baseColor/35 bg-white/50 text-gray-500 hover:border-secondColor/50 hover:text-secondColor hover:bg-white/80 hover:-translate-y-1 transition-all duration-300 p-6 text-center"
                  >
                    <Briefcase className="w-8 h-8 opacity-70 group-hover/filler:scale-110 transition-transform duration-300" />
                    <p className="font-semibold text-lg">More projects</p>
                    <p className="text-sm text-pretty">
                      Experiments and work in progress live on my GitHub
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-baseColor group-hover/filler:text-secondColor transition-colors duration-300">
                      View GitHub <ArrowRight className="w-4" />
                    </span>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
        <Reveal delay={100} className="self-center">
          <button className=" w-52 lg:w-[300px] border-2 border-baseColor text-baseColor font-semibold hover:text-white hover:bg-gradient-to-r hover:from-baseColor hover:to-secondColor hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-300/50 active:translate-y-0 p-2 text-center text-sm md:text-lg rounded-xl transition-all duration-300">
            <Link
              href="https://github.com/bryanDev01"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
            </Link>
          </button>
        </Reveal>
      </section>

      {/* Contact Section - Get in touch form and contact information */}
      <section
        id="Contact"
        className=" relative overflow-hidden w-full h-full bg-gradient-to-b from-slate-200 to-cyan-200 px-4 sm:px-12 pt-28 pb-12 flex flex-col justify-center items-center gap-8"
        ref={contactRef}
      >
        <div
          aria-hidden
          className="ambient-blob w-[420px] h-[420px] bg-baseColor/15 -top-24 right-0"
        />
        <Reveal className=" flex flex-col justify-center items-center gap-2">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-secondColor/80">
            Let&apos;s talk
          </p>
          <h2 className=" text-center text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-bold">
            Get In Touch
          </h2>
          <div className=" bg-gradient-to-r from-baseColor to-secondColor rounded-full xl:w-20 lg:w-10 sm:w-9 w-8 h-1"></div>
          <p className=" lg:text-xl sm:text-lg text-sm font-semibold text-pretty text-gray-600">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </Reveal>

        <div className="relative z-10 w-full h-full flex lg:flex-row flex-col justify-center items-start gap-8">
          {/* Contact information card - Contains email and social links */}
          <Reveal className=" lg:w-1/3 w-full" delay={100}>
            <div className=" lg:h-[480px] flex flex-col gap-6 justify-between lg:items-start items-start sm:items-center bg-white/90 backdrop-blur-sm rounded-2xl border border-white p-6 shadow-xl shadow-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-400/40 transition-shadow duration-500">
              <div className=" w-full h-full flex flex-col items-start gap-6">
                <p className=" w-full font-semibold lg:text-2xl sm:text-xl text-lg sm:text-center lg:text-left">
                  Contact Information
                </p>
                <div className=" w-full flex flex-col lg:flex-col sm:flex-row lg:gap-4 gap-2 lg:justify-center justify-around lg:items-start items-start sm:items-center">
                  <span className="flex justify-center items-center gap-4">
                    <span className="p-2.5 bg-gradient-to-br from-baseColor/10 to-secondColor/10 rounded-xl">
                      <Mail className="lg:w-8 w-6 h-full text-baseColor" />
                    </span>
                    <div className=" flex flex-col justify-center items-start lg:text-lg  text-sm ">
                      <p>Email</p>
                      <p className="text-gray-600">breyessrr@gmail.com</p>
                    </div>
                  </span>
                  <span className=" flex justify-center items-center gap-4">
                    <span className="p-2.5 bg-gradient-to-br from-baseColor/10 to-secondColor/10 rounded-xl">
                      <Briefcase className="lg:w-8 w-6 h-full text-baseColor" />
                    </span>
                    <div className=" flex flex-col justify-center items-start lg:text-lg text-sm">
                      <p>Freelance</p>
                      <p className="text-gray-600">Available for work</p>
                    </div>
                  </span>
                </div>
              </div>

              <div className=" flex flex-col items-start gap-3">
                <p className=" text-lg font-semibold">Follow Me</p>
                <div className=" flex justify-start items-center gap-4">
                  <Link
                    href="https://github.com/bryanDev01"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="p-1 rounded-lg hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <GitHubSVG className=" w-8" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/brayan-reyes-rodr%C3%ADguez-b63b2b349"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="p-1 rounded-lg hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <LinkedInSVG className=" w-8 rounded-md" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className=" lg:w-4/6 w-full" delay={220}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
