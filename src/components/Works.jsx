import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

/* ---------- Single Project Section ---------- */
const ProjectSection = ({ project, index }) => {
  const isEven = index % 2 === 0;

  const colors = [
    { blob: "bg-fuchsia-600", accent: "fuchsia" },
    { blob: "bg-violet-600", accent: "violet" },
    { blob: "bg-purple-600", accent: "purple" },
    { blob: "bg-pink-600", accent: "pink" },
  ];
  const color = colors[index % colors.length];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 flex items-center justify-center px-4 sm:px-6 relative"
    >
      {/* Background Blob */}
      <div
        className={`absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 ${
          color.blob
        } ${isEven ? "left-[-20%]" : "right-[-20%]"}`}
      />

      {/* Secondary Blob */}
      <div
        className={`absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 bg-cyan-500 ${
          isEven ? "right-[10%] top-[20%]" : "left-[10%] bottom-[20%]"
        }`}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div
          className={`flex flex-col ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-12 lg:gap-16 items-center`}
        >
          {/* Image Section */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="relative group">
              {/* Decorative Frame */}
              <div
                className={`absolute -inset-4 bg-gradient-to-r from-${color.accent}-500/20 to-transparent rounded-3xl blur-xl`}
              />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[350px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Project Number - Large */}
                <div className="absolute top-6 left-6">
                  <span className="text-8xl sm:text-[150px] font-black text-white/5 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Category Badge on Image */}
                {project.category && (
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white lg:hidden">
                      {project.name}
                    </h3>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.source_code_link && (
                        <motion.a
                          href={project.source_code_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/30 transition-all"
                        >
                          <FaGithub className="text-xl text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 w-full lg:w-1/2 lg:py-8 flex flex-col gap-6">
            {/* Title - Desktop */}
            <h3 className="hidden lg:block text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag.name}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    boxShadow: "0 10px 30px -10px rgba(217, 70, 239, 0.3)",
                  }}
                  className={`px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium ${tag.color} hover:border-${color.accent}-500/50 transition-all cursor-default`}
                >
                  {tag.name}
                </motion.span>
              ))}
            </div>

            {/* CTA Button */}
            {project.documentation_link && (
              <div className="pt-2">
              <motion.a
                // Redirect to parkflow page
                href="/ParkFlow"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -15px rgba(217, 70, 239, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-${color.accent}-500 to-violet-500 rounded-xl font-semibold text-white transition-all group`}
              >
                View Project Details
                <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

/* ---------- Works Section ---------- */
const Works = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col justify-center px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 text-secondary text-lg sm:text-xl max-w-3xl leading-relaxed"
        >
          These projects highlight my experience through real-world examples,
          showcasing my approach to problem-solving, architecture, and clean
          implementation.
        </motion.p>
      </div>

      {/* Projects */}
      {projects.map((project, index) => (
        <ProjectSection key={project.name} project={project} index={index} />
      ))}

      {/* End Section */}
      <div className="min-h-[40vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-500 text-lg mb-6">Want to see more?</p>
          <motion.a
            href="https://github.com/yasser-ms"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -15px rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-all"
          >
            <FaGithub className="text-2xl" />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");