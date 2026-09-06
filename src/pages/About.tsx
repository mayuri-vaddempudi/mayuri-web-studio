import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import '../styles/about.css';

function About() {
    return (
        <>
            <Helmet>
                <title>About | Mayuri Web Studio</title>

                <meta
                    name="description"
                    content="Learn more about Mayuri Web Studio, a Sweden-based web studio creating modern, responsive websites for small businesses."
                />
            </Helmet>

            <main>
                {/* HERO */}
                <section className="about-hero">
                    <div className="about-hero-container">
                        <div className="about-hero-content">
                            <p className="section-label">
                                About Mayuri Web Studio
                            </p>

                            <h1>
                                Websites Built with
                                <span> Your Business in Mind</span>
                            </h1>

                            <p>
                                I help small businesses in Sweden build a clear,
                                professional and trustworthy online presence
                                through modern, responsive websites.
                            </p>

                            <div className="about-hero-actions">
                                <Link
                                    to="/contact"
                                    className="about-primary-btn"
                                >
                                    Let's Work Together
                                </Link>

                                <Link
                                    to="/portfolio"
                                    className="about-secondary-btn"
                                >
                                    View My Work
                                </Link>
                            </div>
                        </div>

                        <div className="about-hero-visual">
                            <div className="about-profile-card">
                                <div className="about-avatar">
                                    M
                                </div>

                                <h2>Mayuri</h2>

                                <p className="profile-role">
                                    Frontend Developer & Web Designer
                                </p>

                                <div className="profile-divider" />

                                <div className="profile-detail">
                                    <span>Based in</span>
                                    <strong>Sweden</strong>
                                </div>

                                <div className="profile-detail">
                                    <span>Experience</span>
                                    <strong>Frontend Development</strong>
                                </div>

                                <div className="profile-detail">
                                    <span>Focus</span>
                                    <strong>Small Businesses</strong>
                                </div>

                                <div className="profile-detail">
                                    <span>Approach</span>
                                    <strong>Simple & Practical</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STORY */}
                <section className="about-story">
                    <div className="section-container about-story-container">
                        <div className="story-heading">
                            <p className="section-label">
                                My Story
                            </p>

                            <h2>
                                Technology Made Simple for Small Businesses
                            </h2>
                        </div>

                        <div className="story-content">
                            <p>
                                I'm a frontend developer with professional
                                experience building modern web applications
                                using Angular, React, TypeScript, HTML and CSS.
                            </p>

                            <p>
                                Through my development experience, I've seen how
                                important a clear and reliable website can be
                                for a business.
                            </p>

                            <p>
                                I started Mayuri Web Studio to help small
                                businesses get professional websites without
                                unnecessary technical complexity.
                            </p>

                            <p>
                                My goal is simple: understand your business,
                                identify what your customers need and create a
                                website that supports your business goals.
                            </p>
                        </div>
                    </div>
                </section>

                {/* VALUES */}
                <section className="about-values">
                    <div className="section-container">
                        <div className="section-heading">
                            <p className="section-label">
                                My Approach
                            </p>

                            <h2>
                                What Matters When Building Your Website
                            </h2>

                            <p>
                                A good website should be easy to understand,
                                easy to use and built around what your customers
                                actually need.
                            </p>
                        </div>

                        <div className="values-grid">
                            <article className="value-card">
                                <div className="value-number">
                                    01
                                </div>

                                <h3>Clear</h3>

                                <p>
                                    Visitors should quickly understand what your
                                    business offers and how to contact you.
                                </p>
                            </article>

                            <article className="value-card">
                                <div className="value-number">
                                    02
                                </div>

                                <h3>Professional</h3>

                                <p>
                                    Modern design that helps your business make
                                    a trustworthy first impression.
                                </p>
                            </article>

                            <article className="value-card">
                                <div className="value-number">
                                    03
                                </div>

                                <h3>Responsive</h3>

                                <p>
                                    Your website should work smoothly on mobile,
                                    tablet and desktop devices.
                                </p>
                            </article>

                            <article className="value-card">
                                <div className="value-number">
                                    04
                                </div>

                                <h3>Practical</h3>

                                <p>
                                    Features and technology should support your
                                    business instead of making things more
                                    complicated.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* TECHNOLOGY */}
                <section className="about-technology">
                    <div className="section-container technology-container">
                        <div className="technology-copy">
                            <p className="section-label">
                                Technology
                            </p>

                            <h2>
                                Modern Web Development
                            </h2>

                            <p className="technology-description">
                                I use modern frontend technologies to create
                                fast, maintainable and responsive websites that
                                can grow with your business.
                            </p>
                        </div>

                        <div className="technology-list">
                            <div className="technology-item">
                                <span>HTML</span>
                                <small>Structure</small>
                            </div>

                            <div className="technology-item">
                                <span>CSS</span>
                                <small>Responsive Design</small>
                            </div>

                            <div className="technology-item">
                                <span>React</span>
                                <small>Frontend Development</small>
                            </div>

                            <div className="technology-item">
                                <span>TypeScript</span>
                                <small>Reliable Development</small>
                            </div>

                            <div className="technology-item">
                                <span>Angular</span>
                                <small>Web Applications</small>
                            </div>

                            <div className="technology-item">
                                <span>Git</span>
                                <small>Version Control</small>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="about-cta">
                    <div className="section-container about-cta-container">
                        <div>
                            <p className="section-label">
                                Let's Work Together
                            </p>

                            <h2>
                                Have an Idea for Your Business Website?
                            </h2>

                            <p>
                                Tell me about your business and what you need.
                                We can discuss a simple and practical approach
                                for getting your website online.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="about-cta-btn"
                        >
                            Get a Free Consultation
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;