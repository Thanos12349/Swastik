import { useState } from "react";
import "../Styles/Testimonials.css";

const reviews = [
    {
        name: "Anjali",
        time: "2 months ago",
        text: "Memorable Experience for a Lifetime. It was a great experience. The ambience is fantastic...",
    },
    {
        name: "Jasmine J.",
        time: "2 months ago",
        text: "Atma Namam 🙏 Our heartfelt thanks to the entire team for their support and service...",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [play, setPlay] = useState(false);

    const videoId = "https://www.youtube.com/watch?v=hNgI9E_-v24&list=RDhNgI9E_-v24&start_radio=1";

    const prev = () => {
        setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
    };

    const next = () => {
        setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));
    };

    return (
        <section className="testimonials">
            <h2 className="title">Testimonials</h2>

            <div className="testimonial-container">

                <div className="video-section">
                    {!play ? (
                        <div className="thumbnail" onClick={() => setPlay(true)}>
                            <img
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                alt="video"
                            />
                            <div className="play-btn">▶</div>
                        </div>
                    ) : (
                        <iframe
                            width="100%"
                            height="250"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                        ></iframe>
                    )}
                </div>
                <div className="rating-section">
                    <h3>EXCELLENT</h3>
                    <div className="stars">★★★★★</div>
                    <p>Based on <b>42 reviews</b></p>
                    <p className="brand">Tripadvisor</p>
                </div>

                {/* RIGHT: SLIDER */}
                <div className="review-section">
                    <button onClick={prev} className="testimonial-nav left">❮</button>

                    <div className="review-card">
                        <h4>{reviews[index].name}</h4>
                        <span>{reviews[index].time}</span>
                        <div className="stars small">★★★★★</div>
                        <p>{reviews[index].text}</p>
                    </div>

                    <button onClick={next} className="testimonial-nav right">❯</button>
                </div>

            </div>
        </section>
    );
}