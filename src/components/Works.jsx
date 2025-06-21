import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link 
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full"
    >
      <Tilt
        options={{
          max: 25, // Reduced tilt for mobile stability
          scale: 1.02,
          speed: 450,
        }}
        className='bg-tertiary p-4 sm:p-5 rounded-2xl w-full max-w-[360px] mx-auto group shadow-lg'
      >
        <div className='relative w-full h-[200px] sm:h-[230px]'>
          <img
            src={image}
            alt={`${name} project screenshot`}
            className='w-full h-full object-cover rounded-2xl'
            loading="lazy"
          />

          {/* Button overlay - clean design */}
          <div className='absolute inset-0 flex justify-between items-start p-3 opacity-0 group-hover:opacity-100 sm:transition-opacity duration-300'>
            {/* Live link button */}
            {live_link && (
              <button
                onClick={() => window.open(live_link, "_blank")}
                className='bg-black/90 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-white transition-colors duration-200 shadow-lg'
                aria-label={`View live demo of ${name}`}
              >
                <img
                  src={live}
                  alt='live demo'
                  className='w-1/2 h-1/2 object-contain'
                />
              </button>
            )}
            
            {/* GitHub link button */}
            {source_code_link && (
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className='bg-black/90 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-white transition-colors duration-200 shadow-lg'
                aria-label={`View source code of ${name}`}
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </button>
            )}
          </div>
        </div>

        <div className='mt-4 sm:mt-5'>
          <h3 className='text-white font-bold text-[20px] sm:text-[24px] leading-tight'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed'>
            {description}
          </p>
        </div>

        <div className='mt-3 sm:mt-4 flex flex-wrap gap-2'>
          {tags && tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className='mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 place-items-center'>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard 
              key={project.name || `project-${index}`} 
              index={index} 
              {...project} 
            />
          ))
        ) : (
          <div className="col-span-full text-center text-secondary py-12">
            <p>No projects to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "project"); // Fixed: "project" -> "projects"