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
            For over 8 years, our team has been providing professional tree removal and tree services for homeowners and businesses. During this time, we have safely completed 1,000+ tree removals and hundreds of residential and commercial projects, earning a reputation for reliable service, quality workmanship, and customer satisfaction.
          </p>

          <p>
            Our crew consists of 5 experienced professionals who specialize in tree removal, tree trimming, palm tree trimming, stump removal, emergency tree removal, and hazardous tree removal. Whether a tree is located near a home, fence, roof, power line, or another difficult area, we have the knowledge and equipment to complete the job safely and efficiently.
          </p>

          <p>
            We use professional-grade equipment, including chainsaws, climbing gear, Bobcat machinery, bucket trucks, and cranes when needed, allowing us to handle projects of any size.
          </p>
 
             <p>Safety is our highest priority. Every project is carefully planned to protect your property while delivering fast, reliable, and affordable tree services. After every job, we perform a complete cleanup, leaving your property clean and safe.</p>
              <p>
            If you're looking for a trusted tree service company that values honesty, professionalism, and quality, our team is ready to help.
          </p>
          <div className="about__stats">

            <div>8+ Years Experience</div>
            <div>1000+ Projects</div>
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