'use client';
import React from "react";
import Navbar from "@/components/navbar";
import "./globals.css";
import Hero  from "@/components/hero";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { wallpapers } from "@/components/wallpapers";
import { useRef } from "react";
import { OrbitingCirclesDemo } from "@/components/circles";
import { PricingSection } from "@/components/pricing";
import { SiteFooter } from "@/components/footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="font-sans grid grid-rows items-center justify-items-center min-h-screen dark:bg-black bg-white overflow-y-scroll no-scrollbar">
      <Navbar />
      <Hero />
      <HeroParallax wallpapers={wallpapers} />
      <OrbitingCirclesDemo />
      <PricingSection />
      <SiteFooter />
    </div>
  );
}

