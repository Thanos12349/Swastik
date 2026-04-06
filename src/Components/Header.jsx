import { useState } from "react";
import "../Styles/Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="Topheader">
            <header className="header">
                {/* Logo */}
                <div className="logo">
                    <img src="/logo.png" alt="logo" />
                    <div>
                        <h2>Swastik</h2>
                        <p>Luxury Wellbeing Sanctuary</p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    <a href="#">About</a>
                    <a href="#">Programs</a>
                    <a href="#">Wellness Holiday</a>
                    <a href="#">Spaces</a>
                    <a href="#">Nourishment</a>
                    <a href="#">Contact Us</a>

                    <button className="book-btn">Book Now</button>
                </nav>

                {/* Hamburger */}
                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

        </div>

    );
}