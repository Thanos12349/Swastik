import React from 'react';
import '../Styles/SwastikLiving.css';

const SwastikLiving = () => {

  const galleryImages = [
    { id: 1, src: 'https://swastikwellbeing.com/wp-content/uploads/2025/06/spaces-4.webp', size: 'large-v' }, 
    { id: 2, src: 'https://swastikwellbeing.com/wp-content/uploads/2025/06/spaces-2.webp', size: 'square' },
    { id: 3, src: 'https://swastikwellbeing.com/wp-content/uploads/2025/06/spaces-3.webp', size: 'large-h' }, 
    { id: 4, src: 'https://swastikwellbeing.com/wp-content/uploads/2025/06/spaces-1.webp', size: 'small' },
    { id: 5, src: 'https://swastikwellbeing.com/wp-content/uploads/2025/06/spaces-4.webp', size: 'small' },
    { id: 6, src: 'https://swastikwellbeing.com/wp-content/uploads/2025/06/spaces-1.webp', size: 'small' },
    { id: 7, src: 'https://swastikwellbeing.com/wp-content/uploads/2025/06/spaces-2.webp', size: 'square' },
    { id: 8, src: 'https://swastikwellbeing.com/wp-content/uploads/2025/06/spaces-3.webp', size: 'square' },
    { id: 9, src: 'https://swastikwellbeing.com/wp-content/uploads/2025/06/spaces-4.webp', size: 'large-v' },
  ];

  return (
    <section className="living-section">
      <div className="living-header">
        <h3 className="living-hashtag">#SwastikLiving</h3>
        <p className="living-subtitle">A journey through heart-crafted experiences</p>
      </div>

      <div className="living-grid">
        {galleryImages.map((img) => (
          <div key={img.id} className={`grid-item ${img.size}`}>
            <img src={img.src} alt={`Experience ${img.id}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SwastikLiving;