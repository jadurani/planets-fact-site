import { Antonio } from "next/font/google";
import localFont from 'next/font/local';

export const AntonioFont = Antonio({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-antonio",
});

export const SpartanFont = localFont({
  src: [
    {
      path: '../styles/fonts/SpartanMB-Black.otf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../styles/fonts/SpartanMB-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../styles/fonts/SpartanMB-Extra-Bold.otf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../styles/fonts/SpartanMB-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../styles/fonts/SpartanMB-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../styles/fonts/SpartanMB-SemiBold.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../styles/fonts/SpartanMB-Thin.otf',
      weight: '100',
      style: 'normal'
    },
  ],
  variable: '--font-spartan'
})