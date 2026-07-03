"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import CertificateCard from "../common/CertificateCard";
import Slider from "../ui/Slider";

import { certifications } from "@/app/components/data/certifications";

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

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="py-24 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
    >

      <Container>

        <motion.div variants={itemVariants}>
          <SectionTitle title="Certifications" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Slider itemsPerView={1}>
            {certifications.map((certificate) => (

              <CertificateCard
                key={certificate.id}
                certificate={certificate}
              />

            ))}
          </Slider>
        </motion.div>

      </Container>

    </motion.section>
  );
}