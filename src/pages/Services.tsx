import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/services.css';

function Services() {
    return (
        <>
            <Helmet>
                <title>Web Design Services | Mayuri Web Studio</title>

                <meta
                    name="description"
                    content="Affordable website development, redesign and maintenance services for small businesses in Sweden."
                />
            </Helmet>

            <main>
                {/* HERO */}
                <section className="services-hero">
                    <div className="services-hero-container">
                        <div>
                            <p className="section-label">Our Services</p>

                            <h1>Simple Website Solutions for Small Businesses</h1>

                            <p>
                                Professional, responsive websites designed to help your
                                business build trust, reach customers and grow online.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="services-page-section">
                    <div className="section-container">
                        <div className="service-list">

                            {/* STARTER WEBSITE */}
                            <article className="service-row">
                                <div className="service-row-icon">01</div>

                                <div className="service-row-content">
                                    <h2>Starter Website</h2>

                                    <p>
                                        A clean and professional one-page website for small
                                        businesses that need a simple and effective online
                                        presence.
                                    </p>

                                    <ul>
                                        <li>Professional one-page website</li>
                                        <li>Mobile responsive design</li>
                                        <li>Business introduction</li>
                                        <li>Services section</li>
                                        <li>Contact section and contact form</li>
                                        <li>Basic SEO setup</li>
                                        <li>Custom domain setup</li>
                                    </ul>
                                </div>

                                <div className="service-row-price">
                                    <span>Starting from</span>

                                    <strong>3,500 SEK</strong>

                                    <Link to="/contact" className="service-row-btn">
                                        Get Started
                                    </Link>
                                </div>
                            </article>

                            {/* BUSINESS WEBSITE */}
                            <article className="service-row">
                                <div className="service-row-icon">02</div>

                                <div className="service-row-content">
                                    <h2>Business Website</h2>

                                    <p>
                                        A complete multi-page website for businesses that need
                                        more space to present their company, services and contact
                                        information professionally.
                                    </p>

                                    <ul>
                                        <li>4–5 professionally designed pages</li>
                                        <li>Home, About, Services and Contact pages</li>
                                        <li>Mobile responsive design</li>
                                        <li>Contact form</li>
                                        <li>Google Maps integration</li>
                                        <li>Basic SEO setup</li>
                                        <li>Custom domain setup</li>
                                    </ul>
                                </div>

                                <div className="service-row-price">
                                    <span>Starting from</span>

                                    <strong>6,000 SEK</strong>

                                    <Link to="/contact" className="service-row-btn">
                                        Get Started
                                    </Link>
                                </div>
                            </article>

                            {/* WEBSITE REDESIGN */}
                            <article className="service-row">
                                <div className="service-row-icon">03</div>

                                <div className="service-row-content">
                                    <h2>Website Redesign</h2>

                                    <p>
                                        Give your existing website a fresh and modern look while
                                        improving usability, mobile responsiveness and the overall
                                        customer experience.
                                    </p>

                                    <ul>
                                        <li>Modern responsive layout</li>
                                        <li>Improved user experience</li>
                                        <li>Improved content structure</li>
                                        <li>Performance improvements</li>
                                        <li>Updated styling and visual design</li>
                                        <li>Basic SEO review</li>
                                    </ul>
                                </div>

                                <div className="service-row-price">
                                    <span>Starting from</span>

                                    <strong>6,000 SEK</strong>

                                    <Link to="/contact" className="service-row-btn">
                                        Get Started
                                    </Link>
                                </div>
                            </article>

                            {/* MAINTENANCE */}
                            <article className="service-row">
                                <div className="service-row-icon">04</div>

                                <div className="service-row-content">
                                    <h2>Maintenance & Support</h2>

                                    <p>
                                        Optional ongoing support to keep your website updated,
                                        working smoothly and looking professional after launch.
                                    </p>

                                    <ul>
                                        <li>Minor text and image updates</li>
                                        <li>Basic technical support</li>
                                        <li>Website health checks</li>
                                        <li>Small fixes</li>
                                        <li>General website assistance</li>
                                    </ul>
                                </div>

                                <div className="service-row-price">
                                    <span>Starting from</span>

                                    <strong>400 SEK/month</strong>

                                    <Link to="/contact" className="service-row-btn">
                                        Get Started
                                    </Link>
                                </div>
                            </article>

                        </div>
                    </div>
                </section>

                {/* INCLUDED */}
                <section className="included-section">
                    <div className="section-container">
                        <div className="section-heading">
                            <p className="section-label">Included</p>

                            <h2>Every Website Includes the Essentials</h2>

                            <p>
                                Every website is built with the important foundations needed
                                for a professional online presence.
                            </p>
                        </div>

                        <div className="included-grid">
                            <div className="included-item">
                                <span>✓</span>
                                <h3>Mobile Responsive</h3>
                            </div>

                            <div className="included-item">
                                <span>✓</span>
                                <h3>SEO Basics</h3>
                            </div>

                            <div className="included-item">
                                <span>✓</span>
                                <h3>Fast Loading</h3>
                            </div>

                            <div className="included-item">
                                <span>✓</span>
                                <h3>Contact Form</h3>
                            </div>

                            <div className="included-item">
                                <span>✓</span>
                                <h3>Custom Domain Setup</h3>
                            </div>

                            <div className="included-item">
                                <span>✓</span>
                                <h3>Basic Security Setup</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="services-cta">
                    <div className="section-container services-cta-container">
                        <div>
                            <p className="section-label">Need Something Different?</p>

                            <h2>Let’s Find the Right Solution for Your Business</h2>

                            <p>
                                Every business is different. Tell me what you need and I’ll
                                recommend a practical website solution for your business.
                            </p>
                        </div>

                        <Link to="/contact" className="final-cta-btn">
                            Get a Free Consultation
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Services;