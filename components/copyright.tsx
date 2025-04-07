import { FC } from "react";
import { motion } from "framer-motion";
import { FaRegCopyright } from "react-icons/fa";

const Copyright: FC = () => (
  <motion.footer
    className="w-full text-center py-6 text-gray-400 text-sm border-t border-white/10 mt-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex justify-center items-center gap-2">
      <FaRegCopyright className="text-green-400" />
      {new Date().getFullYear()} <span className="font-medium">J Mohit Sai</span>. All rights reserved.
    </div>
  </motion.footer>
);

export default Copyright;
