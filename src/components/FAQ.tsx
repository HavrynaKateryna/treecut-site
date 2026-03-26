import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

export default function FAQ() {
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
      q: "Do you clean up and remove debris after the job?",
      a: "Yes, upon request we provide cleanup, cutting, and removal of all wood and debris.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<
    number | null
  >(null);

  const toggle = (index: number) => {
    setOpenIndex(
      openIndex === index ? null : index,
    );
  };

  return (
    <section
      id="faq"
      className="section faq-section"
    >
      <h2>Questions & Answers</h2>

      <div className="faq">
        {data.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggle(index)}
              >
                {item.q}
                <span
                  className={`faq-icon ${isOpen ? "open" : ""}`}
                >
                  +
                </span>
              </button>

              <div
                className={`faq-answer ${isOpen ? "open" : ""}`}
              >
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
