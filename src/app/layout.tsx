import type React from "react";
import type { Metadata } from "next";
import { Work_Sans, Poppins } from "next/font/google";

import "./globals.css";
import Header from "../components/global/header";
import Footer from "../components/global/footer";
import { Providers } from "./ScrollProvider";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose what your project needs
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Insight Hub - Technology, Business & Career Insights",
  description:
    "Discover in-depth articles on technology trends, business strategy, career development, education, and market analysis. Your trusted source for professional insights.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Header />
      <Providers>
        <body className={`font-sans antialiased`}>{children}</body>
      </Providers>
      <Footer />
    </html>
  );
}
