import React from 'react';
import '../Styles/Associations.css';

const Associations = () => {
  const partners = [
    {
      logo: "/path-to-svaram-logo.png",
      name: "SVARAM",
      description: "Musical Instruments and Research"
    },
    {
      logo: "/path-to-salt-cave-logo.png",
      name: "Salt Cave Asia",
      description: "Salt Therapy"
    },
    {
      logo: "/path-to-svyasa-logo.png",
      name: "S-VYASA",
      description: "Yoga Institute"
    },
    {
      logo: "/path-to-air-genomix-logo.png",
      name: "AIR Genomix",
      description: "Biotechnology Research"
    },
    {
      logo: "/path-to-nin-logo.png",
      name: "National Institute of Naturopathy",
      description: "National Institute of Naturopathy"
    }
  ];

  return (
    <section className="associations-section">
      <h2 className="associations-title">Our Associations</h2>
      
      <div className="associations-grid">
        {partners.map((partner, index) => (
          <div key={index} className="association-card">
            <div className="logo-container">
              <img src={partner.logo} alt={partner.name} />
            </div>
            <p className="association-desc">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Associations;