"use client";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "@/hoc";
import { technologies } from "@/constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 md:gap-8 lg:gap-10">
      {technologies.map((technology) => (
        <div
          className="h-16 w-16 md:w-22 md:h-22 lg:w-28 lg:h-28 "
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
