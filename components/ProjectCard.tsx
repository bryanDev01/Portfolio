import { stack } from "@/types/types";
import { Star } from "lucide-react";
import Link from "next/link";
import { ArrowOut, GitHubSVG } from "./icons/icons";

export function ProjectCard({
  src,
  name,
  stars,
  description,
  stack,
  gitHref,
  pageHref,
}: {
  src: string;
  name: string;
  stars: number;
  description: string;
  stack: stack[];
  gitHref: string;
  pageHref: string;
}) {
  return (
    <section className="group shadow-lg shadow-cyan-200 hover:shadow-xl hover:shadow-cyan-300 bg-gradient-to-b from-cyan-100 to-white w-full h-full flex flex-col items-center text-lg rounded-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-full h-[300px] overflow-hidden rounded-t-lg relative group-hover:after:opacity-100 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/50 after:to-transparent after:opacity-0 after:transition-opacity after:duration-300">
        <img
          src={src}
          alt={`Imagen del proyecto relacionado a ${src}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 p-4 w-full">
        <div className="w-full flex justify-between items-center">
          <p className="lg:text-2xl text-xl font-bold bg-gradient-to-r from-baseColor to-secondColor bg-clip-text text-transparent">{name}</p>
          <span className=" flex justify-center items-center">
            {stars === 2 ? (
              <>
                <Star className=" text-yellow-500 md:w-8 w-5" />
                <Star className=" text-yellow-500 md:w-8 w-5" />
              </>
            ) : stars === 3 ? (
              <>
                <Star className=" text-yellow-500 md:w-8 w-5" />
                <Star className=" text-yellow-500 md:w-8 w-5" />
                <Star className=" text-yellow-500 md:w-8 w-5" />
              </>
            ) : stars === 4 ? (
              <>
                <Star className=" text-yellow-500 md:w-8 w-5" />
                <Star className=" text-yellow-500 md:w-8 w-5" />
                <Star className=" text-yellow-500 md:w-8 w-5" />
                <Star className=" text-yellow-500 md:w-8 w-5" />
              </>
            ) : (
              <>
                <Star className=" text-yellow-500 md:w-8 w-5" />
                <Star className=" text-yellow-500 md:w-8 w-5" />
                <Star className=" text-yellow-500 md:w-8 w-5" />
                <Star className=" text-yellow-500 md:w-8 w-5" />
                <Star className=" text-yellow-500 md:w-8 w-5" />
              </>
            )}
          </span>
        </div>
        <p className=" lg:text-base text-sm text-pretty text-gray-600">
          {description}
        </p>
        <div className=" w-full flex flex-wrap justify-start items-center gap-4">
          {stack.map((st) => (
            <p
              key={st.id}
              className="font-semibold ring-1 ring-gray-300 bg-slate-200 text-center text-xs md:text-sm rounded-lg p-1"
            >
              {st.tec}
            </p>
          ))}
        </div>
        <div className="w-full flex flex-wrap justify-start items-center gap-4">
          <Link href={gitHref} target="Blank" className="transform transition-all duration-300 hover:scale-110 hover:text-secondColor">
            <GitHubSVG className="w-8" />
          </Link>

          <Link href={pageHref} target="Blank" className="transform transition-all duration-300 hover:scale-110 hover:text-secondColor">
            <ArrowOut className="w-8" />
          </Link>

          <a href={pageHref} target="_blank" rel="noopener noreferrer" className="ml-auto px-4 py-2 bg-gradient-to-r from-baseColor to-secondColor text-white rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md text-sm">
            View Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
