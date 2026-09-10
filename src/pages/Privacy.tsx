import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import '../styles/legal.css';

function Privacy() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('seo.privacy.title')}</title>

                <meta
                    name="description"
                    content={t('seo.privacy.description')}
                />

                <link
                    rel="canonical"
                    href="https://mayuriwebstudio.se/privacy"
                />

                <meta
                    property="og:title"
                    content={t('seo.privacy.title')}
                />

                <meta
                    property="og:description"
                    content={t('seo.privacy.description')}
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://mayuriwebstudio.se/privacy"
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
                            {t('privacyPage.hero.label')}
                        </p>

                        <h1>
                            {t('privacyPage.hero.title')}
                        </h1>

                        <p>
                            {t('privacyPage.hero.description')}
                        </p>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="legal-content-section">
                    <div className="legal-container legal-content">
                        <div className="legal-updated">
                            {t('privacyPage.lastUpdated')}
                        </div>

                        {/* 1 */}
                        <section>
                            <h2>
                                {t('privacyPage.information.title')}
                            </h2>

                            <p>
                                {t('privacyPage.information.description')}
                            </p>

                            <ul>
                                <li>
                                    {t('privacyPage.information.name')}
                                </li>

                                <li>
                                    {t('privacyPage.information.email')}
                                </li>

                                <li>
                                    {t('privacyPage.information.business')}
                                </li>

                                <li>
                                    {t('privacyPage.information.service')}
                                </li>

                                <li>
                                    {t('privacyPage.information.message')}
                                </li>
                            </ul>
                        </section>

                        {/* 2 */}
                        <section>
                            <h2>
                                {t('privacyPage.usage.title')}
                            </h2>

                            <p>
                                {t('privacyPage.usage.description')}
                            </p>

                            <ul>
                                <li>
                                    {t('privacyPage.usage.respond')}
                                </li>

                                <li>
                                    {t('privacyPage.usage.understand')}
                                </li>

                                <li>
                                    {t('privacyPage.usage.communicate')}
                                </li>

                                <li>
                                    {t('privacyPage.usage.quotation')}
                                </li>
                            </ul>

                            <p>
                                {t('privacyPage.usage.notSold')}
                            </p>
                        </section>

                        {/* 3 */}
                        <section>
                            <h2>
                                {t('privacyPage.contactForm.title')}
                            </h2>

                            <p>
                                {t('privacyPage.contactForm.description1')}
                            </p>

                            <p>
                                {t('privacyPage.contactForm.description2')}
                            </p>

                            <p>
                                {t('privacyPage.contactForm.description3')}
                            </p>
                        </section>

                        {/* 4 */}
                        <section>
                            <h2>
                                {t('privacyPage.retention.title')}
                            </h2>

                            <p>
                                {t('privacyPage.retention.description')}
                            </p>
                        </section>

                        {/* 5 */}
                        <section>
                            <h2>
                                {t('privacyPage.sharing.title')}
                            </h2>

                            <p>
                                {t('privacyPage.sharing.description1')}
                            </p>

                            <p>
                                {t('privacyPage.sharing.description2')}
                            </p>
                        </section>

                        {/* 6 */}
                        <section>
                            <h2>
                                {t('privacyPage.rights.title')}
                            </h2>

                            <p>
                                {t('privacyPage.rights.description1')}
                            </p>

                            <p>
                                {t('privacyPage.rights.description2')}
                            </p>
                        </section>

                        {/* 7 */}
                        <section>
                            <h2>
                                {t('privacyPage.security.title')}
                            </h2>

                            <p>
                                {t('privacyPage.security.description')}
                            </p>
                        </section>

                        {/* 8 */}
                        <section>
                            <h2>
                                {t('privacyPage.thirdParty.title')}
                            </h2>

                            <p>
                                {t('privacyPage.thirdParty.description1')}
                            </p>

                            <p>
                                {t('privacyPage.thirdParty.description2')}
                            </p>
                        </section>

                        {/* 9 */}
                        <section>
                            <h2>
                                {t('privacyPage.changes.title')}
                            </h2>

                            <p>
                                {t('privacyPage.changes.description1')}
                            </p>

                            <p>
                                {t('privacyPage.changes.description2')}
                            </p>
                        </section>

                        {/* 10 */}
                        <section>
                            <h2>
                                {t('privacyPage.contact.title')}
                            </h2>

                            <p>
                                {t('privacyPage.contact.description')}
                            </p>

                            <div className="legal-contact-card">
                                <strong>Mayuri Web Studio</strong>

                                <span>
                                    {t('privacyPage.contact.location')}
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

export default Privacy;