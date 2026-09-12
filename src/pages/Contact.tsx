import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from '@formspree/react';
import { useTranslation } from 'react-i18next';

import '../styles/contact.css';

type FormData = {
    name: string;
    email: string;
    business: string;
    service: string;
    message: string;
};

type FormErrors = {
    name?: string;
    email?: string;
    service?: string;
    message?: string;
};

function Contact() {
    const { t, i18n } = useTranslation();
    const [state, formspreeSubmit] = useForm('myeypadw');

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        business: '',
        service: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: undefined,
        }));

        setShowSuccess(false);
    };

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = t('contactPage.validation.name');
        }

        if (!formData.email.trim()) {
            newErrors.email = t('contactPage.validation.emailRequired');
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(formData.email)) {
                newErrors.email = t('contactPage.validation.emailInvalid');
            }
        }

        if (!formData.service) {
            newErrors.service = t('contactPage.validation.service');
        }

        if (!formData.message.trim()) {
            newErrors.message = t('contactPage.validation.messageRequired');
        } else if (formData.message.trim().length < 20) {
            newErrors.message = t('contactPage.validation.messageShort');
        }

        return newErrors;
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        await formspreeSubmit(event);
    };

    useEffect(() => {
        if (state.succeeded) {
            setShowSuccess(true);

            setFormData({
                name: '',
                email: '',
                business: '',
                service: '',
                message: '',
            });
        }
    }, [state.succeeded]);

    return (
        <>
            <Helmet>
                <title>{t('seo.contact.title')}</title>

                <meta
                    name="description"
                    content={t('seo.contact.description')}
                />

                <link
                    rel="canonical"
                    href="https://mayuriwebstudio.se/contact"
                />

                <meta
                    property="og:title"
                    content={t('seo.contact.title')}
                />

                <meta
                    property="og:description"
                    content={t('seo.contact.description')}
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://mayuriwebstudio.se/contact"
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
                <section className="contact-hero">
                    <div className="contact-hero-container">
                        <p className="section-label">
                            {t('contactPage.hero.label')}
                        </p>

                        <h1>
                            {t('contactPage.hero.title')}
                        </h1>

                        <p>
                            {t('contactPage.hero.description')}
                        </p>
                    </div>
                </section>

                <section className="contact-section">
                    <div className="section-container contact-container">
                        {/* CONTACT INFORMATION */}
                        <div className="contact-info">
                            <p className="section-label">
                                {t('contactPage.info.label')}
                            </p>

                            <h2>
                                {t('contactPage.info.title')}
                            </h2>

                            <p>
                                {t('contactPage.info.description')}
                            </p>

                            <div className="contact-details">
                                <div className="contact-detail-card">
                                    <span>
                                        {t('contactPage.info.email')}
                                    </span>

                                   <a href="mailto:hello@mayuriwebstudio.se" className="contact-email">
                                        hello@mayuriwebstudio.se
                                    </a>
                                </div>

                                <div className="contact-detail-card">
                                    <span>
                                        {t('contactPage.info.location')}
                                    </span>

                                    <strong>
                                        {t('contactPage.info.locationValue')}
                                    </strong>
                                </div>

                                <div className="contact-detail-card">
                                    <span>
                                        {t('contactPage.info.responseTime')}
                                    </span>

                                    <strong>
                                        {t(
                                            'contactPage.info.responseTimeValue'
                                        )}
                                    </strong>
                                </div>

                                <div className="contact-detail-card">
                                    <span>
                                        {t('contactPage.info.consultation')}
                                    </span>

                                    <strong>
                                        {t(
                                            'contactPage.info.consultationValue'
                                        )}
                                    </strong>
                                </div>
                            </div>
                        </div>

                        {/* CONTACT FORM */}
                        <div className="contact-form-wrapper">
                            <div className="contact-form-heading">
                                <span>
                                    {t('contactPage.form.label')}
                                </span>

                                <h2>
                                    {t('contactPage.form.title')}
                                </h2>

                                <p>
                                    {t('contactPage.form.description')}
                                </p>
                            </div>

                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                {/* NAME */}
                                <div className="form-group">
                                    <label htmlFor="name">
                                        {t('contactPage.form.name')} *
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t(
                                            'contactPage.form.namePlaceholder'
                                        )}
                                        autoComplete="name"
                                        className={
                                            errors.name
                                                ? 'input-error'
                                                : ''
                                        }
                                    />

                                    {errors.name && (
                                        <span className="error-message">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>

                                {/* EMAIL */}
                                <div className="form-group">
                                    <label htmlFor="email">
                                        {t('contactPage.form.email')} *
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        className={
                                            errors.email
                                                ? 'input-error'
                                                : ''
                                        }
                                    />

                                    {errors.email && (
                                        <span className="error-message">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>

                                {/* BUSINESS */}
                                <div className="form-group">
                                    <label htmlFor="business">
                                        {t('contactPage.form.business')}
                                    </label>

                                    <input
                                        id="business"
                                        name="business"
                                        type="text"
                                        value={formData.business}
                                        onChange={handleChange}
                                        placeholder={t(
                                            'contactPage.form.businessPlaceholder'
                                        )}
                                        autoComplete="organization"
                                    />
                                </div>

                                {/* SERVICE */}
                                <div className="form-group">
                                    <label htmlFor="service">
                                        {t('contactPage.form.service')} *
                                    </label>

                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={
                                            errors.service
                                                ? 'input-error'
                                                : ''
                                        }
                                    >
                                        <option value="" disabled>
                                            {t(
                                                'contactPage.form.selectService'
                                            )}
                                        </option>

                                        <option value="starter">
                                            {t(
                                                'contactPage.form.services.starter'
                                            )}
                                        </option>

                                        <option value="business">
                                            {t(
                                                'contactPage.form.services.business'
                                            )}
                                        </option>

                                        <option value="redesign">
                                            {t(
                                                'contactPage.form.services.redesign'
                                            )}
                                        </option>

                                        <option value="maintenance">
                                            {t(
                                                'contactPage.form.services.maintenance'
                                            )}
                                        </option>

                                        <option value="other">
                                            {t(
                                                'contactPage.form.services.other'
                                            )}
                                        </option>
                                    </select>

                                    {errors.service && (
                                        <span className="error-message">
                                            {errors.service}
                                        </span>
                                    )}
                                </div>

                                {/* MESSAGE */}
                                <div className="form-group">
                                    <label htmlFor="message">
                                        {t('contactPage.form.message')} *
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={t(
                                            'contactPage.form.messagePlaceholder'
                                        )}
                                        className={
                                            errors.message
                                                ? 'input-error'
                                                : ''
                                        }
                                    />

                                    {errors.message && (
                                        <span className="error-message">
                                            {errors.message}
                                        </span>
                                    )}
                                </div>

                                {/* SUBMIT */}
                                <button
                                    type="submit"
                                    className="contact-submit-btn"
                                    disabled={state.submitting}
                                >
                                    {state.submitting
                                        ? t('contactPage.form.sending')
                                        : t('contactPage.form.send')}
                                </button>

                                <p className="form-note">
                                    {t('contactPage.form.note')}
                                </p>

                                {/* SUCCESS */}
                                {showSuccess && (
                                    <div className="success-message">
                                        {t('contactPage.form.success')}
                                    </div>
                                )}

                                {/* FORMSPREE ERROR */}
                                {state.errors && (
                                    <div className="form-error-message">
                                        {t('contactPage.form.error')}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Contact;