import "../styles/Aside.css";
import { navLinks } from "@/data/data";

function Aside({ showAside }: { showAside: boolean }) {
  return (
    <div
      className={
        showAside
          ? " top-[63px] sm:top-[69px] absolute sm:w-60 w-full sm:h-full h-dvh showLeft shadow-md shadow-slate-200 lg:hidden"
          : "hidden"
      }
    >
      <aside className=" h-full sm:h-fit flex flex-col sm:justify-center items-center gap-16 sm:gap-8 bg-slate-200 rounded-md text-secondColor list-none py-5 sm:py-3 font-medium">
        {navLinks.map((l) => (
          <li
            key={l.id}
            className=" hover:ring-4 hover:ring-baseColor hover:rounded-lg p-2 w-3/4 cursor-pointer "
          >
            <p className=" flex justify-center items-center text-separate"><span className="">{<l.icon/>}</span> {l.link }</p>
          </li>
        ))}
      </aside>
    </div>
  );
}

export default Aside;
