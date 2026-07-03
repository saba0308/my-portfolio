"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

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

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
    >

      <Container>

        <motion.div variants={itemVariants}>
          <SectionTitle title="About Me" />
        </motion.div>

        <motion.p
          className="text-lg leading-9 text-gray-600 dark:text-gray-300"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >

          I'm Sabapathi P, a Full Stack Developer with
          experience building enterprise web applications
          using Angular, React, Node.js, TypeScript,
          AWS, DynamoDB, and AI technologies.

          I enjoy creating scalable systems,
          designing clean architectures,
          and solving complex engineering problems.

        </motion.p>

      </Container>

    </motion.section>
  );
}