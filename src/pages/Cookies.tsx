import { Helmet } from 'react-helmet-async';

import '../styles/legal.css';

function Cookies() {
    return (
        <>
            <Helmet>
                <title>Cookie Policy | Mayuri Web Studio</title>

                <meta
                    name="description"
                    content="Cookie Policy for Mayuri Web Studio explaining how cookies and similar technologies may be used on this website."
                />
            </Helmet>

            <main className="legal-page">
                <section className="legal-hero">
                    <div className="legal-container">
                        <p className="section-label">Legal</p>

                        <h1>Cookie Policy</h1>

                        <p>
                            This Cookie Policy explains how cookies and similar
                            technologies may be used on the Mayuri Web Studio
                            website.
                        </p>
                    </div>
                </section>

                <section className="legal-content-section">
                    <div className="legal-container legal-content">
                        <div className="legal-updated">
                            Last updated: September 2026
                        </div>

                        <section>
                            <h2>1. What Are Cookies?</h2>

                            <p>
                                Cookies are small text files that can be stored
                                on your device when you visit a website.
                            </p>

                            <p>
                                They can be used for purposes such as remembering
                                preferences, supporting website functionality
                                and understanding how a website is used.
                            </p>
                        </section>

                        <section>
                            <h2>2. Cookies Used on This Website</h2>

                            <p>
                                Mayuri Web Studio aims to keep the website simple
                                and use only the technologies necessary to
                                operate it.
                            </p>

                            <p>
                                The website may use essential technical storage
                                or cookies required by the website, hosting
                                platform or third-party services used to provide
                                functionality.
                            </p>
                        </section>

                        <section>
                            <h2>3. Essential Cookies</h2>

                            <p>
                                Essential cookies or similar technologies are
                                used when they are necessary for the website or
                                a service to function correctly.
                            </p>

                            <p>
                                These technologies generally cannot be disabled
                                without affecting the operation of the relevant
                                feature or service.
                            </p>
                        </section>

                        <section>
                            <h2>4. Contact Form Services</h2>

                            <p>
                                This website uses Formspree to process messages
                                submitted through the contact form.
                            </p>

                            <p>
                                Formspree may use technical information, cookies
                                or similar technologies as part of providing its
                                service and preventing abuse or spam.
                            </p>
                        </section>

                        <section>
                            <h2>5. Hosting and Technical Services</h2>

                            <p>
                                The website may use hosting, security and
                                performance services provided by third-party
                                providers.
                            </p>

                            <p>
                                These services may process technical information
                                such as IP addresses, browser information,
                                device information and request data where
                                necessary to operate, secure or deliver the
                                website.
                            </p>
                        </section>

                        <section>
                            <h2>6. Analytics</h2>

                            <p>
                                At present, Mayuri Web Studio does not
                                intentionally use advertising or behavioural
                                tracking cookies on this website.
                            </p>

                            <p>
                                If analytics or other non-essential tracking
                                technologies are introduced in the future, this
                                Cookie Policy will be updated and any required
                                consent mechanism will be added.
                            </p>
                        </section>

                        <section>
                            <h2>7. Managing Cookies</h2>

                            <p>
                                Most browsers allow you to view, block or delete
                                cookies through the browser settings.
                            </p>

                            <p>
                                Blocking essential cookies or technical storage
                                may affect how some parts of a website or
                                third-party service function.
                            </p>
                        </section>

                        <section>
                            <h2>8. Third-Party Services</h2>

                            <p>
                                Third-party providers used by this website may
                                have their own cookie and privacy policies.
                            </p>

                            <p>
                                Their use of cookies or similar technologies is
                                governed by their own policies and practices.
                            </p>
                        </section>

                        <section>
                            <h2>9. Changes to This Cookie Policy</h2>

                            <p>
                                This Cookie Policy may be updated if the website
                                begins using new services, analytics tools or
                                other technologies.
                            </p>

                            <p>
                                The most recent version will be available on
                                this page.
                            </p>
                        </section>

                        <section>
                            <h2>10. Contact</h2>

                            <p>
                                If you have questions about this Cookie Policy,
                                please contact:
                            </p>

                            <div className="legal-contact-card">
                                <strong>Mayuri Web Studio</strong>

                                <span>Stockholm, Sweden</span>

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