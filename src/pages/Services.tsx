import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import '../styles/services.css';

function Services() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('seo.services.title')}</title>

                <meta
                    name="description"
                    content={t('seo.services.description')}
                />

                <link
                    rel="canonical"
                    href="https://mayuriwebstudio.se/services"
                />

                <meta
                    property="og:title"
                    content={t('seo.services.title')}
                />

                <meta
                    property="og:description"
                    content={t('seo.services.description')}
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://mayuriwebstudio.se/services"
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
                <section className="services-hero">
                    <div className="services-hero-container">
                        <div>
                            <p className="section-label">
                                {t('servicesPage.hero.label')}
                            </p>

                            <h1>{t('servicesPage.hero.title')}</h1>

                            <p>{t('servicesPage.hero.description')}</p>
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
                                    <h2>{t('servicesPage.starter.title')}</h2>

                                    <p>{t('servicesPage.starter.description')}</p>

                                    <ul>
                                        <li>{t('servicesPage.starter.point1')}</li>
                                        <li>{t('servicesPage.starter.point2')}</li>
                                        <li>{t('servicesPage.starter.point3')}</li>
                                        <li>{t('servicesPage.starter.point4')}</li>
                                    </ul>
                                </div>

                                <div className="service-row-price">
                                    <span>{t('servicesPage.price.startingFrom')}</span>

                                    <strong>3,500 SEK</strong>

                                    <Link to="/contact" className="service-row-btn">
                                        {t('servicesPage.price.getStarted')}
                                    </Link>
                                </div>
                            </article>

                            {/* BUSINESS WEBSITE */}
                            <article className="service-row">
                                <div className="service-row-icon">02</div>

                                <div className="service-row-content">
                                    <h2>{t('servicesPage.business.title')}</h2>

                                    <p>{t('servicesPage.business.description')}</p>

                                    <ul>
                                        <li>{t('servicesPage.business.point1')}</li>
                                        <li>{t('servicesPage.business.point2')}</li>
                                        <li>{t('servicesPage.business.point3')}</li>
                                        <li>{t('servicesPage.business.point4')}</li>
                                        <li>{t('servicesPage.business.point5')}</li>
                                        <li>{t('servicesPage.business.point6')}</li>
                                        <li>{t('servicesPage.business.point7')}</li>
                                    </ul>
                                </div>

                                <div className="service-row-price">
                                    <span>{t('servicesPage.price.startingFrom')}</span>

                                    <strong>6,000 SEK</strong>

                                    <Link to="/contact" className="service-row-btn">
                                        {t('servicesPage.price.getStarted')}
                                    </Link>
                                </div>
                            </article>

                            {/* WEBSITE REDESIGN */}
                            <article className="service-row">
                                <div className="service-row-icon">03</div>

                                <div className="service-row-content">
                                    <h2>{t('servicesPage.redesign.title')}</h2>

                                    <p>{t('servicesPage.redesign.description')}</p>

                                    <ul>
                                        <li>{t('servicesPage.redesign.point1')}</li>
                                        <li>{t('servicesPage.redesign.point2')}</li>
                                        <li>{t('servicesPage.redesign.point3')}</li>
                                        <li>{t('servicesPage.redesign.point4')}</li>
                                        <li>{t('servicesPage.redesign.point5')}</li>
                                        <li>{t('servicesPage.redesign.point6')}</li>
                                    </ul>
                                </div>

                                <div className="service-row-price">
                                    <span>{t('servicesPage.price.startingFrom')}</span>

                                    <strong>6,000 SEK</strong>

                                    <Link to="/contact" className="service-row-btn">
                                        {t('servicesPage.price.getStarted')}
                                    </Link>
                                </div>
                            </article>

                            {/* MAINTENANCE */}
                            <article className="service-row">
                                <div className="service-row-icon">04</div>

                                <div className="service-row-content">
                                    <h2>{t('servicesPage.maintenance.title')}</h2>

                                    <p>{t('servicesPage.maintenance.description')}</p>

                                    <ul>
                                        <li>{t('servicesPage.maintenance.point1')}</li>
                                        <li>{t('servicesPage.maintenance.point2')}</li>
                                        <li>{t('servicesPage.maintenance.point3')}</li>
                                        <li>{t('servicesPage.maintenance.point4')}</li>
                                        <li>{t('servicesPage.maintenance.point5')}</li>
                                    </ul>
                                </div>

                                <div className="service-row-price">
                                    <span>{t('servicesPage.price.startingFrom')}</span>

                                    <strong>
                                        400 SEK/{t('servicesPage.price.perMonth')}
                                    </strong>

                                    <Link to="/contact" className="service-row-btn">
                                        {t('servicesPage.price.getStarted')}
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
                            <p className="section-label">
                                {t('servicesPage.included.label')}
                            </p>

                            <h2>{t('servicesPage.included.title')}</h2>

                            <p>{t('servicesPage.included.description')}</p>
                        </div>

                        <div className="included-grid">
                            <div className="included-item">
                                <span>✓</span>
                                <h3>{t('servicesPage.included.responsive')}</h3>
                            </div>

                            <div className="included-item">
                                <span>✓</span>
                                <h3>{t('servicesPage.included.seo')}</h3>
                            </div>

                            <div className="included-item">
                                <span>✓</span>
                                <h3>{t('servicesPage.included.loading')}</h3>
                            </div>

                            <div className="included-item">
                                <span>✓</span>
                                <h3>{t('servicesPage.included.contactForm')}</h3>
                            </div>

                            <div className="included-item">
                                <span>✓</span>
                                <h3>{t('servicesPage.included.domain')}</h3>
                            </div>

                            <div className="included-item">
                                <span>✓</span>
                                <h3>{t('servicesPage.included.security')}</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="services-cta">
                    <div className="section-container services-cta-container">
                        <div>
                            <p className="section-label">
                                {t('servicesPage.cta.label')}
                            </p>

                            <h2>{t('servicesPage.cta.title')}</h2>

                            <p>{t('servicesPage.cta.description')}</p>
                        </div>

                        <Link to="/contact" className="final-cta-btn">
                            {t('servicesPage.cta.button')}
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Services;