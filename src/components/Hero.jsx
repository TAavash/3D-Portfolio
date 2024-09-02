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
      <div className="absolute top-[80px] right-3 sm:top-[100px] sm:right-5 flex gap-3 sm:gap-5 z-10">
        <a
          href="/CV.pdf"
          download
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-opacity-80 transition ease-in-out duration-300"
        >
          cv
        </a>
        <a
          href="https://www.linkedin.com/in/aavash-tamang-131a0a2b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-opacity-80 transition ease-in-out duration-300"
        >
          <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href="https://github.com/TAavash"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-opacity-80 transition ease-in-out duration-300"
        >
          <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
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
