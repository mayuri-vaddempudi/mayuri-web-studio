import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/fresh-clean-stockholm.css';

function FreshCleanStockholm() {
    const handleQuoteSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        alert('Thank you! This is a demo quote form.');
    };
    return (
        <>
            <Helmet>
                <title>Fresh & Clean Stockholm | Website Concept</title>
                <meta
                    name="description"
                    content="Demo website concept for a Stockholm cleaning company created by Mayuri Web Studio."
                />
            </Helmet>

            <main className="clean-demo">
                <div className="demo-bar">
                    <div className="clean-container demo-bar-inner">
                        <span>Website concept by Mayuri Web Studio</span>

                        <Link to="/portfolio" className="demo-back-link">
                            ← Back to Mayuri Web Studio
                        </Link>
                    </div>
                </div>
                <section className="clean-hero">
                    <div className="clean-container clean-hero-grid">
                        <div>
                            <p className="clean-label">Professional Cleaning in Stockholm</p>

                            <h1>
                                A Cleaner Home.
                                <span> More Time for You.</span>
                            </h1>

                            <p className="clean-hero-text">
                                Reliable home and office cleaning services with simple pricing,
                                flexible bookings and friendly local service.
                            </p>

                            <div className="clean-hero-actions">
                                <a href="#quote" className="clean-primary-btn">
                                    Request a Free Quote
                                </a>

                                <a href="#services" className="clean-secondary-btn">
                                    View Services
                                </a>
                            </div>

                            <div className="clean-trust-row">
                                <span>✓ Flexible booking</span>
                                <span>✓ Trusted service</span>
                                <span>✓ Stockholm area</span>
                            </div>
                        </div>

                        <div className="clean-hero-card">
                            <p>Fresh & Clean Stockholm</p>
                            <h2>Simple cleaning. Reliable results.</h2>

                            <div className="clean-hero-card-list">
                                <span>Home Cleaning</span>
                                <span>Office Cleaning</span>
                                <span>Move-out Cleaning</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="clean-section">
                    <div className="clean-container">
                        <div className="clean-section-heading">
                            <p className="clean-label">Our Services</p>
                            <h2>Cleaning Services for Everyday Life</h2>
                            <p>
                                Flexible cleaning solutions for homes, offices and moving days.
                            </p>
                        </div>

                        <div className="clean-services-grid">
                            <article className="clean-service-card">
                                <span>01</span>
                                <h3>Home Cleaning</h3>
                                <p>
                                    Regular or one-time home cleaning adapted to your schedule
                                    and needs.
                                </p>
                            </article>

                            <article className="clean-service-card">
                                <span>02</span>
                                <h3>Office Cleaning</h3>
                                <p>
                                    Professional workplace cleaning that helps keep your office
                                    fresh and welcoming.
                                </p>
                            </article>

                            <article className="clean-service-card">
                                <span>03</span>
                                <h3>Move-out Cleaning</h3>
                                <p>
                                    Thorough cleaning support when you are moving from your home
                                    or apartment.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="clean-why-section">
                    <div className="clean-container">
                        <div className="clean-section-heading">
                            <p className="clean-label">Why Choose Us</p>
                            <h2>Simple, Friendly and Reliable</h2>
                        </div>

                        <div className="clean-why-grid">
                            <div>
                                <strong>Easy Booking</strong>
                                <p>Quick contact and flexible scheduling.</p>
                            </div>

                            <div>
                                <strong>Clear Pricing</strong>
                                <p>No complicated packages or hidden surprises.</p>
                            </div>

                            <div>
                                <strong>Local Service</strong>
                                <p>Focused on customers across the Stockholm area.</p>
                            </div>

                            <div>
                                <strong>Quality Focused</strong>
                                <p>Careful and consistent cleaning every visit.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="clean-pricing-section">
                    <div className="clean-container">
                        <div className="clean-section-heading">
                            <p className="clean-label">Simple Pricing</p>
                            <h2>Cleaning That Fits Your Needs</h2>
                        </div>

                        <div className="clean-pricing-grid">
                            <article className="clean-price-card">
                                <h3>Home Cleaning</h3>
                                <p>Perfect for regular household cleaning.</p>
                                <strong>From 399 SEK</strong>
                                <span>per visit</span>
                            </article>

                            <article className="clean-price-card featured">
                                <p className="clean-popular">Popular</p>
                                <h3>Recurring Cleaning</h3>
                                <p>Flexible weekly or bi-weekly cleaning.</p>
                                <strong>Custom Quote</strong>
                                <span>based on your home</span>
                            </article>

                            <article className="clean-price-card">
                                <h3>Move-out Cleaning</h3>
                                <p>Complete cleaning before handing over the property.</p>
                                <strong>From 1,499 SEK</strong>
                                <span>depending on size</span>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="quote" className="clean-quote-section">
                    <div className="clean-container clean-quote-card">
                        <div>
                            <p className="clean-label">Request a Quote</p>
                            <h2>Ready for a Cleaner Space?</h2>
                            <p>
                                Tell us what type of cleaning you need and we’ll get back to
                                you with a simple quote.
                            </p>
                        </div>

                        <form
                            className="clean-quote-form"
                            onSubmit={handleQuoteSubmit}
                        >
                            <input type="text" placeholder="Your name" />
                            <input type="email" placeholder="Email address" />

                            <select defaultValue="">
                                <option value="" disabled>
                                    Select service
                                </option>
                                <option>Home Cleaning</option>
                                <option>Office Cleaning</option>
                                <option>Move-out Cleaning</option>
                            </select>

                            <textarea
                                rows={5}
                                placeholder="Tell us what you need"
                            />

                            <button type="submit">
                                Request Quote
                            </button>
                        </form>
                    </div>
                </section>

                <section className="clean-demo-footer">
                    <div className="clean-container clean-demo-footer-inner">
                        <div>
                            <h3>Fresh & Clean Stockholm</h3>
                            <p>Demo website concept by Mayuri Web Studio.</p>
                        </div>

                        <Link to="/portfolio">
                            Back to Mayuri Web Studio Portfolio
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default FreshCleanStockholm;