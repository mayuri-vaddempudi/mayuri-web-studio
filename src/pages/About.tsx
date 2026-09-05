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
                    content="Learn more about Mayuri Web Studio and our approach to creating simple, modern and responsive websites for small businesses."
                />
            </Helmet>
            <main>
                {/* HERO */}
                <section className="about-hero">
                    <div className="about-hero-container">
                        <div className="about-hero-content">
                            <p className="section-label">About Mayuri Web Studio</p>

                            <h1>
                                Helping Small Businesses Build a
                                <span> Stronger Online Presence</span>
                            </h1>

                            <p>
                                I create modern, responsive and easy-to-use websites for small
                                businesses in Sweden — with a focus on clean design, clear
                                communication and practical solutions.
                            </p>

                            <Link to="/contact" className="about-primary-btn">
                                Let's Work Together
                            </Link>
                        </div>

                        <div className="about-hero-visual">
                            <div className="about-profile-card">
                                <div className="about-avatar">M</div>

                                <h2>Mayuri</h2>
                                <p>Frontend Developer</p>

                                <div className="profile-divider" />

                                <div className="profile-detail">
                                    <span>Based in</span>
                                    <strong>Sweden</strong>
                                </div>

                                <div className="profile-detail">
                                    <span>Specialization</span>
                                    <strong>Web Development</strong>
                                </div>

                                <div className="profile-detail">
                                    <span>Focus</span>
                                    <strong>Small Businesses</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MY STORY */}
                <section className="about-story">
                    <div className="section-container about-story-container">
                        <div className="story-label">
                            <p className="section-label">My Story</p>
                            <h2>Technology Made Simple for Small Businesses</h2>
                        </div>

                        <div className="story-content">
                            <p>
                                I'm a frontend developer with professional experience building
                                modern web applications using technologies such as React,
                                TypeScript, Angular, HTML and CSS.
                            </p>

                            <p>
                                I started Mayuri Web Studio with a simple goal: to help small
                                businesses get professional websites without unnecessary
                                technical complexity.
                            </p>

                            <p>
                                A good business website should clearly explain what you do, work
                                well on every device and make it easy for potential customers to
                                contact you.
                            </p>

                            <p>
                                My approach is straightforward — understand the business first,
                                create a clear plan and then build a website that supports the
                                business goals.
                            </p>
                        </div>
                    </div>
                </section>

                {/* WHAT I FOCUS ON */}
                <section className="about-values">
                    <div className="section-container">
                        <div className="section-heading">
                            <p className="section-label">My Approach</p>

                            <h2>What I Focus On</h2>

                            <p>
                                The goal isn't to make websites unnecessarily complicated. It's
                                to make them useful for your business and your customers.
                            </p>
                        </div>

                        <div className="values-grid">
                            <article className="value-card">
                                <div className="value-number">01</div>
                                <h3>Simple</h3>
                                <p>
                                    Clear navigation and content so visitors can quickly understand
                                    your business.
                                </p>
                            </article>

                            <article className="value-card">
                                <div className="value-number">02</div>
                                <h3>Professional</h3>
                                <p>
                                    Clean and modern designs that create a professional first
                                    impression.
                                </p>
                            </article>

                            <article className="value-card">
                                <div className="value-number">03</div>
                                <h3>Responsive</h3>
                                <p>
                                    Websites designed to work properly on phones, tablets and
                                    desktop computers.
                                </p>
                            </article>

                            <article className="value-card">
                                <div className="value-number">04</div>
                                <h3>Practical</h3>
                                <p>
                                    Technology selected based on what the website actually needs,
                                    rather than adding unnecessary complexity.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* TECHNOLOGIES */}
                <section className="about-technology">
                    <div className="section-container technology-container">
                        <div>
                            <p className="section-label">Technology</p>

                            <h2>Modern Web Development</h2>

                            <p className="technology-description">
                                I use modern frontend technologies to create fast, maintainable
                                and responsive websites.
                            </p>
                        </div>

                        <div className="technology-list">
                            <div className="technology-item">
                                <span>HTML</span>
                                <small>Structure</small>
                            </div>

                            <div className="technology-item">
                                <span>CSS</span>
                                <small>Design</small>
                            </div>

                            <div className="technology-item">
                                <span>React</span>
                                <small>Frontend</small>
                            </div>

                            <div className="technology-item">
                                <span>TypeScript</span>
                                <small>Development</small>
                            </div>

                            <div className="technology-item">
                                <span>Git</span>
                                <small>Version Control</small>
                            </div>

                            <div className="technology-item">
                                <span>Responsive</span>
                                <small>Mobile First</small>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="about-cta">
                    <div className="section-container about-cta-container">
                        <div>
                            <p className="section-label">Let's Work Together</p>

                            <h2>Have a Website Idea for Your Business?</h2>

                            <p>
                                Tell me about your business and what you're looking for. We can
                                discuss the best way to get your website online.
                            </p>
                        </div>

                        <Link to="/contact" className="about-cta-btn">
                            Get a Free Consultation
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;