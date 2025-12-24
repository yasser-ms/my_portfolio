import React, { memo } from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

/* ---------- Utils ---------- */
const isMobile = typeof window !== "undefined" && window.innerWidth < 768

/* ---------- Tech Tag ---------- */
const TechTag = memo(({ name, color }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block px-3 py-1 rounded-full border border-white/20"
    >
      <span className={`text-[13px] font-medium ${color}`}>
        #{name}
      </span>
    </motion.span>
  )
})

/* ---------- Project Card ---------- */
const ProjectCard = memo(
  ({ index, name, description, tags, image, source_code_link }) => {
    const CardContent = (
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                loading="lazy"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[22px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-4">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechTag
              key={tag.name}
              name={tag.name}
              color={tag.color}
            />
          ))}
        </div>
      </div>
    )

    return (
      <motion.div
        variants={fadeIn("up", "spring", index * 0.15, 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {!isMobile ? (
          <Tilt
            options={{
              max: 20,
              scale: 1,
              speed: 300,
            }}
          >
            {CardContent}
          </Tilt>
        ) : (
          CardContent
        )}
      </motion.div>
    )
  }
)

/* ---------- Works Section ---------- */
const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects highlight my experience through real-world examples,
          showcasing my approach to problem-solving, architecture, and clean
          implementation.
        </motion.p>
      </div>

      <div className="mt-20 sm:py-16 py-6 flex flex-wrap gap-7 justify-center items-stretch">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")
