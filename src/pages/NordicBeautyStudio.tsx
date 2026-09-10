import { Link } from 'react-router-dom';
import '../styles/nordic-beauty-studio.css';

function NordicBeautyStudio() {
    const treatments = [
        {
            title: 'Signature Facial',
            description:
                'A personalised facial treatment designed to refresh, hydrate and restore your skin.',
            price: 'From 795 SEK',
        },
        {
            title: 'Brow Styling',
            description:
                'Shape and styling tailored to your features for a natural, polished look.',
            price: 'From 395 SEK',
        },
        {
            title: 'Lash Lift',
            description:
                'A gentle lift that enhances your natural lashes and creates a beautifully open look.',
            price: 'From 695 SEK',
        },
    ];

    return (
        <div className="beauty-demo">
            {/* DEMO NOTICE */}
            <div className="beauty-demo-bar">
                <span>Website concept by Mayuri Web Studio</span>

                <Link to="/portfolio">
                    ← Back to portfolio
                </Link>
            </div>

            {/* NAVIGATION */}
            <header className="beauty-header">
                <a href="#home" className="beauty-logo">
                    <span>Nordic</span>
                    Beauty Studio
                </a>

                <nav>
                    <a href="#treatments">Treatments</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#book" className="beauty-nav-book">
                        Book a Treatment
                    </a>
                </nav>
            </header>

            <main>
                {/* HERO */}
                <section className="beauty-hero" id="home">
                    <div className="beauty-hero-content">
                        <p className="beauty-eyebrow">
                            Beauty & Wellness · Stockholm
                        </p>

                        <h1>
                            Beauty that feels
                            <span> naturally you.</span>
                        </h1>

                        <p className="beauty-hero-description">
                            Thoughtful beauty treatments in a calm and welcoming
                            studio, created to help you look and feel your best.
                        </p>

                        <div className="beauty-hero-actions">
                            <a href="#book" className="beauty-primary-button">
                                Book a Treatment
                            </a>

                            <a
                                href="#treatments"
                                className="beauty-secondary-button"
                            >
                                Explore Treatments
                            </a>
                        </div>
                    </div>

                    <div className="beauty-hero-image">
                        <img
                            src="/images/nordic-beauty-salon.png"
                            alt="Nordic Beauty Studio website concept"
                        />
                    </div>
                </section>

                {/* INTRO */}
                <section className="beauty-intro">
                    <p>SKIN · BROWS · LASHES</p>

                    <h2>
                        A little time for yourself.
                    </h2>

                    <p className="beauty-intro-text">
                        Simple, personalised treatments in a peaceful setting.
                        Every appointment is focused on natural results,
                        thoughtful care and making you feel comfortable.
                    </p>
                </section>

                {/* TREATMENTS */}
                <section
                    className="beauty-treatments"
                    id="treatments"
                >
                    <div className="beauty-section-heading">
                        <div>
                            <p className="beauty-eyebrow">
                                Our Treatments
                            </p>

                            <h2>
                                Made for you.
                            </h2>
                        </div>

                        <p>
                            Carefully selected treatments designed around
                            your skin, features and personal style.
                        </p>
                    </div>

                    <div className="beauty-treatment-grid">
                        {treatments.map((treatment, index) => (
                            <article
                                className="beauty-treatment-card"
                                key={treatment.title}
                            >
                                <span>
                                    0{index + 1}
                                </span>

                                <h3>{treatment.title}</h3>

                                <p>
                                    {treatment.description}
                                </p>

                                <strong>
                                    {treatment.price}
                                </strong>

                                <a href="#book">
                                    Book treatment →
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ABOUT */}
                <section
                    className="beauty-about"
                    id="about"
                >
                    <div className="beauty-about-card">
                        <p className="beauty-eyebrow">
                            Our Philosophy
                        </p>

                        <h2>
                            Natural results.
                            Personal care.
                        </h2>

                        <p>
                            Nordic Beauty Studio is a fictional beauty-studio
                            concept created to demonstrate how a modern salon
                            website can present treatments, pricing and booking
                            information in a clear and elegant way.
                        </p>

                        <div className="beauty-about-features">
                            <span>Personal treatments</span>
                            <span>Calm environment</span>
                            <span>Quality products</span>
                        </div>
                    </div>
                </section>

                {/* BOOKING */}
                <section
                    className="beauty-book"
                    id="book"
                >
                    <div>
                        <p className="beauty-eyebrow">
                            Book Your Visit
                        </p>

                        <h2>
                            Ready for a little self-care?
                        </h2>

                        <p>
                            Choose your treatment and find a time that works
                            for you.
                        </p>
                    </div>

                    <a
                        href="mailto:hello@mayuriwebstudio.se"
                        className="beauty-book-button"
                    >
                        Request an Appointment
                    </a>
                </section>

                {/* CONTACT */}
                <section
                    className="beauty-contact"
                    id="contact"
                >
                    <div>
                        <span>Visit</span>
                        <strong>Stockholm, Sweden</strong>
                    </div>

                    <div>
                        <span>Opening Hours</span>
                        <strong>Mon–Fri 09:00–18:00</strong>
                    </div>

                    <div>
                        <span>Saturday</span>
                        <strong>10:00–15:00</strong>
                    </div>

                    <div>
                        <span>Appointments</span>
                        <strong>By booking</strong>
                    </div>
                </section>
            </main>

            <footer className="beauty-footer">
                <div>
                    <strong>Nordic Beauty Studio</strong>
                    <p>Beauty & wellness · Stockholm</p>
                </div>

                <p>
                    Demo website concept by Mayuri Web Studio
                </p>
            </footer>
        </div>
    );
}

export default NordicBeautyStudio;