import React from 'react'
import { styles } from '../styles'
import { Tilt } from 'react-tilt' 
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import {services} from '../constants' 
import { gd_resume } from '../assets'
import  SectionWrapper  from "../hoc/SectionWrapper";

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("left", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img
              src={icon}
              alt={title}
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Main content container with text on left and cards on right */}
      <div className="mt-4 flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Text Content - Left Side */}
        <div className="flex-1 lg:order-1 order-1">
          <motion.p
            variants={fadeIn("right", "", 0.1, 1)}
            className="text-secondary text-[17px] leading-[30px]"
          >
            I am a passionate full stack developer currently in my 4th year, pursuing a degree in Computer Science and Engineering at Shri Ram Murti Smarak College of Engineering and Technology, affiliated with Dr. A.P.J. Abdul Kalam Technical University.
            <br />
            My current SCGPA is <span className="font-semibold text-white">8.5</span>.
            <br />
            I specialize in building scalable and efficient web applications, with a strong interest in integrating cutting-edge technologies such as Artificial Intelligence and Blockchain.
            <br />
            I thrive on solving real-world challenges and enjoy working collaboratively to create impactful digital solutions.
            <br />
            In addition to my academic and technical pursuits, I proudly serve as the Zest Organizing Secretary (ZOS) of Tyro, the official club of our college, where I actively contribute to organizing events and fostering a culture of innovation.
          </motion.p>
          
          {/* Download button */}
          <motion.a
            variants={fadeIn("right", "", 0.2, 1)}
            href={gd_resume} // Use the imported resume file
            download
            className="inline-block mt-6 bg-tertiary text-white px-6 py-3 rounded-lg font-bold shadow-md border-2 border-transparent green-pink-gradient-border cursor-pointer"
            style={{
              transition: 'all 0.3s ease-in-out'
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </div>

        {/* Cards Section - Right Side in 2x2 grid */}
        <div className="flex-shrink-0 lg:order-2 order-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[520px]">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");