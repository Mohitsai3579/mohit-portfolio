'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Certifications: FC = () => (
  <section
    id="certifications"
    className="max-w-6xl mx-auto py-20 px-6 md:px-10 bg-gradient-to-br from-[#1a1a2e] via-[#0f3460] to-[#1a1a2e] rounded-xl shadow-2xl"
  >
    <motion.h2
      className="text-4xl font-extrabold text-center text-white mb-12"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      Global Certifications
    </motion.h2>

    <ul className="space-y-6 text-gray-300 text-lg">
      <li>
        <a
          href="https://drive.google.com/file/d/1lYoPZlDYXZzrNva-zWPqnJsTbxmxBugC/view"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div
            className="flex items-center justify-between bg-white/10 border border-white/20 rounded-lg px-5 py-4 hover:scale-[1.02] transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white">
              AWS Cloud Practitioner Essentials (AWS Academy)
            </span>
            <FaExternalLinkAlt className="text-blue-400 hover:text-blue-300 ml-4 text-sm" />
          </motion.div>
        </a>
      </li>
    </ul>
    <motion.h2
      className="text-4xl font-extrabold text-center text-white mt-12 mb-12"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      Certifications
    </motion.h2>
    <ul className="space-y-6 text-gray-300 text-lg">
      <li>        
          <motion.div
            className="flex items-center justify-between bg-white/10 border border-white/20 rounded-lg px-5 py-4 hover:scale-[1.02] transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white">
              Cisco
            </span>
            
          </motion.div>        
      </li>
      <li>        
          <motion.div
            className="flex items-center justify-between bg-white/10 border border-white/20 rounded-lg px-5 py-4 hover:scale-[1.02] transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white">
              MongoDB
            </span>
            
          </motion.div>        
      </li>
      <li>        
          <motion.div
            className="flex items-center justify-between bg-white/10 border border-white/20 rounded-lg px-5 py-4 hover:scale-[1.02] transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            
            <span className="text-white">
              Java
            </span>
            
            
          </motion.div>        
      </li>
      <li>        
          <motion.div
            className="flex items-center justify-between bg-white/10 border border-white/20 rounded-lg px-5 py-4 hover:scale-[1.02] transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white ">
              Python
            </span>
            
          </motion.div>        
      </li>
    </ul>
  </section>
);

export default Certifications;
