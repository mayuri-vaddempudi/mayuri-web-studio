import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import '../styles/home.css';

function Home() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('seo.home.title')}</title>

                <meta
                    name="description"
                    content={t('seo.home.description')}
                />

                <link
                    rel="canonical"
                    href="https://mayuriwebstudio.se/"
                />

                <meta
                    property="og:title"
                    content={t('seo.home.title')}
                />

                <meta
                    property="og:description"
                    content={t('seo.home.description')}
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://mayuriwebstudio.se/"
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
                {/* HERO */}
                <section className="hero">
                    <div className="hero-container">
                        <div className="hero-content">
                            <p className="hero-label">
                                {t('home.hero.label')}
                            </p>

                            <h1>
                                {t('home.hero.title1')}
                                <span>{t('home.hero.title2')}</span>
                            </h1>

                            <p className="hero-description">
                                {t('home.hero.description')}
                            </p>

                            <div className="hero-actions">
                                <Link to="/contact" className="primary-btn">
                                    {t('home.hero.consultation')}
                                </Link>

                                <Link to="/portfolio" className="secondary-btn">
                                    {t('home.hero.portfolio')}
                                </Link>
                            </div>

                            <div className="hero-points">
                                <span>✓ {t('home.hero.mobileFriendly')}</span>
                                <span>✓ {t('home.hero.fastLoading')}</span>
                                <span>✓ {t('home.hero.clearPricing')}</span>
                            </div>
                        </div>

                        {/* HERO WEBSITE PREVIEW */}
                        <div className="hero-visual">
                            <img
                                src="/images/home-heo.png"
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
                            <p className="section-label">
                                {t('home.services.label')}
                            </p>

                            <h2>
                                {t('home.services.title')}
                            </h2>

                            <p>
                                {t('home.services.description')}
                            </p>
                        </div>

                        <div className="service-grid">
                            <article className="service-card">
                                <div className="service-icon">
                                    01
                                </div>

                                <h3>
                                    {t('home.services.development.title')}
                                </h3>

                                <p>
                                    {t('home.services.development.description')}
                                </p>

                                <Link to="/services">
                                    {t('home.services.development.link')} →
                                </Link>
                            </article>

                            <article className="service-card">
                                <div className="service-icon">
                                    02
                                </div>

                                <h3>
                                    {t('home.services.redesign.title')}
                                </h3>

                                <p>
                                    {t('home.services.redesign.description')}
                                </p>

                                <Link to="/services">
                                    {t('home.services.redesign.link')} →
                                </Link>
                            </article>

                            <article className="service-card">
                                <div className="service-icon">
                                    03
                                </div>

                                <h3>
                                    {t('home.services.maintenance.title')}
                                </h3>

                                <p>
                                    {t('home.services.maintenance.description')}
                                </p>

                                <Link to="/services">
                                    {t('home.services.maintenance.link')} →
                                </Link>
                            </article>

                            <article className="service-card">
                                <div className="service-icon">
                                    04
                                </div>

                                <h3>
                                    {t('home.services.seo.title')}
                                </h3>

                                <p>
                                    {t('home.services.seo.description')}
                                </p>

                                <Link to="/services">
                                    {t('home.services.seo.link')} →
                                </Link>
                            </article>
                        </div>

                        <div className="services-action">
                            <Link to="/services" className="secondary-btn">
                                {t('home.services.allServices')}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* PORTFOLIO */}
                <section className="portfolio-preview">
                    <div className="section-container">
                        <div className="section-heading">
                            <p className="section-label">
                                {t('home.portfolio.label')}
                            </p>

                            <h2>
                                {t('home.portfolio.title')}
                            </h2>

                            <p>
                                {t('home.portfolio.description')}
                            </p>
                        </div>

                        <div className="portfolio-grid">
                            <article className="portfolio-card">
                                <div className="portfolio-project-image">
                                    <img
                                        src="/images/fresh-clean.png"
                                        alt="Fresh & Clean Stockholm website concept"
                                    />

                                    <span className="portfolio-image-badge">
                                        {t('home.portfolio.liveDemo')}
                                    </span>
                                </div>

                                <div className="portfolio-card-content">
                                    <span className="project-category">
                                        {t('home.portfolio.freshClean.category')}
                                    </span>

                                    <h3>
                                        {t('home.portfolio.freshClean.title')}
                                    </h3>

                                    <p>
                                        {t('home.portfolio.freshClean.description')}
                                    </p>

                                    <Link
                                        to="/portfolio/fresh-clean-stockholm"
                                        className="portfolio-project-link"
                                    >
                                        {t('home.portfolio.viewDemo')}
                                    </Link>
                                </div>
                            </article>

                            <article className="portfolio-card">
                                <div className="portfolio-project-image">
                                    <img
                                        src="/images/nordic-beauty.png"
                                        alt="Nordic Beauty Studio website concept"
                                    />

                                    <span className="portfolio-image-badge portfolio-coming-badge">
                                        {t('home.portfolio.comingSoon')}
                                    </span>
                                </div>

                                <div className="portfolio-card-content">
                                    <span className="project-category">
                                        {t('home.portfolio.beauty.category')}
                                    </span>

                                    <h3>
                                        {t('home.portfolio.beauty.title')}
                                    </h3>

                                    <p>
                                        {t('home.portfolio.beauty.description')}
                                    </p>

                                    <span className="portfolio-coming-soon">
                                        {t('home.portfolio.demoComingSoon')}
                                    </span>
                                </div>
                            </article>

                            <article className="portfolio-card">
                                <div className="portfolio-project-image">
                                    <img
                                        src="/images/spice-house.png"
                                        alt="Spice House restaurant website concept"
                                    />

                                    <span className="portfolio-image-badge portfolio-coming-badge">
                                        {t('home.portfolio.comingSoon')}
                                    </span>
                                </div>

                                <div className="portfolio-card-content">
                                    <span className="project-category">
                                        {t('home.portfolio.spiceHouse.category')}
                                    </span>

                                    <h3>
                                        {t('home.portfolio.spiceHouse.title')}
                                    </h3>

                                    <p>
                                        {t('home.portfolio.spiceHouse.description')}
                                    </p>

                                    <span className="portfolio-coming-soon">
                                        {t('home.portfolio.demoComingSoon')}
                                    </span>
                                </div>
                            </article>
                        </div>

                        <div className="portfolio-action">
                            <Link to="/portfolio" className="secondary-btn">
                                {t('home.portfolio.viewPortfolio')}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="process-section">
                    <div className="section-container">
                        <div className="section-heading">
                            <p className="section-label">
                                {t('home.process.label')}
                            </p>

                            <h2>
                                {t('home.process.title')}
                            </h2>
                        </div>

                        <div className="process-grid">
                            <article className="process-card">
                                <div className="process-number">
                                    01
                                </div>

                                <h3>
                                    {t('home.process.step1.title')}
                                </h3>

                                <p>
                                    {t('home.process.step1.description')}
                                </p>
                            </article>

                            <article className="process-card">
                                <div className="process-number">
                                    02
                                </div>

                                <h3>
                                    {t('home.process.step2.title')}
                                </h3>

                                <p>
                                    {t('home.process.step2.description')}
                                </p>
                            </article>

                            <article className="process-card">
                                <div className="process-number">
                                    03
                                </div>

                                <h3>
                                    {t('home.process.step3.title')}
                                </h3>

                                <p>
                                    {t('home.process.step3.description')}
                                </p>
                            </article>

                            <article className="process-card">
                                <div className="process-number">
                                    04
                                </div>

                                <h3>
                                    {t('home.process.step4.title')}
                                </h3>

                                <p>
                                    {t('home.process.step4.description')}
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE ME */}
                <section className="why-section">
                    <div className="section-container why-container">
                        <div className="why-content">
                            <p className="section-label">
                                {t('home.why.label')}
                            </p>

                            <h2>
                                {t('home.why.title')}
                            </h2>

                            <p className="why-intro">
                                {t('home.why.intro')}
                            </p>

                            <div className="why-list">
                                <div className="why-item">
                                    <div className="why-icon">
                                        ✓
                                    </div>

                                    <div>
                                        <h3>
                                            {t('home.why.responsive.title')}
                                        </h3>

                                        <p>
                                            {t('home.why.responsive.description')}
                                        </p>
                                    </div>
                                </div>

                                <div className="why-item">
                                    <div className="why-icon">
                                        ✓
                                    </div>

                                    <div>
                                        <h3>
                                            {t('home.why.clear.title')}
                                        </h3>

                                        <p>
                                            {t('home.why.clear.description')}
                                        </p>
                                    </div>
                                </div>

                                <div className="why-item">
                                    <div className="why-icon">
                                        ✓
                                    </div>

                                    <div>
                                        <h3>
                                            {t('home.why.practical.title')}
                                        </h3>

                                        <p>
                                            {t('home.why.practical.description')}
                                        </p>
                                    </div>
                                </div>

                                <div className="why-item">
                                    <div className="why-icon">
                                        ✓
                                    </div>

                                    <div>
                                        <h3>
                                            {t('home.why.support.title')}
                                        </h3>

                                        <p>
                                            {t('home.why.support.description')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="why-visual">
                            <div className="why-card">
                                <div className="why-card-header">
                                    <span>
                                        {t('home.why.cardLabel')}
                                    </span>
                                </div>

                                <div className="why-stat">
                                    <strong>
                                        {t('home.why.stat1')}
                                    </strong>

                                    <span>
                                        {t('home.why.stat1Text')}
                                    </span>
                                </div>

                                <div className="why-stat">
                                    <strong>
                                        {t('home.why.stat2')}
                                    </strong>

                                    <span>
                                        {t('home.why.stat2Text')}
                                    </span>
                                </div>

                                <div className="why-stat">
                                    <strong>
                                        {t('home.why.stat3')}
                                    </strong>

                                    <span>
                                        {t('home.why.stat3Text')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* TESTIMONIALS */}
                {/* <section className="testimonials-section">
                    <div className="section-container">
                        <div className="section-heading">
                            <p className="section-label">
                                {t('home.testimonials.label')}
                            </p>

                            <h2>
                                {t('home.testimonials.title')}
                            </h2>

                            <p>
                                {t('home.testimonials.description')}
                            </p>
                        </div>
                    </div>
                </section>*/}
                {/* FINAL CTA */}
                <section className="final-cta">
                    <div className="section-container final-cta-container">
                        <div>
                            <p className="section-label">
                                {t('home.finalCta.label')}
                            </p>

                            <h2>
                                {t('home.finalCta.title')}
                            </h2>

                            <p>
                                {t('home.finalCta.description')}
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="final-cta-btn"
                        >
                            {t('home.finalCta.button')}
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;