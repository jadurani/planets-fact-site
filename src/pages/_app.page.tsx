import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Antonio, League_Spartan } from "next/font/google";

export const AntonioFont = Antonio({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-antonio",
});

export const SpartanFont = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spartan",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component
      className={`${AntonioFont.variable} font-antonio`}
      {...pageProps}
    />
  );
}
