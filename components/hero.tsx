import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative mx-auto mt-32 flex flex-col  w-screen z-100 gap-10">
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="group text-xs inline-flex items-center justify-center flex-nowrap rounded-full 
        border border-gray-200 bg-gray-950/10 px-3 py-1 transition-all hover:bg-gray-950/20 
        dark:border-gray-800 dark:bg-gray-50/10 dark:hover:bg-gray-50/20 w-fit">
          <AnimatedShinyText className="inline-flex items-center justify-center cursor-pointer
          transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Limited Time Offer</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      <div className="flex flex-col lg:gap-8 gap-6 items-center justify-center">
        <h1 className="bg-gradient-to-br dark:from-white leading-[56px] md:leading-[72px] lg:leading-[112px] text-center
        from-black from-30% dark:to-white/40 to-black/40 bg-clip-text  text-5xl font-medium tracking-tighter text-transparent text-balance sm:text-4xl md:text-6xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Your friendly<br />{" "}AI Wallpaper Destination
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-base md:text-lg lg:text-xl md:text-balance translate-y-[-1rem] leading-[32px] lg:leading-[40px] animate-fade-in opacity-0 [--animation-delay:400ms]">
          {`Utilize your AI subscriptions `}<br className="block sm:hidden" />{`to create wallpapers `}
          <br className="lg:hidden md:block sm:hidden"/>
          {`and share with others. `}<br className="lg:block md:hidden sm:block" />{` Or don't your wish.`}
        </p>
         
        <Link href='/explore'
          className="flex gap-1 w-fit items-center translate-y-[-1rem] animate-fade-in text-base md:text-xl text-white dark:text-black bg-black dark:bg-white opacity-0 ease-in-out [--animation-delay:600ms] px-4 py-2 rounded-2xl dark:hover:bg-white/80 hover:bg-black/80 hover:gap-5 transition-all duration-200 cursor-pointer"> 
            Explore
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" /> 
        </Link>


      </div> 
      </div>
    </div>
  );
}