'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.title) {
      setStatus('❗ Please fill in all fields.');
      return;
    }

    setStatus('⏳ Sending...');

    emailjs
      .send(
        'service_f08xn0k',
        'template_r90znw1',
        formData,
        'Z-faruNTiuhbwsGE4'
      )
      .then(
        () => {
          setStatus('✅ Message sent successfully!');
          setFormData({ name: '', email: '', title: '', message: '' });
        },
        (error) => {
          console.error(error);
          setStatus('❌ Failed to send message.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto py-20 px-6 md:px-10 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-xl shadow-2xl text-white"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-10 text-center flex justify-center items-center gap-3"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <FaPaperPlane className="text-green-400" /> Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 bg-white/90 text-black rounded shadow"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-white/90 text-black rounded shadow"
        />
        <input
          type="text"
          name="title"
          placeholder="Subject Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 bg-white/90 text-black rounded shadow"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 bg-white/90 text-black rounded shadow"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold w-full transition-transform transform hover:scale-105 shadow-lg"
        >
          ✉️ Send Message
        </button>
        {status && <p className="mt-4 text-center font-medium text-green-300">{status}</p>}
      </motion.form>

      <motion.div
        className="mt-12 text-center text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-green-400" /> mohitjonnadula16@gmail.com
        </p>
        <p className="flex items-center justify-center gap-2 mt-2">
          <FaMapMarkerAlt className="text-green-400" /> Nuzvid, India
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;