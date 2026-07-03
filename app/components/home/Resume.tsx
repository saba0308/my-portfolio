"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Container from "../ui/Container";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      damping: 12,
      stiffness: 100,
    },
  },
};

const textVariants = {
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

export default function Resume() {
  return (
    <motion.section
      id="resume"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
    >

      <Container>

        <motion.div
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-16 text-center text-white"
          variants={itemVariants}
        >

          <motion.h2
            className="text-5xl font-bold"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            My Resume
          </motion.h2>

          <motion.p
            className="mt-6 text-xl"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >

            Download my latest resume to know more
            about my experience and skills.

          </motion.p>

          <motion.a
            href="/resume.pdf"
            download
            className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-semibold"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>

        </motion.div>

      </Container>

    </motion.section>
  );
}