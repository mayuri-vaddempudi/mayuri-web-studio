import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../styles/header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { t, i18n } = useTranslation();

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const changeLanguage = (language: 'en' | 'sv') => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
        closeMenu();
    };

    return (
        <header className="header">
            <div className="header-container">

                <NavLink
                    to="/"
                    className="brand"
                    onClick={closeMenu}
                >
                    <img
                        src="/favicon.png"
                        alt="Mayuri Web Studio"
                        className="brand-icon"
                    />

                    <div className="brand-text">
                        <span className="brand-name">
                            Mayuri Web Studio
                        </span>

                        <span className="brand-tagline">
                            {t('header.tagline')}
                        </span>
                    </div>
                </NavLink>

                <button
                    className="menu-toggle"
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    onClick={() =>
                        setMenuOpen((prev) => !prev)
                    }
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav
                    className={`nav ${menuOpen ? 'nav-open' : ''
                        }`}
                >
                    <NavLink
                        to="/"
                        end
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        {t('header.home')}
                    </NavLink>

                    <NavLink
                        to="/services"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        {t('header.services')}
                    </NavLink>

                    <NavLink
                        to="/portfolio"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        {t('header.portfolio')}
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        {t('header.about')}
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? 'active' : ''
                        }
                    >
                        {t('header.contact')}
                    </NavLink>

                    <div className="mobile-language-switcher">
                        <button
                            type="button"
                            className={
                                i18n.language === 'en'
                                    ? 'language-active'
                                    : ''
                            }
                            onClick={() =>
                                changeLanguage('en')
                            }
                        >
                            EN
                        </button>

                        <span>|</span>

                        <button
                            type="button"
                            className={
                                i18n.language === 'sv'
                                    ? 'language-active'
                                    : ''
                            }
                            onClick={() =>
                                changeLanguage('sv')
                            }
                        >
                            SV
                        </button>
                    </div>

                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className="mobile-cta"
                    >
                        {t('header.consultation')}
                    </NavLink>
                </nav>

                <div className="header-actions">
                    <div className="language-switcher">
                        <button
                            type="button"
                            className={
                                i18n.language === 'en'
                                    ? 'language-active'
                                    : ''
                            }
                            onClick={() =>
                                changeLanguage('en')
                            }
                        >
                            EN
                        </button>

                        <span>|</span>

                        <button
                            type="button"
                            className={
                                i18n.language === 'sv'
                                    ? 'language-active'
                                    : ''
                            }
                            onClick={() =>
                                changeLanguage('sv')
                            }
                        >
                            SV
                        </button>
                    </div>

                    <NavLink
                        to="/contact"
                        className="header-cta"
                    >
                        {t('header.consultation')}
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;