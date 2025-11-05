"use client";
import { ImgPopUp } from "@/components/img_popup";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { TypingAnimation } from "@/components/ui/typing-animation"
import { useImagePopupStore } from "../store";

export default function Explore() {
  const { isOpen } = useImagePopupStore();
  
  return (
  <div>
    <div className="font-sans grid grid-rows items-center justify-items-center min-h-screen 
    dark:bg-black bg-white overflow-y-scroll no-scrollbar pt-20">
      <h2 className="inline-block bg-gradient-to-br dark:from-white text-center 
          from-black from-30% dark:to-white/40 to-black/40 bg-clip-text pt-12 
          text-2xl font-medium tracking-tighter text-transparent md:text-balance 
            md:text-4xl lg:text-6xl translate-y-[-1rem] animate-fade-in opacity-0 
          [--animation-delay:200ms]">
          Explore Collection
      </h2>
      <ParallaxScroll images={images} />
        <TypingAnimation 
        className="inline-block bg-gradient-to-br dark:from-white text-center 
          from-black from-30% dark:to-white/40 to-black/40 bg-clip-text 
          text-md font-medium tracking-tighter text-transparent md:text-balance 
          md:text-xl lg:text-3xl my-10" startOnView>
            More Soon to Come
        </TypingAnimation>
    </div>
    
    { isOpen && <ImgPopUp  />}    
  </div>
)}

const images = [
  { title: "Grand Canyon", imgSrc: "/grandcanyon.png" },
  { title: "Bengal Tiger", imgSrc: "/bengaltiger.png" },
  { title: "Breath of the Wild", imgSrc: "/botw.png" },
  { title: "Iceland Black Beach", imgSrc: "/iceland-black-beach.png" },
  { title: "Metro", imgSrc: "/metro.jpg" },
  { title: "New York City", imgSrc: "/nyc.png" },
  { title: "Porsche", imgSrc: "/porsche.png" },
  { title: "Snow Landscape", imgSrc: "/snow.png" },
  { title: "Tea Plantation", imgSrc: "/teaplantation.png" },
  { title: "Mustang", imgSrc: "/mustang.png" },
  { title: "New York City Night", imgSrc: "/nyclit.png" },
  { title: "Hong Kong", imgSrc: "/hongkong.png" }
];
