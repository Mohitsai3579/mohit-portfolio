'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';


const Resume: FC = () => (
  <section
    id="resume"
    className="max-w-6xl mx-auto py-20 px-6 md:px-10 bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#141e30] rounded-xl shadow-2xl text-center"
  >
    <motion.h2
      className="text-4xl font-extrabold text-white mb-10 flex justify-center items-center gap-3"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <FaFileDownload className="text-green-400" /> Resume
    </motion.h2>

    <motion.a
      href="/resume.pdf"
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
    >
      📄 Download Resume
    </motion.a>
    <p></p>
    <motion.div
      className="mt-12 bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <iframe
        src="/resume.pdf"
        className="w-full h-[600px]"
        title="Resume Preview"
      ></iframe>
    </motion.div>
  </section>
);

export default Resume;