---
title: "Contact"
date: "2024-07-02 22:19:13"
slug: "contact"
description: ""
seoTitle: ""
---

<!-- wp:html -->
<!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #374151;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', sans-serif;
        }
        
        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .hero-section {
            background: linear-gradient(135deg, #2E5A88 0%, rgba(46, 90, 136, 0.9) 100%);
            position: relative;
            overflow: hidden;
        }
        
        .hero-content {
            position: relative;
            text-align: center;
            padding: 6rem 0;
        }
        
        .award-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            background: rgba(245, 184, 46, 0.2);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(245, 184, 46, 0.3);
            margin-bottom: 2rem;
        }
        
        .award-text {
            color: #F5B82E;
            font-size: 0.875rem;
            font-weight: 600;
        }
        
        .hero-title {
            font-size: 3rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1.5rem;
            line-height: 1.1;
        }
        
        .hero-subtitle {
            color: #86BBD8;
            display: block;
        }
        
        .hero-tagline {
            font-size: 1.25rem;
            color: #F5B82E;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        
        .hero-description {
            font-size: 1.125rem;
            color: #86BBD8;
            max-width: 32rem;
            margin: 0 auto 3rem auto;
        }
        
        .hero-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        
        .btn-primary {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 2rem;
            font-size: 1.125rem;
            font-weight: 600;
            color: #2E5A88;
            background: #F5B82E;
            border: none;
            border-radius: 1rem;
            text-decoration: none;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            transition: all 0.3s ease;
            cursor: pointer;
            min-width: 200px;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .btn-secondary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 2rem;
            font-size: 1.125rem;
            font-weight: 600;
            color: white;
            background: rgba(134, 187, 216, 0.2);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(134, 187, 216, 0.3);
            border-radius: 1rem;
            text-decoration: none;
            transition: all 0.3s ease;
            min-width: 200px;
        }
        
        .btn-secondary:hover {
            background: rgba(134, 187, 216, 0.3);
        }
        
        .main-content {
            background: linear-gradient(135deg, white 0%, rgba(134, 187, 216, 0.05) 50%, rgba(134, 187, 216, 0.1) 100%);
            padding: 4rem 0;
        }
        
        .content-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
        }
        
        .card {
            background: white;
            border: 1px solid rgba(134, 187, 216, 0.2);
            border-radius: 1rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            overflow: hidden;
        }
        
        .card-content {
            padding: 2rem;
        }
        
        .card-title {
            font-size: 1.875rem;
            font-weight: 700;
            color: #2E5A88;
            margin-bottom: 2rem;
        }
        
        .feature-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .feature-item {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .feature-icon {
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .icon-blue { background: #86BBD8; }
        .icon-gold { background: #F5B82E; }
        .icon-navy { background: #2E5A88; }
        
        .feature-content h3 {
            font-weight: 600;
            color: #2E5A88;
            margin-bottom: 0.25rem;
        }
        
        .feature-content p {
            color: #6B7280;
            font-size: 0.875rem;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .stat-card {
            background: rgba(245, 184, 46, 0.1);
            border: 1px solid rgba(245, 184, 46, 0.3);
            border-radius: 0.75rem;
            padding: 1.5rem;
            text-align: center;
        }
        
        .stat-card.blue {
            background: rgba(134, 187, 216, 0.1);
            border-color: rgba(134, 187, 216, 0.3);
        }
        
        .stat-number {
            font-size: 1.5rem;
            font-weight: 700;
            color: #2E5A88;
            display: block;
        }
        
        .stat-label {
            font-size: 0.875rem;
            color: #2E5A88;
        }
        
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }
        
        .contact-item.center {
            align-items: center;
        }
        
        .contact-content h4 {
            font-weight: 600;
            color: #2E5A88;
            margin-bottom: 0.25rem;
        }
        
        .contact-content p,
        .contact-content address {
            color: #6B7280;
            font-style: normal;
            line-height: 1.6;
        }
        
        .contact-content a {
            color: #6B7280;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .contact-content a:hover {
            color: #2E5A88;
        }
        
        .hours-table {
            color: #6B7280;
        }
        
        .hours-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.25rem;
        }
        
        .services-card {
            background: #2E5A88;
            color: white;
        }
        
        .service-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border-radius: 0.75rem;
            margin-bottom: 1rem;
        }
        
        .service-dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
        }
        
        .dot-blue { background: #86BBD8; }
        .dot-gold { background: #F5B82E; }
        
        .service-content h4 {
            font-weight: 600;
            margin-bottom: 0.25rem;
        }
        
        .service-content h4 a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .service-content h4 a:hover {
            color: #86BBD8;
        }
        
        .service-content p {
            color: #86BBD8;
            font-size: 0.875rem;
        }
        
        .billing-info {
            padding: 1rem;
            background: rgba(245, 184, 46, 0.2);
            backdrop-filter: blur(8px);
            border-radius: 0.75rem;
            border: 1px solid rgba(245, 184, 46, 0.3);
            margin-top: 1.5rem;
        }
        
        .billing-text {
            color: #F5B82E;
            font-size: 0.875rem;
        }
        
        .map-section {
            margin-top: 5rem;
            text-align: center;
        }
        
        .map-title {
            font-size: 2.25rem;
            font-weight: 700;
            color: #2E5A88;
            margin-bottom: 1rem;
        }
        
        .map-description {
            font-size: 1.125rem;
            color: #6B7280;
            margin-bottom: 3rem;
        }
        
        .map-container {
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .map-footer {
            padding: 2rem;
            background: #2E5A88;
            color: white;
        }
        
        .map-footer-content {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .map-info h4 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .map-info p {
            color: #86BBD8;
        }
        
        .map-buttons {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .btn-map {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            text-align: center;
        }
        
        .btn-map.secondary {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(134, 187, 216, 0.3);
            color: white;
        }
        
        .btn-map.secondary:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .btn-map.primary {
            background: #F5B82E;
            color: #2E5A88;
        }
        
        .btn-map.primary:hover {
            background: rgba(245, 184, 46, 0.9);
            transform: translateY(-1px);
        }
        
        /* Responsive Design */
        @media (min-width: 640px) {
            .hero-buttons {
                flex-direction: row;
                justify-content: center;
            }
            
            .hero-title {
                font-size: 4rem;
            }
            
            .map-buttons {
                flex-direction: row;
            }
            
            .map-footer-content {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
        }
        
        @media (min-width: 1024px) {
            .container {
                padding: 0 2rem;
            }
            
            .content-grid {
                grid-template-columns: 1fr 1fr;
            }
            
            .hero-title {
                font-size: 5rem;
            }
        }
        
        @media (min-width: 1280px) {
            .hero-title {
                font-size: 6rem;
            }
        }
    </style>

    <!-- JSON-LD Schema Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "url": "https://synctherapylocal.local/contact",
        "inLanguage": "en-CA",
        "mainEntity": {
            "@type": ["Organization", "HealthAndBeautyBusiness"],
            "name": "Sync Therapy",
            "description": "Award-winning Registered Massage Therapy, Athletic Therapy, and Holistic Nutrition services in Colwood, BC",
            "slogan": "Feel Better. Move Better. Live Better.",
            "url": "https://synctherapylocal.local",
            "logo": "https://synctherapylocal.local/wp-content/uploads/2025/06/synctherapy-logo.png",
            "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+1-250-812-8698",
                "contactType": "Appointment Service",
                "areaServed": "CA-BC",
                "availableLanguage": ["English"]
            }],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suite 120, 132-328 Wale Rd",
                "addressLocality": "Colwood",
                "addressRegion": "BC",
                "postalCode": "V9C 2X3",
                "addressCountry": "CA"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "ratingCount": "800"
            },
            "award": "Best Massage Therapy Clinic in Victoria 2022-2024"
        },
        "potentialAction": {
            "@type": "ReserveAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://synctherapy.janeapp.com/",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/IOSPlatform",
                    "http://schema.org/AndroidPlatform"
                ]
            }
        }
    }
    </script>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <div class="award-badge">
                    <span class="award-text">🏆 Voted Best Massage & Rehab Therapy Clinic 2022-2024</span>
                </div>

                <h1 class="hero-title">
                    Book Your
                    <span class="hero-subtitle">Wellness Journey</span>
                </h1>

                <p class="hero-tagline">Feel Better. Move Better. Live Better.</p>

                <p class="hero-description">
                    Award-winning Registered Massage Therapy, Athletic Therapy, and Holistic Nutrition services in Colwood, BC.
                </p>

                <div class="hero-buttons">
                    <a href="https://synctherapy.janeapp.com/" target="_blank" rel="noopener noreferrer" class="btn-primary">
                        Book Online Now
                    </a>
                    <a href="tel:+12508128698" class="btn-secondary">
                        Call (250) 812-8698
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <div class="main-content">
        <div class="container">
            <div class="content-grid">
                <!-- Booking Section -->
                <div>
                    <div class="card">
                        <div class="card-content">
                            <h2 class="card-title">Schedule Your Appointment</h2>
                            <p style="color: #6B7280; margin-bottom: 2rem; font-size: 1.125rem;">
                                Book online 24/7 with our easy scheduling system. Choose your preferred therapist, service, and time.
                             Our platform also provides detailed descriptions of various therapies available, so you can make an informed decision. We offer a range of specialized <a href="https://synctherapylocal.local/back-pain-treatment-victoria-options/">back pain treatment options in Victoria</a>, ensuring you find the right solution for your needs. Plus, our expert therapists are dedicated to helping you achieve optimal health and wellness.</p>

                            <div class="feature-list">
                                <div class="feature-item">
                                    <div class="feature-icon icon-blue">
                                        <i data-lucide="calendar" style="color: white; width: 24px; height: 24px;"></i>
                                    </div>
                                    <div class="feature-content">
                                        <h3>Real-Time Availability</h3>
                                        <p>See available appointments instantly</p>
                                    </div>
                                </div>

                                <div class="feature-item">
                                    <div class="feature-icon icon-gold">
                                        <i data-lucide="clock" style="color: #2E5A88; width: 24px; height: 24px;"></i>
                                    </div>
                                    <div class="feature-content">
                                        <h3>Flexible Scheduling</h3>
                                        <p>Book, reschedule, or cancel online</p>
                                    </div>
                                </div>

                                <div class="feature-item">
                                    <div class="feature-icon icon-navy">
                                        <i data-lucide="users" style="color: white; width: 24px; height: 24px;"></i>
                                    </div>
                                    <div class="feature-content">
                                        <h3>Choose Your Therapist</h3>
                                        <p>Select from our expert team</p>
                                    </div>
                                </div>
                            </div>

                            <a href="https://synctherapy.janeapp.com/" target="_blank" rel="noopener noreferrer" class="btn-primary" style="width: 100%; margin-bottom: 1.5rem;">
                                Check Schedule & Book Online
                            </a>

                            <div style="text-align: center;">
                                <p style="font-size: 0.875rem; color: #6B7280;">
                                    Or explore our 
                                    <a data-wpil="url" href="https://synctherapylocal.local/our-team/" style="color: #86BBD8; font-weight: 500;">expert team</a>
                                    and 
                                    <a href="https://synctherapylocal.local/about/" style="color: #86BBD8; font-weight: 500;">learn more about us</a>
                                 We provide a comprehensive approach to wellness, ensuring that each client's unique needs are addressed. For a detailed understanding of our offerings, check out our <a href="https://synctherapylocal.local/our-team/athletic-therapist-daryl-stubbs/">athletic therapist services overview</a>, which highlights the benefits of our specialized therapy options. We're committed to helping you achieve your goals and improve your overall quality of life. Our experienced team is also well-versed in providing effective back pain treatment options in Victoria, tailored to meet individual needs. We prioritize creating personalized plans that not only alleviate pain but also enhance mobility and overall well-being. Together, we can work towards a healthier, pain-free future for you.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Stats -->
                    <div class="stats-grid">
                        <div class="stat-card">
                            <i data-lucide="star" style="color: #F5B82E; width: 24px; height: 24px; margin: 0 auto 0.5rem auto;"></i>
                            <span class="stat-number">4.9★</span>
                            <span class="stat-label">Client Rating</span>
                        </div>
                        <div class="stat-card blue">
                            <i data-lucide="users" style="color: #86BBD8; width: 24px; height: 24px; margin: 0 auto 0.5rem auto;"></i>
                            <span class="stat-number">800+</span>
                            <span class="stat-label">Happy Clients</span>
                        </div>
                    </div>
                </div>

                <!-- Business Information -->
                <div>
                    <div class="card">
                        <div class="card-content">
                            <h3 class="card-title">Get In Touch</h3>

                            <div class="contact-info">
                                <div class="contact-item">
                                    <div class="feature-icon icon-blue">
                                        <i data-lucide="map-pin" style="color: white; width: 24px; height: 24px;"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h4>Visit Us</h4>
                                        <address>
                                            132, 328 Wale Rd #120<br>
                                            Colwood, BC V9B 1J2<br>
                                            Canada
                                        </address>
                                    </div>
                                </div>

                                <div class="contact-item center">
                                    <div class="feature-icon icon-gold">
                                        <i data-lucide="phone" style="color: #2E5A88; width: 24px; height: 24px;"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h4>Call Us</h4>
                                        <a href="tel:+12508128698" style="font-size: 1.125rem;">(250) 812-8698</a>
                                    </div>
                                </div>

                                <div class="contact-item center">
                                    <div class="feature-icon icon-navy">
                                        <i data-lucide="mail" style="color: white; width: 24px; height: 24px;"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h4>Email Us</h4>
                                        <a href="mailto:info@synctherapy.ca">info@synctherapy.ca</a>
                                    </div>
                                </div>

                                <div class="contact-item">
                                    <div class="feature-icon icon-blue">
                                        <i data-lucide="clock" style="color: white; width: 24px; height: 24px;"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h4>Hours</h4>
                                        <div class="hours-table">
                                            <div class="hours-row">
                                                <span>Mon & Fri</span>
                                                <span>9:00 AM - 5:00 PM</span>
                                            </div>
                                            <div class="hours-row">
                                                <span>Tue - Thu</span>
                                                <span>8:00 AM - 8:00 PM</span>
                                            </div>
                                            <div class="hours-row">
                                                <span>Weekends</span>
                                                <span>Closed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Services Card -->
                    <div class="card services-card">
                        <div class="card-content">
                            <h3 class="card-title" style="color: white;">Our Expert Services</h3>

                            <div class="service-item">
                                <div class="service-dot dot-blue"></div>
                                <div class="service-content">
                                    <h4>
                                        
                                            Registered Massage Therapy
                                        
                                    </h4>
                                    <p>Therapeutic and relaxation treatments</p>
                                </div>
                            </div>

                            <div class="service-item">
                                <div class="service-dot dot-gold"></div>
                                <div class="service-content">
                                    <h4>
                                        <a href="https://synctherapylocal.local/services/athletic-therapy-victoria/">
                                            Athletic Therapy
                                        </a>
                                    </h4>
                                    <p>Sports injury treatment and prevention</p>
                                </div>
                            </div>

                            <div class="service-item">
                                <div class="service-dot dot-blue"></div>
                                <div class="service-content">
                                    <h4>Holistic Nutrition</h4>
                                    <p>Personalized nutrition guidance</p>
                                </div>
                            </div>

                            <div class="billing-info">
                                <p class="billing-text">💳 Direct billing available for most extended health plans</p>
                            </div>

                            <div style="margin-top: 1rem; text-align: center;">
                                <a href="https://synctherapylocal.local/about/why-us/" style="color: #86BBD8; font-size: 0.875rem; text-decoration: underline;">
                                    Learn why clients choose us →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Google Maps Section -->
            <div class="map-section">
                <h2 class="map-title">Visit Our Modern Clinic</h2>
                <p class="map-description">Located in the heart of Colwood, BC</p>

                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.555885595386!2d-123.35802530000001!3d48.426669999999994!2m3!1f0!2f3!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f74851cb74787%3A0xeacdf009885e6cb5!2sSync%20Massage%20Therapy!5e0!3m2!1sen!2sca!4v1750611180621!5m2!1sen!2sca"
                        width="100%"
                        height="500"
                        style="border: 0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Sync Therapy Location - Suite 120, 132-328 Wale Rd, Colwood, BC">
                    </iframe>

                    <div class="map-footer">
                        <div class="map-footer-content">
                            <div class="map-info">
                                <h4>Sync Therapy</h4>
                                <p>Suite 120 • Ample parking • Fully accessible • State-of-the-art treatment rooms</p>
                            </div>
                            <div class="map-buttons">
                                <a href="https://www.google.com/maps/dir/?api=1&destination=Suite%20120%2C%20132-328%20Wale%20Rd%2C%20Colwood%2C%20BC%20V9C%202X3%2C%20Canada" 
                                   target="_blank" rel="noopener noreferrer" class="btn-map secondary">
                                    Get Directions
                                </a>
                                <a href="https://synctherapy.janeapp.com/" target="_blank" rel="noopener noreferrer" class="btn-map primary">
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Initialize Lucide icons
        lucide.createIcons();
    </script>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->