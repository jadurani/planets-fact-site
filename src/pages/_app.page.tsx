import { NavBar } from "@/components/navbar/NavBar";
import { AntonioFont, SpartanFont } from "@/lib/fonts";
import { Planet } from "@/lib/planets.constant";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const activeRoute = router.query.planet as Planet;
  return (
    <main className={`${AntonioFont.variable} ${SpartanFont.variable}`}>
      <NavBar activeRoute={activeRoute} />
      <Component {...pageProps} />
    </main>
  );
}
