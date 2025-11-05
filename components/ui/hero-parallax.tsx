"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";


export const HeroParallax = ({
  wallpapers,
}: {
  wallpapers: {
    title: string;
    wallp: string;
  }[];
}) => {
  const firstRow = wallpapers.slice(0, 6);
  const secondRow = wallpapers.slice(4, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Mobile breakpoint at 768px
      };
      handleResize(); // Check on mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );


  return (
    <div
      ref={ref}
      // className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      className={cn(
        "w-screen sm:mt-10 md:mt-30 mt-30 animate-fade-in opacity-0 [--animation-delay:400ms] px-8",
        isMobile ? "h-[200vh] pt-40 pb-0" : "lg:h-[250vh] h-[220vh] pt-40 pb-0",
        "z-20 antialiased relative self-auto [perspective:1000px] [transform-style:preserve-3d]",
        "overflow-x-clip"
      )}

      >
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((wallp) => (
            <ProductCard
              product={wallp}
              translate={translateX}
              key={wallp.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 space-x-20 ">
          {secondRow.map((wallp) => (
            <ProductCard
              product={wallp}
              translate={translateXReverse}
              key={wallp.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  isMobile,
}: {
  product: {
    title: string;
    wallp: string;
  };
  translate: MotionValue<number>;
  isMobile: boolean;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className={cn(
        "group/product relative shrink-0",
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl",
        isMobile ? "w-[180px] h-[270px]" : "w-[260px] h-[390px]"
      )}
    >
      <Image
        src={product.wallp}
        height={isMobile ? 270 : 390}
        width={isMobile ? 180 : 260}
        className="object-cover object-center absolute h-full w-full inset-0 group-hover/product:shadow-2xl"
        alt={product.title}
        // fill
        style={{ objectFit: "cover" }}
        priority={isMobile ? false : true}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className={cn(
          "absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white",
          isMobile ? "text-sm" : "text-base"
        )}
      >
        {product.title}
      </h2>
    </motion.div>
  );
};