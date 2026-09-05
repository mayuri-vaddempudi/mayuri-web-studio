import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <NavLink to="/" className="brand" onClick={closeMenu}>
                    <img
                        src="/favicon.png"
                        alt="Mayuri Web Studio"
                        className="brand-icon"
                    />

                    <div className="brand-text">
                        <span className="brand-name">Mayuri Web Studio</span>

                        <span className="brand-tagline">
                            Simple websites. Real growth.
                        </span>
                    </div>
                </NavLink>

                <button
                    className="menu-toggle"
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                    <NavLink
                        to="/"
                        end
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/services"
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to="/portfolio"
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Portfolio
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Contact
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className="mobile-cta"
                    >
                        Get a Free Consultation
                    </NavLink>
                </nav>

                <NavLink to="/contact" className="header-cta">
                    Get a Free Consultation
                </NavLink>
            </div>
        </header>
    );
}

export default Header;