import { FC } from 'react';
import { motion } from 'framer-motion';

const educationItems = [
  {
    title: 'B.Tech in CSE',
    subtitle: 'LBRCE, 2022–2026 (GPA: 8.05)',
  },
  {
    title: 'Intermediate (MPC)',
    subtitle: 'Siddhartha Jr. College, 2020–2022 (85%)',
  },
  {
    title: '10th Standard',
    subtitle: 'Kumar Concept School, 2020 (100%)',
  },
];

const Education: FC = () => (
  <section id="education" className="max-w-4xl mx-auto py-16 px-4">
    <motion.h2
      className="text-3xl font-bold mb-12 text-center text-white"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      🎓 Education
    </motion.h2>

    <motion.ul
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
        hidden: {},
      }}
    >
      {educationItems.map((item, idx) => (
        <motion.li
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white rounded-lg p-5 border border-purple-500 shadow-lg hover:shadow-purple-500/50 hover:scale-[1.02] transition-transform duration-300"
        >
          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
          <p className="text-gray-200">{item.subtitle}</p>
        </motion.li>
      ))}
    </motion.ul>
  </section>
);

export default Education;