import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { ArrowRightIcon } from "lucide-react"


export default function Hero() {

    return (
        <div>
        <div className="text-xs inline-flex text-nowrap items-center justify-center flex-nowrap rounded-full">
            <AnimatedShinyText>✨ Explore Pro Plan</AnimatedShinyText>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 
                group-hover:translate-x-0.5" />
        </div>
        <h1 className="bg-gradient-to-br dark:from-white leading-[56px] lg:leading-[112px] from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-8 lg:py-12 text-5xl font-medium tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                Your friendly AI Wallpaper Destination
        </h1>
        <p className="mb-10 lg:mb-14 text-base text-gray-400 md:text-2xl md:text-balance translate-y-[-1rem] leading-[32px] lg:leading-[40px] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Utilize your AI subscriptions to create wallpapers and share with others. Or don't your wish.
        </p> 
        </div>

    )
}