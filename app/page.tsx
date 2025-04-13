"use client";

import { GitHubSVG, LinkedInSVG, XSVG } from "@/components/icons/icons";
import { projects } from "@/data/data";
import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";
import {
  ArrowRight,
  ChevronRight,
  Server,
  Briefcase,
  Mail,
  User,
  Code,
  Cpu,
  Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { useInView } from "@/hooks/useInView";

export const skills = {
  frontend: {
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    title: "Frontend Development",
    description:
      "Building beautiful, responsive user interfaces with modern web technologies",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 65 },
      { name: "HTML5", level: 90 },
      { name: "CSS3/SCSS", level: 85 },
    ],
  },
  frameworks: {
    icon: <Cpu className="h-8 w-8 text-purple-600" />,
    title: "Frameworks & Libraries",
    description: "Leveraging powerful tools to create scalable applications",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Zustand", level: 80 },
      { name: "Next.js", level: 85 },
      { name: "Angular.js", level: 45 },
      { name: "Astro", level: 35 },
      { name: "Django", level: 60 },
      { name: "Shad Cn UI", level: 80 },
    ],
  },
  backend: {
    icon: <Server className="h-8 w-8 text-rose-600" />, // Asume que tienes un ícono "Server"
    title: "Backend & Databases",
    description: "Server-side solutions and data management",
    skills: [
      { name: "Supabase", level: 75 },
      { name: "Strapi", level: 75 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 65 },
      { name: "Prisma", level: 70 },
    ],
  },
  tools: {
    icon: <Terminal className="h-8 w-8 text-emerald-600" />,
    title: "Tools & Others",
    description: "Mastering development tools and workflows",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Vite", level: 85 },
      { name: "Figma", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Jest", level: 50 },
    ],
  },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const { ref: homeRef } = useInView({ threshold: 0.4 }, "Home");
  const { ref: aboutRef } = useInView({ threshold: 0.4 }, "About");
  const { ref: skillsRef } = useInView({ threshold: 0.4 }, "Skills");
  const { ref: projectsRef } = useInView({ threshold: 0.4 }, "Projects");
  const { ref: contactRef } = useInView({ threshold: 0.4 }, "Contact");

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

  const changeActiveSection = (id: string) => {
    setActiveSection(id);
    const elementActive = document.getElementById(id);

    if (elementActive) {
      elementActive.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className=" flex flex-col relative">
      <NavBar
        changeActiveSection={changeActiveSection}
        activeSectionID={activeSection}
      />

      <section
        id="Home"
        className=" flex lg:flex-row flex-col-reverse gap-10 bg-gradient-to-b from-white to-slate-200 w-full items-center justify-center pt-28 pb-2 px-4"
        ref={homeRef}
      >
        <div className=" lg:w-1/2 w-full px-4 flex flex-col justify-center items-center">
          <h1 className=" text-2xl sm:text-3xl lg:text-4xl text-pretty font-bold">
            Frontend Developer | Passionate about{" "}
            <span className=" text-baseColor">
              Technology, Innovation, and Continuous Learning
            </span>{" "}
            ❤️
          </h1>
          <p className=" lg:text-xl sm:text-lg text-sm py-3 text-gray-600">
            {" "}
            Welcome to my online portfolio! Here, you'll find a collection of my
            frontend development projects, showcasing{" "}
            <b>responsive designs, interactive web applications</b>, and{" "}
            <b>user-centric</b> solutions. Each project reflects my ability to
            blend technical expertise with creativity, turning ideas into{" "}
            <b>engaging and functional digital experiences</b>. Explore my work
            to see how I can bring your vision to life!
          </p>
          <div className=" self-start flex gap-8 justify-center items-center py-2">
            <button
              className=" bg-baseBGColor hover:bg-secondBGColor text-sm sm:text-lg p-3 rounded-lg flex gap-2 items-center justify-center"
              onClick={() => changeActiveSection("Projects")}
            >
              View Projects <ArrowRight className=" w-4 lg:w-5" />
            </button>
            <button
              className=" outline-2 outline-double outline-baseColor hover:outline-secondColor text-sm sm:text-lg p-3 rounded-lg flex items-center justify-center"
              onClick={() => changeActiveSection("Contact")}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className=" lg:w-1/2 w-full">
          <div className=" w-full h-5/6 flex justify-center items-center ">
            <img
              src="/Side.jpg"
              alt="devPhoto"
              className=" shadow-md shadow-slate-200 border-2 border-slate-200 rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[380px] lg:h-[380px] object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="About"
        className=" w-full h-full pt-28 px-4 bg-gradient-to-b from-slate-200 to-cyan-200 flex flex-col gap-10 justify-center items-center"
        ref={aboutRef}
      >
        <div className=" flex flex-col justify-center items-center xl:gap-2 gap-1 pb-5">
          <h2 className=" text-center text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-bold">
            About Me
          </h2>
          <div className=" bg-secondColor rounded-md xl:w-20 lg:w-10 sm:w-9 w-8 h-1"></div>
        </div>

        <div className=" w-full px-4 xl:w-11/12 flex flex-col xl:flex-row items-center justify-center gap-12">
          {" "}
          <div className="w-2/6 flex justify-center items-center">
            <div className=" bg-baseColor transform rotate-6 w-fit h-[200px] sm:h-[350px] lg:h-[400px] rounded-lg shadow-lg shadow-cyan-300">
              <div className=" bg-violet-600 transform -rotate-6 w-full h-full rounded-lg ">
                <img
                  src="/Bryan.jpeg"
                  alt="hero-image"
                  className=" object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className=" xl:w-8/12 w-full">
            <div className=" flex flex-col justify-center items-center text-pretty py-4 gap-4">
              <h3 className=" lg:text-xl sm:text-lg text-sm font-semibold self-start">
                Who I am?
              </h3>
              <p className=" lg:text-xl sm:text-lg text-sm text-pretty text-gray-600">
                <b>Hello!</b> I'm a passionate junior web developer with strong
                problem-solving skills and an insatiable thirst for learning. As
                a self-taught programmer, I've built multiple personal projects
                that have helped me solidify my core web development skills. I'm
                eager to join a development team where I can contribute my
                knowledge while continuing to grow professionally in a
                collaborative environment.
              </p>
            </div>
            <div className=" flex flex-col sm:flex-row gap-2 justify-between items-center lg:gap-8 py-4">
              <div className=" w-full flex flex-col justify-center items-start gap-4 text-gray-600">
                <span className=" flex justify-center items-center gap-2 text-lg hover:text-black rounded-lg p-2 cursor-pointer ">
                  <User />
                  <p className="lg:text-lg text-sm">Bryan.dev</p>
                </span>{" "}
                <span className=" flex justify-center items-center gap-2 text-lg hover:text-black rounded-lg p-2 cursor-pointer ">
                  <Briefcase />
                  <p className="lg:text-lg text-sm">Frontend Developer</p>
                </span>
              </div>
              <div className=" w-full flex flex-col justify-center items-start gap-4 text-gray-600">
                <span className=" flex justify-center items-center gap-2 text-lg hover:text-black rounded-lg p-2 cursor-pointer ">
                  <Mail />
                  <p className="lg:text-lg text-sm">breyessrr@gmail.com</p>
                </span>
                <span className=" flex justify-center items-center gap-2 text-lg hover:text-black rounded-lg p-2 cursor-pointer ">
                  <GitHubSVG className=" w-6 h-6" />
                  <p className="lg:text-lg text-sm">
                    <Link href="https://github.com/komikoh01" target="Blank">
                      https://github.com/komikoh01
                    </Link>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Skills"
        className=" w-full h-full bg-gradient-to-b from-cyan-200 to-white px-4 pt-28 flex flex-col justify-center items-center gap-10"
        ref={skillsRef}
      >
        <div className=" flex flex-col justify-center items-center gap-2">
          <h2 className=" text-center text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-bold">
            My Skills
          </h2>

          <div className="flex flex-col items-center mb-12">
            <div className="w-20 h-1 bg-secondColor rounded"></div>
            <p className="text-gray-600 mt-4 text-center lg:text-xl sm:text-lg text-sm font-semibold text-pretty max-w-2xl">
              Crafting digital experiences with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([key, category]) => (
              <div
                key={key}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 group hover:-translate-y-1 duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6 lg:text-lg text-sm font-semibold text-pretty">
                  {category.description}
                </p>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-indigo-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"
                          style={{
                            width: `${skill.level}%`,
                            transform: "scaleX(0.8)",
                            transformOrigin: "left",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 lg:text-xl sm:text-lg text-sm font-semibold text-pretty">
              Always learning and exploring new technologies to stay at the
              forefront of web development
            </p>
            <div className="inline-flex items-center justify-center space-x-2 text-sm text-indigo-600">
              <span className="lg:text-lg text-sm font-semibold text-pretty">
                <Link
                  href="https://github.com/komikoh01"
                  target="Blank"
                  className=" hover:text-indigo-950"
                >
                  View my latest work
                </Link>
              </span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="Projects"
        className=" bg-gradient-to-b from-white to-slate-200 pt-28 flex flex-col gap-10"
        ref={projectsRef}
      >
        <div className=" flex flex-col justify-center items-center gap-2">
          <h2 className=" text-center text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-bold">
            My Projects
          </h2>
          <div className=" bg-secondColor rounded-md xl:w-20 lg:w-10 sm:w-9 w-8 h-1"></div>
        </div>

        <div className=" flex flex-col md:grid xl:grid-cols-3 md:grid-cols-2 md:gap-5 gap-8 p-4">
          {Object.entries(projects).map(([key, project]) => (
            <ProjectCard
              key={key}
              src={project.src}
              name={project.name}
              stars={project.stars}
              stack={project.stack}
              description={project.description}
              gitHref={project.gitHref}
              pageHref={project.gitHref}
            />
          ))}
        </div>
        <button className=" self-center w-52 lg:w-[300px] border-2 border-baseColor hover:text-white hover:bg-secondColor hover:border-transparent p-2 text-center text-sm md:text-lg rounded-lg">
          <Link href="https://github.com/komikoh01" target="Blank">
            View All Projects
          </Link>
        </button>
      </section>

      <section
        id="Contact"
        className=" w-full h-full bg-gradient-to-b from-slate-200 to-cyan-200 px-12 pt-28 pb-12 flex flex-col justify-center items-center gap-8"
        ref={contactRef}
      >
        <div className=" flex flex-col justify-center items-center gap-2">
          <h2 className=" text-center text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-bold">
            Get In Touch
          </h2>
          <div className=" bg-secondColor rounded-md xl:w-20 lg:w-10 sm:w-9 w-8 h-1"></div>
          <p className=" lg:text-xl sm:text-lg text-sm font-semibold text-pretty text-gray-600">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <div className=" w-full h-full flex lg:flex-row flex-col justify-center items-start gap-8">
          <div className=" lg:w-1/3 w-full lg:h-[416px] flex flex-col gap-6 justify-center lg:items-start items-start sm:items-center bg-white rounded-lg p-6 shadow-lg shadow-cyan-300">
            <div className=" w-full h-full flex flex-col items-start gap-6">
              <p className=" w-full font-semibold lg:text-2xl sm:text-xl text-lg sm:text-center lg:text-left">
                Contact Information
              </p>
              <div className=" w-full flex flex-col lg:flex-col sm:flex-row lg:gap-4 gap-2 lg:justify-center justify-around lg:items-start items-start sm:items-center">
                <span className="flex justify-center items-center gap-4">
                  <Mail className="lg:w-12 w-8 h-full " />
                  <div className=" flex flex-col justify-center items-start lg:text-lg  text-sm ">
                    <p>Email</p>
                    <p className="text-gray-600">breyessrr@gmail.com</p>
                  </div>
                </span>
                <span className=" flex justify-center items-center gap-4">
                  <Briefcase className="lg:w-12 w-8 h-full " />
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
                <Link href="https://github.com/komikoh01" target="Blank">
                  <GitHubSVG className=" w-8" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/brayan-reyes-rodr%C3%ADguez-b63b2b349"
                  target="Blank"
                >
                  <LinkedInSVG className=" w-8" />
                </Link>
                <Link href="">
                  <XSVG className=" w-8 h-full" />
                </Link>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
