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
    <section className=" shadow-lg shadow-cyan-200 bg-gradient-to-b from-cyan-100 to-white w-full h-full flex flex-col items-center text-lg rounded-lg">
      <div className=" w-full h-[300px] overflow-hidden rounded-t-lg ">
        <img
          src={src}
          alt={`Imagen del proyecto relacionado a ${src}`}
          className=" w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-t-lg"
        />
      </div>

      <div className=" flex flex-col justify-center items-center gap-4 p-4">
        <div className=" w-full flex justify-between items-center">
          <p className=" lg:text-2xl text-xl font-bold">{name}</p>
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
        <div className=" w-full flex justify-start items-center gap-4">
          <Link href={gitHref} target="Blank">
            <GitHubSVG className="w-8" />
          </Link>

          <Link href={pageHref} target="Blank">
            <ArrowOut className=" w-8" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
