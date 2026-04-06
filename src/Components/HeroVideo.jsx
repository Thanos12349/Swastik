import "../Styles/HeroVideo.css";

export default function HeroVideo() {
  return (
    <section className="hero-video">
      {/* Background Video */}
      <video
        className="hero-video-bg"
        src="https://swastikwellbeing.com/wp-content/uploads/2026/03/banner-slim.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
}