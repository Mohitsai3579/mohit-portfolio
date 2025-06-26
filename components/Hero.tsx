import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

const Hero: FC = () => (
  <section
    id="hero"
    className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-black via-gray-900 to-purple-900"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={180}
        height={180}
        className="rounded-full mb-6 border-4 border-purple-500 shadow-lg"
      />
    </motion.div>

    <motion.h1
      className="text-4xl md:text-5xl font-bold text-white mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      Hi, I&apos;m Jonnadula Mohit Sai
    </motion.h1>

    <motion.div
      className="text-xl md:text-2xl text-gray-300 max-w-xl font-medium h-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: 1}}
    >
      <TypewriterLoop
        texts={[
          'B.Tech CSE Student @ LBRCE',
          'Tech Enthusiast',
          'Problem Solver',
          'Creative Thinker',
          'Team Player'
        ]}
        speed={10}
        pause={100}
        deleteSpeed={10}
      />
    </motion.div>

    <motion.div
      className="mt-6 flex flex-wrap gap-4 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <Link href="#contact">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          Contact Me
        </button>
      </Link>
      <Link href="/resume.pdf" target="_blank" download>
        <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          Download Resume
        </button>
      </Link>
    </motion.div>
  </section>
);

// Enhanced TypewriterLoop with deleting effect
const TypewriterLoop: FC<{
  texts: string[];
  speed?: number;
  pause?: number;
  deleteSpeed?: number;
}> = ({ texts, speed = 10, pause = 1500, deleteSpeed = 10 }) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentPhrase = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentPhrase.slice(0, prev.length + 1));
        if (displayedText === currentPhrase) {
          timeout = setTimeout(() => setIsDeleting(true), pause);
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, texts, currentTextIndex, speed, pause, deleteSpeed]);

  return (
    <p className="inline-block whitespace-nowrap">
      {displayedText}
      <span className="ml-1 text-white animate-blink">|</span>

    </p>
  );
};

export default Hero;
