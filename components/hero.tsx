import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative mx-auto mt-32 flex flex-col items-center justify-center w-screen z-100">
      <div className="group text-xs inline-flex items-center justify-center flex-nowrap rounded-full 
      border border-gray-200 bg-gray-950/10 px-3 py-1 transition-all hover:bg-gray-950/20 
      dark:border-gray-800 dark:bg-gray-50/10 dark:hover:bg-gray-50/20">
        <AnimatedShinyText className="inline-flex items-center justify-center cursor-pointer
        transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Limited Time Offer</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
      <h1 className="bg-gradient-to-br dark:from-white leading-[56px] lg:leading-[112px] text-center
      from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-8 lg:py-12 text-5xl font-medium tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Your friendly<br /> AI Wallpaper Destination
      </h1>
      <p className="mb-10 lg:mb-14 text-base text-center text-gray-400 md:text-2xl md:text-balance translate-y-[-1rem] leading-[32px] lg:leading-[40px] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Utilize your AI subscriptions to create wallpapers<br /> and share with others. Or don't your wish.
      </p>
      <Link
        href='/explore'
        className="flex gap-1 items-center translate-y-[-1rem] animate-fade-in text-base md:text-xl text-white dark:text-black bg-black dark:bg-white opacity-0 ease-in-out [--animation-delay:600ms] px-4 py-2 rounded-2xl dark:hover:bg-white/80 hover:bg-black/80 transition-all duration-200 cursor-pointer"
      >
        Explore
        <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Link>
    </div>
  );
}