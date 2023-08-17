import { Planet } from "@/lib/planets.constant";
import Link from "next/link";

interface NavLinkProps {
  /**
   * ID of the NavLink
   * The expected values for these are the PLANET names
   */
  id: Planet;
  /**
   * Is the current link active?
   */
  isActive?: boolean;
}

const MOBILE_NAV_LINK_COLORS: Record<Planet, string> = {
  mercury: "#DEF4FC",
  venus: "#F7CC7F",
  earth: "#545BFE",
  mars: "#FF6A45",
  jupiter: "#ECAD7A",
  saturn: "#FCCB6B",
  uranus: "#65F0D5",
  neptune: "#497EFA",
};

export const NavLink = ({ id, isActive = false }: NavLinkProps) => {
  const isActiveClasses = isActive
    ? `border-${id} text-white`
    : "text-white/50 border-transparent";

  return (
    <>
      <div
        className={`
          hidden md:block
          px-4 pt-5 pb-7 lg:pb-6 uppercase w-full text-center font-spartan
          font-semibold tracking-[0.15em] text-h4 hover:text-white
          transition-colors duration-500 border-t-4 border-solid
          ${isActiveClasses}`}>
        <Link href={id}>{id}</Link>
      </div>

      <div
        className="
          flex md:hidden w-full justify-between p-4 items-center font-spartan
          font-semibold tracking-[0.15em] text-h4 uppercase">
        <span className="flex items-center gap-4">
          <svg
            className={`text-${id}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill={MOBILE_NAV_LINK_COLORS[id]} />
          </svg>
          <Link href={id}>{id}</Link>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
          <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
        </svg>
      </div>
    </>
  );
};
