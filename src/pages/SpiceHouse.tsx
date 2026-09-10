import { Link } from 'react-router-dom';
import '../styles/spice-house.css';

function SpiceHouse() {
    const dishes = [
        {
            name: 'Butter Chicken',
            description:
                'Tender chicken in a rich tomato, butter and aromatic spice sauce.',
            price: '189 SEK',
        },
        {
            name: 'Paneer Tikka Masala',
            description:
                'Grilled paneer served in a creamy tomato masala with warming spices.',
            price: '175 SEK',
        },
        {
            name: 'Lamb Rogan Josh',
            description:
                'Slow-cooked lamb with onion, tomato and traditional Indian spices.',
            price: '209 SEK',
        },
        {
            name: 'Vegetable Biryani',
            description:
                'Fragrant basmati rice layered with vegetables, herbs and spices.',
            price: '165 SEK',
        },
    ];

    return (
        <div className="spice-demo">
            {/* Portfolio demo notice */}
            <div className="spice-demo-bar">
                <span>Website concept by Mayuri Web Studio</span>

                <Link to="/portfolio">← Back to portfolio</Link>
            </div>

            {/* Navigation */}
            <header className="spice-header">
                <a href="#home" className="spice-logo">
                    <span>SPICE</span>
                    HOUSE
                </a>

                <nav>
                    <a href="#menu">Menu</a>
                    <a href="#story">Our Story</a>
                    <a href="#visit">Visit</a>
                    <a href="#reserve" className="spice-reserve-nav">
                        Reserve a Table
                    </a>
                </nav>
            </header>

            <main>
                {/* Hero */}
                <section className="spice-hero" id="home">
                    <div className="spice-hero-overlay" />

                    <img
                        src="/images/spice-house-hero.png"
                        alt="Indian food presentation"
                        className="spice-hero-image"
                    />

                    <div className="spice-hero-content">
                        <p className="spice-eyebrow">
                            Indian Kitchen · Stockholm
                        </p>

                        <h1>
                            Tradition,
                            <span> served with soul.</span>
                        </h1>

                        <p className="spice-hero-description">
                            Authentic Indian flavours, aromatic spices and
                            carefully prepared dishes made for sharing.
                        </p>

                        <div className="spice-hero-actions">
                            <a href="#menu" className="spice-primary-button">
                                Explore Our Menu
                            </a>

                            <a href="#reserve" className="spice-secondary-button">
                                Reserve a Table
                            </a>
                        </div>
                    </div>

                    <div className="spice-scroll">
                        <span>SCROLL TO DISCOVER</span>
                        <span>↓</span>
                    </div>
                </section>

                {/* Introduction */}
                <section className="spice-intro">
                    <p className="spice-eyebrow">Welcome to Spice House</p>

                    <h2>
                        A modern celebration of
                        <em> Indian cooking.</em>
                    </h2>

                    <p>
                        Inspired by the warmth of Indian hospitality, Spice House
                        brings together traditional recipes, bold flavours and a
                        relaxed contemporary dining experience.
                    </p>
                </section>

                {/* Menu */}
                <section className="spice-menu" id="menu">
                    <div className="spice-section-heading">
                        <div>
                            <p className="spice-eyebrow">From Our Kitchen</p>
                            <h2>Signature dishes</h2>
                        </div>

                        <p>
                            Familiar favourites and regional inspiration, prepared
                            with carefully selected ingredients and aromatic spices.
                        </p>
                    </div>

                    <div className="spice-menu-grid">
                        {dishes.map((dish, index) => (
                            <article className="spice-dish" key={dish.name}>
                                <div className="spice-dish-number">
                                    0{index + 1}
                                </div>

                                <div className="spice-dish-content">
                                    <div className="spice-dish-title">
                                        <h3>{dish.name}</h3>
                                        <span>{dish.price}</span>
                                    </div>

                                    <p>{dish.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="spice-menu-cta">
                        <a href="#reserve">View full menu →</a>
                    </div>
                </section>

                {/* Feature */}
                <section className="spice-feature">
                    <div className="spice-feature-image">
                        <img
                            src="/images/spice-house-hero1.png"
                            alt="Indian restaurant dining concept"
                        />
                    </div>

                    <div className="spice-feature-content" id="story">
                        <p className="spice-eyebrow">Our Story</p>

                        <h2>
                            Food that brings
                            people together.
                        </h2>

                        <p>
                            At the heart of Indian cooking is the joy of sharing.
                            Our concept combines traditional flavours with a modern
                            Stockholm dining atmosphere.
                        </p>

                        <p>
                            Every dish is imagined around generous hospitality,
                            fragrant spices and food worth gathering around.
                        </p>

                        <a href="#menu">Discover our kitchen →</a>
                    </div>
                </section>

                {/* Experience */}
                <section className="spice-experience">
                    <div>
                        <span>01</span>
                        <h3>Authentic Flavours</h3>
                        <p>
                            Recipes inspired by the diversity and traditions of
                            Indian cooking.
                        </p>
                    </div>

                    <div>
                        <span>02</span>
                        <h3>Fresh Ingredients</h3>
                        <p>
                            Carefully selected ingredients prepared with attention
                            to flavour and quality.
                        </p>
                    </div>

                    <div>
                        <span>03</span>
                        <h3>Warm Hospitality</h3>
                        <p>
                            A relaxed dining experience designed for friends,
                            families and celebrations.
                        </p>
                    </div>
                </section>

                {/* Reservation */}
                <section className="spice-reservation" id="reserve">
                    <p className="spice-eyebrow">Reservations</p>

                    <h2>Your table is waiting.</h2>

                    <p>
                        Planning dinner with friends, family or someone special?
                        Reserve your table and enjoy an evening at Spice House.
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            alert(
                                'Demo only — a real restaurant website could connect this button to a booking system.'
                            )
                        }
                    >
                        Reserve a Table
                    </button>

                    <small>
                        Demo interaction — no real reservation will be made.
                    </small>
                </section>

                {/* Visit */}
                <section className="spice-visit" id="visit">
                    <div>
                        <p className="spice-eyebrow">Visit Us</p>
                        <h2>Come dine with us.</h2>
                    </div>

                    <div className="spice-visit-details">
                        <div>
                            <span>Location</span>
                            <strong>Stockholm, Sweden</strong>
                        </div>

                        <div>
                            <span>Monday – Thursday</span>
                            <strong>16:00 – 22:00</strong>
                        </div>

                        <div>
                            <span>Friday – Saturday</span>
                            <strong>16:00 – 23:00</strong>
                        </div>

                        <div>
                            <span>Sunday</span>
                            <strong>16:00 – 21:00</strong>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="spice-footer">
                <div className="spice-footer-brand">
                    <strong>SPICE HOUSE</strong>
                    <span>Indian Kitchen · Stockholm</span>
                </div>

                <p>
                    Fictional website concept by Mayuri Web Studio
                </p>
            </footer>
        </div>
    );
}

export default SpiceHouse;