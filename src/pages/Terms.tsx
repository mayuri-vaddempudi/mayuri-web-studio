import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import '../styles/legal.css';

function Terms() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('seo.terms.title')}</title>

                <meta
                    name="description"
                    content={t('seo.terms.description')}
                />

                <link
                    rel="canonical"
                    href="https://mayuriwebstudio.se/terms"
                />

                <meta
                    property="og:title"
                    content={t('seo.terms.title')}
                />

                <meta
                    property="og:description"
                    content={t('seo.terms.description')}
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://mayuriwebstudio.se/terms"
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
                            {t('termsPage.hero.label')}
                        </p>

                        <h1>{t('termsPage.hero.title')}</h1>

                        <p>{t('termsPage.hero.description')}</p>
                    </div>
                </section>

                <section className="legal-content-section">
                    <div className="legal-container legal-content">
                        <div className="legal-updated">
                            {t('termsPage.lastUpdated')}
                        </div>

                        {/* 1 */}
                        <section>
                            <h2>{t('termsPage.about.title')}</h2>

                            <p>{t('termsPage.about.description1')}</p>

                            <p>{t('termsPage.about.description2')}</p>
                        </section>

                        {/* 2 */}
                        <section>
                            <h2>{t('termsPage.scope.title')}</h2>

                            <p>{t('termsPage.scope.description1')}</p>

                            <p>{t('termsPage.scope.description2')}</p>

                            <ul>
                                <li>{t('termsPage.scope.pages')}</li>
                                <li>{t('termsPage.scope.features')}</li>
                                <li>{t('termsPage.scope.design')}</li>
                                <li>{t('termsPage.scope.content')}</li>
                                <li>{t('termsPage.scope.timeline')}</li>
                                <li>{t('termsPage.scope.price')}</li>
                            </ul>

                            <p>{t('termsPage.scope.additional')}</p>
                        </section>

                        {/* 3 */}
                        <section>
                            <h2>{t('termsPage.client.title')}</h2>

                            <p>{t('termsPage.client.description1')}</p>

                            <p>{t('termsPage.client.description2')}</p>

                            <ul>
                                <li>{t('termsPage.client.business')}</li>
                                <li>{t('termsPage.client.text')}</li>
                                <li>{t('termsPage.client.branding')}</li>
                                <li>{t('termsPage.client.images')}</li>
                                <li>{t('termsPage.client.feedback')}</li>
                            </ul>

                            <p>{t('termsPage.client.delays')}</p>
                        </section>

                        {/* 4 */}
                        <section>
                            <h2>{t('termsPage.copyright.title')}</h2>

                            <p>
                                {t('termsPage.copyright.description1')}
                            </p>

                            <p>
                                {t('termsPage.copyright.description2')}
                            </p>
                        </section>

                        {/* 5 */}
                        <section>
                            <h2>{t('termsPage.payment.title')}</h2>

                            <p>{t('termsPage.payment.description1')}</p>

                            <p>{t('termsPage.payment.description2')}</p>

                            <p>{t('termsPage.payment.description3')}</p>
                        </section>

                        {/* 6 */}
                        <section>
                            <h2>{t('termsPage.timelines.title')}</h2>

                            <p>{t('termsPage.timelines.description1')}</p>

                            <p>{t('termsPage.timelines.description2')}</p>
                        </section>

                        {/* 7 */}
                        <section>
                            <h2>{t('termsPage.revisions.title')}</h2>

                            <p>{t('termsPage.revisions.description1')}</p>

                            <p>{t('termsPage.revisions.description2')}</p>
                        </section>

                        {/* 8 */}
                        <section>
                            <h2>{t('termsPage.domain.title')}</h2>

                            <p>{t('termsPage.domain.description1')}</p>

                            <p>{t('termsPage.domain.description2')}</p>

                            <p>{t('termsPage.domain.description3')}</p>
                        </section>

                        {/* 9 */}
                        <section>
                            <h2>{t('termsPage.thirdParty.title')}</h2>

                            <p>
                                {t('termsPage.thirdParty.description1')}
                            </p>

                            <p>
                                {t('termsPage.thirdParty.description2')}
                            </p>
                        </section>

                        {/* 10 */}
                        <section>
                            <h2>{t('termsPage.testing.title')}</h2>

                            <p>{t('termsPage.testing.description1')}</p>

                            <p>{t('termsPage.testing.description2')}</p>
                        </section>

                        {/* 11 */}
                        <section>
                            <h2>{t('termsPage.maintenance.title')}</h2>

                            <p>
                                {t('termsPage.maintenance.description1')}
                            </p>

                            <p>
                                {t('termsPage.maintenance.description2')}
                            </p>
                        </section>

                        {/* 12 */}
                        <section>
                            <h2>{t('termsPage.portfolio.title')}</h2>

                            <p>{t('termsPage.portfolio.description1')}</p>

                            <p>{t('termsPage.portfolio.description2')}</p>
                        </section>

                        {/* 13 */}
                        <section>
                            <h2>{t('termsPage.liability.title')}</h2>

                            <p>{t('termsPage.liability.description1')}</p>

                            <p>{t('termsPage.liability.description2')}</p>
                        </section>

                        {/* 14 */}
                        <section>
                            <h2>{t('termsPage.cancellation.title')}</h2>

                            <p>
                                {t('termsPage.cancellation.description1')}
                            </p>

                            <p>
                                {t('termsPage.cancellation.description2')}
                            </p>
                        </section>

                        {/* 15 */}
                        <section>
                            <h2>{t('termsPage.changes.title')}</h2>

                            <p>{t('termsPage.changes.description1')}</p>

                            <p>{t('termsPage.changes.description2')}</p>
                        </section>

                        {/* 16 */}
                        <section>
                            <h2>{t('termsPage.contact.title')}</h2>

                            <p>{t('termsPage.contact.description')}</p>

                            <div className="legal-contact-card">
                                <strong>Mayuri Web Studio</strong>

                                <span>
                                    {t('termsPage.contact.location')}
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

export default Terms;