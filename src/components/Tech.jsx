import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What I have worked with
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Technology Stack.
        </h2>
      </motion.div>

      <div className="pt-2 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
