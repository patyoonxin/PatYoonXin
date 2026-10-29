import { motion } from "framer-motion";
import { styles } from "../style";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p></motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
