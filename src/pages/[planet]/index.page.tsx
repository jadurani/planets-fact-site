import { useRouter } from "next/router";

export default function PlanetPage() {
  const router = useRouter();
  return <div>{router.query.planet}</div>;
}
