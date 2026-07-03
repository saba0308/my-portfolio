"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../common/ProjectCard";
import Slider from "../ui/Slider";
import { projects } from "@/app/components/data/projects";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-24 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
    >
      <Container>

        <motion.div variants={itemVariants}>
          <SectionTitle title="Featured Projects" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Slider itemsPerView={1}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </Slider>
        </motion.div>

      </Container>
    </motion.section>
  );
}