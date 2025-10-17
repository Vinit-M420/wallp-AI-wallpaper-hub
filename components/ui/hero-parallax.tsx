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

export const HeroParallax = ({ wallpapers }: {
  wallpapers: {
    title: string;
    wallp: string;
  }[];
}) => {
  // Add safety check
  if (!wallpapers || wallpapers.length === 0) {
    return null;
  }

  const firstRow = wallpapers.slice(0, 6);
  const secondRow = wallpapers.slice(4, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Detect if the device is mobile based on window width
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

  // Conditionally apply horizontal translation based on isMobile
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -1000]),
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
    useTransform(scrollYProgress, [0, 0.2], isMobile ? [-500, 300] : [-700, 500]), // Adjusted for mobile
    springConfig
  );

  return (
    <div
      ref={ref}
      className={cn(
        "w-screen md:mt-10 mt-30 animate-fade-in opacity-0 [--animation-delay:400ms] px-8 pt-20",
        isMobile ? "h-[150vh]" : "h-[250vh]", // Reduced height for mobile to ensure scrolling
        "z-20 antialiased relative self-auto [perspective:1000px] [transform-style:preserve-3d]",
        isMobile && "overflow-x-clip" // Prevent horizontal scrolling on mobile
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
        <motion.div className={cn(
          "flex flex-row-reverse space-x-reverse mb-20",
          isMobile ? "space-x-10" : "space-x-20"
        )}>
          {firstRow.map((wallp) => (
            <ProductCard
              product={wallp}
              translate={translateX}
              key={wallp.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
        <motion.div className={cn(
          "flex flex-row",
          isMobile ? "space-x-10" : "space-x-20"
        )}>
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
        isMobile ? "w-[180px] h-[270px]" : "w-[260px] h-[390px]" // Smaller size on mobile
      )}
    >
      <img
        src={product.wallp}
        height={isMobile ? 270 : 390}
        width={isMobile ? 180 : 260}
        className="object-cover object-center absolute h-full w-full inset-0 group-hover/product:shadow-2xl"
        alt={product.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className={cn(
        "absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white",
        isMobile ? "text-sm" : "text-base" // Smaller text on mobile
      )}>
        {product.title}
      </h2>
    </motion.div>
  );
};