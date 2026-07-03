"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message Sent Successfully!");
      reset();
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-24 bg-slate-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">

        <motion.h2
          className="text-5xl font-bold text-center"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >

          <motion.input
            {...register("name")}
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border"
            variants={itemVariants}
          />

          <motion.input
            {...register("email")}
            placeholder="Email Address"
            className="w-full p-4 rounded-lg border"
            variants={itemVariants}
          />

          <motion.textarea
            {...register("message")}
            rows={6}
            placeholder="Message"
            className="w-full p-4 rounded-lg border"
            variants={itemVariants}
          />

          <motion.button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

        </motion.form>

      </div>
    </motion.section>
  );
}