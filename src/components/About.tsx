export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__text">
          <h2>
            Why Homeowners Choose Tim's Tree
            Service
          </h2>

          <p>
            For more than 8 years, Tim's Tree
            Service has provided safe, reliable,
            and professional tree removal,
            trimming, stump grinding, and
            emergency tree services for homeowners
            and businesses. Every project is
            completed with attention to safety,
            quality, and customer satisfaction.
          </p>

          <p>
            Our experienced crew uses professional
            equipment, including cranes, bucket
            trucks, climbing gear, chainsaws, and
            Bobcat machinery to safely handle
            projects of any size. From the first
            cut to the final cleanup, we treat
            every property with care and respect.
          </p>

          <div className="about__stats">
            <div>✓ Licensed & Insured</div>

            <div>✓ 1000+ Projects Completed</div>

            <div>✓ Professional Equipment</div>

            <div>✓ Complete Cleanup</div>
          </div>
        </div>

        <div className="about__image">
          <img
            src="/1.webp"
            alt="Tim's Tree Service crew working"
          />
        </div>
      </div>
    </section>
  );
}
