import { FC } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <motion.div
      className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform-gpu"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.03, rotate: 1 }}
    >
      <div className="relative">
        <img
          src={project?.image}
          alt={project?.title}
          className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      </div>

      <div className="p-6 text-white">
        <motion.h3
          className="text-2xl font-extrabold mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project?.title}
        </motion.h3>

        <motion.p
          className="text-sm text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {project?.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {project?.tech.map((t, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <div className="flex gap-6 text-sm font-semibold">
          {project?.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              🔗 Live
            </motion.a>
          )}
          <motion.a
            href={project?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            💻 GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
