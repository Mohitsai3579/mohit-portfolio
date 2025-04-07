'use client'
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Languages from '@/components/Languages';
import Tools from '@/components/Tools';
import Resume from '@/components/Resume';
import Contact from '@/components/Conatct';
import SoftSkills from '@/components/SoftSkills';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import Copyright from '@/components/copyright';

import projects from '@/data/projects';
import skills from '@/data/skills';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white scroll-smooth">
        <Navbar />

        <motion.div id="hero" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          <Hero />
        </motion.div>

        <motion.section id="about" className="py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          <AboutMe />
        </motion.section>

        <motion.section id="skills" className="py-20 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          {skills.map((skill, i) => <SkillBadge key={i} skill={skill} />)}
        </motion.section>

        <motion.section id="projects" className="py-20 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          {projects.map((project, i) => <ProjectCard key={i} project={project} />)}
        </motion.section>

        <motion.section id="education" className="py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          <Education />
        </motion.section>

        <motion.section id="certifications" className="py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          <Certifications />
        </motion.section>

        <motion.section id="languages" className="py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          <Languages />
        </motion.section>

        <motion.section id="tools" className="py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          <Tools />
        </motion.section>

        <motion.section id="soft-skills" className="py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          <SoftSkills />
        </motion.section>

        <motion.section id="resume" className="py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          <Resume />
        </motion.section>

        <motion.section id="contact" className="py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          <Contact />
        </motion.section>

        <motion.section id="copyright" className="py-10 text-center text-sm text-gray-500" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants}>
          <Copyright />
        </motion.section>
      </main>
    </>
  );
}
