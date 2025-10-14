import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
    <div className="fixed top-0 left-0 right-0 z-[99] border-b border-gray-800 opacity-0 
          backdrop-blur-[12px] animate-fade-in">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-[3.5rem] items-center justify-between text-white">
            <div className="flex gap-2 items-center">
              <Image src='/wplogo-white.png' alt="wp" width={32} height={32} 
                className="rounded-xl"/>
                 <Link className="text-lg flex items-center font-bold" href="/">
                wallp
            </Link>
            </div>
         

            <div className="hidden md:flex ml-auto h-full items-center">
              <Link href="/login" className="bg-gray-700 rounded-2xl text-sm px-4 py-2">
                Log in
              </Link>
          </div>

         </div>
    </div>
    )
}