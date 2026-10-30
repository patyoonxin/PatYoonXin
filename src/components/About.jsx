import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import codingPov from "../assets/coding-pov.png";

const skillGroups = [
  {
    title: "Languages & Web Technologies",
    skills: ["Java", "Python", "PHP", "JavaScript", "HTML", "Tailwind CSS"],
    accent: "from-violet-700 via-purple-500 to-indigo-600",
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Vue.js", "Laravel", "Spring Boot","Node.js", "Three.js"],
    accent: "from-indigo-600 via-violet-600 to-cyan-600",
  },
  {
    title: "Database",
    skills: ["MySQL"],
    accent: "from-purple-600 via-pink-500 to-violet-600",
  },
];

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.div
        variants={textVariant()}
        className="mt-12 grid grid-cols-1 gap-3 sm:gap-4 md:h-[36rem] md:min-h-[36rem] md:grid-cols-[0.9fr_1.1fr] md:grid-rows-3"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.15, 0.65)}
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative min-h-[24rem] overflow-hidden rounded-xl border border-white/10 bg-tertiary md:row-span-3 md:min-h-0"
        >
          <img
            src={codingPov}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full -translate-y-12 translate-x-24 scale-150 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="max-w-lg text-sm leading-6 text-secondary sm:text-base">
              I’m a Software Engineering student at UTM with a CGPA of 3.94, passionate about AI and full-stack development. Through hackathons and hands-on projects, I develop practical, AI-powered solutions to real-world problems. I’m eager to take on new technical challenges, collaborate with diverse teams, and turn innovative ideas into impactful applications.
            </p>
          </div>
        </motion.div>
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            variants={fadeIn("right", "spring", 0.15 * (index + 1), 0.65)}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group relative flex min-h-40 flex-col justify-center overflow-hidden rounded-xl border border-white/15 bg-[#1b1740] p-5 shadow-card transition-colors duration-300 hover:bg-[#241d52] sm:p-6 md:min-h-0"
          >
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 animate-gradient bg-gradient-to-r bg-[length:200%_auto] ${group.accent}`}
            />
            <div className="relative">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {group.title}
                </h3>
                <span className="shrink-0 text-xs font-medium tracking-[0.2em] text-[#aaa6c3]">
                  0{index + 1}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white bg-white px-3 py-1.5 text-xs font-medium text-black transition-colors duration-200 hover:border-[#b49aff]/70 hover:bg-black hover:text-white sm:text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
