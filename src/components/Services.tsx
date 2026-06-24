import { useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";
import "../styles/services.css";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="services-section">

      <div className="container">

        <div className="services-header">
          <h2>Our Tree Services</h2>

          
        </div>


        <div className="services-grid">

          {services.map((s) => (

            <div key={s.id} className="service-card">


              {/* IMAGE */}
              <div className="service-image">
                <img 
                  src={s.image} 
                  alt={s.title}
                />
              </div>



              <div className="service-content">


                <div className="service-top">

                  <span className="service-number">
                    {s.number}
                  </span>


                  {s.tag && (
                    <span className="service-tag">
                      {s.tag}
                    </span>
                  )}

                </div>



                <h3>
                  {s.title}
                </h3>



                <p>
                  {s.description}
                </p>



                <div className="service-actions">


                  <button
                    className="service-btn"
                    onClick={() => navigate(`/services/${s.id}`)}
                  >
                    View details →
                  </button>



                  <a 
                    href="tel:+15596804185" 
                    className="service-call"
                  >
                    Call now
                  </a>


                </div>


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}