import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ educationItem }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={educationItem.date}
      iconStyle={{ background: "#fff" }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={educationItem.icon}
            alt={educationItem.title}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">
          {educationItem.title}
        </h3>
        <p className="text-[16px] font-semibold text-secondary" style={{ margin: 0 }}>
          {educationItem.course}
        </p>
        {educationItem.cgpa && (
          <p className="mt-2 text-[14px] font-semibold text-white-100">
            CGPA: {educationItem.cgpa}
          </p>
        )}
      </div>

      <p className="mt-4 text-[14px] leading-relaxed tracking-wide text-white-100">
        {educationItem.details}
      </p>

      {educationItem.highlights?.length > 0 && (
        <ul className="ml-5 mt-4 list-disc space-y-2">
          {educationItem.highlights.map((highlight, index) => (
            <li
              key={`education-highlight-${index}`}
              className="pl-1 text-[14px] tracking-wider text-white-100"
            >
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My academic background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((educationItem) => (
            <EducationCard
              key={`${educationItem.title}-${educationItem.course}`}
              educationItem={educationItem}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
