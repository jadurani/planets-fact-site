import { PLANETS } from "@/lib/planets.constant";
import Link from "next/link";

/**
 * Primary UI component for user interaction
 */
export const NavBar = () => {
  return (
    <nav className="px-6 flex flex-wrap justify-between md:justify-center lg:justify-between items-center border-b-[1px] border-solid border-white/20">
      <Link
        href="/"
        className="text-[28px] py-4 font-antonio font-extralight uppercase">
        The Planets
      </Link>

      <button className="md:hidden">
        <img src="/icons/icon-hamburger.svg" alt="Menu" />
      </button>

      <ol className="hidden md:flex justify-stretch">
        {PLANETS.map((planet, idx) => (
          <li
            key={idx}
            className={`px-4 pt-5 pb-7 lg:pb-6 uppercase w-full text-center font-spartan font-semibold tracking-[0.15em] text-h4 text-white/50 hover:text-white active:text-white transition-colors border-${planet} border-t-4 border-solid`}>
            <Link href={planet}>{planet}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
