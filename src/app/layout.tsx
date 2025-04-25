/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext"; // Adjust path as needed
import { Roboto, Playfair_Display, Lato, Poppins, Ubuntu, Montserrat } from "next/font/google";

// Font definitions using Next.js built-in font optimization
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
  variable: "--font-montserrat",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
});

// Metadata for SEO
export const metadata = {
  title: "Ife Oluwatosin Portfolio",
  description: "The portfolio of Ife Oluwatosin, a front-end developer specializing in Next.js, React, and TypeScript.",
  keywords: "front-end developer, Next.js, React, portfolio, web development",
  author: "Ife Oluwatosin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* SEO meta tags */}
        <meta name="description" content="The portfolio of Ife Oluwatosin, a front-end developer specializing in Next.js, React, and TypeScript." />
        <meta name="author" content="Ife Oluwatosin" />
        <meta name="keywords" content="front-end developer, Next.js, React, portfolio, web development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" className="favicon" />
        
        {/* Preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        
        {/* Inline the fonts using next/font */}
        <style>{`
          :root {
            --font-playfair: ${playfair.variable};
            --font-roboto: ${roboto.variable};
            --font-lato: ${lato.variable};
            --font-poppins: ${poppins.variable};
            --font-montserrat: ${montserrat.variable};
            --font-ubuntu: ${ubuntu.variable};
          }
        `}</style>
      </head>
      <body className="scroll-smooth">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
