import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl 
        mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Aavash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am full-stack developer. I develop frontend designs,{" "}
            <br className="sm:block hidden" />
            user interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Social Media Links */}
      <div className="absolute top-[80px] right-3 sm:top-[100px] sm:right-5 flex gap-2 sm:gap-4">
        <a
          href="https://www.linkedin.com/in/aavash-tamang-131a0a2b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white">
            <FaLinkedin size={16} />
          </div>
        </a>
        <a
          href="https://github.com/TAavash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#333] flex items-center justify-center text-white">
            <FaGithub size={16} />
          </div>
        </a>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
