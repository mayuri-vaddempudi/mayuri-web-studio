import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const savedLanguage = localStorage.getItem('language') || 'en';

const resources = {
    en: {
        translation: {
            header: {
                tagline: 'Simple websites. Real growth.',
                home: 'Home',
                services: 'Services',
                portfolio: 'Portfolio',
                about: 'About',
                contact: 'Contact',
                consultation: 'Get a Free Consultation',
            },

            home: {
                hero: {
                    label: 'Websites for small businesses in Sweden',
                    title1: 'Professional Websites',
                    title2: 'That Help Your Business Grow',
                    description:
                        'Modern, mobile-friendly websites designed for local businesses that want a stronger online presence and more customer enquiries.',
                    consultation: 'Get a Free Consultation',
                    portfolio: 'View My Work',
                    mobileFriendly: 'Mobile friendly',
                    fastLoading: 'Fast loading',
                    clearPricing: 'Clear pricing',
                },

                services: {
                    label: 'Services',
                    title: 'Everything You Need for a Professional Website',
                    description:
                        'Practical website services designed for small businesses that want a clear, modern and professional online presence.',

                    development: {
                        title: 'Website Development',
                        description:
                            'Modern, responsive websites built around your business goals, services and customers.',
                        link: 'Learn More',
                    },

                    redesign: {
                        title: 'Website Redesign',
                        description:
                            'Refresh an outdated website with a cleaner design, improved usability and better mobile experience.',
                        link: 'Learn More',
                    },

                    maintenance: {
                        title: 'Maintenance & Support',
                        description:
                            'Keep your website updated, reliable and working smoothly as your business grows.',
                        link: 'Learn More',
                    },

                    seo: {
                        title: 'SEO Basics',
                        description:
                            'Essential on-page SEO setup to help search engines understand your website and improve visibility.',
                        link: 'Learn More',
                    },

                    allServices: 'View All Services',
                },

                portfolio: {
                    label: 'Portfolio',
                    title: 'Website Concepts for Small Businesses',
                    description:
                        'Explore website concepts created for different types of local businesses.',

                    freshClean: {
                        category: 'Cleaning Business',
                        title: 'Fresh & Clean Stockholm',
                        description:
                            'A modern and responsive website concept for a Stockholm cleaning company, designed to clearly present services and encourage customers to request a quote.',
                    },

                    beauty: {
                        category: 'Beauty & Wellness',
                        title: 'Nordic Beauty Studio',
                        description:
                            'An elegant and responsive website concept for a beauty studio, designed to showcase treatments, build trust and encourage appointment bookings.',
                    },

                    spiceHouse: {
                        category: 'Restaurant',
                        title: 'Spice House',
                        description:
                            'A warm and modern restaurant website concept designed to showcase dishes, present the menu and encourage customers to make a reservation.',
                    },

                    liveDemo: 'Live Demo',
                    comingSoon: 'Coming Soon',
                    viewDemo: 'View Demo →',
                    demoComingSoon: 'Demo Coming Soon',
                    viewPortfolio: 'View Full Portfolio',
                },

                process: {
                    label: 'How It Works',
                    title: 'A Simple Process from Idea to Launch',

                    step1: {
                        title: 'Tell Me About Your Business',
                        description:
                            'We start with a simple conversation about your business, goals and what you need from your website.',
                    },

                    step2: {
                        title: 'Planning & Design',
                        description:
                            'I create a clear structure and visual direction that fits your business and your customers.',
                    },

                    step3: {
                        title: 'Build & Review',
                        description:
                            'The website is developed, tested and refined based on your feedback.',
                    },

                    step4: {
                        title: 'Launch',
                        description:
                            'Once everything is ready, your website goes live and is ready for your customers.',
                    },
                },

                why: {
                    label: 'Why Mayuri Web Studio',
                    title: 'A Practical Approach for Small Businesses',
                    intro:
                        'You do not need an overly complicated website. You need something professional, easy to understand and built around your business.',

                    responsive: {
                        title: 'Mobile Friendly',
                        description:
                            'Your website will work smoothly across phones, tablets and desktop screens.',
                    },

                    clear: {
                        title: 'Clear Communication',
                        description:
                            'You will understand what is being built and what happens at each stage.',
                    },

                    practical: {
                        title: 'Practical Solutions',
                        description:
                            'The focus stays on what your business actually needs rather than unnecessary complexity.',
                    },

                    support: {
                        title: 'Ongoing Support',
                        description:
                            'Help is available after launch when you need updates or improvements.',
                    },

                    cardLabel: 'Built for Small Businesses',
                    stat1: 'Modern Design',
                    stat1Text: 'Clean and professional',
                    stat2: 'Mobile Friendly',
                    stat2Text: 'Responsive on every screen',
                    stat3: 'Clear Structure',
                    stat3Text: 'Easy for customers to understand',
                },

                testimonials: {
                    label: 'Testimonials',
                    title: 'What Clients Say',
                    description:
                        'Feedback from businesses I have had the opportunity to work with.',
                },

                finalCta: {
                    label: 'Ready to Start?',
                    title: 'Let’s Build a Website That Supports Your Business',
                    description:
                        'Tell me about your business and what you need. We can discuss the best next step for your website.',
                    button: 'Get a Free Consultation',
                },
            },

            footer: {
                description:
                    'Modern, responsive and practical websites for small businesses in Sweden.',

                quickLinks: 'Quick Links',
                home: 'Home',
                services: 'Services',
                portfolio: 'Portfolio',
                about: 'About',
                contact: 'Contact',

                servicesTitle: 'Services',
                websiteDevelopment: 'Website Development',
                websiteRedesign: 'Website Redesign',
                maintenanceSupport: 'Maintenance & Support',
                seoBasics: 'SEO Basics',

                startProject: 'Start a Project',
                projectText:
                    'Have a website idea or need help improving your existing website?',
                consultation: 'Get a Free Consultation',
                location: 'Stockholm, Sweden',
                legal: 'Legal',
                privacy: 'Privacy Policy',
                terms: 'Terms & Conditions',
                cookies: 'Cookie Policy',

                rights: 'All rights reserved.',
            },

            servicesPage: {
                hero: {
                    label: 'Our Services',
                    title: 'Simple Website Solutions for Small Businesses',
                    description:
                        'Professional, responsive websites designed to help your business build trust, reach customers and grow online.',
                },

                starter: {
                    title: 'Starter Website',
                    description:
                        'A simple and professional website for small businesses that need a strong online presence.',
                    point1: '1–3 professionally designed pages',
                    point2: 'Mobile responsive design',
                    point3: 'Contact form',
                    point4: 'Basic SEO setup',
                },

                business: {
                    title: 'Business Website',
                    description:
                        'A complete multi-page website for businesses that need more space to present their company, services and contact information professionally.',
                    point1: '4–5 professionally designed pages',
                    point2: 'Home, About, Services and Contact pages',
                    point3: 'Mobile responsive design',
                    point4: 'Contact form',
                    point5: 'Google Maps integration',
                    point6: 'Basic SEO setup',
                    point7: 'Custom domain setup',
                },

                redesign: {
                    title: 'Website Redesign',
                    description:
                        'Give your existing website a fresh and modern look while improving usability, mobile responsiveness and the overall customer experience.',
                    point1: 'Modern responsive layout',
                    point2: 'Improved user experience',
                    point3: 'Improved content structure',
                    point4: 'Performance improvements',
                    point5: 'Updated styling and visual design',
                    point6: 'Basic SEO review',
                },

                maintenance: {
                    title: 'Maintenance & Support',
                    description:
                        'Optional ongoing support to keep your website updated, working smoothly and looking professional after launch.',
                    point1: 'Minor text and image updates',
                    point2: 'Basic technical support',
                    point3: 'Website health checks',
                    point4: 'Small fixes',
                    point5: 'General website assistance',
                },

                price: {
                    startingFrom: 'Starting from',
                    perMonth: 'month',
                    getStarted: 'Get Started',
                },

                included: {
                    label: 'Included',
                    title: 'Every Website Includes the Essentials',
                    description:
                        'Every website is built with the important foundations needed for a professional online presence.',
                    responsive: 'Mobile Responsive',
                    seo: 'SEO Basics',
                    loading: 'Fast Loading',
                    contactForm: 'Contact Form',
                    domain: 'Custom Domain Setup',
                    security: 'Basic Security Setup',
                },

                cta: {
                    label: 'Need Something Different?',
                    title: 'Let’s Find the Right Solution for Your Business',
                    description:
                        'Every business is different. Tell me what you need and I’ll recommend a practical website solution for your business.',
                    button: 'Get a Free Consultation',
                },
            },

            portfolioPage: {
                hero: {
                    label: 'My Work',
                    title: 'Website Concepts for Small Businesses',
                    description:
                        'Explore demo website concepts created to show how different businesses can build a modern, professional and customer-friendly online presence.',
                },

                filters: {
                    All: 'All',
                    Cleaning: 'Cleaning',
                    Restaurant: 'Restaurant',
                    Beauty: 'Beauty',
                    Business: 'Business',
                    Other: 'Other',
                },

                projects: {
                    freshClean: {
                        category: 'Cleaning Company',
                        description:
                            'A clean and modern website concept focused on services, trust and making it easy for customers to request a quote.',
                    },

                    beauty: {
                        category: 'Beauty Salon',
                        description:
                            'An elegant beauty website concept focused on treatments, trust and helping customers find booking information quickly.',
                    },

                    spiceHouse: {
                        category: 'Restaurant',
                        description:
                            'A warm restaurant website concept designed around menu information, food presentation and reservations.',
                    },

                    consulting: {
                        category: 'Consulting',
                        description:
                            'A professional business website concept for consultants and service-based companies that want a trustworthy online presence.',
                    },

                    lens: {
                        category: 'Photography',
                        description:
                            'A clean visual portfolio concept created to showcase photography work and help potential clients make contact.',
                    },

                    stockholmCorner: {
                        category: 'Local Business',
                        description:
                            'A simple local-business website concept with clear services, location information and easy ways for customers to get in touch.',
                    },
                },

                status: {
                    comingSoon: 'Coming Soon',
                    liveDemo: 'Live Demo',
                    demoComingSoon: 'Demo Coming Soon',
                    viewDemo: 'View Demo →',
                    inDevelopment: 'Website concept in development.',
                },

                cta: {
                    label: 'Have a Project in Mind?',
                    title: 'Let’s Create a Website for Your Business',
                    description:
                        'Tell me about your business and what you need. I’ll help you plan a simple and practical website that fits your goals.',
                    button: 'Get a Free Consultation',
                },
            },
            aboutPage: {
                hero: {
                    label: 'About Mayuri Web Studio',
                    title1: 'Websites Built with',
                    title2: 'Your Business in Mind',
                    description:
                        'I help small businesses in Sweden build a clear, professional and trustworthy online presence through modern, responsive websites.',
                    primaryButton: "Let's Work Together",
                    secondaryButton: 'View My Work',
                },

                profile: {
                    role: 'Frontend Developer & Web Designer',
                    basedIn: 'Based in',
                    country: 'Sweden',
                    experience: 'Experience',
                    experienceValue: 'Frontend Development',
                    focus: 'Focus',
                    focusValue: 'Small Businesses',
                    approach: 'Approach',
                    approachValue: 'Simple & Practical',
                },

                story: {
                    label: 'My Story',
                    title: 'Technology Made Simple for Small Businesses',
                    paragraph1:
                        "I'm a frontend developer with professional experience building modern web applications using Angular, React, TypeScript, HTML and CSS.",
                    paragraph2:
                        "Through my development experience, I've seen how important a clear and reliable website can be for a business.",
                    paragraph3:
                        'I started Mayuri Web Studio to help small businesses get professional websites without unnecessary technical complexity.',
                    paragraph4:
                        'My goal is simple: understand your business, identify what your customers need and create a website that supports your business goals.',
                },

                values: {
                    label: 'My Approach',
                    title: 'What Matters When Building Your Website',
                    description:
                        'A good website should be easy to understand, easy to use and built around what your customers actually need.',

                    clear: {
                        title: 'Clear',
                        description:
                            'Visitors should quickly understand what your business offers and how to contact you.',
                    },

                    professional: {
                        title: 'Professional',
                        description:
                            'Modern design that helps your business make a trustworthy first impression.',
                    },

                    responsive: {
                        title: 'Responsive',
                        description:
                            'Your website should work smoothly on mobile, tablet and desktop devices.',
                    },

                    practical: {
                        title: 'Practical',
                        description:
                            'Features and technology should support your business instead of making things more complicated.',
                    },
                },

                technology: {
                    label: 'Technology',
                    title: 'Modern Web Development',
                    description:
                        'I use modern frontend technologies to create fast, maintainable and responsive websites that can grow with your business.',

                    structure: 'Structure',
                    responsiveDesign: 'Responsive Design',
                    frontendDevelopment: 'Frontend Development',
                    reliableDevelopment: 'Reliable Development',
                    webApplications: 'Web Applications',
                    versionControl: 'Version Control',
                },

                cta: {
                    label: "Let's Work Together",
                    title: 'Have an Idea for Your Business Website?',
                    description:
                        'Tell me about your business and what you need. We can discuss a simple and practical approach for getting your website online.',
                    button: 'Get a Free Consultation',
                },
            },
            contactPage: {
                hero: {
                    label: 'Contact',
                    title: 'Let’s Talk About Your Website',
                    description:
                        'Tell me about your business and what you need. I’ll help you understand the best next step for your website.',
                },

                info: {
                    label: 'Get in Touch',
                    title: 'Start with a Simple Conversation',
                    description:
                        'You don’t need to have everything planned before contacting me. Just tell me a little about your business, what you need and what you would like your website to achieve.',

                    email: 'Email',
                    location: 'Location',
                    locationValue: 'Stockholm, Sweden',
                    responseTime: 'Response Time',
                    responseTimeValue: 'Usually within 1–2 business days',
                    consultation: 'Consultation',
                    consultationValue: 'Free initial conversation',
                },

                form: {
                    label: 'Project Enquiry',
                    title: 'Tell Me About Your Project',
                    description:
                        'Fill in the form and I’ll get back to you to discuss your requirements.',

                    name: 'Name',
                    namePlaceholder: 'Your name',

                    email: 'Email',

                    business: 'Business Name',
                    businessPlaceholder: 'Your business name',

                    service: 'What do you need?',
                    selectService: 'Select a service',

                    services: {
                        starter: 'Starter Website',
                        business: 'Business Website',
                        redesign: 'Website Redesign',
                        maintenance: 'Maintenance & Support',
                        other: 'Something Else',
                    },

                    message: 'Tell me about your project',
                    messagePlaceholder:
                        'Tell me a little about your business, what kind of website you need and what you would like it to achieve...',

                    sending: 'Sending...',
                    send: 'Send Message',

                    note:
                        'No obligation. Your details are only used to respond to your enquiry.',

                    success:
                        'Thank you! Your message has been sent successfully. I’ll get back to you as soon as possible.',

                    error:
                        'Sorry, something went wrong while sending your message. Please try again.',
                },

                validation: {
                    name: 'Please enter your name.',
                    emailRequired: 'Please enter your email.',
                    emailInvalid: 'Please enter a valid email address.',
                    service: 'Please select a service.',
                    messageRequired: 'Please tell me a little about your project.',
                    messageShort: 'Please provide a little more information.',
                },
            },
            privacyPage: {
                hero: {
                    label: 'Legal',
                    title: 'Privacy Policy',
                    description:
                        'This Privacy Policy explains how Mayuri Web Studio collects, uses and protects personal information submitted through this website.',
                },

                lastUpdated: 'Last updated: September 2026',

                information: {
                    title: '1. Information I Collect',
                    description:
                        'When you contact Mayuri Web Studio through the website, you may provide personal information such as:',
                    name: 'Your name',
                    email: 'Your email address',
                    business: 'Your business name',
                    service: 'The service you are interested in',
                    message:
                        'Information you include in your project enquiry or message',
                },

                usage: {
                    title: '2. How Your Information Is Used',
                    description:
                        'Information submitted through the website is used to:',
                    respond: 'Respond to your enquiry',
                    understand:
                        'Understand your website or business requirements',
                    communicate:
                        'Communicate with you about potential services',
                    quotation:
                        'Provide information or quotations you request',
                    notSold:
                        'Your information is not sold to third parties.',
                },

                contactForm: {
                    title: '3. Contact Form',
                    description1:
                        'This website uses Formspree to process contact form submissions.',
                    description2:
                        'When you submit the contact form, the information you enter is sent through Formspree so that Mayuri Web Studio can receive and respond to your message.',
                    description3:
                        'Formspree may process information according to its own privacy and data-processing practices.',
                },

                retention: {
                    title: '4. How Long Information Is Kept',
                    description:
                        'Personal information is kept only for as long as reasonably necessary to respond to your enquiry, communicate about requested services or meet applicable legal and administrative requirements.',
                },

                sharing: {
                    title: '5. Sharing of Information',
                    description1:
                        'Personal information is not sold, rented or traded.',
                    description2:
                        'Information may be processed by service providers that are necessary for operating this website or handling enquiries, such as website hosting and form-processing providers.',
                },

                rights: {
                    title: '6. Your Rights',
                    description1:
                        'Depending on applicable data protection law, you may have rights regarding your personal information, including the right to request access, correction or deletion of your data.',
                    description2:
                        'You may also contact Mayuri Web Studio if you have questions about how your information is handled.',
                },

                security: {
                    title: '7. Data Security',
                    description:
                        'Reasonable measures are taken to protect information submitted through this website. However, no method of internet transmission or electronic storage can be guaranteed to be completely secure.',
                },

                thirdParty: {
                    title: '8. Third-Party Services',
                    description1:
                        'This website may rely on third-party services for hosting, form processing and other technical functionality.',
                    description2:
                        'Those providers may process limited technical or personal information as part of providing their services.',
                },

                changes: {
                    title: '9. Changes to This Privacy Policy',
                    description1:
                        'This Privacy Policy may be updated when the website, services or data-processing practices change.',
                    description2:
                        'The latest version will always be published on this page.',
                },

                contact: {
                    title: '10. Contact',
                    description:
                        'If you have questions about this Privacy Policy or your personal information, you can contact:',
                    location: 'Stockholm, Sweden',
                },
            },
            termsPage: {
                hero: {
                    label: 'Legal',
                    title: 'Terms & Conditions',
                    description:
                        'These terms explain the general conditions that apply when working with Mayuri Web Studio for website design, development and related services.',
                },

                lastUpdated: 'Last updated: September 2026',

                about: {
                    title: '1. About These Terms',
                    description1:
                        'These Terms & Conditions apply to services provided by Mayuri Web Studio, including website design, website development, redesign, maintenance and related digital services.',
                    description2:
                        'Specific project requirements, pricing, timelines and deliverables may also be agreed separately in writing before work begins.',
                },

                scope: {
                    title: '2. Project Scope',
                    description1:
                        'Before a project begins, the expected scope of work will be discussed and agreed.',
                    description2: 'This may include items such as:',
                    pages: 'Number of website pages',
                    features: 'Website features and functionality',
                    design: 'Design requirements',
                    content: 'Content requirements',
                    timeline: 'Estimated delivery timeline',
                    price: 'Project price',
                    additional:
                        'Additional work requested outside the agreed project scope may require additional time and cost.',
                },

                client: {
                    title: '3. Client Responsibilities',
                    description1:
                        'Clients are responsible for providing the information and materials needed to complete the project.',
                    description2: 'This may include:',
                    business: 'Business information',
                    text: 'Text and website content',
                    branding: 'Logos and branding materials',
                    images: 'Images and other media',
                    feedback: 'Feedback and approvals within a reasonable timeframe',
                    delays:
                        'Delays in receiving required content, feedback or approvals may affect the project timeline.',
                },

                copyright: {
                    title: '4. Content and Copyright',
                    description1:
                        'Clients are responsible for ensuring that the content, images, logos and other materials they provide can legally be used on their website.',
                    description2:
                        'Mayuri Web Studio is not responsible for copyright or ownership issues relating to materials supplied by the client.',
                },

                payment: {
                    title: '5. Pricing and Payment',
                    description1:
                        'Project pricing will normally be agreed before development begins.',
                    description2:
                        'Payment terms, including any deposit, milestone payment or final payment, will be communicated as part of the project agreement.',
                    description3:
                        'Additional work that falls outside the agreed project scope may be quoted separately.',
                },

                timelines: {
                    title: '6. Project Timelines',
                    description1:
                        'Estimated project timelines are based on the agreed scope and the availability of required content, information and feedback.',
                    description2:
                        'Reasonable efforts will be made to meet agreed delivery dates, but timelines may need to change if project requirements change or required information is delayed.',
                },

                revisions: {
                    title: '7. Revisions',
                    description1:
                        'Reasonable revisions may be included as part of a website project depending on what has been agreed before development begins.',
                    description2:
                        'Significant design changes, new features or repeated revisions outside the agreed scope may be treated as additional work.',
                },

                domain: {
                    title: '8. Domain and Hosting',
                    description1:
                        'Domain registration and website hosting may be managed by the client or arranged separately depending on the project.',
                    description2:
                        'Where possible, clients are encouraged to keep ownership of their own domain and hosting accounts.',
                    description3:
                        'Third-party hosting providers, domain registrars and other external services operate under their own terms and conditions.',
                },

                thirdParty: {
                    title: '9. Third-Party Services',
                    description1:
                        'A website may use third-party tools or services, such as hosting platforms, contact form providers, analytics, booking systems or other integrations.',
                    description2:
                        'Mayuri Web Studio cannot guarantee the continued availability, pricing or operation of third-party services.',
                },

                testing: {
                    title: '10. Website Testing',
                    description1:
                        'Websites will be tested on commonly used modern browsers and devices before delivery.',
                    description2:
                        'It may not be possible to guarantee identical appearance or functionality on every browser, device or older software version.',
                },

                maintenance: {
                    title: '11. Maintenance and Updates',
                    description1:
                        'Ongoing website maintenance is not automatically included unless specifically agreed as part of the project or a separate maintenance service.',
                    description2:
                        'Future changes, updates or support requests may be quoted separately.',
                },

                portfolio: {
                    title: '12. Portfolio Use',
                    description1:
                        'Mayuri Web Studio may ask for permission to display completed website work in its portfolio or marketing materials.',
                    description2:
                        'Client work will not be presented as portfolio work without appropriate permission where such permission is required.',
                },

                liability: {
                    title: '13. Limitation of Liability',
                    description1:
                        'Reasonable care will be taken when designing and developing websites.',
                    description2:
                        'However, Mayuri Web Studio cannot guarantee that a website will always operate without interruption, that third-party services will remain available or that a website will generate a specific level of traffic, sales or business results.',
                },

                cancellation: {
                    title: '14. Cancellation',
                    description1:
                        'If a project is cancelled after work has begun, payment may still be required for work already completed up to the date of cancellation.',
                    description2:
                        'Any specific cancellation terms may also be agreed before the project begins.',
                },

                changes: {
                    title: '15. Changes to These Terms',
                    description1:
                        'These Terms & Conditions may be updated as the services offered by Mayuri Web Studio change.',
                    description2:
                        'The latest version will be published on this page.',
                },

                contact: {
                    title: '16. Contact',
                    description:
                        'If you have questions about these terms, please contact:',
                    location: 'Stockholm, Sweden',
                },
            },
            cookiesPage: {
                hero: {
                    label: 'Legal',
                    title: 'Cookie Policy',
                    description:
                        'This Cookie Policy explains how cookies and similar technologies may be used on the Mayuri Web Studio website.',
                },

                lastUpdated: 'Last updated: September 2026',

                whatAreCookies: {
                    title: '1. What Are Cookies?',
                    description1:
                        'Cookies are small text files that can be stored on your device when you visit a website.',
                    description2:
                        'They can be used for purposes such as remembering preferences, supporting website functionality and understanding how a website is used.',
                },

                used: {
                    title: '2. Cookies Used on This Website',
                    description1:
                        'Mayuri Web Studio aims to keep the website simple and use only the technologies necessary to operate it.',
                    description2:
                        'The website may use essential technical storage or cookies required by the website, hosting platform or third-party services used to provide functionality.',
                },

                essential: {
                    title: '3. Essential Cookies',
                    description1:
                        'Essential cookies or similar technologies are used when they are necessary for the website or a service to function correctly.',
                    description2:
                        'These technologies generally cannot be disabled without affecting the operation of the relevant feature or service.',
                },

                contactForm: {
                    title: '4. Contact Form Services',
                    description1:
                        'This website uses Formspree to process messages submitted through the contact form.',
                    description2:
                        'Formspree may use technical information, cookies or similar technologies as part of providing its service and preventing abuse or spam.',
                },

                hosting: {
                    title: '5. Hosting and Technical Services',
                    description1:
                        'The website may use hosting, security and performance services provided by third-party providers.',
                    description2:
                        'These services may process technical information such as IP addresses, browser information, device information and request data where necessary to operate, secure or deliver the website.',
                },

                analytics: {
                    title: '6. Analytics',
                    description1:
                        'At present, Mayuri Web Studio does not intentionally use advertising or behavioural tracking cookies on this website.',
                    description2:
                        'If analytics or other non-essential tracking technologies are introduced in the future, this Cookie Policy will be updated and any required consent mechanism will be added.',
                },

                managing: {
                    title: '7. Managing Cookies',
                    description1:
                        'Most browsers allow you to view, block or delete cookies through the browser settings.',
                    description2:
                        'Blocking essential cookies or technical storage may affect how some parts of a website or third-party service function.',
                },

                thirdParty: {
                    title: '8. Third-Party Services',
                    description1:
                        'Third-party providers used by this website may have their own cookie and privacy policies.',
                    description2:
                        'Their use of cookies or similar technologies is governed by their own policies and practices.',
                },

                changes: {
                    title: '9. Changes to This Cookie Policy',
                    description1:
                        'This Cookie Policy may be updated if the website begins using new services, analytics tools or other technologies.',
                    description2:
                        'The most recent version will be available on this page.',
                },

                contact: {
                    title: '10. Contact',
                    description:
                        'If you have questions about this Cookie Policy, please contact:',
                    location: 'Stockholm, Sweden',
                },
            },
            seo: {
                home: {
                    title: 'Mayuri Web Studio | Websites for Small Businesses in Sweden',
                    description:
                        'Modern, responsive and professional websites for small businesses in Sweden. Website development, redesign, maintenance and support.',
                },

                services: {
                    title: 'Web Design Services | Mayuri Web Studio',
                    description:
                        'Professional website development, redesign, maintenance and support services for small businesses in Sweden.',
                },

                portfolio: {
                    title: 'Website Portfolio | Mayuri Web Studio',
                    description:
                        'Explore website concepts created by Mayuri Web Studio for small businesses, restaurants, beauty studios and local companies.',
                },

                about: {
                    title: 'About | Mayuri Web Studio',
                    description:
                        'Learn about Mayuri Web Studio and my approach to building modern, practical and responsive websites for small businesses in Sweden.',
                },

                contact: {
                    title: 'Contact | Mayuri Web Studio',
                    description:
                        'Contact Mayuri Web Studio to discuss a new website, redesign or website support for your small business.',
                },

                privacy: {
                    title: 'Privacy Policy | Mayuri Web Studio',
                    description:
                        'Privacy Policy explaining how Mayuri Web Studio collects, uses and protects personal information submitted through this website.',
                },

                terms: {
                    title: 'Terms & Conditions | Mayuri Web Studio',
                    description:
                        'Terms and conditions for website design, development, redesign, maintenance and related services provided by Mayuri Web Studio.',
                },

                cookies: {
                    title: 'Cookie Policy | Mayuri Web Studio',
                    description:
                        'Cookie Policy explaining how cookies and similar technologies may be used on the Mayuri Web Studio website.',
                },
            },
        },
    },

    sv: {
        translation: {
            header: {
                tagline: 'Enkla hemsidor. Verklig tillväxt.',
                home: 'Hem',
                services: 'Tjänster',
                portfolio: 'Portfolio',
                about: 'Om mig',
                contact: 'Kontakt',
                consultation: 'Få en kostnadsfri konsultation',
            },

            home: {
                hero: {
                    label: 'Hemsidor för småföretag i Sverige',
                    title1: 'Professionella hemsidor',
                    title2: 'som hjälper ditt företag att växa',
                    description:
                        'Moderna och mobilanpassade hemsidor för lokala företag som vill stärka sin digitala närvaro och få fler kundförfrågningar.',
                    consultation: 'Få en kostnadsfri konsultation',
                    portfolio: 'Se mina projekt',
                    mobileFriendly: 'Mobilanpassad',
                    fastLoading: 'Snabb laddning',
                    clearPricing: 'Tydlig prissättning',
                },

                services: {
                    label: 'Tjänster',
                    title: 'Allt du behöver för en professionell hemsida',
                    description:
                        'Praktiska webbtjänster för småföretag som vill ha en tydlig, modern och professionell digital närvaro.',

                    development: {
                        title: 'Webbutveckling',
                        description:
                            'Moderna och responsiva hemsidor byggda utifrån ditt företags mål, tjänster och kunder.',
                        link: 'Läs mer',
                    },

                    redesign: {
                        title: 'Omdesign av hemsida',
                        description:
                            'Förnya en äldre hemsida med modernare design, bättre användarvänlighet och förbättrad mobilupplevelse.',
                        link: 'Läs mer',
                    },

                    maintenance: {
                        title: 'Underhåll & Support',
                        description:
                            'Håll din hemsida uppdaterad, stabil och fungerande när ditt företag utvecklas.',
                        link: 'Läs mer',
                    },

                    seo: {
                        title: 'Grundläggande SEO',
                        description:
                            'Grundläggande SEO-inställningar som hjälper sökmotorer att förstå din hemsida och förbättra synligheten.',
                        link: 'Läs mer',
                    },

                    allServices: 'Se alla tjänster',
                },

                portfolio: {
                    label: 'Portfolio',
                    title: 'Hemsideskoncept för småföretag',
                    description:
                        'Utforska hemsideskoncept skapade för olika typer av lokala företag.',

                    freshClean: {
                        category: 'Städföretag',
                        title: 'Fresh & Clean Stockholm',
                        description:
                            'Ett modernt och responsivt hemsideskoncept för ett städföretag i Stockholm, utformat för att tydligt presentera tjänster och göra det enkelt för kunder att begära offert.',
                    },

                    beauty: {
                        category: 'Skönhet & Wellness',
                        title: 'Nordic Beauty Studio',
                        description:
                            'Ett elegant och responsivt hemsideskoncept för en skönhetsstudio, utformat för att visa behandlingar, skapa förtroende och uppmuntra bokningar.',
                    },

                    spiceHouse: {
                        category: 'Restaurang',
                        title: 'Spice House',
                        description:
                            'Ett varmt och modernt restaurangkoncept som lyfter fram maträtter, meny och gör det enkelt för kunder att boka bord.',
                    },

                    liveDemo: 'Live-demo',
                    comingSoon: 'Kommer snart',
                    viewDemo: 'Visa demo →',
                    demoComingSoon: 'Demo kommer snart',
                    viewPortfolio: 'Se hela portfolion',
                },

                process: {
                    label: 'Så fungerar det',
                    title: 'En enkel process från idé till lansering',

                    step1: {
                        title: 'Berätta om ditt företag',
                        description:
                            'Vi börjar med ett enkelt samtal om ditt företag, dina mål och vad du behöver från din hemsida.',
                    },

                    step2: {
                        title: 'Planering & Design',
                        description:
                            'Jag skapar en tydlig struktur och visuell riktning som passar ditt företag och dina kunder.',
                    },

                    step3: {
                        title: 'Utveckling & Granskning',
                        description:
                            'Hemsidan utvecklas, testas och förbättras utifrån din feedback.',
                    },

                    step4: {
                        title: 'Lansering',
                        description:
                            'När allt är klart publiceras hemsidan och blir tillgänglig för dina kunder.',
                    },
                },

                why: {
                    label: 'Varför Mayuri Web Studio',
                    title: 'En praktisk lösning för småföretag',
                    intro:
                        'Du behöver inte en onödigt komplicerad hemsida. Du behöver en professionell, tydlig lösning som är byggd för ditt företag.',

                    responsive: {
                        title: 'Mobilanpassad',
                        description:
                            'Din hemsida fungerar smidigt på mobil, surfplatta och dator.',
                    },

                    clear: {
                        title: 'Tydlig kommunikation',
                        description:
                            'Du får tydlig information om vad som byggs och vad som händer i varje steg.',
                    },

                    practical: {
                        title: 'Praktiska lösningar',
                        description:
                            'Fokus ligger på vad ditt företag faktiskt behöver, utan onödig komplexitet.',
                    },

                    support: {
                        title: 'Fortsatt support',
                        description:
                            'Efter lanseringen finns hjälp tillgänglig när du behöver uppdateringar eller förbättringar.',
                    },

                    cardLabel: 'Byggd för småföretag',
                    stat1: 'Modern design',
                    stat1Text: 'Ren och professionell',
                    stat2: 'Mobilanpassad',
                    stat2Text: 'Responsiv på alla skärmar',
                    stat3: 'Tydlig struktur',
                    stat3Text: 'Enkelt för kunder att förstå',
                },

                testimonials: {
                    label: 'Kundomdömen',
                    title: 'Vad kunder säger',
                    description:
                        'Feedback från företag som jag har haft möjlighet att arbeta med.',
                },

                finalCta: {
                    label: 'Redo att börja?',
                    title: 'Låt oss bygga en hemsida som hjälper ditt företag',
                    description:
                        'Berätta om ditt företag och vad du behöver. Vi kan tillsammans diskutera nästa steg för din hemsida.',
                    button: 'Få en kostnadsfri konsultation',
                },
            },

            footer: {
                description:
                    'Moderna, responsiva och praktiska hemsidor för småföretag i Sverige.',

                quickLinks: 'Snabblänkar',
                home: 'Hem',
                services: 'Tjänster',
                portfolio: 'Portfolio',
                about: 'Om mig',
                contact: 'Kontakt',

                servicesTitle: 'Tjänster',
                websiteDevelopment: 'Webbutveckling',
                websiteRedesign: 'Omdesign av hemsida',
                maintenanceSupport: 'Underhåll & Support',
                seoBasics: 'Grundläggande SEO',

                startProject: 'Starta ett projekt',
                projectText:
                    'Har du en idé för en hemsida eller behöver du hjälp med att förbättra din nuvarande hemsida?',
                consultation: 'Få en kostnadsfri konsultation',
                location: 'Stockholm, Sverige',
                legal: 'Juridiskt',
                privacy: 'Integritetspolicy',
                terms: 'Villkor',
                cookies: 'Cookiepolicy',

                rights: 'Alla rättigheter förbehållna.',
            },

            servicesPage: {
                hero: {
                    label: 'Våra tjänster',
                    title: 'Enkla webblösningar för småföretag',
                    description:
                        'Professionella och responsiva hemsidor som hjälper ditt företag att skapa förtroende, nå fler kunder och växa online.',
                },

                starter: {
                    title: 'Startpaket för hemsida',
                    description:
                        'En enkel och professionell hemsida för småföretag som behöver en stark digital närvaro.',
                    point1: '1–3 professionellt designade sidor',
                    point2: 'Mobilanpassad design',
                    point3: 'Kontaktformulär',
                    point4: 'Grundläggande SEO',
                },

                business: {
                    title: 'Företagshemsida',
                    description:
                        'En komplett hemsida med flera sidor för företag som behöver mer utrymme för att presentera företaget, tjänster och kontaktinformation professionellt.',
                    point1: '4–5 professionellt designade sidor',
                    point2: 'Hem, Om oss, Tjänster och Kontakt',
                    point3: 'Mobilanpassad design',
                    point4: 'Kontaktformulär',
                    point5: 'Google Maps-integration',
                    point6: 'Grundläggande SEO',
                    point7: 'Konfiguration av egen domän',
                },

                redesign: {
                    title: 'Omdesign av hemsida',
                    description:
                        'Ge din befintliga hemsida ett modernt utseende samtidigt som användarvänlighet, mobilanpassning och kundupplevelse förbättras.',
                    point1: 'Modern och responsiv layout',
                    point2: 'Förbättrad användarupplevelse',
                    point3: 'Förbättrad innehållsstruktur',
                    point4: 'Prestandaförbättringar',
                    point5: 'Uppdaterad design och visuell stil',
                    point6: 'Grundläggande SEO-granskning',
                },

                maintenance: {
                    title: 'Underhåll & Support',
                    description:
                        'Valfri löpande support för att hålla din hemsida uppdaterad, fungerande och professionell efter lansering.',
                    point1: 'Mindre text- och bilduppdateringar',
                    point2: 'Grundläggande teknisk support',
                    point3: 'Kontroller av hemsidans funktion',
                    point4: 'Mindre korrigeringar',
                    point5: 'Allmän hjälp med hemsidan',
                },

                price: {
                    startingFrom: 'Från',
                    perMonth: 'månad',
                    getStarted: 'Kom igång',
                },

                included: {
                    label: 'Ingår',
                    title: 'Alla hemsidor innehåller det viktigaste',
                    description:
                        'Varje hemsida byggs med de viktiga grunder som behövs för en professionell digital närvaro.',
                    responsive: 'Mobilanpassad',
                    seo: 'Grundläggande SEO',
                    loading: 'Snabb laddning',
                    contactForm: 'Kontaktformulär',
                    domain: 'Konfiguration av egen domän',
                    security: 'Grundläggande säkerhet',
                },

                cta: {
                    label: 'Behöver du något annat?',
                    title: 'Låt oss hitta rätt lösning för ditt företag',
                    description:
                        'Alla företag är olika. Berätta vad du behöver så rekommenderar jag en praktisk webblösning för ditt företag.',
                    button: 'Få en kostnadsfri konsultation',
                },
            },

            portfolioPage: {
                hero: {
                    label: 'Mina projekt',
                    title: 'Hemsideskoncept för småföretag',
                    description:
                        'Utforska demohemsidor som visar hur olika företag kan skapa en modern, professionell och kundvänlig digital närvaro.',
                },

                filters: {
                    All: 'Alla',
                    Cleaning: 'Städning',
                    Restaurant: 'Restaurang',
                    Beauty: 'Skönhet',
                    Business: 'Företag',
                    Other: 'Övrigt',
                },

                projects: {
                    freshClean: {
                        category: 'Städföretag',
                        description:
                            'Ett rent och modernt hemsideskoncept med fokus på tjänster, förtroende och att göra det enkelt för kunder att begära offert.',
                    },

                    beauty: {
                        category: 'Skönhetssalong',
                        description:
                            'Ett elegant hemsideskoncept med fokus på behandlingar, förtroende och att hjälpa kunder att snabbt hitta bokningsinformation.',
                    },

                    spiceHouse: {
                        category: 'Restaurang',
                        description:
                            'Ett varmt restaurangkoncept med fokus på menyinformation, matpresentation och bokningar.',
                    },

                    consulting: {
                        category: 'Konsultverksamhet',
                        description:
                            'Ett professionellt företagskoncept för konsulter och tjänsteföretag som vill skapa en trovärdig digital närvaro.',
                    },

                    lens: {
                        category: 'Fotografi',
                        description:
                            'Ett rent visuellt portfoliokoncept för att visa fotografiskt arbete och hjälpa potentiella kunder att ta kontakt.',
                    },

                    stockholmCorner: {
                        category: 'Lokalt företag',
                        description:
                            'Ett enkelt hemsideskoncept för lokala företag med tydliga tjänster, platsinformation och enkla kontaktvägar.',
                    },
                },

                status: {
                    comingSoon: 'Kommer snart',
                    liveDemo: 'Live-demo',
                    demoComingSoon: 'Demo kommer snart',
                    viewDemo: 'Visa demo →',
                    inDevelopment: 'Hemsideskoncept under utveckling.',
                },

                cta: {
                    label: 'Har du ett projekt i åtanke?',
                    title: 'Låt oss skapa en hemsida för ditt företag',
                    description:
                        'Berätta om ditt företag och vad du behöver. Jag hjälper dig att planera en enkel och praktisk hemsida som passar dina mål.',
                    button: 'Få en kostnadsfri konsultation',
                },
            },
            aboutPage: {
                hero: {
                    label: 'Om Mayuri Web Studio',
                    title1: 'Hemsidor skapade med',
                    title2: 'ditt företag i fokus',
                    description:
                        'Jag hjälper småföretag i Sverige att skapa en tydlig, professionell och trovärdig digital närvaro genom moderna och responsiva hemsidor.',
                    primaryButton: 'Låt oss arbeta tillsammans',
                    secondaryButton: 'Se mina projekt',
                },

                profile: {
                    role: 'Frontendutvecklare & Webbdesigner',
                    basedIn: 'Baserad i',
                    country: 'Sverige',
                    experience: 'Erfarenhet',
                    experienceValue: 'Frontendutveckling',
                    focus: 'Fokus',
                    focusValue: 'Småföretag',
                    approach: 'Arbetssätt',
                    approachValue: 'Enkelt & Praktiskt',
                },

                story: {
                    label: 'Min berättelse',
                    title: 'Teknik gjort enkelt för småföretag',
                    paragraph1:
                        'Jag är frontendutvecklare med professionell erfarenhet av att bygga moderna webbapplikationer med Angular, React, TypeScript, HTML och CSS.',
                    paragraph2:
                        'Genom min erfarenhet inom webbutveckling har jag sett hur viktig en tydlig och pålitlig hemsida kan vara för ett företag.',
                    paragraph3:
                        'Jag startade Mayuri Web Studio för att hjälpa småföretag att få professionella hemsidor utan onödig teknisk komplexitet.',
                    paragraph4:
                        'Mitt mål är enkelt: att förstå ditt företag, identifiera vad dina kunder behöver och skapa en hemsida som stödjer dina affärsmål.',
                },

                values: {
                    label: 'Mitt arbetssätt',
                    title: 'Det som är viktigt när din hemsida byggs',
                    description:
                        'En bra hemsida ska vara enkel att förstå, enkel att använda och byggd utifrån vad dina kunder faktiskt behöver.',

                    clear: {
                        title: 'Tydlig',
                        description:
                            'Besökare ska snabbt förstå vad ditt företag erbjuder och hur de kan kontakta dig.',
                    },

                    professional: {
                        title: 'Professionell',
                        description:
                            'Modern design som hjälper ditt företag att skapa ett trovärdigt första intryck.',
                    },

                    responsive: {
                        title: 'Responsiv',
                        description:
                            'Din hemsida ska fungera smidigt på mobil, surfplatta och dator.',
                    },

                    practical: {
                        title: 'Praktisk',
                        description:
                            'Funktioner och teknik ska stödja ditt företag i stället för att göra saker mer komplicerade.',
                    },
                },

                technology: {
                    label: 'Teknik',
                    title: 'Modern webbutveckling',
                    description:
                        'Jag använder modern frontendteknik för att skapa snabba, underhållbara och responsiva hemsidor som kan växa tillsammans med ditt företag.',

                    structure: 'Struktur',
                    responsiveDesign: 'Responsiv design',
                    frontendDevelopment: 'Frontendutveckling',
                    reliableDevelopment: 'Tillförlitlig utveckling',
                    webApplications: 'Webbapplikationer',
                    versionControl: 'Versionshantering',
                },

                cta: {
                    label: 'Låt oss arbeta tillsammans',
                    title: 'Har du en idé för ditt företags hemsida?',
                    description:
                        'Berätta om ditt företag och vad du behöver. Vi kan diskutera en enkel och praktisk väg för att få din hemsida online.',
                    button: 'Få en kostnadsfri konsultation',
                },
            },
            contactPage: {
                hero: {
                    label: 'Kontakt',
                    title: 'Låt oss prata om din hemsida',
                    description:
                        'Berätta om ditt företag och vad du behöver. Jag hjälper dig att förstå vilket nästa steg som passar bäst för din hemsida.',
                },

                info: {
                    label: 'Kontakta mig',
                    title: 'Börja med ett enkelt samtal',
                    description:
                        'Du behöver inte ha allt planerat innan du kontaktar mig. Berätta bara lite om ditt företag, vad du behöver och vad du vill att din hemsida ska hjälpa dig att uppnå.',

                    email: 'E-post',
                    location: 'Plats',
                    locationValue: 'Stockholm, Sverige',
                    responseTime: 'Svarstid',
                    responseTimeValue: 'Vanligtvis inom 1–2 arbetsdagar',
                    consultation: 'Konsultation',
                    consultationValue: 'Kostnadsfritt första samtal',
                },

                form: {
                    label: 'Projektförfrågan',
                    title: 'Berätta om ditt projekt',
                    description:
                        'Fyll i formuläret så återkommer jag för att diskutera dina behov.',

                    name: 'Namn',
                    namePlaceholder: 'Ditt namn',

                    email: 'E-post',

                    business: 'Företagsnamn',
                    businessPlaceholder: 'Ditt företagsnamn',

                    service: 'Vad behöver du hjälp med?',
                    selectService: 'Välj en tjänst',

                    services: {
                        starter: 'Startpaket för hemsida',
                        business: 'Företagshemsida',
                        redesign: 'Omdesign av hemsida',
                        maintenance: 'Underhåll & Support',
                        other: 'Något annat',
                    },

                    message: 'Berätta om ditt projekt',
                    messagePlaceholder:
                        'Berätta lite om ditt företag, vilken typ av hemsida du behöver och vad du vill att den ska hjälpa dig att uppnå...',

                    sending: 'Skickar...',
                    send: 'Skicka meddelande',

                    note:
                        'Ingen förpliktelse. Dina uppgifter används endast för att svara på din förfrågan.',

                    success:
                        'Tack! Ditt meddelande har skickats. Jag återkommer till dig så snart som möjligt.',

                    error:
                        'Något gick fel när meddelandet skickades. Försök igen.',
                },

                validation: {
                    name: 'Ange ditt namn.',
                    emailRequired: 'Ange din e-postadress.',
                    emailInvalid: 'Ange en giltig e-postadress.',
                    service: 'Välj en tjänst.',
                    messageRequired: 'Berätta lite om ditt projekt.',
                    messageShort: 'Ge gärna lite mer information.',
                },
            },
            privacyPage: {
                hero: {
                    label: 'Juridisk information',
                    title: 'Integritetspolicy',
                    description:
                        'Denna integritetspolicy förklarar hur Mayuri Web Studio samlar in, använder och skyddar personuppgifter som lämnas via denna webbplats.',
                },

                lastUpdated: 'Senast uppdaterad: september 2026',

                information: {
                    title: '1. Personuppgifter som samlas in',
                    description:
                        'När du kontaktar Mayuri Web Studio via webbplatsen kan du lämna personuppgifter såsom:',
                    name: 'Ditt namn',
                    email: 'Din e-postadress',
                    business: 'Ditt företagsnamn',
                    service: 'Tjänsten du är intresserad av',
                    message:
                        'Information som du inkluderar i din projektförfrågan eller ditt meddelande',
                },

                usage: {
                    title: '2. Hur dina uppgifter används',
                    description:
                        'Information som lämnas via webbplatsen används för att:',
                    respond: 'Besvara din förfrågan',
                    understand:
                        'Förstå dina behov avseende hemsida eller verksamhet',
                    communicate:
                        'Kommunicera med dig om möjliga tjänster',
                    quotation:
                        'Tillhandahålla information eller offerter som du begär',
                    notSold:
                        'Dina personuppgifter säljs inte till tredje part.',
                },

                contactForm: {
                    title: '3. Kontaktformulär',
                    description1:
                        'Denna webbplats använder Formspree för att hantera meddelanden som skickas via kontaktformuläret.',
                    description2:
                        'När du skickar kontaktformuläret skickas informationen du anger via Formspree så att Mayuri Web Studio kan ta emot och besvara ditt meddelande.',
                    description3:
                        'Formspree kan behandla information enligt sina egna rutiner för integritet och databehandling.',
                },

                retention: {
                    title: '4. Hur länge uppgifterna sparas',
                    description:
                        'Personuppgifter sparas endast så länge som det rimligen är nödvändigt för att besvara din förfrågan, kommunicera om efterfrågade tjänster eller uppfylla tillämpliga juridiska och administrativa krav.',
                },

                sharing: {
                    title: '5. Delning av information',
                    description1:
                        'Personuppgifter säljs, hyrs ut eller handlas inte.',
                    description2:
                        'Information kan behandlas av tjänsteleverantörer som behövs för att driva webbplatsen eller hantera förfrågningar, exempelvis leverantörer av webbhotell och formulärhantering.',
                },

                rights: {
                    title: '6. Dina rättigheter',
                    description1:
                        'Beroende på tillämplig dataskyddslagstiftning kan du ha rättigheter avseende dina personuppgifter, inklusive rätt att begära tillgång till, rättelse av eller radering av dina uppgifter.',
                    description2:
                        'Du kan även kontakta Mayuri Web Studio om du har frågor om hur dina personuppgifter hanteras.',
                },

                security: {
                    title: '7. Datasäkerhet',
                    description:
                        'Rimliga åtgärder vidtas för att skydda information som skickas via denna webbplats. Ingen metod för överföring via internet eller elektronisk lagring kan dock garanteras vara helt säker.',
                },

                thirdParty: {
                    title: '8. Tredjepartstjänster',
                    description1:
                        'Denna webbplats kan använda tredjepartstjänster för hosting, formulärhantering och annan teknisk funktionalitet.',
                    description2:
                        'Dessa leverantörer kan behandla begränsad teknisk information eller personuppgifter som en del av sina tjänster.',
                },

                changes: {
                    title: '9. Ändringar av denna integritetspolicy',
                    description1:
                        'Denna integritetspolicy kan uppdateras när webbplatsen, tjänsterna eller rutinerna för behandling av personuppgifter förändras.',
                    description2:
                        'Den senaste versionen publiceras alltid på denna sida.',
                },

                contact: {
                    title: '10. Kontakt',
                    description:
                        'Om du har frågor om denna integritetspolicy eller dina personuppgifter kan du kontakta:',
                    location: 'Stockholm, Sverige',
                },
            },
            termsPage: {
                hero: {
                    label: 'Juridisk information',
                    title: 'Allmänna villkor',
                    description:
                        'Dessa villkor beskriver de allmänna förutsättningarna för att anlita Mayuri Web Studio för webbdesign, webbutveckling och relaterade tjänster.',
                },

                lastUpdated: 'Senast uppdaterad: september 2026',

                about: {
                    title: '1. Om dessa villkor',
                    description1:
                        'Dessa allmänna villkor gäller för tjänster som tillhandahålls av Mayuri Web Studio, inklusive webbdesign, webbutveckling, omdesign, underhåll och relaterade digitala tjänster.',
                    description2:
                        'Specifika projektkrav, priser, tidsplaner och leveranser kan även avtalas separat skriftligen innan arbetet påbörjas.',
                },

                scope: {
                    title: '2. Projektets omfattning',
                    description1:
                        'Innan ett projekt påbörjas diskuteras och avtalas den förväntade omfattningen av arbetet.',
                    description2: 'Detta kan exempelvis omfatta:',
                    pages: 'Antal sidor på hemsidan',
                    features: 'Funktioner och funktionalitet',
                    design: 'Designkrav',
                    content: 'Innehållskrav',
                    timeline: 'Beräknad leveranstid',
                    price: 'Projektpris',
                    additional:
                        'Ytterligare arbete utanför den överenskomna projektomfattningen kan innebära extra tid och kostnad.',
                },

                client: {
                    title: '3. Kundens ansvar',
                    description1:
                        'Kunden ansvarar för att tillhandahålla den information och det material som behövs för att genomföra projektet.',
                    description2: 'Detta kan exempelvis omfatta:',
                    business: 'Företagsinformation',
                    text: 'Texter och innehåll för hemsidan',
                    branding: 'Logotyper och varumärkesmaterial',
                    images: 'Bilder och annat mediematerial',
                    feedback: 'Feedback och godkännanden inom rimlig tid',
                    delays:
                        'Förseningar i leveransen av nödvändigt innehåll, feedback eller godkännanden kan påverka projektets tidsplan.',
                },

                copyright: {
                    title: '4. Innehåll och upphovsrätt',
                    description1:
                        'Kunden ansvarar för att säkerställa att innehåll, bilder, logotyper och annat material som tillhandahålls får användas lagligt på hemsidan.',
                    description2:
                        'Mayuri Web Studio ansvarar inte för upphovsrätts- eller äganderättsproblem som gäller material som kunden har tillhandahållit.',
                },

                payment: {
                    title: '5. Priser och betalning',
                    description1:
                        'Projektets pris avtalas normalt innan utvecklingsarbetet påbörjas.',
                    description2:
                        'Betalningsvillkor, inklusive eventuell deposition, delbetalning eller slutbetalning, kommuniceras som en del av projektöverenskommelsen.',
                    description3:
                        'Ytterligare arbete utanför den överenskomna projektomfattningen kan offereras separat.',
                },

                timelines: {
                    title: '6. Projektets tidsplan',
                    description1:
                        'Beräknade projekttider baseras på den överenskomna omfattningen och tillgången till nödvändigt innehåll, information och feedback.',
                    description2:
                        'Rimliga ansträngningar görs för att hålla överenskomna leveransdatum, men tidsplanen kan behöva ändras om projektkraven förändras eller nödvändig information försenas.',
                },

                revisions: {
                    title: '7. Ändringar och revideringar',
                    description1:
                        'Rimliga revideringar kan ingå i ett webbprojekt beroende på vad som har avtalats innan utvecklingen påbörjas.',
                    description2:
                        'Större designändringar, nya funktioner eller upprepade revideringar utanför den överenskomna omfattningen kan behandlas som extra arbete.',
                },

                domain: {
                    title: '8. Domän och hosting',
                    description1:
                        'Domänregistrering och hosting kan hanteras av kunden eller ordnas separat beroende på projektet.',
                    description2:
                        'Där det är möjligt rekommenderas kunden att själv äga sin domän och sina hostingkonton.',
                    description3:
                        'Tredjepartsleverantörer av hosting, domänregistrering och andra externa tjänster omfattas av sina egna villkor.',
                },

                thirdParty: {
                    title: '9. Tredjepartstjänster',
                    description1:
                        'En hemsida kan använda verktyg eller tjänster från tredje part, exempelvis hostingplattformar, kontaktformulär, analystjänster, bokningssystem eller andra integrationer.',
                    description2:
                        'Mayuri Web Studio kan inte garantera fortsatt tillgänglighet, prissättning eller funktion för tjänster som tillhandahålls av tredje part.',
                },

                testing: {
                    title: '10. Testning av hemsidan',
                    description1:
                        'Hemsidor testas på vanligt förekommande moderna webbläsare och enheter före leverans.',
                    description2:
                        'Det är inte alltid möjligt att garantera identiskt utseende eller funktion på alla webbläsare, enheter eller äldre programvaruversioner.',
                },

                maintenance: {
                    title: '11. Underhåll och uppdateringar',
                    description1:
                        'Löpande underhåll av hemsidan ingår inte automatiskt om det inte uttryckligen har avtalats som en del av projektet eller en separat underhållstjänst.',
                    description2:
                        'Framtida ändringar, uppdateringar eller supportförfrågningar kan offereras separat.',
                },

                portfolio: {
                    title: '12. Användning i portfolio',
                    description1:
                        'Mayuri Web Studio kan be om tillstånd att visa färdigställda webbprojekt i sin portfolio eller sitt marknadsföringsmaterial.',
                    description2:
                        'Kundprojekt presenteras inte som portfolioarbete utan lämpligt tillstånd när sådant tillstånd krävs.',
                },

                liability: {
                    title: '13. Ansvarsbegränsning',
                    description1:
                        'Rimlig omsorg kommer att iakttas vid design och utveckling av hemsidor.',
                    description2:
                        'Mayuri Web Studio kan dock inte garantera att en hemsida alltid fungerar utan avbrott, att tredjepartstjänster förblir tillgängliga eller att en hemsida genererar en viss mängd trafik, försäljning eller affärsresultat.',
                },

                cancellation: {
                    title: '14. Avbokning',
                    description1:
                        'Om ett projekt avbryts efter att arbetet har påbörjats kan betalning fortfarande krävas för det arbete som har utförts fram till avbokningsdatumet.',
                    description2:
                        'Särskilda avbokningsvillkor kan också avtalas innan projektet påbörjas.',
                },

                changes: {
                    title: '15. Ändringar av dessa villkor',
                    description1:
                        'Dessa allmänna villkor kan uppdateras när de tjänster som Mayuri Web Studio erbjuder förändras.',
                    description2:
                        'Den senaste versionen publiceras på denna sida.',
                },

                contact: {
                    title: '16. Kontakt',
                    description:
                        'Om du har frågor om dessa villkor, vänligen kontakta:',
                    location: 'Stockholm, Sverige',
                },
            },
            cookiesPage: {
                hero: {
                    label: 'Juridisk information',
                    title: 'Cookiepolicy',
                    description:
                        'Denna cookiepolicy förklarar hur cookies och liknande tekniker kan användas på Mayuri Web Studios webbplats.',
                },

                lastUpdated: 'Senast uppdaterad: september 2026',

                whatAreCookies: {
                    title: '1. Vad är cookies?',
                    description1:
                        'Cookies är små textfiler som kan lagras på din enhet när du besöker en webbplats.',
                    description2:
                        'De kan användas för exempelvis att komma ihåg inställningar, stödja webbplatsens funktioner och förstå hur webbplatsen används.',
                },

                used: {
                    title: '2. Cookies som används på denna webbplats',
                    description1:
                        'Mayuri Web Studio strävar efter att hålla webbplatsen enkel och endast använda den teknik som behövs för att driva den.',
                    description2:
                        'Webbplatsen kan använda nödvändig teknisk lagring eller cookies som krävs av webbplatsen, hostingplattformen eller tredjepartstjänster som används för att tillhandahålla funktionalitet.',
                },

                essential: {
                    title: '3. Nödvändiga cookies',
                    description1:
                        'Nödvändiga cookies eller liknande tekniker används när de behövs för att webbplatsen eller en tjänst ska fungera korrekt.',
                    description2:
                        'Dessa tekniker kan i allmänhet inte inaktiveras utan att funktionen eller tjänsten påverkas.',
                },

                contactForm: {
                    title: '4. Kontaktformulär',
                    description1:
                        'Denna webbplats använder Formspree för att behandla meddelanden som skickas via kontaktformuläret.',
                    description2:
                        'Formspree kan använda teknisk information, cookies eller liknande tekniker som en del av tjänsten och för att förhindra missbruk eller spam.',
                },

                hosting: {
                    title: '5. Hosting och tekniska tjänster',
                    description1:
                        'Webbplatsen kan använda hosting-, säkerhets- och prestandatjänster som tillhandahålls av tredje part.',
                    description2:
                        'Dessa tjänster kan behandla teknisk information såsom IP-adresser, webbläsarinformation, enhetsinformation och förfrågningsdata när det behövs för att driva, skydda eller leverera webbplatsen.',
                },

                analytics: {
                    title: '6. Analys',
                    description1:
                        'För närvarande använder Mayuri Web Studio inte avsiktligt cookies för annonsering eller beteendebaserad spårning på denna webbplats.',
                    description2:
                        'Om analysverktyg eller annan icke-nödvändig spårning införs i framtiden kommer denna cookiepolicy att uppdateras och en eventuell nödvändig samtyckeslösning att läggas till.',
                },

                managing: {
                    title: '7. Hantera cookies',
                    description1:
                        'De flesta webbläsare gör det möjligt att visa, blockera eller radera cookies via webbläsarens inställningar.',
                    description2:
                        'Blockering av nödvändiga cookies eller teknisk lagring kan påverka hur vissa delar av webbplatsen eller tredjepartstjänster fungerar.',
                },

                thirdParty: {
                    title: '8. Tredjepartstjänster',
                    description1:
                        'Tredjepartsleverantörer som används av denna webbplats kan ha egna cookie- och integritetspolicyer.',
                    description2:
                        'Deras användning av cookies eller liknande tekniker regleras av deras egna policyer och rutiner.',
                },

                changes: {
                    title: '9. Ändringar av denna cookiepolicy',
                    description1:
                        'Denna cookiepolicy kan uppdateras om webbplatsen börjar använda nya tjänster, analysverktyg eller annan teknik.',
                    description2:
                        'Den senaste versionen kommer att finnas tillgänglig på denna sida.',
                },

                contact: {
                    title: '10. Kontakt',
                    description:
                        'Om du har frågor om denna cookiepolicy, vänligen kontakta:',
                    location: 'Stockholm, Sverige',
                },
            },
            seo: {
                home: {
                    title: 'Mayuri Web Studio | Hemsidor för småföretag i Sverige',
                    description:
                        'Moderna, responsiva och professionella hemsidor för småföretag i Sverige. Webbutveckling, omdesign, underhåll och support.',
                },

                services: {
                    title: 'Webbtjänster | Mayuri Web Studio',
                    description:
                        'Professionell webbutveckling, omdesign, underhåll och support för småföretag i Sverige.',
                },

                portfolio: {
                    title: 'Portfolio | Mayuri Web Studio',
                    description:
                        'Utforska hemsideskoncept skapade av Mayuri Web Studio för småföretag, restauranger, skönhetsstudior och lokala verksamheter.',
                },

                about: {
                    title: 'Om Mayuri Web Studio',
                    description:
                        'Läs mer om Mayuri Web Studio och mitt arbetssätt för att skapa moderna, praktiska och responsiva hemsidor för småföretag i Sverige.',
                },

                contact: {
                    title: 'Kontakt | Mayuri Web Studio',
                    description:
                        'Kontakta Mayuri Web Studio för att diskutera en ny hemsida, omdesign eller support för ditt företag.',
                },

                privacy: {
                    title: 'Integritetspolicy | Mayuri Web Studio',
                    description:
                        'Integritetspolicy som beskriver hur Mayuri Web Studio samlar in, använder och skyddar personuppgifter som lämnas via webbplatsen.',
                },

                terms: {
                    title: 'Allmänna villkor | Mayuri Web Studio',
                    description:
                        'Allmänna villkor för webbdesign, webbutveckling, omdesign, underhåll och relaterade tjänster från Mayuri Web Studio.',
                },

                cookies: {
                    title: 'Cookiepolicy | Mayuri Web Studio',
                    description:
                        'Cookiepolicy som beskriver hur cookies och liknande tekniker kan användas på Mayuri Web Studios webbplats.',
                },
            },
        },
    },
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage,
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;