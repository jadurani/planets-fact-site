import { Planet } from "@/lib/planets.constant";
import { DescriptionType } from "../tablink/TabLink";

interface ProfileProps {
  planet: Planet;
  desc: DescriptionType;
}

const getImageSrc = ({ planet, desc }: ProfileProps) => {
  let planetImgSrc = "";
  let geologySrc = "";
  if (desc === "overview") {
    planetImgSrc = `/assets/planet-${planet}.svg`;
  }

  if (desc === "structure") {
    planetImgSrc = `/assets/planet-${planet}-internal.svg`;
  }

  if (desc === "geology") {
    planetImgSrc = `/assets/planet-${planet}.svg`;
    geologySrc = `/assets/geology-${planet}.png`;
  }

  return { planetImgSrc, geologySrc };
};

export const Profile = ({ planet, desc }: ProfileProps) => {
  const { planetImgSrc, geologySrc } = getImageSrc({ planet, desc });
  return (
    <div className="relative">
      <img className="m-auto" src={planetImgSrc} alt={planet} />

      {geologySrc != "" && (
        <div className="absolute w-24 h-32 left-1/2 -translate-x-1/2 top-1/2 translate-y-1/2">
          <img src={geologySrc} alt={`${desc} of ${planet}`} />
        </div>
      )}
    </div>
  );
};
