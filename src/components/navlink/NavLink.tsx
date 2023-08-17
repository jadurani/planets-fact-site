import Link from "next/link";

interface NavLinkProps {
  /**
   * ID of the NavLink
   * The expected values for these are the PLANET names
   */
  id: string;
  /**
   * Is the current link active?
   */
  isActive?: boolean;
}

export const NavLink = ({ id, isActive = false }: NavLinkProps) => {
  const isActiveClasses = isActive
    ? `border-${id} text-white`
    : "text-white/50 border-transparent";
  return (
    <div
      className={`
        px-4 pt-5 pb-7 lg:pb-6 uppercase w-full text-center font-spartan
        font-semibold tracking-[0.15em] text-h4 hover:text-white
        transition-colors duration-500 border-t-4 border-solid
        ${isActiveClasses}`}>
      <Link href={id}>{id}</Link>
    </div>
  );
};
