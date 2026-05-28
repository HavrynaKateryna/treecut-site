import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="about__card">

          {/* TEXT */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2>Welcome to Tim’s Tree Service!</h2>

            <p>
              A family-owned company with over 8 years of experience in professional tree removal.
            </p>

            <p>
              We help homeowners safely and effortlessly handle any tree removal needs. From assessment to cleanup — everything is fully managed.
            </p>

            <p>
              We focus on reliability, precision, and safety using professional equipment and an experienced team.
            </p>

            <p>
              Every property is treated with care and respect as if it were our own.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="about__image"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <img src="/public/1.webp" alt="Our team" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}