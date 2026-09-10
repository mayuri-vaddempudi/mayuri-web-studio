import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../styles/footer.css';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">
                    <h3>Mayuri Web Studio</h3>

                    <p>
                        {t('footer.description')}
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-column">
                    <h4>{t('footer.quickLinks')}</h4>

                    <Link to="/">
                        {t('footer.home')}
                    </Link>

                    <Link to="/services">
                        {t('footer.services')}
                    </Link>

                    <Link to="/portfolio">
                        {t('footer.portfolio')}
                    </Link>

                    <Link to="/about">
                        {t('footer.about')}
                    </Link>

                    <Link to="/contact">
                        {t('footer.contact')}
                    </Link>
                </div>

                {/* Services */}
                <div className="footer-column">
                    <h4>{t('footer.servicesTitle')}</h4>

                    <Link to="/services">
                        {t('footer.websiteDevelopment')}
                    </Link>

                    <Link to="/services">
                        {t('footer.websiteRedesign')}
                    </Link>

                    <Link to="/services">
                        {t('footer.maintenanceSupport')}
                    </Link>

                    <Link to="/services">
                        {t('footer.seoBasics')}
                    </Link>
                </div>

                {/* Contact */}
                <div className="footer-column">
                    <h4>{t('footer.contact')}</h4>

                    <p>{t('footer.location')}</p>

                    <a href="mailto:hello@mayuriwebstudio.se">
                        hello@mayuriwebstudio.se
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Mayuri Web Studio.{' '}
                    {t('footer.rights')}
                </p>

                <div className="footer-bottom-links">
                    <Link to="/privacy">
                        {t('footer.privacy')}
                    </Link>

                    <Link to="/terms">
                        {t('footer.terms')}
                    </Link>

                    <Link to="/cookies">
                        {t('footer.cookies')}
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;