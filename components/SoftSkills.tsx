'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLightbulb, FaHandsHelping, FaComments } from 'react-icons/fa';

const SoftSkills: FC = () => (
  <section
    id="soft-skills"
    className="max-w-6xl mx-auto py-20 px-6 md:px-10 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-xl shadow-2xl"
  >
    <motion.h2
      className="text-4xl font-extrabold text-center text-white mb-12 flex justify-center items-center gap-4"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <FaBrain className="text-yellow-400" /> Soft Skills
    </motion.h2>

    <motion.ul
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white text-lg font-medium"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {[
        { icon: <FaComments />, text: 'Communication' },
        { icon: <FaHandsHelping />, text: 'Teamwork' },
        { icon: <FaBrain />, text: 'Adaptability' },
        { icon: <FaLightbulb />, text: 'Creativity' },
        { icon: <FaBrain />, text: 'Problem Solving' },
        { icon: <FaComments />, text: 'Leadership' },
        { icon: <FaHandsHelping />, text: 'Time Management' },
        { icon: <FaLightbulb />, text: 'Critical Thinking' },
      ].map((skill, index) => (
        <motion.li
          key={index}
          className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-white/10 flex items-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <span className="text-2xl text-teal-300">{skill.icon}</span>
          <span>{skill.text}</span>
        </motion.li>
      ))}
    </motion.ul>
  </section>
);

export default SoftSkills;