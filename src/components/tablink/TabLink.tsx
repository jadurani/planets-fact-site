import { Planet } from "@/lib/planets.constant";
import Link from "next/link";

export const DESCRIPTIONS = ["overview", "structure", "geology"];
export type DescriptionType = (typeof DESCRIPTIONS)[number];

interface TabLinkProps {
  index: number;
  /**
   * ID of the NavLink
   * The expected values for these are the PLANET names
   */
  id: DescriptionType;

  /**
   * The color of the highlight
   */
  planet: Planet;

  /**
   * Is the current link active?
   */
  isActive?: boolean;

  /**
   * Is this mobile view? (Or desktop)
   */
  isMobile?: boolean;
}

const labels: Record<"mobile" | "desktop", Record<DescriptionType, string>> = {
  mobile: {
    overview: "overview",
    structure: "structure",
    geology: "surface",
  },
  desktop: {
    overview: "overview",
    structure: "internal structure",
    geology: "surface geology",
  },
};

export const TabLink = ({
  index,
  id,
  planet,
  isActive = false,
  isMobile = true,
}: TabLinkProps) => {
  return (
    <>
      {/* Mobile */}
      <Link
        href={id}
        className={`uppercase font-spartan text-[9px] tracking-[.3em] font-medium
        px-1 pt-4 pb-3 inline-block border-b-4 border-solid
        ${isMobile ? "block" : "hidden"}
        ${
          isActive
            ? `text-white border-${planet}`
            : "text-white/50 border-transparent"
        }`}>
        {labels.mobile[id]}
      </Link>

      {/* Desktop */}
      <Link href={id}>
        <button
          className={`w-full uppercase font-spartan text-[9px] tracking-[.3em] font-medium
          ${isMobile ? "hidden" : "flex"} gap-4 p-4 border border-solid
          transition-colors duration-500
          ${
            isActive
              ? `bg-${planet} border-transparent`
              : "border-white/20 hover:bg-white/20 hover:border-transparent"
          }`}>
          <span className="w-4 text-white/50">0{index + 1}</span>
          <span className="text-white">{labels.desktop[id]}</span>
        </button>
      </Link>
    </>
  );
};
