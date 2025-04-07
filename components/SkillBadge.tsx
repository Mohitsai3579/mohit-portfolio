import { motion } from "framer-motion";
import { FC } from "react";
import { Skill } from "@/data/skills";

const SkillBadge: FC<{ skill: Skill }> = ({ skill }) => (
  <motion.div
    className="flex items-center gap-3 bg-gradient-to-r from-purple-700 to-indigo-700 border border-purple-500/30 text-white px-5 py-3 rounded-xl shadow-lg backdrop-blur-sm hover:shadow-xl"
    whileHover={{ scale: 1.15, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 30, rotateX: -90 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
  >
    <i className={`${skill?.icon} text-2xl`} aria-hidden="true"></i>
    <span className="font-semibold tracking-wide">{skill?.name}</span>
  </motion.div>
);

export default SkillBadge;