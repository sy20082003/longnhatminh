"use client";

import { motion } from "framer-motion";

// Next.js sẽ tự động dùng file này cho MỌI route trong app/.
// Khác với layout.tsx, template.tsx được remount mỗi lần chuyển trang
// nên animation sẽ chạy lại đúng lúc người dùng click chuyển trang.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
