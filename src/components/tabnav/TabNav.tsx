import { Planet } from "@/lib/planets.constant";
import { DESCRIPTIONS, TabLink } from "../tablink/TabLink";

interface TabNavProps {
  planet: Planet;
}

export const TabNav = ({ planet }: TabNavProps) => {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden border-b-[1px] border-solid border-white/20 flex justify-center gap-4">
        {DESCRIPTIONS.map((desc, idx) => (
          <TabLink
            key={idx}
            index={idx}
            id={desc}
            planet={planet}
            isMobile={true}></TabLink>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-4">
        {DESCRIPTIONS.map((desc, idx) => (
          <TabLink
            key={idx}
            index={idx}
            id={desc}
            planet={planet}
            isMobile={false}></TabLink>
        ))}
      </div>
    </>
  );
};
