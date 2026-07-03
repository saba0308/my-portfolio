import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/home/Hero";
import About from "@/app/components/home/About";
import Skills from "@/app/components/home/Skills";
import Experience from "@/app/components/home/Experience";
import Footer from "@/app/components/layout/Footer";
import Projects from "@/app/components/home/Projects";
import Certifications from "@/app/components/home/Certifications";
import Resume from "@/app/components/home/Resume";
import ScrollToTop from "@/app/components/layout/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Resume />
      <Footer />
      <ScrollToTop />
    </>
  );
}