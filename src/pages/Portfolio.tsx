import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import '../styles/portfolio.css';

type Project = {
    title: string;
    category: string;
    filterCategory: string;
    description: string;
    link: string;
    image?: string;
};

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects: Project[] = [
        {
            title: 'Fresh & Clean Stockholm',
            category: 'Cleaning Company',
            filterCategory: 'Cleaning',
            description:
                'A clean and modern website concept focused on services, trust and making it easy for customers to request a quote.',
            link: '/portfolio/fresh-clean-stockholm',
            image: '/images/fresh-clean.png',
        },
        {
            title: 'Nordic Beauty Studio',
            category: 'Beauty Salon',
            filterCategory: 'Beauty',
            description:
                'An elegant beauty website concept focused on treatments, trust and helping customers find booking information quickly.',
            link: '#',
            image: '/images/nordic-beauty.png',
        },
        {
            title: 'Spice House',
            category: 'Restaurant',
            filterCategory: 'Restaurant',
            description:
                'A warm restaurant website concept designed around menu information, food presentation and reservations.',
            link: '#',
            image: '/images/spice-house.png',
        },
        {
            title: 'Nordic Consulting',
            category: 'Consulting',
            filterCategory: 'Business',
            description:
                'A professional business website concept for consultants and service-based companies that want a trustworthy online presence.',
            link: '#',
            image: '/images/nordic-consulting.png'
        },
        {
            title: 'Nordic Lens',
            category: 'Photography',
            filterCategory: 'Other',
            description:
                'A clean visual portfolio concept created to showcase photography work and help potential clients make contact.',
            link: '#',
            image: '/images/nordic-lens.png'
        },
        {
            title: 'Stockholm Corner',
            category: 'Local Business',
            filterCategory: 'Business',
            description:
                'A simple local-business website concept with clear services, location information and easy ways for customers to get in touch.',
            link: '#',
            image: '/images/stockholm-corner.png'
        },
    ];

    const filters = [
        'All',
        'Cleaning',
        'Restaurant',
        'Beauty',
        'Business',
        'Other',
    ];

    const filteredProjects =
        activeFilter === 'All'
            ? projects
            : projects.filter(
                (project) => project.filterCategory === activeFilter
            );

    return (
        <>
            <Helmet>
                <title>Website Portfolio | Mayuri Web Studio</title>

                <meta
                    name="description"
                    content="Explore website concepts created by Mayuri Web Studio for restaurants, salons, cleaning companies, consultants and other small businesses."
                />
            </Helmet>

            <main>
                <section className="portfolio-hero">
                    <div className="portfolio-hero-container">
                        <p className="section-label">My Work</p>

                        <h1>Website Concepts for Small Businesses</h1>

                        <p>
                            Explore demo website concepts created to show how
                            different businesses can build a modern,
                            professional and customer-friendly online presence.
                        </p>
                    </div>
                </section>

                <section className="portfolio-page-section">
                    <div className="section-container">
                        <div className="portfolio-filters">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    type="button"
                                    className={
                                        activeFilter === filter ? 'active' : ''
                                    }
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <div className="portfolio-page-grid">
                            {filteredProjects.map((project) => (
                                <article
                                    className="portfolio-project-card"
                                    key={project.title}
                                >
                                    {project.image ? (
                                        <div className="portfolio-project-image">
                                            <img
                                                src={project.image}
                                                alt={`${project.title} website concept`}
                                            />

                                            <span
                                                className={`project-status ${project.link === '#'
                                                    ? 'coming-soon-status'
                                                    : 'live-demo-status'
                                                    }`}
                                            >
                                                {project.link === '#'
                                                    ? 'Coming Soon'
                                                    : 'Live Demo'}
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="project-placeholder">
                                            <span>
                                                {project.category}
                                            </span>

                                            <h2>
                                                {project.title}
                                            </h2>

                                            <p>
                                                Website concept in development.
                                            </p>
                                        </div>
                                    )}

                                    <div className="project-info">
                                        <span>
                                            {project.category}
                                        </span>

                                        <h3>
                                            {project.title}
                                        </h3>

                                        <p>
                                            {project.description}
                                        </p>

                                        {project.link === '#' ? (
                                            <span className="portfolio-coming-soon">
                                                Demo Coming Soon
                                            </span>
                                        ) : (
                                            <Link
                                                to={project.link}
                                                className="portfolio-view-button"
                                            >
                                                View Demo →
                                            </Link>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="portfolio-bottom-cta">
                    <div className="section-container">
                        <div className="portfolio-bottom-card">
                            <div>
                                <p className="section-label">
                                    Have a Project in Mind?
                                </p>

                                <h2>
                                    Let’s Create a Website for Your Business
                                </h2>

                                <p>
                                    Tell me about your business and what you need.
                                    I’ll help you plan a simple and practical
                                    website that fits your goals.
                                </p>
                            </div>

                            <Link
                                to="/contact"
                                className="portfolio-cta-button"
                            >
                                Get a Free Consultation
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Portfolio;