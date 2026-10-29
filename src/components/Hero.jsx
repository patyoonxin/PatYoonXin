import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { textVariant } from "../utils/motion";
const Hero = () => {
  return (
    <motion.section
      variants={textVariant()}
      initial="hidden"
      animate="show"
      className="relative mx-auto min-h-screen w-full"
    >
      <div
        className={`relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 pb-12 pt-28 sm:px-16 sm:pt-32 lg:flex-row lg:items-center lg:gap-5 lg:py-32`}
      >
        <div className="flex items-start gap-5 lg:flex-1 lg:-translate-y-12">
          <div className="mt-5 flex shrink-0 flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915eff]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>

          <div className="min-w-0">
            <h1 className={styles.heroHeadText}>
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                Pat Yoon Xin
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2`}>
              AI-Driven Software Engineer || <br className="hidden sm:block" />
              Turning Innovative Ideas into Intelligent Solutions
            </p>
          </div>
        </div>

        <ComputersCanvas />
      </div>
    </motion.section>
  );
};

export default Hero;
