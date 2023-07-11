"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "@/app/styles";
import { fadeIn, textVariant } from "@/utils/motion";
import { services } from "@/constants";
import Image from "next/image";
import { SectionWrapper } from "@/hoc";

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
        className="mt-4 text-secondary text-xs sm:text-sm md:text-base lg:text-md max-w-3xl leading-8"
      >
        {`Greeting! I am a full-stack web development aspirant. I have experience in full stack development.`}
        <br />
        {`🔖 I was recently a part of TEDxACE committe where I worked for developing the official website of TEDxACE 2022-23. It has been very fortunate for me to be promoted as co-organizer of the committee for 2023-24 edition because of my immense contribution.`}
        <br />
        <span className="hidden sm:inline">
          {`🧑‍💻 Experienced fullstack developer, specialized in MERN stack.`}
        </span>
        <br />
        {`🤝 Open to work and contribute in frontend specific projects.`} <br />
        {`💻 Currently, I am exploring Blockchain and Web3.`}
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
