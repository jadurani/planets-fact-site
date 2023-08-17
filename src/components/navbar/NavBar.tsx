import { PLANETS } from "@/lib/planets.constant";

/**
 * Primary UI component for user interaction
 */
export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="text-h2 font-antonio uppercase border-b-">
        The Planets
      </div>
      <ol className="flex">
        {PLANETS.map((planet, idx) => (
          <li
            key={idx}
            className={`p-4 uppercase font-spartan font-bold tracking-wider border-${planet} border-t-4 border-solid`}>
            {planet}
          </li>
        ))}
      </ol>
    </nav>
  );
};
