import { PLANETS } from "@/lib/planets.constant";

/**
 * Primary UI component for user interaction
 */
export const NavBar = () => {
  return (
    <nav className="px-6 flex flex-wrap justify-between md:justify-center lg:justify-between items-center border-b-[1px] border-solid border-white/20">
      <div className="text-[28px] py-4 font-antonio font-extralight uppercase">
        The Planets
      </div>

      <button className="md:hidden">
        <img src="/icons/icon-hamburger.svg" alt="Menu" />
      </button>

      <ol className="hidden md:flex justify-stretch">
        {PLANETS.map((planet, idx) => (
          <li
            key={idx}
            className={`p-4 uppercase w-full text-center font-spartan font-bold tracking-wider border-${planet} border-t-4 border-solid text-h4`}>
            {planet}
          </li>
        ))}
      </ol>
    </nav>
  );
};
