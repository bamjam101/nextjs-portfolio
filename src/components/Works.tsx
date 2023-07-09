"use client";

import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import { styles } from "@/app/styles";
import { github } from "@/app/assets";
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
  };
};

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <Image fill src={project.image} alt="Project Image" />
          <div className="absolute inset-0 flex justify-end m-3 card-image_hover">
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
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="text-[14px] text-secondary mt-2">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
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
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following are a few projects out of my project basket that shines out.
          I have dedicated my time and effort in constantly learning
          technologies and upgrading my project list. It reflects my versatile
          nature when it comes to frontend development and also my familarity
          with backend development. I hope you will like this, have fun using
          few of these projects as per your liking.
        </motion.p>

        <div className="mt-20 flex justify-center items-center flex-wrap gap-4 md:gap-7">
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
