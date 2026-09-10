import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import '../styles/legal.css';

function Cookies() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('seo.cookies.title')}</title>

                <meta
                    name="description"
                    content={t('seo.cookies.description')}
                />

                <link
                    rel="canonical"
                    href="https://mayuriwebstudio.se/cookies"
                />

                <meta
                    property="og:title"
                    content={t('seo.cookies.title')}
                />

                <meta
                    property="og:description"
                    content={t('seo.cookies.description')}
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://mayuriwebstudio.se/cookies"
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

            <main className="legal-page">
                {/* HERO */}
                <section className="legal-hero">
                    <div className="legal-container">
                        <p className="section-label">
                            {t('cookiesPage.hero.label')}
                        </p>

                        <h1>
                            {t('cookiesPage.hero.title')}
                        </h1>

                        <p>
                            {t('cookiesPage.hero.description')}
                        </p>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="legal-content-section">
                    <div className="legal-container legal-content">
                        <div className="legal-updated">
                            {t('cookiesPage.lastUpdated')}
                        </div>

                        {/* 1 */}
                        <section>
                            <h2>
                                {t('cookiesPage.whatAreCookies.title')}
                            </h2>

                            <p>
                                {t(
                                    'cookiesPage.whatAreCookies.description1'
                                )}
                            </p>

                            <p>
                                {t(
                                    'cookiesPage.whatAreCookies.description2'
                                )}
                            </p>
                        </section>

                        {/* 2 */}
                        <section>
                            <h2>
                                {t('cookiesPage.used.title')}
                            </h2>

                            <p>
                                {t('cookiesPage.used.description1')}
                            </p>

                            <p>
                                {t('cookiesPage.used.description2')}
                            </p>
                        </section>

                        {/* 3 */}
                        <section>
                            <h2>
                                {t('cookiesPage.essential.title')}
                            </h2>

                            <p>
                                {t('cookiesPage.essential.description1')}
                            </p>

                            <p>
                                {t('cookiesPage.essential.description2')}
                            </p>
                        </section>

                        {/* 4 */}
                        <section>
                            <h2>
                                {t('cookiesPage.contactForm.title')}
                            </h2>

                            <p>
                                {t(
                                    'cookiesPage.contactForm.description1'
                                )}
                            </p>

                            <p>
                                {t(
                                    'cookiesPage.contactForm.description2'
                                )}
                            </p>
                        </section>

                        {/* 5 */}
                        <section>
                            <h2>
                                {t('cookiesPage.hosting.title')}
                            </h2>

                            <p>
                                {t('cookiesPage.hosting.description1')}
                            </p>

                            <p>
                                {t('cookiesPage.hosting.description2')}
                            </p>
                        </section>

                        {/* 6 */}
                        <section>
                            <h2>
                                {t('cookiesPage.analytics.title')}
                            </h2>

                            <p>
                                {t('cookiesPage.analytics.description1')}
                            </p>

                            <p>
                                {t('cookiesPage.analytics.description2')}
                            </p>
                        </section>

                        {/* 7 */}
                        <section>
                            <h2>
                                {t('cookiesPage.managing.title')}
                            </h2>

                            <p>
                                {t('cookiesPage.managing.description1')}
                            </p>

                            <p>
                                {t('cookiesPage.managing.description2')}
                            </p>
                        </section>

                        {/* 8 */}
                        <section>
                            <h2>
                                {t('cookiesPage.thirdParty.title')}
                            </h2>

                            <p>
                                {t(
                                    'cookiesPage.thirdParty.description1'
                                )}
                            </p>

                            <p>
                                {t(
                                    'cookiesPage.thirdParty.description2'
                                )}
                            </p>
                        </section>

                        {/* 9 */}
                        <section>
                            <h2>
                                {t('cookiesPage.changes.title')}
                            </h2>

                            <p>
                                {t('cookiesPage.changes.description1')}
                            </p>

                            <p>
                                {t('cookiesPage.changes.description2')}
                            </p>
                        </section>

                        {/* 10 */}
                        <section>
                            <h2>
                                {t('cookiesPage.contact.title')}
                            </h2>

                            <p>
                                {t('cookiesPage.contact.description')}
                            </p>

                            <div className="legal-contact-card">
                                <strong>
                                    Mayuri Web Studio
                                </strong>

                                <span>
                                    {t(
                                        'cookiesPage.contact.location'
                                    )}
                                </span>

                                <a href="mailto:mayuri.vijaya@gmail.com">
                                    mayuri.vijaya@gmail.com
                                </a>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Cookies;