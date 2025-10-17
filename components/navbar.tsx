"use client";
import { cn } from "@/lib/utils";
import { AlignJustify, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useLenis } from "lenis/react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface MenuItem {
  id: number;
  label: string;
  href: string;
}

const menuItem: MenuItem[] = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Pricing", href: "#pricing" },
  { id: 3, label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const lenis = useLenis();
  const pathname = usePathname();
  const hideHamburgerPaths = ["/explore", "/login"];
  const showHamburger = !hideHamburgerPaths.includes(pathname);

  const mobilenavbarVariant: Variants = {
    initial: { opacity: 0, scale: 1 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, delay: 0.2, ease: "easeOut" as const },
    },
  };

  const mobileLinkVar: Variants = {
    initial: { y: "-20px", opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  const containerVariants: Variants = {
    open: { transition: { staggerChildren: 0.06 } },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  const handleScroll = (href: string) => {
    if (lenis) {
      if (href === "#home") {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        lenis.scrollTo(href, { duration: 1.5 });
      }
    } else {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setHamburgerMenuIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[99] border-b dark:border-gray-800 border-gray-200 opacity-0 backdrop-blur-[12px] animate-fade-in">
        <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 flex h-[3.5rem] items-center justify-between dark:text-white text-black">
          <Link className="text-lg flex gap-2 items-center font-bold" href="/">
            <Image
              src="/wplogo-white.png"
              alt="wp"
              width={32}
              height={32}
              className="rounded-xl dark:block hidden"
              priority
            />
            <Image
              src="/wplogo.png"
              alt="wp"
              width={32}
              height={32}
              className="rounded-xl dark:hidden block"
              priority
            />
            <p>wallp</p>
          </Link>
          <div className="hidden md:flex gap-5 ml-auto h-full items-center">
            <Link
              href="/login"
              className="dark:bg-neutral-700 bg-neutral-300 rounded-2xl text-sm px-4 py-2 dark:hover:bg-neutral-700/80 hover:bg-neutral-300/80 transition-colors duration-200"
            >
              Log in
            </Link>
            <AnimatedThemeToggler className="size-6" />
          </div>
          {showHamburger && (
            <button
              className="ml-6 md:hidden flex"
              onClick={() => setHamburgerMenuIsOpen((open) => !open)}
              aria-label={hamburgerMenuIsOpen ? "Close menu" : "Open menu"}
            >
              {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
            </button>
          )}
        </div>
      </header>
      <AnimatePresence>
        {hamburgerMenuIsOpen && showHamburger && (
          <motion.nav
            key="mobile-nav"
            initial="initial"
            exit="exit"
            variants={mobilenavbarVariant}
            animate="animate"
            className={cn(
              "fixed left-0 top-0 z-[150] h-screen w-screen overflow-auto bg-background/70 backdrop-blur-[12px]"
            )}
          >
            <div className="container flex h-[3.5rem] items-center justify-between px-4 sm:px-6 lg:px-8">
              <Link className="text-lg flex gap-2 items-center font-bold" href="/">
                <Image
                  src="/wplogo-white.png"
                  alt="wp"
                  width={32}
                  height={32}
                  className="rounded-xl dark:block hidden"
                  priority
                />
                <Image
                  src="/wplogo.png"
                  alt="wp"
                  width={32}
                  height={32}
                  className="rounded-xl dark:hidden block"
                  priority
                />
                <p>wallp</p>
              </Link>
              <button
                className="ml-6 md:hidden"
                onClick={() => setHamburgerMenuIsOpen((open) => !open)}
                aria-label={hamburgerMenuIsOpen ? "Close menu" : "Open menu"}
              >
                {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
              </button>
            </div>
            <motion.ul
              className="flex flex-col uppercase ease-in"
              variants={containerVariants}
              initial="initial"
              animate="open"
            >
              {menuItem.map((item) => (
                <motion.li
                  variants={mobileLinkVar} // Apply mobileLinkVar
                  key={item.id}
                  className="border-grey-dark pl-6 py-1 border-b"
                >
                  <Link
                    className="hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:text-sm md:transition-colors"
                    href={item.href}
                    onClick={() => handleScroll(item.href)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={mobileLinkVar} // Apply mobileLinkVar to theme toggler
                className="border-grey-dark pl-6 py-0.5 border-b"
              >
                <AnimatedThemeToggler className="size-6" />
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
