import { ArrowRight } from "lucide-react";
import { Briefcase, Github, Mail, User } from "lucide-react";

export default function Home() {
  return (
    <main className=" flex flex-col py-8">
      <section className=" flex lg:flex-row flex-col-reverse gap-8 bg-gradient-to-b from-white to-slate-200 w-full items-center justify-center py-12">
        <div className=" lg:w-1/2 w-full px-4 flex flex-col justify-center items-center">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-pretty font-bold">
            Frontend Developer in love❤️ with{" "}
            <span className=" text-baseColor">Technology & Learning</span>
          </h1>
          <p className=" lg:text-xl sm:text-lg text-sm py-3">
            {" "}
            Welcome to my online portfolio, where you'll discover my frontend
            development projects. Showcasing responsive designs and interactive
            web applications, my work is a blend of technical expertise and
            creative problem-solving. Explore to see how I transform your ideas
            into engaging digital experiences.
          </p>
          <div className=" self-start flex gap-8 justify-center items-center py-2">
            <button className=" bg-baseBGColor hover:bg-secondBGColor text-sm sm:text-lg lg:text-xl p-2 rounded-lg flex gap-2 items-center justify-center">
              View Projects <ArrowRight className=" w-4 lg:w-5" />
            </button>
            <button className=" border-2 border-baseColor hover:border-secondColor text-sm sm:text-lg   lg:text-xl p-2 rounded-lg flex items-center justify-center">
              Contact Me
            </button>
          </div>
        </div>
        <div className=" lg:w-1/2 w-full">
          <div className=" w-full h-full flex justify-center items-center ">
            <img
              src="/Side.jpg"
              alt="devPhoto"
              className=" shadow-md shadow-blue-500 border-2 border-baseColor rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className=" w-full h-full py-8 bg-gradient-to-b from-slate-200 to-cyan-200">
        <div className=" flex flex-col justify-center items-center">
          <h2 className=" text-center text-3xl tracking-wide font-bold">
            About Me
          </h2>
          <div className=" bg-cyan-600 rounded-md w-16 h-2"></div>
        </div>

        <div className=" w-full flex items-center justify-center">
          {" "}
          <div className="w-1/5 flex ">
            <div className=" bg-baseColor transform rotate-12 w-fit rounded-lg">
              <div className=" bg-violet-600 transform rotate-6 w-fit rounded-lg">
                <img src="/" alt="hero-image" />
                Photo
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <div className=" flex flex-col justify-center items-center text-pretty py-4 gap-4">
              <h3 className=" text-2xl font-semibold self-start">Who I am?</h3>
              <p className=" text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                facilis quis blanditiis ducimus quidem maxime aliquid, nostrum,
                itaque, placeat laudantium distinctio ex aspernatur explicabo
                deleniti in corporis eos earum nemo? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Molestias magnam nulla laborum
                dolores delectus perferendis laboriosam eius nihil! Accusantium
                magni fugiat quos ipsam aspernatur accusamus cum! Architecto
                excepturi aperiam animi. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Saepe optio ex, quisquam cumque commodi
                ratione ipsum? Pariatur porro cum eum magnam labore illum ullam,
                earum quia eos veniam vitae aliquam. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nesciunt quia, eligendi non
                facilis ad veritatis quaerat minima voluptas numquam! Delectus
                tempore ipsam magni. Nulla dicta repellat est alias, explicabo
                praesentium.
              </p>
            </div>
            <div className=" flex justify-between items-center py-4">
              <div className=" w-full flex flex-col justify-center items-center gap-4">
                <span className=" flex justify-center items-center gap-2 hover:bg-baseColor text-lg   rounded-lg p-2 w-[400px] cursor-pointer shadow-md shadow-baseColor">
                  <User />
                  <p>Bryan.dev</p>
                </span>{" "}
                <span className=" flex justify-center items-center gap-2 hover:bg-baseColor text-lg   rounded-lg p-2 w-[400px] cursor-pointer shadow-md shadow-baseColor">
                  <Briefcase />
                  <p>Frontend Developer</p>
                </span>
              </div>
              <div className=" w-full flex flex-col justify-center items-center gap-8">
                <span className=" flex justify-center items-center gap-2 hover:bg-baseColor text-lg   rounded-lg p-2 w-[400px] cursor-pointer shadow-md shadow-baseColor">
                  <Mail />
                  <p>breyessrr@gmail.com</p>
                </span>
                <span className=" flex justify-center items-center gap-2 hover:bg-baseColor text-lg   rounded-lg p-2 w-[400px] cursor-pointer shadow-md shadow-baseColor">
                  <Github />
                  <p>https://github.com/dashboard</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
