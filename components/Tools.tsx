'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCertificate } from 'react-icons/fa';

const Experience: FC = () => (
  <section
    id="experience"
    className="max-w-5xl mx-auto py-20 px-6 md:px-10 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-xl shadow-2xl"
  >
    <motion.h2
      className="text-4xl font-extrabold text-center text-white mb-12 flex justify-center items-center gap-3"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <FaBuilding className="text-purple-400" /> Professional Experience
    </motion.h2>

    <motion.ul
      className="space-y-6 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {[
        {
          company: 'Biztron Softech',
          link: 'https://drive.google.com/file/d/1EEZgcHp5Lhct_0dOU9kMhknsBghwz7ee/view?usp=drive_link'
        },
        {
          company: 'Edubot Technologies',
          link: 'https://drive.google.com/file/d/18rha846uGnu7suMhvqurVRLF18AHQ-oQ/view?usp=sharing'
        },
        {
          company: 'SSIT Solutions',
          link: 'https://drive.google.com/file/d/1lYoPZlDYXZzrNva-zWPqnJsTbxmxBugC/view?usp=sharing'
        }
      ].map((exp, index) => (
        <motion.li
          key={index}
          className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow hover:scale-105 transition-transform duration-300 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="flex items-center gap-4">
            <FaCertificate className="text-teal-300 text-2xl" />
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-purple-300 hover:underline"
            >
              {exp.company}
            </a>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  </section>
);

export default Experience;