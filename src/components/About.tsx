"use client";

import { styles } from "@/app/styles";
import { services } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: any;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // @ts-ignore
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 h-auto md:min-h-[280px] flex flex-row gap-5 md:gap-0 md:justify-evenly items-center md:flex-col"
        >
          <Image src={icon} alt={title} height={64} width={64} />
          <h3 className="text-white text-[14px] md:text-[20px] font-bold md:text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed space-y-4"
      >
        <span className="block mb-4">
          {`I'm a full-stack software engineer with experience in building scalable, production-grade systems across web and mobile platforms. From backend infrastructure to frontend user interfaces, I focus on delivering impactful digital solutions that are both maintainable and user-friendly.`}
        </span>
        <span className="block mb-4">
          {`As a former Web Lead at TEDxACE and GDSC, I’ve actively mentored developers and led technical initiatives in fast-paced, team-driven environments.`}
        </span>
        <span className="hidden sm:block mb-4">
          {`Currently working as a Senior Backend Developer at Bartergram, I contribute across the stack—architecting APIs, building internal tools, and deploying real-world apps.`}
        </span>
        <span className="block">
          {`I’m open to collaborating on forward-thinking projects, especially where thoughtful design meets robust engineering.`}
        </span>
      </motion.p>

      <div className="mt-20 flex justify-center items-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
