import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"


export default function Navbar() {
    return (
    <div className="fixed top-0 left-0 right-0 z-[99] border-b dark:border-gray-800 border-gray-200 opacity-0 
          backdrop-blur-[12px] animate-fade-in">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-[3.5rem] items-center justify-between 
          dark:text-white text-black">
            <Link className="text-lg flex gap-2 items-center font-bold" href="/">
                  <Image src='/wplogo-white.png' alt="wp" width={32} height={32} className="rounded-xl"/>
                  <p>wallp</p>
            </Link>
         

            <div className="hidden md:flex gap-5 ml-auto h-full items-center">
              <Link href="/login" className="dark:bg-neutral-700 bg-neutral-300 rounded-2xl text-sm px-4 py-2
                    dark:hover:bg-neutral-700/80 hover:bg-neutral-300/80 transition-colors duration-200">
                Log in
              </Link>
              <AnimatedThemeToggler className="size-6" />

          </div>

         </div>
    </div>
    )
}