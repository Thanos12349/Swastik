import "../Styles/Programs.css";

const programs = [
    {
        image: "https://swastikwellbeing.com/wp-content/uploads/2026/01/Healing-Programs.webp",
        title: "Wellness Programs",
    },
    {
        image: "https://swastikwellbeing.com/wp-content/uploads/2026/01/Healing-Programs.webp",
        title: "Healing Programs",
    },
    {
        image: "https://swastikwellbeing.com/wp-content/uploads/2026/01/Healing-Programs.webp",
        title: "Wellness Holiday",
    },
];

export default function Programs() {
    return (
        <section className="programs">
            <h2 className="programs-title">❦ Programs ❦</h2>

            <div className="programs-container">
                {programs.map((item, index) => (
                    <div className="program-card" key={index}>
                        <div className="image-wrapper">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <p className="program-title">{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="text-container">
                <p>
                    Nestled in the serenity of Peacock Valley, Pune, Swastik Wellbeing Sanctuary is a luxury wellness destination where ancient wisdom meets modern science. We combine advanced diagnostics with integrated Ayurveda, naturopathy, yogic, oriental, and energy-healing practices to deliver measurable, lasting transformation.
 </p>
                   <p> This is a sanctuary where seekers meet masters, a space designed for those ready to move beyond surface level wellness into genuine healing and sustainable vitality. Our approach is authentic, purposeful, and results focused, helping you rejuvenate, restore balance, and thrive from within.
               </p>
            </div>
        </section>
    );
}