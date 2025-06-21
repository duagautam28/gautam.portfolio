import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants"; // Fixed typo: achievments -> achievements

const AchievementsCard = ({
  index,
  title
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-6 sm:p-10 rounded-3xl w-full sm:w-[320px] min-h-[200px] flex flex-col justify-between'
  >
    <p className='text-white font-black text-[32px] sm:text-[48px] leading-none'>"</p>

    <div className='mt-2 sm:mt-1 flex-1 flex items-center'>
      <p className='text-white tracking-wider text-[16px] sm:text-[18px] leading-relaxed'>
        {title}
      </p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] w-full`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px] sm:min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Achievements...</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      
      <div className={`-mt-10 sm:-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-4 sm:gap-7 justify-center sm:justify-start`}>
        {achievements.map((achievement, index) => (
          <AchievementsCard 
            key={achievement.title || `achievement-${index}`} 
            index={index} 
            {...achievement} 
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements"); // Fixed typo: achievments -> achievements