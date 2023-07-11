"use client";

import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import { styles } from "@/app/styles";
import { github, link } from "@/app/assets";
import { SectionWrapper } from "@/hoc";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  index: number;
  project: {
    name: string;
    description: string;
    tags: {
      name: string;
      color: string;
    }[];
    image: StaticImageData;
    source_code_link: string;
    web_url: string;
  };
};

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        transitionSpeed={450}
        className="h-full relative bg-tertiary rounded-2xl flex flex-col w-full justify-between gap-1 p-2 sm:p-4"
      >
        <figure className="grid place-items-center w-full">
          <Image
            width={340}
            height={230}
            className="rounded-2xl"
            src={project.image}
            alt="Project Image"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-image_hover gap-2">
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                width={20}
                height={20}
                src={github}
                alt="Github"
                className="hover:scale-105"
              />
            </div>
            <div
              onClick={() => window.open(project.web_url, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                width={20}
                height={20}
                src={link}
                alt="Website link"
                className="hover:scale-105 rounded-full"
              />
            </div>
          </div>
        </figure>
        <h2 className="text-sm sm:text-md md:text-lg font-bold mt-2">
          {project.name}
        </h2>
        <p className="text-secondary text-xs sm:text-base md:text-md">
          {project.description}
        </p>
        <p className="flex text-xs md:text-sm flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag.name} className={`${tag.color} text-xs mr-1`}>
              #{tag.name}
            </span>
          ))}
        </p>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText}`}>What I make</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full h-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-xs sm:text-sm md:text-base lg:text-md max-w-3xl leading-8"
        >
          Following are a few projects out of my project basket that shines out.
          <span className="hidden sm:inline">
            I have dedicated my time and effort in constantly learning
            technologies and upgrading my project list.
          </span>{" "}
          These projects reflect my versatile nature when it comes to frontend
          development and also my familarity with backend development.
          <span className="hidden sm:inline">
            I hope you will like this, have fun using few of these projects as
            per your liking.
          </span>
        </motion.p>

        <div className="mt-20 w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              project={{ ...project }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
