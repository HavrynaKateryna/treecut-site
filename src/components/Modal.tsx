import { useEffect } from "react";
import type { ReactNode } from "react";

import {
  motion,
  AnimatePresence,
  type PanInfo,
} from "framer-motion";

import "../styles/modal.css";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ open, onClose, children }: Props) {
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      window.removeEventListener("keydown", handleEsc);

      const y = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, parseInt(y || "0") * -1);
    };
  }, [open, onClose]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 120) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          className="modal"
          onClick={(e) => e.stopPropagation()}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 40 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <div className="modal-handle" />
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
