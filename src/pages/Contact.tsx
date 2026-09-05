import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/contact.css';
import { useForm } from '@formspree/react';

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
            newErrors.name = 'Please enter your name.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email.';
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address.';
            }
        }

        if (!formData.service) {
            newErrors.service = 'Please select a service.';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Please tell me a little about your project.';
        } else if (formData.message.trim().length < 20) {
            newErrors.message = 'Please provide a little more information.';
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
                <title>Contact | Mayuri Web Studio</title>
                <meta
                    name="description"
                    content="Contact Mayuri Web Studio to discuss a new website, website redesign or ongoing website support."
                />
            </Helmet>
            <main>
                <section className="contact-hero">
                    <div className="contact-hero-container">
                        <p className="section-label">Contact</p>

                        <h1>Let’s Talk About Your Website</h1>

                        <p>
                            Tell me about your business and what kind of website you need.
                            I’ll get back to you to discuss the next steps.
                        </p>
                    </div>
                </section>

                <section className="contact-section">
                    <div className="section-container contact-container">
                        <div className="contact-info">
                            <p className="section-label">Get in Touch</p>

                            <h2>Start with a Simple Conversation</h2>

                            <p>
                                You don’t need to have everything planned before contacting me.
                                Just share a little about your business and what you would like
                                your website to achieve.
                            </p>

                            <div className="contact-details">
                                <div className="contact-detail-card">
                                    <span>Email</span>

                                    <a href="mailto:hello@mayuriwebstudio.se">
                                        hello@mayuriwebstudio.se
                                    </a>
                                </div>

                                <div className="contact-detail-card">
                                    <span>Location</span>
                                    <strong>Stockholm, Sweden</strong>
                                </div>

                                <div className="contact-detail-card">
                                    <span>Response</span>
                                    <strong>Usually within 1–2 business days</strong>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className={errors.name ? 'input-error' : ''}
                                    />

                                    {errors.name && (
                                        <span className="error-message">{errors.name}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className={errors.email ? 'input-error' : ''}
                                    />

                                    {errors.email && (
                                        <span className="error-message">{errors.email}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="business">Business Name</label>

                                    <input
                                        id="business"
                                        name="business"
                                        type="text"
                                        value={formData.business}
                                        onChange={handleChange}
                                        placeholder="Your business name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">What do you need? *</label>

                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={errors.service ? 'input-error' : ''}
                                    >
                                        <option value="" disabled>
                                            Select a service
                                        </option>

                                        <option value="starter">Starter Website</option>
                                        <option value="business">Business Website</option>
                                        <option value="redesign">Website Redesign</option>
                                        <option value="maintenance">Maintenance & Support</option>
                                        <option value="other">Something Else</option>
                                    </select>

                                    {errors.service && (
                                        <span className="error-message">{errors.service}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">
                                        Tell me about your project *
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me a little about your business and what you need..."
                                        className={errors.message ? 'input-error' : ''}
                                    />

                                    {errors.message && (
                                        <span className="error-message">{errors.message}</span>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="contact-submit-btn"
                                    disabled={state.submitting}
                                >
                                    {state.submitting ? 'Sending...' : 'Send Message'}
                                </button>

                                {showSuccess && (
                                    <div className="success-message">
                                        Thank you! Your message has been sent successfully.
                                        I’ll get back to you as soon as possible.
                                    </div>
                                )}
                                {state.errors && (
                                    <div className="form-error-message">
                                        Sorry, something went wrong while sending your message.
                                        Please try again.
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