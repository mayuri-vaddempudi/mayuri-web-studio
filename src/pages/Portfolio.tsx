import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

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
    const { t, i18n } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('All');

    const projects: Project[] = [
        {
            title: 'Fresh & Clean Stockholm',
            category: t('portfolioPage.projects.freshClean.category'),
            filterCategory: 'Cleaning',
            description: t('portfolioPage.projects.freshClean.description'),
            link: '/portfolio/fresh-clean-stockholm',
            image: '/images/fresh-clean.png',
        },
        {
            title: 'Nordic Beauty Studio',
            category: t('portfolioPage.projects.beauty.category'),
            filterCategory: 'Beauty',
            description: t('portfolioPage.projects.beauty.description'),
            link: '/portfolio/nordic-beauty-studio',
            image: '/images/nordic-beauty.png',
        },
        {
            title: 'Spice House',
            category: t('portfolioPage.projects.spiceHouse.category'),
            filterCategory: 'Restaurant',
            description: t('portfolioPage.projects.spiceHouse.description'),
            link: '/portfolio/spice-house',
            image: '/images/spice-house.png',
        },
        {
            title: 'Nordic Consulting',
            category: t('portfolioPage.projects.consulting.category'),
            filterCategory: 'Business',
            description: t('portfolioPage.projects.consulting.description'),
            link: '#',
            image: '/images/nordic-consulting.png',
        },
        {
            title: 'Nordic Lens',
            category: t('portfolioPage.projects.lens.category'),
            filterCategory: 'Other',
            description: t('portfolioPage.projects.lens.description'),
            link: '#',
            image: '/images/nordic-lens.png',
        },
        {
            title: 'Stockholm Corner',
            category: t('portfolioPage.projects.stockholmCorner.category'),
            filterCategory: 'Business',
            description: t('portfolioPage.projects.stockholmCorner.description'),
            link: '#',
            image: '/images/stockholm-corner.png',
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
                <title>{t('seo.portfolio.title')}</title>

                <meta
                    name="description"
                    content={t('seo.portfolio.description')}
                />

                <link
                    rel="canonical"
                    href="https://mayuriwebstudio.se/portfolio"
                />

                <meta
                    property="og:title"
                    content={t('seo.portfolio.title')}
                />

                <meta
                    property="og:description"
                    content={t('seo.portfolio.description')}
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://mayuriwebstudio.se/portfolio"
                />

                <meta
                    property="og:site_name"
                    content="Mayuri Web Studio"
                />

                <meta
                    property="og:locale"
                    content={i18n.language.startsWith('sv') ? 'sv_SE' : 'en_SE'}
                />
            </Helmet>

            <main>
                <section className="portfolio-hero">
                    <div className="portfolio-hero-container">
                        <p className="section-label">
                            {t('portfolioPage.hero.label')}
                        </p>

                        <h1>
                            {t('portfolioPage.hero.title')}
                        </h1>

                        <p>
                            {t('portfolioPage.hero.description')}
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
                                    className={activeFilter === filter ? 'active' : ''}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {t(`portfolioPage.filters.${filter}`)}
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
                                                    ? t('portfolioPage.status.comingSoon')
                                                    : t('portfolioPage.status.liveDemo')}
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
                                                {t('portfolioPage.status.inDevelopment')}
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
                                                {t('portfolioPage.status.demoComingSoon')}
                                            </span>
                                        ) : (
                                            <Link
                                                to={project.link}
                                                className="portfolio-view-button"
                                            >
                                                {t('portfolioPage.status.viewDemo')}
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
                                    {t('portfolioPage.cta.label')}
                                </p>

                                <h2>
                                    {t('portfolioPage.cta.title')}
                                </h2>

                                <p>
                                    {t('portfolioPage.cta.description')}
                                </p>
                            </div>

                            <Link
                                to="/contact"
                                className="portfolio-cta-button"
                            >
                                {t('portfolioPage.cta.button')}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Portfolio;