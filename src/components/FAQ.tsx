import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const data: FAQItem[] = [
    {
      q: "How much does tree removal cost?",
      a: "The price depends on the tree height, access conditions, and job complexity. An exact quote is provided after assessment.",
    },
    {
      q: "Do you provide on-site services?",
      a: "Yes, we offer on-site services and can perform all work at your location at a convenient time.",
    },
    {
      q: "Do I need to prepare the site before work?",
      a: "It is recommended to clear the area around the tree and remove any fragile or valuable items.",
    },
    {
      q: "How long does tree cutting take?",
      a: "On average, the job takes from 1 hour to several hours depending on the complexity and conditions.",
    },
    {
      q: "Do you clean up after the job?",
      a: "Yes, upon request we provide cleanup, cutting, and removal of all wood and debris.",
    },
    {
      q: "Are your services insured and safe?",
      a: "Yes, all work is fully insured and performed using professional equipment. Safety is always a priority.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section">

      <div className="container">

        <motion.h2
          className="faq-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Questions & Answers
        </motion.h2>

        <div className="faq">
          {data.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="faq-item">

                <button
                  className="faq-question"
                  onClick={() => toggle(index)}
                >
                  <span>{item.q}</span>
                  <span className={`chevron ${isOpen ? "open" : ""}`}>
                    ›
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="faq-answer-inner">
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}