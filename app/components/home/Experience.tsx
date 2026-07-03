"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { experience } from "@/app/components/data/experience";
import Timeline from "../common/Timeline";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Container>
        <motion.div variants={itemVariants}>
          <SectionTitle title="Experience" />
        </motion.div>

        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {experience.map((item) => (
            <motion.div key={item.company} variants={itemVariants}>
              <Timeline
                company={item.company}
                role={item.role}
                period={item.period}
                logo={item.logo}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}