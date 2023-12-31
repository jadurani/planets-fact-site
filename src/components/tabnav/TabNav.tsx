import { DESCRIPTIONS, DescriptionType, Planet } from "@/lib/planets.constant";
import { TabLink } from "../tablink/TabLink";

interface TabNavProps {
  planet: Planet;
  desc?: DescriptionType;
}

export const TabNav = ({ planet, desc = "overview" }: TabNavProps) => {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden border-b-[1px] border-solid border-white/20 flex justify-center gap-4">
        {DESCRIPTIONS.map((d, idx) => (
          <TabLink
            key={idx}
            index={idx}
            id={d}
            isActive={d === desc}
            planet={planet}
            isMobile={true}></TabLink>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-4">
        {DESCRIPTIONS.map((d, idx) => (
          <TabLink
            key={idx}
            index={idx}
            id={d}
            isActive={d === desc}
            planet={planet}
            isMobile={false}></TabLink>
        ))}
      </div>
    </>
  );
};
