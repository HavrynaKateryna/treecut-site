import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  q: string;
  a: string;
};

export default function FAQ() {
  const ref = useRef<HTMLElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [active, setActive] = useState(false);

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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(false);

          requestAnimationFrame(() => {
            setActive(true);
          });
        } else {
          setActive(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className={`faq-section ${active ? "active" : ""}`}
      ref={ref}
    >
      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Questions & Answers
        </motion.h2>

        <div className="faq">
          {data.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                animate={active ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(index)}
                >
                  <span>{item.q}</span>
                  <span className={`chevron ${isOpen ? "open" : ""}`}>
                    ›
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 28,
                      }}
                    >
                      <div className="faq-answer-inner">
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}