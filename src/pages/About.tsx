import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import '../styles/about.css';

function About() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('seo.about.title')}</title>

                <meta
                    name="description"
                    content={t('seo.about.description')}
                />

                <link
                    rel="canonical"
                    href="https://mayuriwebstudio.se/about"
                />

                <meta
                    property="og:title"
                    content={t('seo.about.title')}
                />

                <meta
                    property="og:description"
                    content={t('seo.about.description')}
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://mayuriwebstudio.se/about"
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
                <section className="about-hero">
                    <div className="about-hero-container">
                        <div className="about-hero-content">
                            <p className="section-label">
                                {t('aboutPage.hero.label')}
                            </p>

                            <h1>
                                {t('aboutPage.hero.title1')}
                                <span>
                                    {' '}
                                    {t('aboutPage.hero.title2')}
                                </span>
                            </h1>

                            <p>
                                {t('aboutPage.hero.description')}
                            </p>

                            <div className="about-hero-actions">
                                <Link
                                    to="/contact"
                                    className="about-primary-btn"
                                >
                                    {t('aboutPage.hero.primaryButton')}
                                </Link>

                                <Link
                                    to="/portfolio"
                                    className="about-secondary-btn"
                                >
                                    {t('aboutPage.hero.secondaryButton')}
                                </Link>
                            </div>
                        </div>

                        {/* PROFILE CARD */}
                        <div className="about-hero-visual">
                            <div className="about-profile-card">
                                <div className="about-avatar">
                                    M
                                </div>

                                <h2>Mayuri</h2>

                                <p className="profile-role">
                                    {t('aboutPage.profile.role')}
                                </p>

                                <div className="profile-divider" />

                                <div className="profile-detail">
                                    <span>
                                        {t('aboutPage.profile.basedIn')}
                                    </span>

                                    <strong>
                                        {t('aboutPage.profile.country')}
                                    </strong>
                                </div>

                                <div className="profile-detail">
                                    <span>
                                        {t('aboutPage.profile.experience')}
                                    </span>

                                    <strong>
                                        {t(
                                            'aboutPage.profile.experienceValue'
                                        )}
                                    </strong>
                                </div>

                                <div className="profile-detail">
                                    <span>
                                        {t('aboutPage.profile.focus')}
                                    </span>

                                    <strong>
                                        {t('aboutPage.profile.focusValue')}
                                    </strong>
                                </div>

                                <div className="profile-detail">
                                    <span>
                                        {t('aboutPage.profile.approach')}
                                    </span>

                                    <strong>
                                        {t('aboutPage.profile.approachValue')}
                                    </strong>
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
                                {t('aboutPage.story.label')}
                            </p>

                            <h2>
                                {t('aboutPage.story.title')}
                            </h2>
                        </div>

                        <div className="story-content">
                            <p>
                                {t('aboutPage.story.paragraph1')}
                            </p>

                            <p>
                                {t('aboutPage.story.paragraph2')}
                            </p>

                            <p>
                                {t('aboutPage.story.paragraph3')}
                            </p>

                            <p>
                                {t('aboutPage.story.paragraph4')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* VALUES */}
                <section className="about-values">
                    <div className="section-container">
                        <div className="section-heading">
                            <p className="section-label">
                                {t('aboutPage.values.label')}
                            </p>

                            <h2>
                                {t('aboutPage.values.title')}
                            </h2>

                            <p>
                                {t('aboutPage.values.description')}
                            </p>
                        </div>

                        <div className="values-grid">
                            {/* CLEAR */}
                            <article className="value-card">
                                <div className="value-number">
                                    01
                                </div>

                                <h3>
                                    {t('aboutPage.values.clear.title')}
                                </h3>

                                <p>
                                    {t(
                                        'aboutPage.values.clear.description'
                                    )}
                                </p>
                            </article>

                            {/* PROFESSIONAL */}
                            <article className="value-card">
                                <div className="value-number">
                                    02
                                </div>

                                <h3>
                                    {t(
                                        'aboutPage.values.professional.title'
                                    )}
                                </h3>

                                <p>
                                    {t(
                                        'aboutPage.values.professional.description'
                                    )}
                                </p>
                            </article>

                            {/* RESPONSIVE */}
                            <article className="value-card">
                                <div className="value-number">
                                    03
                                </div>

                                <h3>
                                    {t(
                                        'aboutPage.values.responsive.title'
                                    )}
                                </h3>

                                <p>
                                    {t(
                                        'aboutPage.values.responsive.description'
                                    )}
                                </p>
                            </article>

                            {/* PRACTICAL */}
                            <article className="value-card">
                                <div className="value-number">
                                    04
                                </div>

                                <h3>
                                    {t(
                                        'aboutPage.values.practical.title'
                                    )}
                                </h3>

                                <p>
                                    {t(
                                        'aboutPage.values.practical.description'
                                    )}
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
                                {t('aboutPage.technology.label')}
                            </p>

                            <h2>
                                {t('aboutPage.technology.title')}
                            </h2>

                            <p className="technology-description">
                                {t('aboutPage.technology.description')}
                            </p>
                        </div>

                        <div className="technology-list">
                            <div className="technology-item">
                                <span>HTML</span>

                                <small>
                                    {t(
                                        'aboutPage.technology.structure'
                                    )}
                                </small>
                            </div>

                            <div className="technology-item">
                                <span>CSS</span>

                                <small>
                                    {t(
                                        'aboutPage.technology.responsiveDesign'
                                    )}
                                </small>
                            </div>

                            <div className="technology-item">
                                <span>React</span>

                                <small>
                                    {t(
                                        'aboutPage.technology.frontendDevelopment'
                                    )}
                                </small>
                            </div>

                            <div className="technology-item">
                                <span>TypeScript</span>

                                <small>
                                    {t(
                                        'aboutPage.technology.reliableDevelopment'
                                    )}
                                </small>
                            </div>

                            <div className="technology-item">
                                <span>Angular</span>

                                <small>
                                    {t(
                                        'aboutPage.technology.webApplications'
                                    )}
                                </small>
                            </div>

                            <div className="technology-item">
                                <span>Git</span>

                                <small>
                                    {t(
                                        'aboutPage.technology.versionControl'
                                    )}
                                </small>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="about-cta">
                    <div className="section-container about-cta-container">
                        <div>
                            <p className="section-label">
                                {t('aboutPage.cta.label')}
                            </p>

                            <h2>
                                {t('aboutPage.cta.title')}
                            </h2>

                            <p>
                                {t('aboutPage.cta.description')}
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="about-cta-btn"
                        >
                            {t('aboutPage.cta.button')}
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;