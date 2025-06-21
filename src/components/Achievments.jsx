import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import  SectionWrapper  from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { achievments } from "../constants";

const AchievmentsCard = ({
  index,
  title
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{title}</p>
    </div>
  </motion.div>
);

const Achievments = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Achievements... </p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {achievments.map((achievments, index) => (
          <AchievmentsCard key={achievments.title} index={index} {...achievments} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievments, "achievments");