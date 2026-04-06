import "../Styles/Spaces.css";

const spaces = [
  {
    image: "https://swastikwellbeing.com/wp-content/uploads/2026/01/Spaces-of-Anand-Vihar.webp",
    title: "Anand Vihar",
    desc: "Where happiness blooms in every corner",
  },
  {
    image: "https://swastikwellbeing.com/wp-content/uploads/2026/01/Spaces-of-Sukh-Vihar.webp",
    title: "Sukh Vihar",
    desc: "Where peace resides in nature’s womb",
  },
  {
    image: "https://swastikwellbeing.com/wp-content/uploads/2026/01/Spaces-of-Ayu-Vihar.webp",
    title: "Ayu Vihar",
    desc: "Where health and harmony reside",
  },
];

export default function Spaces() {
  return (
    <section className="spaces">
      
      <div className="spaces-header">
        <h2>Spaces at Swastik Wellbeing</h2>
        <button className="spaces-btn">Discover Spaces →</button>
      </div>

      <div className="spaces-container">
        {spaces.map((item, index) => (
          <div className="space-card" key={index}>
            <div className="space-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}