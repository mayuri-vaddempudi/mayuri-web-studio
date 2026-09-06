import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/home.css';

function Home() {
    return (
        <>
            <Helmet>
                <title>
                    Mayuri Web Studio | Websites for Small Businesses in Sweden
                </title>

                <meta
                    name="description"
                    content="Mayuri Web Studio creates modern, responsive websites for small businesses in Sweden. Website development, redesign and maintenance services."
                />
            </Helmet>

            <main>
                {/* HERO */}
                <section className="hero">
                    <div className="hero-container">
                        <div className="hero-content">
                            <p className="hero-label">
                                Websites for small businesses in Sweden
                            </p>

                            <h1>
                                Professional Websites
                                <span>That Help Your Business Grow</span>
                            </h1>

                            <p className="hero-description">
                                Modern, mobile-friendly websites designed for local businesses
                                that want a stronger online presence and more customer
                                enquiries.
                            </p>

                            <div className="hero-actions">
                                <Link to="/contact" className="primary-btn">
                                    Get a Free Consultation
                                </Link>

                                <Link to="/portfolio" className="secondary-btn">
                                    View My Work
                                </Link>
                            </div>

                            <div className="hero-points">
                                <span>✓ Mobile friendly</span>
                                <span>✓ Fast loading</span>
                                <span>✓ Clear pricing</span>
                            </div>
                        </div>

                        {/* HERO WEBSITE PREVIEW */}
                        <div className="hero-visual">
                            <img
                                src="/images/home-hero.png"
                                alt="Mayuri Web Studio creating modern websites for small businesses"
                                className="hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="services-preview">
                    <div className="section-container">
                        <div className="section-heading">
                            <p className="section-label">Services</p>

                            <h2>
                                Everything You Need for a Strong Online Presence
                            </h2>

                            <p>
                                Simple, professional website solutions designed specifically
                                for small businesses.
                            </p>
                        </div>

                        <div className="service-grid">
                            <article className="service-card">
                                <div className="service-icon">⌘</div>

                                <h3>Website Development</h3>

                                <p>
                                    Modern, responsive websites built around your business
                                    goals, services and customers.
                                </p>

                                <Link to="/services">Learn more →</Link>
                            </article>

                            <article className="service-card">
                                <div className="service-icon">↻</div>

                                <h3>Website Redesign</h3>

                                <p>
                                    Give an old or outdated website a cleaner, faster and more
                                    professional experience.
                                </p>

                                <Link to="/services">Learn more →</Link>
                            </article>

                            <article className="service-card">
                                <div className="service-icon">⚙</div>

                                <h3>Maintenance & Support</h3>

                                <p>
                                    Optional ongoing support for content updates, fixes and
                                    website improvements after launch.
                                </p>

                                <Link to="/services">Learn more →</Link>
                            </article>

                            <article className="service-card">
                                <div className="service-icon">⌕</div>

                                <h3>SEO Basics</h3>

                                <p>
                                    Essential search-engine setup to help your business website
                                    become easier to discover online.
                                </p>

                                <Link to="/services">Learn more →</Link>
                            </article>
                        </div>

                        <div className="services-action">
                            <Link to="/services" className="secondary-btn">
                                View All Services
                            </Link>
                        </div>
                    </div>
                </section>

                {/* PORTFOLIO */}
                <section className="portfolio-preview">
                    <div className="section-container">
                        <div className="section-heading">
                            <p className="section-label">Portfolio</p>

                            <h2>Recent Website Concepts</h2>

                            <p>
                                A few example websites designed for small businesses and
                                local service companies.
                            </p>
                        </div>

                        <div className="portfolio-grid">
                            {/* CLEANING */}
                            <article className="portfolio-card">
                                <div className="portfolio-project-image">
                                    <img
                                        src="/images/fresh-clean.png"
                                        alt="Fresh & Clean Stockholm responsive cleaning website concept"
                                    />

                                    <span className="portfolio-image-badge">
                                        Live Demo
                                    </span>
                                </div>

                                <div className="portfolio-card-content">
                                    <span className="project-category">
                                        Cleaning Business
                                    </span>

                                    <h3>Fresh & Clean Stockholm</h3>

                                    <p>
                                        A modern and responsive website concept for a Stockholm
                                        cleaning company, designed to clearly present services and
                                        encourage customers to request a quote.
                                    </p>

                                    <Link
                                        to="/portfolio/fresh-clean-stockholm"
                                        className="portfolio-project-link"
                                    >
                                        View Demo →
                                    </Link>
                                </div>
                            </article>

                            {/* BEAUTY */}
                            <article className="portfolio-card">
                                <div className="portfolio-project-image">
                                    <img
                                        src="/images/nordic-beauty.png"
                                        alt="Nordic Beauty Studio responsive beauty salon website concept"
                                    />

                                    <span className="portfolio-image-badge portfolio-coming-badge">
                                        Coming Soon
                                    </span>
                                </div>

                                <div className="portfolio-card-content">
                                    <span className="project-category">
                                        Beauty & Wellness
                                    </span>

                                    <h3>Nordic Beauty Studio</h3>

                                    <p>
                                        An elegant and responsive website concept for a beauty studio,
                                        designed to showcase treatments, build trust and encourage
                                        appointment bookings.
                                    </p>

                                    <span className="portfolio-coming-soon">
                                        Demo Coming Soon
                                    </span>
                                </div>
                            </article>

                            {/* RESTAURANT */}
                            <article className="portfolio-card">
                                <div className="portfolio-project-image">
                                    <img
                                        src="/images/spice-house.png"
                                        alt="Spice House responsive restaurant website concept"
                                    />

                                    <span className="portfolio-image-badge portfolio-coming-badge">
                                        Coming Soon
                                    </span>
                                </div>

                                <div className="portfolio-card-content">
                                    <span className="project-category">
                                        Restaurant
                                    </span>

                                    <h3>Spice House</h3>

                                    <p>
                                        A warm and modern restaurant website concept designed to
                                        showcase dishes, present the menu and encourage customers
                                        to make a reservation.
                                    </p>

                                    <span className="portfolio-coming-soon">
                                        Demo Coming Soon
                                    </span>
                                </div>
                            </article>
                        </div>

                        <div className="portfolio-action">
                            <Link to="/portfolio" className="secondary-btn">
                                View All Projects
                            </Link>
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="process-section">
                    <div className="section-container">
                        <div className="section-heading">
                            <p className="section-label">How It Works</p>

                            <h2>A Simple Process From Idea to Launch</h2>

                            <p>
                                Clear communication, simple steps and no unnecessary
                                complexity.
                            </p>
                        </div>

                        <div className="process-grid">
                            <article className="process-card">
                                <div className="process-number">01</div>

                                <h3>Consultation</h3>

                                <p>
                                    We discuss your business, goals, customers and what you
                                    need from your website.
                                </p>
                            </article>

                            <article className="process-card">
                                <div className="process-number">02</div>

                                <h3>Planning</h3>

                                <p>
                                    I define the structure, pages, content and overall
                                    direction before development begins.
                                </p>
                            </article>

                            <article className="process-card">
                                <div className="process-number">03</div>

                                <h3>Design & Development</h3>

                                <p>
                                    Your website is designed and developed with responsive
                                    layouts, clear content and modern styling.
                                </p>
                            </article>

                            <article className="process-card">
                                <div className="process-number">04</div>

                                <h3>Launch</h3>

                                <p>
                                    After your review and approval, the website is deployed
                                    and connected to your custom domain.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE ME */}
                <section className="why-section">
                    <div className="section-container why-container">
                        <div className="why-content">
                            <p className="section-label">Why Choose Me</p>

                            <h2>
                                Simple, Professional Websites Without the Complexity
                            </h2>

                            <p className="why-intro">
                                I focus on creating clear, modern websites that are easy
                                for your customers to use and easy for your business to
                                manage.
                            </p>

                            <div className="why-list">
                                <div className="why-item">
                                    <div className="why-icon">✓</div>

                                    <div>
                                        <h3>Direct Communication</h3>

                                        <p>
                                            You work directly with the developer building your
                                            website.
                                        </p>
                                    </div>
                                </div>

                                <div className="why-item">
                                    <div className="why-icon">✓</div>

                                    <div>
                                        <h3>Transparent Pricing</h3>

                                        <p>
                                            Clear project scope and pricing before development
                                            begins.
                                        </p>
                                    </div>
                                </div>

                                <div className="why-item">
                                    <div className="why-icon">✓</div>

                                    <div>
                                        <h3>Responsive Design</h3>

                                        <p>
                                            Your website works smoothly across mobile, tablet
                                            and desktop.
                                        </p>
                                    </div>
                                </div>

                                <div className="why-item">
                                    <div className="why-icon">✓</div>

                                    <div>
                                        <h3>Optional Support</h3>

                                        <p>
                                            You can choose ongoing website support after your
                                            site is launched.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="why-visual">
                            <div className="why-card">
                                <div className="why-card-header">
                                    <span>Mayuri Web Studio</span>
                                    <span>Sweden</span>
                                </div>

                                <div className="why-stat">
                                    <strong>Modern</strong>
                                    <span>Clean and professional design</span>
                                </div>

                                <div className="why-stat">
                                    <strong>Responsive</strong>
                                    <span>Designed for every screen size</span>
                                </div>

                                <div className="why-stat">
                                    <strong>Reliable</strong>
                                    <span>Simple development and deployment</span>
                                </div>

                                <div className="why-stat">
                                    <strong>Focused</strong>
                                    <span>Built around your business goals</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* TESTIMONIALS */}
                <section className="testimonials">
                    <div className="section-container">
                        <div className="section-heading">
                            <p className="section-label">Client Feedback</p>

                            <h2>What Clients Say</h2>

                            <p>
                                Feedback from businesses I’ve worked with.
                            </p>
                        </div>

                        <div className="testimonial-grid">
                            <article className="testimonial-card">
                                <div className="testimonial-stars">★★★★★</div>

                                <p className="testimonial-text">
                                    “Mayuri was easy to work with and created a clean,
                                    professional website that works well on mobile.”
                                </p>

                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">
                                        <span>M</span>
                                    </div>

                                    <div>
                                        <strong>Client Name</strong>
                                        <span>Business Name</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                {/* FINAL CTA */}
                <section className="final-cta">
                    <div className="section-container final-cta-container">
                        <div>
                            <p className="section-label">
                                Ready to Get Started?
                            </p>

                            <h2>
                                Let’s Build a Website That Works for Your Business
                            </h2>

                            <p>
                                Tell me about your business and what you need. I’ll help
                                you choose a simple and practical website solution.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="final-cta-btn"
                        >
                            Get a Free Consultation
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;