import { Description } from "@/components/description/Description";
import { Fact } from "@/components/fact/Fact";
import { Profile } from "@/components/profile/Profile";
import { TabNav } from "@/components/tabnav/TabNav";
import { getPlanetData } from "@/lib/planets";
import {
  DESCRIPTIONS,
  DescriptionType,
  PLANETS,
  Planet,
  PlanetData,
} from "@/lib/planets.constant";
import Head from "next/head";
import { useRouter } from "next/router";

type RouteType = { planet: Planet; desc: DescriptionType };

export async function getStaticPaths() {
  const paths = PLANETS.map((p) => ({ params: { planet: p } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: RouteType }) {
  const planetData = getPlanetData(params.planet);
  return {
    props: {
      planetData,
    },
  };
}

export default function PlanetPage({ planetData }: { planetData: PlanetData }) {
  const router = useRouter();
  let { planet, desc }: RouteType = router.query as RouteType;

  if (!desc || !DESCRIPTIONS.includes(desc)) {
    desc = "overview";
  }

  const planetTitle = planet?.toUpperCase();
  const pageTitle = `Planet Facts: ${planetTitle}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
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
                content={planetData[desc].content}
                source={planetData[desc].source}
              />
            </div>
            <div className="hidden md:block">
              <TabNav planet={planet} desc={desc} />
            </div>
          </div>
        </div>

        {/* facts */}
        <div className="flex flex-col md:grid grid-cols-4 gap-4 lg:my-16">
          <Fact property="rotation" value={planetData.rotation} />
          <Fact property="revolution" value={planetData.revolution} />
          <Fact property="radius" value={planetData.radius} />
          <Fact property="temperature" value={planetData.temperature} />
        </div>
      </div>
    </>
  );
}
