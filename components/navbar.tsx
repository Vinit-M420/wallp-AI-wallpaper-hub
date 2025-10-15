"use client";
import { cn } from "@/lib/utils";
import { AlignJustify, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { useState } from "react";
import lenis from "lenis";

const menuItem = [
  {
    id: 1,
    label: "Wallpapers",
    href: "#wallpapers",
  },
  {
    id: 2,
    label: "Pricing",
    href: "#pricing",
  },
  {
    id: 3,
    label: "Contact Us",
    href: "#contact",
  },
   {
    id: 4,
    label: "Theme",
    href: "#theme",
  },
];

export default function Navbar() {
  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const mobileLinkVar = {
    initial: {
      y: "-20px",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 right-0 z-[99] border-b dark:border-gray-800 border-gray-200 opacity-0 
          backdrop-blur-[12px] animate-fade-in">

         <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 flex h-[3.5rem] items-center justify-between 
          dark:text-white text-black">
            <Link className="text-lg flex gap-2 items-center font-bold" href="/">
            
                  <Image src='/wplogo-white.png' alt="wp" width={32} height={32} 
                  className="rounded-xl dark:block hidden"/>

                  <Image src='/wplogo.png' alt="wp" width={32} height={32} 
                  className="rounded-xl dark:hidden block"/>

                  <p>wallp</p>
            </Link>
         

            <div className="hidden md:flex gap-5 ml-auto h-full items-center">
              <Link href="/login" className="dark:bg-neutral-700 bg-neutral-300 rounded-2xl text-sm px-4 py-2
                    dark:hover:bg-neutral-700/80 hover:bg-neutral-300/80 transition-colors duration-200">
                  Log in
              </Link>
              <AnimatedThemeToggler className="size-6" />
            </div>

          <button
            className="ml-6 md:hidden flex"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)} >
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
          </button>

        </div>     
    </header>
    )}
