import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white p-5 rounded-2xl h-full sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className='mt-6 flex gap-3'>
          {website_link && (
            <a
              href={website_link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex min-w-0 flex-1 items-center justify-center rounded-full bg-[#0f172a] px-3 py-4 text-[16px] font-semibold text-white shadow-lg transition-colors hover:bg-[#1e293b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              Website
            </a>
          )}
          {source_code_link && (
            <a
              href={source_code_link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-[#0f172a] px-3 py-4 text-[16px] font-semibold text-white shadow-lg transition-colors hover:bg-[#1e293b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              <img src={github} alt='' className='h-5 w-5' />
              GitHub
            </a>
          )}
        </div>

      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className='mt-10 flex justify-center'>
        <motion.a
          href='https://github.com/patyoonxin'
          target='_blank'
          rel='noopener noreferrer'
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className='flex items-center justify-center animate-bounce gap-2 rounded-full border border-white bg-[#0f172a] px-6 py-4 text-[16px] font-semibold text-white shadow-lg transition-colors hover:bg-[#1e293b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
        >
          <img src={github} alt='' className='h-5 w-5' />
          View More on GitHub
        </motion.a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");