"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useImagePopupStore } from '@/app/store';

export const ParallaxScroll = ({ images, className }: {
  images: { title: string; imgSrc: string; }[];
  className?: string;
}) => {
  const { setIsOpen, setImageSrc, setImageTitle } = useImagePopupStore();

  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      container: gridRef, // remove this if your container is not fixed height
      offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("h-fit items-start overflow-y-auto w-full animate-fade-in", className)}
        ref={gridRef}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 pt-10 pb-20 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Image
                src={el.imgSrc}
                className="h-fit w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
                height="400"
                width="400"
                alt={el.title}
                title={el.title}
                onClick={() =>{ setImageSrc(el.imgSrc); setImageTitle(el.title); setIsOpen(true);}}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el.imgSrc}
                className="h-fit w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
                height="400"
                width="400"
                alt={el.title}
                title={el.title}
                onClick={() =>{ setImageSrc(el.imgSrc); setImageTitle(el.title); setIsOpen(true);}}
              />
            </motion.div>
          ))}
        </div>
        <div className="lg:flex md:hidden sm:flex">
          <div className="grid gap-10">
            {thirdPart.map((el, idx) => (
              <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                <Image 
                  src={el.imgSrc}
                  className="h-fit w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
                  height="400"
                  width="400"
                  alt={el.title}
                  title={el.title}
                  onClick={() =>{ setImageSrc(el.imgSrc); setImageTitle(el.title); setIsOpen (true);}}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
   
    </div>
  );
};
