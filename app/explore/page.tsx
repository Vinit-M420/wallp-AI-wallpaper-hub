"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function Explore() {
  return (
  <div className="font-sans grid grid-rows items-center justify-items-center min-h-screen dark:bg-black bg-white overflow-y-scroll no-scrollbar mt-20">
    <h2 className="inline-block bg-gradient-to-br dark:from-white text-center 
        from-black from-30% dark:to-white/40 to-black/40 bg-clip-text pt-12 
        text-2xl font-medium tracking-tighter text-transparent md:text-balance 
          md:text-4xl lg:text-6xl translate-y-[-1rem] animate-fade-in opacity-0 
        [--animation-delay:200ms]">
        Explore Collection
    </h2>
    <ParallaxScroll images={images} />

     <h2 className="inline-block bg-gradient-to-br dark:from-white text-center 
        from-black from-30% dark:to-white/40 to-black/40 bg-clip-text pt-12 
        text-md font-medium tracking-tighter text-transparent md:text-balance 
        md:text-xl lg:text-3xl translate-y-[-1rem] animate-fade-in opacity-0 
        [--animation-delay:200ms] mb-10">More Soon to Come</h2>
  </div>
)}

const images = [
  "/grandcanyon.png",
  "/bengaltiger.png",
  "/botw.png",
  "/iceland-black-beach.png",
  "/metro.jpg",
  "/nyc.png",
  "/porsche.png",
  "/snow.png",
  "/teaplantation.png",
   "mustang.png",
   "/nyclit.png",
   "/hongkong.png"
  ];
