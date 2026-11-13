import { useRef } from "react";
import { motion } from "framer-motion";

import { leaderships } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { textVariant } from "../utils/motion";
import "./Leadership.css";

const Leadership = () => {
  const filmRef = useRef(null);

  const scrollFilm = (direction) => {
    if (!filmRef.current) return;

    filmRef.current.scrollBy({
      left: direction * filmRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Experiences beyond the classroom</p>
        <h2 className={styles.sectionHeadText}>Leadership &amp; Activities.</h2>
      </motion.div>

      <div className="leadership-heading">
        <div className="leadership-controls" aria-label="Leadership card controls">
          <button
            type="button"
            onClick={() => scrollFilm(-1)}
            aria-label="Scroll to previous leadership activities"
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <button
            type="button"
            onClick={() => scrollFilm(1)}
            aria-label="Scroll to next leadership activities"
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      <div className="leadership-film">
        <div
          ref={filmRef}
          className="leadership-film-track"
          role="region"
          aria-label="Leadership activities camera roll"
          tabIndex={0}
        >
          {leaderships.map((activity, index) => (
            <motion.article
              key={activity.title}
              variants={textVariant()}
              className="leadership-card"
              aria-labelledby={`leadership-title-${index}`}
            >
              <div className={`leadership-artwork artwork-${index % 4}`}>
                {activity.image && (
                  <img
                    className="leadership-card-image"
                    src={activity.image}
                    alt={`${activity.title} activity`}
                  />
                )}
                <span className="leadership-frame-label">
                  FIELD NOTE <span>{String(index + 1).padStart(2, "0")}</span>
                </span>
                <span className="leadership-artwork-caption">MOMENTS IN MOTION</span>
              </div>

              <div className="leadership-card-content">
                <p className="leadership-card-kicker">
                  ACTIVITY <span>{String(index + 1).padStart(2, "0")}</span>
                </p>
                <h3 id={`leadership-title-${index}`}>{activity.title}</h3>
                {activity.description && (
                  <p className="leadership-description">
                    {activity.description}
                  </p>
                )}

                {activity.key_contributions?.length > 0 && (
                  <div className="leadership-contributions">
                    <h4>My contributions</h4>
                    <ul>
                      {activity.key_contributions.map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activity.key_skills?.length > 0 && (
                  <ul
                    className="leadership-skills"
                    aria-label={`${activity.title} skills`}
                  >
                    {activity.key_skills.map((skill) => (
                      <li key={skill}>{skill.trim()}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <p className="leadership-scroll-hint">
        <span aria-hidden="true">&larr; &nbsp; &rarr;</span> Scroll to explore
        all {leaderships.length} moments
      </p>
    </>
  );
};

export default SectionWrapper(Leadership, "leadership");
