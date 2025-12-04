"use client"; // This must be a Client Component

import { ParallaxProvider } from "react-scroll-parallax";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
