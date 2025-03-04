import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className=" flex flex-col gap-6 py-8">
      <section className=" flex lg:flex-row flex-col-reverse gap-8 w-full items-center justify-center py-3">
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
            <button className=" bg-baseBGColor hover:bg-secondBGColor text-sm sm:text-lg lg:text-xl p-2 rounded-lg flex gap-2 items-center justify-center">View Projects <ArrowRight className=" w-4 lg:w-5" /></button>
            <button className=" border-2 border-baseColor hover:border-secondColor text-sm sm:text-lg   lg:text-xl p-2 rounded-lg flex items-center justify-center">Contact Me</button>
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
    </main>
  );
}
