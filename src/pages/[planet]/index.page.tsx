import { Description } from "@/components/description/Description";
import { Fact } from "@/components/fact/Fact";
import { useRouter } from "next/router";

export default function PlanetPage() {
  const router = useRouter();
  const planet = router.query.planet;
  return (
    <div className="container mx-auto">
      {/* profile image */}
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
