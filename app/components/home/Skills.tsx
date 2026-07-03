"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../common/SkillCard";
import Slider from "../ui/Slider";
import { skills } from "@/app/components/data/skills";

const containerVariants = {
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

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCategory = skills[activeTab];

  return (
    <motion.section
      id="skills"
      className="py-24 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Container>
        <motion.div variants={containerVariants}>
          <SectionTitle title="Skills" />
        </motion.div>

        <motion.div className="mt-10 flex flex-wrap gap-3" variants={containerVariants}>
          {skills.map((category, index) => (
            <button
              key={category.category}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`rounded-full px-5 py-2 transition ${
                index === activeTab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {category.category}
            </button>
          ))}
        </motion.div>

        <motion.div className="mt-10" variants={containerVariants}>
          <Slider itemsPerView={1}>
            {currentCategory.items.map((skill) => (
              <div key={skill.name} className="px-4">
                <SkillCard skill={skill} />
              </div>
            ))}
          </Slider>
        </motion.div>
      </Container>
    </motion.section>
  );
}