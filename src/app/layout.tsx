/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext"; // Adjust path as needed
import {
  Roboto,
  Playfair_Display,
  Lato,
  Poppins,
  Ubuntu,
  Montserrat,
} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "Ife Oluwatosin Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" className="favicon"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans&family=Playfair+Display&family=Roboto&family=Lato:wght@400;700&family=Poppins:wght@400;600&family=Source+Sans+Pro:wght@400;600;700&family=Merriweather:wght@400;700&family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`scroll-smooth ${roboto.variable} ${playfair.variable} ${lato.variable} ${poppins.variable} ${montserrat.variable} ${ubuntu.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
