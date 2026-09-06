import { Helmet } from 'react-helmet-async';

import '../styles/legal.css';

function Privacy() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Mayuri Web Studio</title>

                <meta
                    name="description"
                    content="Privacy Policy for Mayuri Web Studio explaining how personal information is collected and used."
                />
            </Helmet>

            <main className="legal-page">
                <section className="legal-hero">
                    <div className="legal-container">
                        <p className="section-label">Legal</p>

                        <h1>Privacy Policy</h1>

                        <p>
                            This Privacy Policy explains how Mayuri Web Studio
                            collects, uses and protects personal information
                            submitted through this website.
                        </p>
                    </div>
                </section>

                <section className="legal-content-section">
                    <div className="legal-container legal-content">
                        <div className="legal-updated">
                            Last updated: September 2026
                        </div>

                        <section>
                            <h2>1. Information I Collect</h2>

                            <p>
                                When you contact Mayuri Web Studio through the
                                website, you may provide personal information
                                such as:
                            </p>

                            <ul>
                                <li>Your name</li>
                                <li>Your email address</li>
                                <li>Your business name</li>
                                <li>The service you are interested in</li>
                                <li>
                                    Information you include in your project
                                    enquiry or message
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>2. How Your Information Is Used</h2>

                            <p>
                                Information submitted through the website is
                                used to:
                            </p>

                            <ul>
                                <li>Respond to your enquiry</li>
                                <li>
                                    Understand your website or business
                                    requirements
                                </li>
                                <li>
                                    Communicate with you about potential
                                    services
                                </li>
                                <li>
                                    Provide information or quotations you
                                    request
                                </li>
                            </ul>

                            <p>
                                Your information is not sold to third parties.
                            </p>
                        </section>

                        <section>
                            <h2>3. Contact Form</h2>

                            <p>
                                This website uses Formspree to process contact
                                form submissions.
                            </p>

                            <p>
                                When you submit the contact form, the
                                information you enter is sent through
                                Formspree so that Mayuri Web Studio can receive
                                and respond to your message.
                            </p>

                            <p>
                                Formspree may process information according to
                                its own privacy and data-processing practices.
                            </p>
                        </section>

                        <section>
                            <h2>4. How Long Information Is Kept</h2>

                            <p>
                                Personal information is kept only for as long
                                as reasonably necessary to respond to your
                                enquiry, communicate about requested services
                                or meet applicable legal and administrative
                                requirements.
                            </p>
                        </section>

                        <section>
                            <h2>5. Sharing of Information</h2>

                            <p>
                                Personal information is not sold, rented or
                                traded.
                            </p>

                            <p>
                                Information may be processed by service
                                providers that are necessary for operating
                                this website or handling enquiries, such as
                                website hosting and form-processing providers.
                            </p>
                        </section>

                        <section>
                            <h2>6. Your Rights</h2>

                            <p>
                                Depending on applicable data protection law,
                                you may have rights regarding your personal
                                information, including the right to request
                                access, correction or deletion of your data.
                            </p>

                            <p>
                                You may also contact Mayuri Web Studio if you
                                have questions about how your information is
                                handled.
                            </p>
                        </section>

                        <section>
                            <h2>7. Data Security</h2>

                            <p>
                                Reasonable measures are taken to protect
                                information submitted through this website.
                                However, no method of internet transmission or
                                electronic storage can be guaranteed to be
                                completely secure.
                            </p>
                        </section>

                        <section>
                            <h2>8. Third-Party Services</h2>

                            <p>
                                This website may rely on third-party services
                                for hosting, form processing and other
                                technical functionality.
                            </p>

                            <p>
                                Those providers may process limited technical
                                or personal information as part of providing
                                their services.
                            </p>
                        </section>

                        <section>
                            <h2>9. Changes to This Privacy Policy</h2>

                            <p>
                                This Privacy Policy may be updated when the
                                website, services or data-processing practices
                                change.
                            </p>

                            <p>
                                The latest version will always be published on
                                this page.
                            </p>
                        </section>

                        <section>
                            <h2>10. Contact</h2>

                            <p>
                                If you have questions about this Privacy Policy
                                or your personal information, you can contact:
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

export default Privacy;