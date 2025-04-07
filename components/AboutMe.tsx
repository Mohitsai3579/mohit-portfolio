'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutMe: FC = () => (
  <section
    id="about"
    className="max-w-6xl mx-auto py-20 px-6 md:px-10 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-xl shadow-2xl"
  >
    <motion.h2
      className="text-4xl font-extrabold text-center text-white mb-12"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      About Me
    </motion.h2>

    <motion.div
      className="flex flex-col md:flex-row items-center gap-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <Image
        src="/profile.jpg"
        alt="Jonnadula Mohit Sai"
        width={220}
        height={220}
        className="rounded-2xl border-4 border-purple-500 shadow-lg object-cover"
      />

      <div className="text-lg text-gray-300 leading-8 md:text-left text-center">
        <p>
          Hi! I&apos;m<strong className="text-purple-400">Jonnadula Mohit Sai</strong>, a
          passionate Computer Science student at <strong>LBRCE</strong> with a strong enthusiasm for
          problem solving, modern web development, and exploring emerging tech. I love building
          meaningful projects, collaborating with teams, and learning through hands-on experiences.
        </p>
        <p className="mt-4">
          My strengths include <span className="text-teal-300">adaptability</span>,{" "}
          <span className="text-teal-300">effective communication</span>, and{" "}
          <span className="text-teal-300">creative thinking</span>. I strive to push boundaries and
          bring ideas to life with clean code and polished UI.
        </p>
      </div>
    </motion.div>
  </section>
);

export default AboutMe;
