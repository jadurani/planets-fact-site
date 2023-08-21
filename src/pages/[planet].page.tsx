import { Description } from "@/components/description/Description";
import { Fact } from "@/components/fact/Fact";
import { Profile } from "@/components/profile/Profile";
import { DESCRIPTIONS, DescriptionType } from "@/components/tablink/TabLink";
import { TabNav } from "@/components/tabnav/TabNav";
import { Planet } from "@/lib/planets.constant";
import Head from "next/head";
import { useRouter } from "next/router";

export default function PlanetPage() {
  const router = useRouter();
  type RouteType = { planet: Planet; desc: DescriptionType };
  let { planet, desc }: RouteType = router.query as RouteType;

  if (!desc || !DESCRIPTIONS.includes(desc)) {
    desc = "overview";
  }

  const planetTitle = planet?.toUpperCase();

  return (
    <>
      <Head>
        <title>{planetTitle} Planet Facts </title>
        <meta
          name="description"
          content="Designed by FE Mentor; Implemented by Jadurani Davalos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:hidden">
        <TabNav planet={planet} desc={desc} />
      </div>

      <div className="container flex flex-col m-auto py-8 px-4 justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* profile image */}
          <div className="lg:col-span-2 md:p-20 flex items-center mx-auto justify-center m-8 w-40 h-40 md:w-[500px] md:h-[500px]">
            <Profile planet={planet} desc={desc} />
          </div>

          {/* description */}
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 my-auto items-center">
            <div>
              <h1 className="text-center md:text-start font-antonio uppercase text-h2 md:text-[48px] lg:text-h1">
                {planet}
              </h1>

              <Description
                content="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
                source="https://en.wikipedia.org/wiki/Mercury_(planet)"
              />
            </div>
            <div className="hidden md:block">
              <TabNav planet={planet} desc={desc} />
            </div>
          </div>
        </div>

        {/* facts */}
        <div className="flex flex-col md:grid grid-cols-4 gap-4 lg:my-16">
          <Fact property="rotation" value="58.6 Days" />
          <Fact property="revolution" value="87.97 Days" />
          <Fact property="radius" value="2,439.7 KM" />
          <Fact property="temperature" value="430°c" />
        </div>
      </div>
    </>
  );
}
