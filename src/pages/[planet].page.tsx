import { Description } from "@/components/description/Description";
import { Fact } from "@/components/fact/Fact";
import { Profile } from "@/components/profile/Profile";
import { DESCRIPTIONS, DescriptionType } from "@/components/tablink/TabLink";
import { TabNav } from "@/components/tabnav/TabNav";
import { Planet } from "@/lib/planets.constant";
import { useRouter } from "next/router";

export default function PlanetPage() {
  const router = useRouter();
  type RouteType = { planet: Planet; desc: DescriptionType };
  let { planet, desc }: RouteType = router.query as RouteType;

  if (!desc || !DESCRIPTIONS.includes(desc)) {
    desc = "overview";
  }

  return (
    <div className="container mx-auto">
      {/* profile image */}
      <Profile planet={planet} desc={desc} />

      {/* description */}
      <div>
        <h1 className="text-center md:text-start font-antonio uppercase text-h2 md:text-[48px] lg:text-h1">
          {planet}
        </h1>

        <Description
          content="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
          source="https://en.wikipedia.org/wiki/Mercury_(planet)"
        />
      </div>

      {/* subnav */}
      <TabNav planet={planet} desc={desc} />

      {/* facts */}
      <div className="flex flex-col md:grid grid-cols-4 gap-4">
        <Fact property="rotation" value="58.6 Days" />
        <Fact property="revolution" value="87.97 Days" />
        <Fact property="radius" value="2,439.7 KM" />
        <Fact property="temperature" value="430°c" />
      </div>
    </div>
  );
}
