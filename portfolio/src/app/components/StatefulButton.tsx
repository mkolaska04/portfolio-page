"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuLoaderCircle } from "react-icons/lu";

type Props = {
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function StatefulButton({
  type = "button",
  disabled = false,
  className = "",
  children,
}: Props) {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (disabled) {
      setIsProcessing(true);
    } else {
      setIsProcessing(false);
    }
  }, [disabled]);

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={`w-fitrelative flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isProcessing ? (
          <motion.span
            key="processing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <motion.span className="animate-spin">
              <LuLoaderCircle size={18} />
            </motion.span>
            Sending...
          </motion.span>
        ) : (
          <motion.span
            key="default"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
