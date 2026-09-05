import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>Mayuri Web Studio</h3>

                    <p>
                        Modern websites for small businesses in Sweden.
                        Simple, professional and built to support business growth.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>Quick Links</h4>

                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-column">
                    <h4>Services</h4>

                    <Link to="/services">Website Development</Link>
                    <Link to="/services">Website Redesign</Link>
                    <Link to="/services">Maintenance & Support</Link>
                    <Link to="/services">SEO Basics</Link>
                </div>

                <div className="footer-column">
                    <h4>Contact</h4>

                    <p>Stockholm, Sweden</p>
                    <a href="mailto:hello@mayuriwebstudio.se">
                        hello@mayuriwebstudio.se
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Mayuri Web Studio. All rights reserved.</p>

                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;