import "../styles/howItWorks.css";

const steps = [
  {
    number: "01",
    title: "Free Estimate",
    text: "Send us photos or schedule a free on-site estimate. We provide a fair price and the best solution.",
  },
  {
    number: "02",
    title: "Safe Tree Service",
    text: "Our team performs professional tree removal, trimming, palm care and emergency services.",
  },
  {
    number: "03",
    title: "Complete Cleanup",
    text: "We clean the area after every job. Firewood and logs can be left upon request.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section how-section"
    >
      <div className="container">
        <div className="how-header">
          <h2>How It Works</h2>
        </div>

        <div className="how-list">
          {steps.map((step) => (
            <div
              className="how-step"
              key={step.number}
            >
              <span className="how-number">
                {step.number}
              </span>

              <div className="how-content">
                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
