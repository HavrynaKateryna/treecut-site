import { useEffect } from "react";
import type { ReactNode } from "react";
import "../styles/modal.css";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ open, onClose, children }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}