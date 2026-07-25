import { useEffect, type ReactNode } from "react";

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

export default function Modal({
  open,
  onClose,
  children,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    /*
      Lock page scroll
      Mobile safe version
    */

    document.documentElement.style.overflow =
      "hidden";

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        handleEsc,
      );

      document.documentElement.style.overflow =
        "";

      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleDragEnd = (
    _: unknown,
    info: PanInfo,
  ) => {
    const shouldClose =
      info.offset.y > 120 && info.velocity.y > 0;

    if (shouldClose) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div
        className="modal-overlay"
        onClick={onClose}
      >
        <motion.div
          className="modal"
          onClick={(e) => e.stopPropagation()}
          drag="y"
          dragElastic={0.12}
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          onDragEnd={handleDragEnd}
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
            y: 40,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
        >
          <div className="modal-handle" />

          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
