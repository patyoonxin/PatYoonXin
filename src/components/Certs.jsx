import { motion } from "framer-motion";

import { styles } from "../style";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Certs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional development</p>
        <h2 className={styles.sectionHeadText}>My Certifications.</h2>
      </motion.div>

      <div className="mt-8 border-t border-white/10">
        {certificates.map((certificate, index) => (
          <motion.article
            key={certificate.title}
            variants={fadeIn("up", "spring", index * 0.1, 0.5)}
            className="flex flex-col gap-5 border-b border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-8"
          >
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {certificate.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-secondary">
                {certificate.company}
              </p>
              <ul
                aria-label={`${certificate.title} topics`}
                className="mt-2 flex flex-wrap gap-x-4 gap-y-1"
              >
                {certificate.tags.map((tag) => (
                  <li
                    key={`${certificate.title}-${tag}`}
                    className="text-xs text-[#c5a77b]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={certificate.credential_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read more about ${certificate.title}`}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#c5a77b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              View Credential ID
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M5 12h14m-6-6 6 6-6 6"
                />
              </svg>
            </a>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certs, "certs");
