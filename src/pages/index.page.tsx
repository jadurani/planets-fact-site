import { Planet } from "@/lib/planets.constant";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function IndexPage() {
  const router = useRouter();
  const planet = router.query.planet as Planet;

  useEffect(() => {
    if (!planet) {
      router.push("/mercury");
    }
  }, [router, planet]);
  return null;
}
