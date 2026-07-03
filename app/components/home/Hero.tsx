"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SocialIcons from "../ui/SocialIcons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      damping: 12,
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.05,
    rotate: 5,
    transition: {
      damping: 10,
      stiffness: 150,
    },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <Container>

        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          <div>
            <motion.h3
              className="text-blue-600 text-xl"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Hello, I'm
            </motion.h3>

            <motion.h1
              className="text-6xl font-bold mt-3"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Sabapathi P
            </motion.h1>

            <motion.h2
              className="text-3xl text-gray-600 dark:text-gray-300 mt-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              className="max-w-xl mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >

              Passionate Full Stack Developer with expertise in
              React, Angular, Node.js, TypeScript, AWS,
              and AI-powered applications.

            </motion.p>

                  <motion.div
                    className="mt-8"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                      <SocialIcons />
                  </motion.div>
          </div>

          <motion.div
            className="flex justify-center md:justify-end"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
              variants={imageVariants}
              whileHover="hover"
            >
              <Image
                src="/images/1775552035915.png"
                alt="Sabapathi P"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

        </motion.div>

      </Container>

    </section>
  );
}