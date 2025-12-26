import React, { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

/* =======================
   Static styles (perf)
======================= */
const cardPerspective = { perspective: "1000px" };
const preserve3D = { transformStyle: "preserve-3d" };

/* =======================
   Service Card
======================= */
const ServiceCard = memo(
  ({ index, title, icon, image, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none)").matches;

    const handleMouseEnter = useCallback(() => {
      if (!isTouch) setIsFlipped(true);
    }, [isTouch]);

    const handleMouseLeave = useCallback(() => {
      if (!isTouch) setIsFlipped(false);
    }, [isTouch]);

    const handleClick = useCallback(() => {
      setIsFlipped((prev) => !prev);
    }, []);

    return (
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="xs:w-[250px] w-full h-[320px] cursor-pointer"
        style={cardPerspective}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <motion.div
          className="w-full h-full relative will-change-transform"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={preserve3D}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="bg-tertiary rounded-[20px] w-full h-full overflow-hidden">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="bg-tertiary rounded-[20px] w-full h-full flex flex-col items-center justify-center p-6">
              <img
                src={icon}
                alt={title}
                loading="lazy"
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="text-white text-[22px] font-bold text-center mb-3">
                {title}
              </h3>
              <p className="text-secondary text-[14px] text-center leading-[22px]">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
);

/* =======================
   Hint Message
======================= */
const HintMessage = memo(() => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="flex justify-center items-center gap-2 sm:gap-3 py-3 sm:py-4 px-4 sm:px-6 rounded-xl bg-tertiary/50 border border-white/10 w-fit mx-auto"
    >
      <motion.span
        animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-xl sm:text-2xl"
      >
        <span className="sm:hidden">👇</span>
        <span className="hidden sm:inline">👆</span>
      </motion.span>

      <span className="hidden sm:block text-white text-[14px] md:text-[16px] font-medium">
        Hover over the cards to discover what I do
      </span>

      <span className="sm:hidden block text-white text-[13px] xs:text-[14px] font-medium">
        Tap on cards to discover what I do
      </span>
    </motion.div>
  );
});

/* =======================
   About Section
======================= */
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m Yasser, a computer science student at CY Cergy Paris Université,
        based near Paris. I enjoy building software, learning by doing, and
        working on projects that solve real problems. I’m curious, hands-on,
        and motivated by meaningful challenges. My goal is to grow as a
        developer and contribute to products that actually make an impact.
      </motion.p>

      {/* Mobile hint */}
      <div className="sm:hidden mt-8 w-full py-6">
        <HintMessage />
      </div>

      {/* Cards */}
      <div className="mt-10 sm:py-16 py-6 flex flex-wrap gap-6 sm:gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Desktop hint */}
      <div className="hidden sm:block mt-12 w-full items-center">
        <HintMessage />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
