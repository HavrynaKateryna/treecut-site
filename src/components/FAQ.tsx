import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useMemo, useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<
    number | null
  >(null);

  const data: FAQItem[] = useMemo(
    () => [
      {
        q: "How much does tree removal cost?",
        a: "The price depends on the tree size, location, and job complexity.",
      },
      {
        q: "Can I get a quote from photos?",
        a: "Yes. In most cases, photos are enough for a free estimate.",
      },
      {
        q: "Do you remove trees near houses or power lines?",
        a: "Yes. We safely remove trees in tight and difficult spaces.",
      },
      {
        q: "Do you provide emergency tree service?",
        a: "Yes. We remove storm-damaged and hazardous trees.",
      },
      {
        q: "How long does the job take?",
        a: "Most tree removal jobs are completed in one day.",
      },
      {
        q: "Do you clean up after the job?",
        a: "Yes. We remove branches and debris, leaving your property clean.",
      },
    ],
    [],
  );

  const toggle = (index: number) => {
    setOpenIndex((prev) =>
      prev === index ? null : index,
    );
  };

  return (
    <section
      id="faq"
      className="section faq-section"
    >
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
              <div
                key={index}
                className="faq-item"
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>

                  <span
                    className={`chevron ${isOpen ? "open" : ""}`}
                  >
                    ›
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{
                        maxHeight: 0,
                        opacity: 0,
                      }}
                      animate={{
                        maxHeight: 300,
                        opacity: 1,
                      }}
                      exit={{
                        maxHeight: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      style={{
                        overflow: "hidden",
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
