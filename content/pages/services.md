---
title: Services
date: '2024-08-07 06:43:14'
slug: services
description: >-
  :root { --primary: #2E5A88; --secondary: #86BBD8; --accent: #F5B82E;
  --neutral: #F4F7F5; --text: #333333; } * { margin: 0; padding: 0; box-sizing:
  border-box;...
seoTitle: Services
---

<!-- wp:html -->
<!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    
    <style>
        :root {
            --primary: #2E5A88;
            --secondary: #86BBD8;
            --accent: #F5B82E;
            --neutral: #F4F7F5;
            --text: #333333;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: var(--text);
            background-color: var(--neutral);
        }

        .font-heading {
            font-family: 'Poppins', sans-serif;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            position: relative;
            overflow: hidden;
        }

        .hero-bg {
            position: absolute;
            inset: 0;
            opacity: 0.05;
        }

        .hero-bg-circle {
            position: absolute;
            border-radius: 50%;
            filter: blur(40px);
        }

        .hero-bg-circle:nth-child(1) {
            top: 5rem;
            left: 5rem;
            width: 8rem;
            height: 8rem;
            background: var(--primary);
        }

        .hero-bg-circle:nth-child(2) {
            bottom: 10rem;
            right: 8rem;
            width: 12rem;
            height: 12rem;
            background: var(--secondary);
        }

        .hero-bg-circle:nth-child(3) {
            top: 50%;
            left: 33%;
            width: 6rem;
            height: 6rem;
            background: var(--primary);
        }

        .hero-content {
            text-align: center;
            position: relative;
            z-index: 10;
            max-width: 64rem;
            animation: fadeInUp 0.8s ease-out;
        }

        .hero h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: 1.1;
        }

        .hero h1 span {
            display: block;
            color: var(--primary);
        }

        .hero p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.8;
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-stats {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .hero-stat {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .hero-stat svg {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--primary);
        }

        .hero-stat.accent svg {
            color: var(--accent);
            fill: var(--accent);
        }

        .hero-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 2rem;
            font-size: 1.125rem;
            font-weight: 600;
            border-radius: 0.5rem;
            text-decoration: none;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            cursor: pointer;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            background: color-mix(in srgb, var(--primary) 90%, black);
            box-shadow: 0 10px 25px color-mix(in srgb, var(--accent) 20%, transparent);
        }

        .btn-outline {
            background: transparent;
            color: var(--primary);
            border-color: var(--primary);
        }

        .btn-outline:hover {
            background: var(--primary);
            color: white;
            box-shadow: 0 10px 25px color-mix(in srgb, var(--accent) 20%, transparent);
        }

        .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
        }

        /* Services Section */
        .services {
            padding: 5rem 0;
            background: white;
        }

        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-header h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        .section-header p {
            font-size: 1.25rem;
            opacity: 0.7;
            max-width: 42rem;
            margin: 0 auto;
        }

        .service-tabs {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 3rem;
        }

        .service-tab {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: white;
            border: 2px solid color-mix(in srgb, var(--primary) 30%, transparent);
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        }

        .service-tab:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px color-mix(in srgb, var(--accent) 10%, transparent);
            border-color: var(--primary);
        }

        .service-tab.active {
            background: var(--primary);
            color: white;
            transform: scale(1.05);
            box-shadow: 0 10px 25px color-mix(in srgb, var(--accent) 20%, transparent);
        }

        .service-tab svg {
            width: 1.25rem;
            height: 1.25rem;
        }

        .service-content {
            display: none;
        }

        .service-content.active {
            display: block;
            animation: fadeInUp 0.5s ease-out;
        }

        .service-header {
            border-radius: 1rem;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .service-header.massage {
            background: var(--primary);
            color: white;
        }

        .service-header.athletic {
            background: var(--secondary);
            color: var(--text);
        }

        .service-header.nutrition {
            background: var(--neutral);
            color: var(--text);
            border: 2px solid var(--primary);
        }

        .service-header-content {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .service-header svg {
            width: 3rem;
            height: 3rem;
        }

        .service-header h3 {
            font-size: 1.875rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .service-header p {
            font-size: 1.125rem;
            opacity: 0.9;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .service-card {
            background: white;
            border-radius: 0.5rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            height: 100%;
        }

        .service-card:hover {
            transform: translateY(-0.5rem);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .service-card-header {
            display: flex;
            justify-content: between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .service-card h4 {
            font-size: 1.25rem;
            font-weight: 600;
            flex: 1;
        }

        .badge {
            background: color-mix(in srgb, var(--accent) 10%, transparent);
            color: var(--accent);
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .service-benefits {
            margin-bottom: 1.5rem;
        }

        .service-benefit {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
        }

        .service-benefit svg {
            width: 1rem;
            height: 1rem;
            color: var(--primary);
        }

        .service-benefit span {
            opacity: 0.8;
        }

        /* Highlights Section */
        .highlights {
            padding: 5rem 0;
            background: var(--neutral);
        }

        .highlights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .highlight-card {
            background: white;
            border-radius: 0.5rem;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            height: 100%;
        }

        .highlight-card:hover {
            transform: translateY(-0.5rem);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .highlight-icon {
            position: relative;
            margin-bottom: 1.5rem;
        }

        .highlight-icon-circle {
            width: 4rem;
            height: 4rem;
            background: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .highlight-icon svg {
            width: 2rem;
            height: 2rem;
            color: white;
        }

        .highlight-badge {
            position: absolute;
            top: -0.5rem;
            right: -0.5rem;
            background: var(--accent);
            color: var(--text);
            padding: 0.25rem 0.5rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .highlight-card h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
        }

        .highlight-card p {
            opacity: 0.7;
            line-height: 1.6;
        }

        /* Testimonials Section */
        .testimonials {
            padding: 5rem 0;
            background: var(--neutral);
            position: relative;
            overflow: hidden;
        }

        .testimonials-bg {
            position: absolute;
            inset: 0;
            opacity: 0.05;
        }

        .testimonials-bg-circle {
            position: absolute;
            border-radius: 50%;
            filter: blur(40px);
        }

        .testimonials-bg-circle:nth-child(1) {
            top: 2.5rem;
            right: 5rem;
            width: 10rem;
            height: 10rem;
            background: var(--accent);
        }

        .testimonials-bg-circle:nth-child(2) {
            bottom: 5rem;
            left: 8rem;
            width: 8rem;
            height: 8rem;
            background: white;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            position: relative;
            z-index: 10;
        }

        .testimonial-card {
            background: white;
            border-radius: 0.5rem;
            padding: 2rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            transition: all 0.3s ease;
            height: 100%;
        }

        .testimonial-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .testimonial-stars {
            display: flex;
            gap: 0.25rem;
        }

        .testimonial-stars svg {
            width: 1.25rem;
            height: 1.25rem;
            color: var(--accent);
            fill: var(--accent);
        }

        .testimonial-quote svg {
            width: 2rem;
            height: 2rem;
            color: color-mix(in srgb, var(--accent) 50%, transparent);
        }

        .testimonial-text {
            opacity: 0.8;
            margin-bottom: 1.5rem;
            line-height: 1.6;
            font-style: italic;
        }

        .testimonial-author {
            border-top: 1px solid #e5e7eb;
            padding-top: 1rem;
        }

        .testimonial-author .name {
            font-weight: 700;
        }

        .testimonial-author .service {
            color: var(--primary);
            font-size: 0.875rem;
        }

        .testimonial-author .location {
            opacity: 0.6;
            font-size: 0.875rem;
        }

        .reviews-cta {
            text-align: center;
            margin-top: 3rem;
            position: relative;
            z-index: 10;
        }

        .reviews-rating {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }

        .reviews-rating .stars {
            display: flex;
            gap: 0.25rem;
        }

        .reviews-rating .stars svg {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--accent);
            fill: var(--accent);
        }

        .reviews-rating .score {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent);
        }

        /* Booking Section */
        .booking {
            padding: 5rem 0;
            background: var(--neutral);
        }

        .booking-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }

        .booking-card {
            background: var(--primary);
            color: white;
            border-radius: 0.5rem;
            padding: 2rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .booking-card h3 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        .booking-options {
            margin-bottom: 2rem;
        }

        .booking-option {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .booking-option svg {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--accent);
        }

        .booking-option .title {
            font-weight: 600;
        }

        .booking-option .subtitle {
            opacity: 0.8;
            font-size: 0.875rem;
        }

        .btn-accent {
            background: var(--accent);
            color: var(--text);
        }

        .btn-accent:hover {
            background: color-mix(in srgb, var(--accent) 90%, black);
        }

        .location-info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .info-card {
            background: white;
            border-radius: 0.5rem;
            padding: 1.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .info-card-content {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }

        .info-card svg {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--primary);
            margin-top: 0.25rem;
        }

        .info-card h4 {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .info-card p {
            opacity: 0.7;
        }

        .hours-list {
            margin-top: 0.5rem;
        }

        .hours-list p {
            margin-bottom: 0.25rem;
        }

        .hours-list strong {
            display: inline-block;
            width: 6rem;
        }

        .billing-info {
            background: color-mix(in srgb, var(--accent) 10%, transparent);
            border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .billing-info h4 {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0) translateX(-50%);
            }
            40% {
                transform: translateY(-10px) translateX(-50%);
            }
            60% {
                transform: translateY(-5px) translateX(-50%);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }

            .hero-buttons {
                flex-direction: column;
            }

            .hero-stats {
                flex-direction: column;
                gap: 1rem;
            }

            .section-header h2 {
                font-size: 2rem;
            }

            .booking-grid {
                grid-template-columns: 1fr;
            }

            .service-tabs {
                flex-direction: column;
            }
        }

        @media (min-width: 640px) {
            .hero-buttons {
                flex-direction: row;
            }
        }

        @media (min-width: 768px) {
            .hero h1 {
                font-size: 4rem;
            }
        }

        @media (min-width: 1024px) {
            .hero h1 {
                font-size: 4.5rem;
            }
        }
    </style>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-bg">
            <div class="hero-bg-circle"></div>
            <div class="hero-bg-circle"></div>
            <div class="hero-bg-circle"></div>
        </div>
        
        <div class="container">
            <div class="hero-content">
                <h1 class="font-heading">
                    Victoria's Premier
                    <span>Wellness Services</span>
                </h1>
                
                <p>Feel Better. Move Better. Live Better in Colwood, Langford & Greater Victoria</p>
                
                <div class="hero-stats">
                    <div class="hero-stat">
                        <i data-lucide="users"></i>
                        <span>800+ Happy Clients</span>
                    </div>
                    <div class="hero-stat accent">
                        <i data-lucide="star"></i>
                        <span>4.9★ Google Rating</span>
                    </div>
                    <div class="hero-stat">
                        <i data-lucide="award"></i>
                        <span>Award Winning Clinic</span>
                    </div>
                </div>
                
                <div class="hero-buttons">
                    <a href="#booking" class="btn btn-primary">Book Appointment Online</a>
                    <a href="tel:+12508128698" class="btn btn-outline">Call (250) 812-8698</a>
                </div>
            </div>
        </div>
        
        <div class="scroll-indicator">
            <i data-lucide="arrow-down"></i>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services">
        <div class="container">
            <div class="section-header">
                <h2 class="font-heading">Our Services</h2>
                <p>Comprehensive wellness solutions tailored to your unique needs</p>
            </div>
            
            <div class="service-tabs">
                <div class="service-tab active" data-service="massage">
                    <i data-lucide="heart"></i>
                    <span>Registered Massage Therapy</span>
                </div>
                <div class="service-tab" data-service="athletic">
                    <i data-lucide="zap"></i>
                    <span>Athletic Therapy</span>
                </div>
                <div class="service-tab" data-service="nutrition">
                    <i data-lucide="leaf"></i>
                    <span>Holistic Nutrition</span>
                </div>
            </div>
            
            <!-- Massage Therapy Content -->
            <div class="service-content active" id="massage">
                <div class="service-header massage">
                    <div class="service-header-content">
                        <i data-lucide="heart"></i>
                        <div>
                            <h3 class="font-heading">Registered Massage Therapy</h3>
                            <p>Professional RMT services for pain relief, relaxation, and wellness in Victoria, BC</p>
                        </div>
                    </div>
                </div>
                
                <div class="services-grid">
                    <div class="service-card">
                        <div class="service-card-header">
                            <h4 class="font-heading">Deep Tissue Massage Victoria</h4>
                            <div class="badge">
                                <i data-lucide="clock"></i>
                                60-90 min
                            </div>
                        </div>
                        <div class="service-benefits">
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Chronic Pain Relief</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Muscle Tension Release</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Injury Recovery</span>
                            </div>
                        </div>
                        <a href="https://synctherapylocal.local/services/deep-tissue-massage-victoria/" class="btn btn-primary" style="width: 100%;">
                            Learn More
                            <i data-lucide="arrow-right" style="margin-left: 0.5rem;"></i>
                        </a>
                    </div>
                    
                    <div class="service-card">
                        <div class="service-card-header">
                            <h4 class="font-heading">Swedish Relaxation Massage</h4>
                            <div class="badge">
                                <i data-lucide="clock"></i>
                                60-90 min
                            </div>
                        </div>
                        <div class="service-benefits">
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Stress Relief</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Improved Circulation</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Full Body Relaxation</span>
                            </div>
                        </div>
                        <a href="/services/swedish-relaxation-massage-victoria/" class="btn btn-primary" style="width: 100%;">
                            Learn More
                            <i data-lucide="arrow-right" style="margin-left: 0.5rem;"></i>
                        </a>
                    </div>
                    
                    <div class="service-card">
                        <div class="service-card-header">
                            <h4 class="font-heading">Sports Massage Victoria</h4>
                            <div class="badge">
                                <i data-lucide="clock"></i>
                                60-90 min
                            </div>
                        </div>
                        <div class="service-benefits">
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Athletic Performance</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Faster Recovery</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Injury Prevention</span>
                            </div>
                        </div>
                        <a href="/services/sports-massage-therapy/" class="btn btn-primary" style="width: 100%;">
                            Learn More
                            <i data-lucide="arrow-right" style="margin-left: 0.5rem;"></i>
                        </a>
                    </div>
                    
                    <div class="service-card">
                        <div class="service-card-header">
                            <h4 class="font-heading">Visceral Manipulation</h4>
                            <div class="badge">
                                <i data-lucide="clock"></i>
                                60 min
                            </div>
                        </div>
                        <div class="service-benefits">
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Organ Mobility</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Digestive Health</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Core Function</span>
                            </div>
                        </div>
                        <a href="/services/visceral-manipulation-victoria/" class="btn btn-primary" style="width: 100%;">
                            Learn More
                            <i data-lucide="arrow-right" style="margin-left: 0.5rem;"></i>
                        </a>
                    </div>
                    
                    <div class="service-card">
                        <div class="service-card-header">
                            <h4 class="font-heading">Myofascial Release Victoria</h4>
                            <div class="badge">
                                <i data-lucide="clock"></i>
                                60 min
                            </div>
                        </div>
                        <div class="service-benefits">
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Fascial Restrictions</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Movement Quality</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Pain Relief</span>
                            </div>
                        </div>
                        <a href="/services/myofascial-release-massage/" class="btn btn-primary" style="width: 100%;">
                            Learn More
                            <i data-lucide="arrow-right" style="margin-left: 0.5rem;"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Athletic Therapy Content -->
            <div class="service-content" id="athletic">
                <div class="service-header athletic">
                    <div class="service-header-content">
                        <i data-lucide="zap"></i>
                        <div>
                            <h3 class="font-heading">Athletic Therapy</h3>
                            <p>Specialized sports injury treatment and performance enhancement in Colwood</p>
                        </div>
                    </div>
                </div>
                
                <div class="services-grid">
                    <div class="service-card">
                        <div class="service-card-header">
                            <h4 class="font-heading">Athletic Therapy Colwood</h4>
                            <div class="badge">
                                <i data-lucide="clock"></i>
                                60 min
                            </div>
                        </div>
                        <div class="service-benefits">
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Injury Assessment</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Rehabilitation Programs</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Performance Enhancement</span>
                            </div>
                        </div>
                        <a href="https://synctherapylocal.local/services/athletic-therapy-victoria/" class="btn btn-primary" style="width: 100%;">
                            Learn More
                            <i data-lucide="arrow-right" style="margin-left: 0.5rem;"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Nutrition Content -->
            <div class="service-content" id="nutrition">
                <div class="service-header nutrition">
                    <div class="service-header-content">
                        <i data-lucide="leaf"></i>
                        <div>
                            <h3 class="font-heading">Holistic Nutrition</h3>
                            <p>Personalized nutrition counseling for optimal health and wellness in Greater Victoria</p>
                        </div>
                    </div>
                </div>
                
                <div class="services-grid">
                    <div class="service-card">
                        <div class="service-card-header">
                            <h4 class="font-heading">Holistic Nutrition Victoria</h4>
                            <div class="badge">
                                <i data-lucide="clock"></i>
                                60-90 min
                            </div>
                        </div>
                        <div class="service-benefits">
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Nutritional Assessment</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Custom Meal Planning</span>
                            </div>
                            <div class="service-benefit">
                                <i data-lucide="check-circle"></i>
                                <span>Wellness Goals</span>
                            </div>
                        </div>
                        <a href="https://synctherapylocal.local/holistic-nutrition/" class="btn btn-primary" style="width: 100%;">                            Learn More                            <i data-lucide="arrow-right" style="margin-left: 0.5rem;"></i>                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Highlights Section -->
    <section class="highlights">
        <div class="container">
            <div class="section-header">
                <h2 class="font-heading">Why Choose Sync Therapy?</h2>
                <p>Experience the difference with our award-winning team and comprehensive approach to wellness</p>
            </div>
            
            <div class="highlights-grid">
                <div class="highlight-card">
                    <div class="highlight-icon">
                        <div class="highlight-icon-circle">
                            <i data-lucide="award"></i>
                        </div>
                        <div class="highlight-badge">Excellence</div>
                    </div>
                    <h3 class="font-heading">Award Winning Victoria Clinic</h3>
                    <p>Best Massage Therapy Clinic in Victoria 2022-2024 & Best Rehab Clinic</p>
                </div>
                
                <div class="highlight-card">
                    <div class="highlight-icon">
                        <div class="highlight-icon-circle">
                            <i data-lucide="shield"></i>
                        </div>
                        <div class="highlight-badge">Certified</div>
                    </div>
                    <h3 class="font-heading">Registered BC Professionals</h3>
                    <p>Registered Massage Therapists, Athletic Therapists & Holistic Nutritionists</p>
                </div>
                
                <div class="highlight-card">
                    <div class="highlight-icon">
                        <div class="highlight-icon-circle">
                            <i data-lucide="clock"></i>
                        </div>
                        <div class="highlight-badge">Convenient</div>
                    </div>
                    <h3 class="font-heading">Flexible Colwood Hours</h3>
                    <p>Evening appointments available Tuesday-Thursday until 8pm</p>
                </div>
                
                <div class="highlight-card">
                    <div class="highlight-icon">
                        <div class="highlight-icon-circle">
                            <i data-lucide="map-pin"></i>
                        </div>
                        <div class="highlight-badge">Accessible</div>
                    </div>
                    <h3 class="font-heading">Prime Victoria Location</h3>
                    <p>Easily accessible from Colwood, Langford, View Royal & Greater Victoria</p>
                </div>
                
                <div class="highlight-card">
                    <div class="highlight-icon">
                        <div class="highlight-icon-circle">
                            <i data-lucide="credit-card"></i>
                        </div>
                        <div class="highlight-badge">Easy</div>
                    </div>
                    <h3 class="font-heading">Direct Insurance Billing</h3>
                    <p>Direct billing available for most BC insurance providers</p>
                </div>
                
                <div class="highlight-card">
                    <div class="highlight-icon">
                        <div class="highlight-icon-circle">
                            <i data-lucide="users"></i>
                        </div>
                        <div class="highlight-badge">Trusted</div>
                    </div>
                    <h3 class="font-heading">800+ Satisfied Victoria Clients</h3>
                    <p>4.9★ Google rating with 107+ verified local reviews</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
        <div class="testimonials-bg">
            <div class="testimonials-bg-circle"></div>
            <div class="testimonials-bg-circle"></div>
        </div>
        
        <div class="container">
            <div class="section-header">
                <h2 class="font-heading">What Our Clients Say</h2>
                <p>Join hundreds of satisfied clients who have experienced the Sync Therapy difference</p>
            </div>
            
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        <div class="testimonial-stars">
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                        </div>
                        <div class="testimonial-quote">
                            <i data-lucide="quote"></i>
                        </div>
                    </div>
                    <p class="testimonial-text">"The best massage therapy experience I've ever had in Victoria. The team at Sync Therapy truly understands how to address chronic pain issues."</p>
                    <div class="testimonial-author">
                        <p class="name">Sarah M.</p>
                        <p class="service">Deep Tissue Massage</p>
                        <p class="location">Colwood, BC</p>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        <div class="testimonial-stars">
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                        </div>
                        <div class="testimonial-quote">
                            <i data-lucide="quote"></i>
                        </div>
                    </div>
                    <p class="testimonial-text">"As a competitive athlete in Victoria, I need the best care for my body. Sync Therapy's athletic therapy has been game-changing for my performance." The personalized approach they offer has helped me recover faster and stay injury-free. I also appreciate their comprehensive advice on back pain treatment options Victoria, which has made a significant difference in my training regimen. With Sync Therapy, I feel confident that I'm optimizing my performance and injury prevention strategies.</p>
                    <div class="testimonial-author">
                        <p class="name">Mike R.</p>
                        <p class="service">Athletic Therapy</p>
                        <p class="location">Langford, BC</p>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        <div class="testimonial-stars">
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                            <i data-lucide="star"></i>
                        </div>
                        <div class="testimonial-quote">
                            <i data-lucide="quote"></i>
                        </div>
                    </div>
                    <p class="testimonial-text">"The nutrition counseling helped me completely transform my relationship with food and energy levels. Best wellness clinic in Greater Victoria!"</p>
                    <div class="testimonial-author">
                        <p class="name">Jennifer L.</p>
                        <p class="service">Holistic Nutrition</p>
                        <p class="location">Victoria, BC</p>
                    </div>
                </div>
            </div>
            
            <div class="reviews-cta">
                <p style="opacity: 0.7; margin-bottom: 1rem;">Read all 107+ five-star reviews from Victoria clients</p>
                <div class="reviews-rating">
                    <div class="stars">
                        <i data-lucide="star"></i>
                        <i data-lucide="star"></i>
                        <i data-lucide="star"></i>
                        <i data-lucide="star"></i>
                        <i data-lucide="star"></i>
                    </div>
                    <span class="score">4.9</span>
                    <span style="opacity: 0.7;">on Google</span>
                </div>
                <a href="https://maps.app.goo.gl/NfFbmXvdsfyiuKQo7" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    Read More Victoria Reviews
                    <i data-lucide="arrow-right" style="margin-left: 0.5rem;"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Booking Section -->
    <section class="booking" id="booking">
        <div class="container">
            <div class="section-header">
                <h2 class="font-heading">Ready to Start Your Wellness Journey?</h2>
                <p>Book your appointment today and experience the Sync Therapy difference</p>
            </div>
            
            <div class="booking-grid">
                <div class="booking-card">
                    <h3 class="font-heading">Book Your Victoria Appointment</h3>
                    
                    <div class="booking-options">
                        <div class="booking-option">
                            <i data-lucide="calendar"></i>
                            <div>
                                <div class="title">Online Booking</div>
                                <div class="subtitle">Available 24/7 for Colwood clinic</div>
                            </div>
                        </div>
                        
                        <div class="booking-option">
                            <i data-lucide="phone"></i>
                            <div>
                                <div class="title">Call Our Victoria Clinic</div>
                                <div class="subtitle">+1 (250) 812-8698</div>
                            </div>
                        </div>
                        
                        <div class="booking-option">
                            <i data-lucide="mail"></i>
                            <div>
                                <div class="title">Email</div>
                                <div class="subtitle">info@synctherapy.ca</div>
                            </div>
                        </div>
                    </div>
                    
                    <a href="#" class="btn btn-accent" style="width: 100%;">
                        Book Victoria Appointment Now
                        <i data-lucide="arrow-right" style="margin-left: 0.5rem;"></i>
                    </a>
                </div>
                
                <div class="location-info">
                    <div class="info-card">
                        <div class="info-card-content">
                            <i data-lucide="map-pin"></i>
                            <div>
                                <h4 class="font-heading">Our Location</h4>
                                <p>Suite 120, 132-328 Wale Rd<br>Colwood, BC, Canada</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-content">
                            <i data-lucide="clock"></i>
                            <div>
                                <h4 class="font-heading">Colwood Clinic Hours</h4>
                                <div class="hours-list">
                                    <p><strong>Monday:</strong> 9:00 AM - 5:00 PM</p>
                                    <p><strong>Tuesday:</strong> 8:00 AM - 8:00 PM</p>
                                    <p><strong>Wednesday:</strong> 8:00 AM - 8:00 PM</p>
                                    <p><strong>Thursday:</strong> 8:00 AM - 8:00 PM</p>
                                    <p><strong>Friday:</strong> 9:00 AM - 5:00 PM</p>
                                    <p><strong>Saturday:</strong> Closed</p>
                                    <p><strong>Sunday:</strong> Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="billing-info">
                        <h4 class="font-heading">Direct Billing Available</h4>
                        <p>We offer direct billing for most BC insurance providers, including Extended Health Benefits. Please contact our Colwood clinic to verify your coverage. Our team is dedicated to ensuring you receive the care you need without any hassle. If you're interested in our <a href="https://synctherapylocal.local/services/massage-therapy/">massage services in Colwood</a>, our friendly staff will be happy to assist you in navigating your insurance options. We aim to make your experience as seamless as possible while prioritizing your health and wellness. In addition to our massage services, we also provide a variety of back pain treatment options in Victoria tailored to meet your specific needs. Our skilled practitioners will work closely with you to create a personalized treatment plan that addresses your concerns and promotes recovery. We believe in empowering our clients with the knowledge and tools for lasting health improvements.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        // Initialize Lucide icons
        lucide.createIcons();

        // Service tab functionality
        const serviceTabs = document.querySelectorAll('.service-tab');
        const serviceContents = document.querySelectorAll('.service-content');

        serviceTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetService = tab.getAttribute('data-service');
                
                // Remove active class from all tabs and contents
                serviceTabs.forEach(t => t.classList.remove('active'));
                serviceContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                document.getElementById(targetService).classList.add('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.service-card, .highlight-card, .testimonial-card, .info-card').forEach(el => {
            observer.observe(el);
        });
    </script>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->
