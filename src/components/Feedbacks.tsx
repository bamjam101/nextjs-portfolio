"use client";

import { motion } from "framer-motion";

import { styles } from "@/app/styles";
import { fadeIn, textVariant } from "@/utils/motion";
import { testimonials } from "@/constants";
import Image from "next/image";
import { SectionWrapper } from "@/hoc";

type FeedbackCardProps = {
  index: number;
  testimonial: {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
  };
};

const FeedbackCard: React.FC<FeedbackCardProps> = ({ index, testimonial }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">&quot;</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">
          {testimonial.testimonial}
        </p>
        <div className="mt-4 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {testimonial.name}
            </p>
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>{" "}
              {testimonial.company}
            </p>
          </div>
          <Image
            src={testimonial.image}
            width={40}
            height={40}
            className="rounded-full"
            alt={`feedback-by-${testimonial.name}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>
            Statements of Encouragement.
          </h2>
        </motion.div>
      </div>
      <div
        className={`-mt-12 md:-mt-20 pb-14 flex justify-center items-center flex-wrap gap-3 md:gap-5`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            testimonial={{ ...testimonial }}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
