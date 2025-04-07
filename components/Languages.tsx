'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAsia, FaLanguage } from 'react-icons/fa';

const Languages: FC = () => (
  <section
    id="languages"
    className="max-w-5xl mx-auto py-20 px-6 md:px-10 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-xl shadow-2xl"
  >
    <motion.h2
      className="text-4xl font-extrabold text-center text-white mb-12 flex justify-center items-center gap-3"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <FaLanguage className="text-purple-400" /> Languages
    </motion.h2>

    <motion.ul
      className="grid sm:grid-cols-2 gap-6 text-white text-lg font-medium"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {[
        { name: 'Telugu', level: 'Native' },
        { name: 'English', level: 'Intermediate' },
        { name: 'Hindi', level: 'Intermediate' },
      ].map((lang, index) => (
        <motion.li
          key={index}
          className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="flex items-center gap-3">
            <FaGlobeAsia className="text-teal-300 text-xl" />
            <span className="text-white">{lang.name} – <span className="text-purple-300">{lang.level}</span></span>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  </section>
);

export default Languages;