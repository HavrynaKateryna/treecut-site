import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about">

      <div className="container about__grid">

        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>About Tim’s Tree Service</h2>

          <p>
            Family-owned tree service company with 8+ years of experience.
          </p>

          <p>
            We specialize in safe tree removal, trimming, and emergency response
            for residential and commercial properties.
          </p>

          <p>
            Our focus is safety, speed, and leaving your property clean.
          </p>

          <div className="about__stats">

            <div>8+ Years Experience</div>
            <div>500+ Projects</div>
            <div>Licensed & Insured</div>

          </div>
        </motion.div>

        <motion.div
          className="about__image"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="/1.webp" alt="Tree service work" />
        </motion.div>

      </div>

    </section>
  );
}