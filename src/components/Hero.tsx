import { styles } from "@/app/styles";
import React from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${
          styles.paddingX ? styles.paddingX : "sm:px-16 px-6"
        } absolute inset-0 top-[120px] flex flex-row items-start gap-5 mx-w-7xl mx-auto`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-voilet" />
          <div className="w-1 sm:h-80 h-40  violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} mt-2 text-white-100`}>
            Hi, I&apos;m <span className="text-voilet">Jamil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications and web3 smart contracts
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
