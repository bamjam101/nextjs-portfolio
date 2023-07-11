"use client";

import { styles } from "@/app/styles";
import { motion } from "framer-motion";

import { hero } from "@/app/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] flex flex-row items-start gap-5 mx-w-7xl mx-auto`}
      >
        <div
          className={`${styles.paddingX} flex flex-col justify-center items-center mt-5`}
        >
          <div className="w-5 h-5 rounded-full bg-voilet" />
          <div className="w-1 sm:h-80 h-40  violet-gradient" />
        </div>

        <div>
          <h1 className={`font-black text-white  text-3xl mt-6 inline-block`}>
            Hi, I&apos;m{" "}
            <span
              className={`${styles.heroHeadText} text-voilet block overflow-hidden w-0 whitespace-nowrap border-r-2 border-white-100 animate-type-writer`}
            >
              Jamil
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I will join you on your venture and forge for you a series of
            undisputed endeavours.
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex flex-col justify-center items-center gap-8">
        <figure className="grid w-full h-full place-items-center p-2">
          <div className="relative w-[300px] h-[300px] sm:w-[385px] sm:h-[385px] md:w-[400px] md:h-[400px] rounded-full">
            <h3 className="absolute -left-6 md:-left-24 top-10 rounded-full h-10 w-30 z-10 flex items-center justify-center p-2 md:p-4 lg:p-6 bg-tertiary font-bold text-base md:text-lg lg:text-xl">
              Frontend Developer
            </h3>
            <h3 className="absolute -right-8 md:-right-32 top-56 rounded-full z-10 h-10 w-30 flex items-center justify-center p-2 md:p-4 lg:p-6 bg-tertiary font-bold text-base md:text-lg lg:text-xl">
              Backend Developer
            </h3>
            <Image
              src={hero}
              alt="Hero Image of Creator"
              className="rounded-full z-0 opacity-60 p-3 hover:opacity-75 border-t-2 border-white"
              fill
            />
          </div>
        </figure>
        <a href="#about">
          <div className="w-7 h-11 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
