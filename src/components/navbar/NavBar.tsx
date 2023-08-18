import { PLANETS } from "@/lib/planets.constant";
import Link from "next/link";
import { NavLink } from "../navlink/NavLink";

/**
 * Primary UI component for user interaction
 */
export const NavBar = () => {
  return (
    <>
      <header
        className="px-6 flex flex-wrap
        justify-between md:justify-center lg:justify-between items-center
        border-b-[1px] border-solid border-white/20">
        <Link
          href="/"
          className="text-[28px] py-4 font-antonio font-extralight uppercase">
          The Planets
        </Link>

        <nav>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
              </g>
            </svg>
          </button>
          <ul className="hidden md:flex justify-stretch">
            {PLANETS.map((planet, idx) => (
              <li key={idx}>
                <NavLink id={planet}></NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <nav className="md:hidden">
        <ul>
          {PLANETS.map((planet, idx, arr) => {
            const isLastItem = idx === arr.length - 1;
            return (
              <li
                key={idx}
                className="hover:bg-grey-hover/20 transition-colors duration-500">
                <NavLink id={planet} isLastItem={isLastItem}></NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
