---
title: Why Us
date: '2024-07-10 03:25:04'
slug: why-us
description: >-
  /* Color Palette & Typography */ :root { --primary-color: #2E5A88;
  --secondary-color: #86BBD8; --accent-color: #F5B82E; --text-dark: #333333;
  --text-light:...
seoTitle: Why Us
---

<!-- wp:html -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        /* Color Palette & Typography */
        :root {
            --primary-color: #2E5A88;
            --secondary-color: #86BBD8;
            --accent-color: #F5B82E;
            --text-dark: #333333;
            --text-light: #666666;
            --background-light: #F8FAFB;
            --white: #FFFFFF;
            --shadow: rgba(46, 90, 136, 0.1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background-color: var(--white);
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            line-height: 1.3;
            color: var(--primary-color);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .section {
            padding: 80px 0;
        }

        .section-light {
            background-color: var(--background-light);
        }

        /* Hero Section */
        .hero-section {
            background: linear-gradient(135deg, var(--primary-color) 0%, #1e4a73 100%);
            color: var(--white);
            padding: 100px 0;
            position: relative;
            overflow: hidden;
        }

        .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .hero-badge {
            display: inline-block;
            background: var(--accent-color);
            color: var(--text-dark);
            padding: 8px 20px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .hero-title {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 24px;
            color: var(--white);
        }

        .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 40px;
            opacity: 0.9;
            font-weight: 400;
        }

        .hero-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 30px;
            margin: 50px 0;
            text-align: center;
        }

        .stat-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--accent-color);
            display: block;
        }

        .stat-label {
            font-size: 14px;
            opacity: 0.8;
            margin-top: 5px;
        }

        /* Button Styles */
        .btn {
            display: inline-block;
            padding: 16px 32px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            text-align: center;
        }

        .btn-primary {
            background: var(--accent-color);
            color: var(--text-dark);
        }

        .btn-primary:hover {
            background: #e6a526;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(245, 184, 46, 0.3);
        }

        .btn-secondary {
            background: transparent;
            color: var(--white);
            border: 2px solid var(--white);
        }

        .btn-secondary:hover {
            background: var(--white);
            color: var(--primary-color);
        }

        .btn-group {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* Value Proposition Section */
        .value-props {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin: 60px 0;
        }

        .value-prop {
            background: var(--white);
            padding: 40px 30px;
            border-radius: 16px;
            box-shadow: 0 10px 30px var(--shadow);
            text-align: center;
            transition: transform 0.3s ease;
            border-top: 4px solid var(--accent-color);
        }

        .value-prop:hover {
            transform: translateY(-5px);
        }

        .value-prop-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 24px;
            font-size: 2rem;
            color: var(--white);
        }

        .value-prop h3 {
            font-size: 1.5rem;
            margin-bottom: 16px;
            color: var(--primary-color);
        }

        .value-prop p {
            color: var(--text-light);
            line-height: 1.6;
        }

        /* Services Grid */
        .services-showcase {
            background: var(--background-light);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 40px;
            margin: 60px 0;
        }

        .service-card {
            background: var(--white);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px var(--shadow);
            transition: transform 0.3s ease;
        }

        .service-card:hover {
            transform: translateY(-8px);
        }

        .service-header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: var(--white);
            padding: 30px;
            text-align: center;
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 16px;
            display: block;
        }

        .service-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--white);
            margin-bottom: 8px;
        }

        .service-subtitle {
            opacity: 0.9;
            font-size: 14px;
        }

        .service-content {
            padding: 30px;
        }

        .service-features {
            list-style: none;
            margin: 20px 0;
        }

        .service-features li {
            padding: 8px 0;
            position: relative;
            padding-left: 24px;
        }

        .service-features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--accent-color);
            font-weight: bold;
        }

        .service-link {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
            border-bottom: 1px solid transparent;
            transition: border-color 0.3s ease;
        }

        .service-link:hover {
            border-bottom-color: var(--primary-color);
        }

        /* Awards Section */
        .awards-section {
            background: var(--primary-color);
            color: var(--white);
            text-align: center;
        }

        .awards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin: 60px 0;
        }

        .award-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px 20px;
            border-radius: 16px;
            backdrop-filter: blur(10px);
        }

        .award-icon {
            font-size: 4rem;
            color: var(--accent-color);
            margin-bottom: 20px;
        }

        .award-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--white);
        }

        .award-years {
            color: var(--accent-color);
            font-weight: 500;
        }

        /* Testimonials */
        .testimonials-section {
            background: var(--background-light);
        }

        .testimonial-card {
            background: var(--white);
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 10px 30px var(--shadow);
            margin: 30px 0;
            position: relative;
        }

        .testimonial-card::before {
            content: '"';
            position: absolute;
            top: -10px;
            left: 30px;
            font-size: 6rem;
            color: var(--accent-color);
            font-family: serif;
            line-height: 1;
        }

        .testimonial-text {
            font-size: 1.1rem;
            font-style: italic;
            margin-bottom: 24px;
            color: var(--text-dark);
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .author-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: var(--secondary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            color: var(--white);
            font-size: 1.25rem;
        }

        .author-info h4 {
            color: var(--primary-color);
            margin-bottom: 4px;
        }

        .author-info p {
            color: var(--text-light);
            font-size: 14px;
        }

        /* Practitioner Section */
        .practitioner-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .practitioner-content h2 {
            font-size: 2.5rem;
            margin-bottom: 24px;
        }

        .practitioner-content p {
            font-size: 1.1rem;
            margin-bottom: 24px;
            color: var(--text-light);
        }

        .credentials-list {
            list-style: none;
            margin: 30px 0;
        }

        .credentials-list li {
            padding: 12px 0;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .credential-badge {
            background: var(--accent-color);
            color: var(--text-dark);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }

        .practitioner-image {
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px var(--shadow);
        }

        .practitioner-image img {
            width: 100%;
            height: auto;
            display: block;
        }

        /* CTA Section */
        .cta-section {
            background: linear-gradient(135deg, var(--accent-color) 0%, #e6a526 100%);
            color: var(--text-dark);
            text-align: center;
        }

        .cta-content h2 {
            font-size: 2.5rem;
            color: var(--text-dark);
            margin-bottom: 24px;
        }

        .cta-content p {
            font-size: 1.2rem;
            margin-bottom: 40px;
            opacity: 0.8;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }

            .hero-stats {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
            }

            .btn-group {
                flex-direction: column;
                align-items: center;
            }

            .btn {
                width: 100%;
                max-width: 300px;
            }

            .value-props,
            .services-grid,
            .awards-grid {
                grid-template-columns: 1fr;
                gap: 30px;
            }

            .practitioner-section {
                grid-template-columns: 1fr;
                gap: 40px;
            }

            .section {
                padding: 60px 0;
            }

            .container {
                padding: 0 16px;
            }
        }

        @media (max-width: 480px) {
            .hero-title {
                font-size: 2rem;
            }

            .hero-stats {
                grid-template-columns: 1fr;
            }

            .value-prop,
            .service-card,
            .testimonial-card {
                margin: 20px 0;
            }
        }

        /* Section Headers */
        .section-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .section-header h2 {
            font-size: 2.5rem;
            margin-bottom: 16px;
        }

        .section-header p {
            font-size: 1.2rem;
            color: var(--text-light);
            max-width: 600px;
            margin: 0 auto;
        }

        /* Specialty Links */
        .specialty-links {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 40px 0;
        }

        .specialty-link {
            background: var(--white);
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            text-decoration: none;
            color: var(--primary-color);
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }

        .specialty-link:hover {
            border-color: var(--accent-color);
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">6x Award Winner • 800+ Happy Clients</div>
                <h1 class="hero-title">Why Victoria Chooses Sync Therapy</h1>
                <p class="hero-subtitle">
                    Experience the award-winning difference that has transformed lives across Victoria, Colwood, and Langford. 
                    Our unique triple-certified approach delivers lasting results where others fall short.
                </p>
                
                <div class="hero-stats">
                    <div class="stat-item">
                        <span class="stat-number">11+</span>
                        <span class="stat-label">Years Experience</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">800+</span>
                        <span class="stat-label">Clients Helped</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">6x</span>
                        <span class="stat-label">Award Winner</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">4.9★</span>
                        <span class="stat-label">Google Rating</span>
                    </div>
                </div>

                <div class="btn-group">
                    <a href="https://synctherapy.janeapp.com/" class="btn btn-primary">Book Your Assessment</a>
                    <a data-wpil="url" href="https://synctherapylocal.local/about/why-us/" class="btn btn-secondary">Learn Our Approach</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Value Propositions -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2>What Makes Sync Therapy Different</h2>
                <p>Unlike traditional single-discipline clinics, our integrated approach combines three specialized therapies under one roof, delivering faster, more comprehensive results.</p>
            </div>

            <div class="value-props">
                <div class="value-prop">
                    <div class="value-prop-icon">🏆</div>
                    <h3>Comprehensive, Multi-Disciplinary Expertise</h3>
<p>
    Your care is guided by a practitioner uniquely qualified as a 
    <a wpil="url" old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" href="https://synctherapylocal.local/our-team/rmt-daryl-stubbs/">Registered Massage Therapist</a>, 
    <a wpil="url" href="https://synctherapylocal.local/our-team/athletic-therapist-daryl-stubbs/">Certified Athletic Therapist</a>, 
    and Holistic Nutritionist. This ensures we address your health from every angle for more effective, long-lasting results.
</p>
                </div>

                <div class="value-prop">
                    <div class="value-prop-icon">🎯</div>
                    <h3>Personalized Treatment Plans</h3>
                    <p>
                        Every treatment is uniquely designed for your specific condition and goals. No cookie-cutter approaches - 
                        just personalized care that addresses your body's unique needs and gets results.
                    </p>
                </div>

                <div class="value-prop">
                    <div class="value-prop-icon">⚡</div>
                    <h3>Advanced Techniques</h3>
                    <p>
                        We stay at the forefront of therapeutic innovation with techniques like 
                        <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvdmlzY2VyYWwtbWFuaXB1bGF0aW9uLXZpY3RvcmlhLw==" href="https://synctherapylocal.local/services/visceral-manipulation-victoria/" class="service-link">visceral manipulation</a>, 
                        red light therapy, and molecular hydrogen therapy.
                    </p>
                </div>

                <div class="value-prop">
                    <div class="value-prop-icon">💰</div>
                    <h3>Insurance & Direct Billing</h3>
                    <p>
                        Maximize your benefits with our <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" href="https://synctherapylocal.local/services/direct-billing-massage/" class="service-link">direct billing services</a> 
                        and comprehensive insurance coverage, including specialized <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" href="https://synctherapylocal.local/icbc-massage-therapy/" class="service-link">ICBC treatments</a>.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Showcase -->
    <section class="section services-showcase">
        <div class="container">
            <div class="section-header">
                <h2>Comprehensive Care Across the West Shore</h2>
                <p>Award-winning therapeutic services for Victoria, Colwood, and Langford residents</p>
            </div>

            <div class="services-grid">
                <div class="service-card">
                    <div class="service-header">
                        <span class="service-icon">🤲</span>
                        <h3 class="service-title">Massage Therapy Excellence</h3>
                        <p class="service-subtitle">Registered, Certified, Award-Winning</p>
                    </div>
                    <div class="service-content">
                        <p>Our award-winning <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" href="https://synctherapylocal.local/services/massage-therapy-victoria/" class="service-link">massage therapy in Victoria</a> extends to <a data-wpil="url" href="https://synctherapylocal.local/services/massage-therapy-colwood/" class="service-link">Colwood</a> and <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" href="https://synctherapylocal.local/services/massage-therapy-langford/" class="service-link">Langford</a>.</p>
                        
                        <ul class="service-features">
                            <li><a data-wpil="url" href="https://synctherapylocal.local/services/sports-massage-therapy/" class="service-link">Sports Massage Therapy</a></li>
                            <li><a wpil="url" old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGVlcC10aXNzdWUtbWFzc2FnZS12aWN0b3JpYQ==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGVlcC10aXNzdWUtbWFzc2FnZS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly9zdGFnaW5nMi5zeW5jdGhlcmFweS5jYS9zZXJ2aWNlcy9kZWVwLXRpc3N1ZS1tYXNzYWdlLXZpY3Rvcmlh" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly9zdGFnaW5nMi5zeW5jdGhlcmFweS5jYS9zZXJ2aWNlcy9kZWVwLXRpc3N1ZS1tYXNzYWdlLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly9zdGFnaW5nMi5zeW5jdGhlcmFweS5jYS9zZXJ2aWNlcy9kZWVwLXRpc3N1ZS1tYXNzYWdlLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGVlcC10aXNzdWUtbWFzc2FnZS12aWN0b3JpYQ==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evb3VyLXRlYW0vcm10LWRhcnlsLXN0dWJicy8=" href="https://synctherapylocal.local/our-team/rmt-daryl-stubbs/" class="service-link">Deep Tissue Massage</a></li>
                            <li><a href="https://synctherapylocal.local/services/myofascial-release-massage/" class="service-link">Myofascial Release</a></li>
                            <li><a data-wpil="url" href="https://synctherapylocal.local/conditions/chronic-pain-victoria/" class="service-link">Chronic Pain Treatment</a></li>
                        </ul>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-header">
                        <span class="service-icon">🏃‍♂️</span>
                        <h3 class="service-title">Athletic Therapy</h3>
                        <p class="service-subtitle">Sports Medicine & Injury Recovery</p>
                    </div>
                    <div class="service-content">
                        <p>Professional <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" href="https://synctherapylocal.local/services/athletic-therapy-victoria/" class="service-link">athletic therapy in Victoria</a>, <a data-wpil="url" href="https://synctherapylocal.local/services/athletic-therapy-colwood/" class="service-link">Colwood</a>, and <a data-wpil="url" href="https://synctherapylocal.local/services/athletic-therapy-langford/" class="service-link">Langford</a>.</p>
                        
                        <ul class="service-features">
                            <li><a href="https://synctherapylocal.local/conditions/sports-injury-prevention-victoria/" class="service-link">Sports Injury Prevention</a></li>
                            <li><a href="https://synctherapylocal.local/conditions/overuse-injuries-victoria/" class="service-link">Overuse Injury Treatment</a></li>
                            <li><a href="https://synctherapylocal.local/conditions/" class="service-link">Concussion Management</a></li>
                            <li>Performance Enhancement</li>
                        </ul>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-header">
                        <span class="service-icon">🎯</span>
                        <h3 class="service-title">Specialized Conditions</h3>
                        <p class="service-subtitle">Targeted Treatment Solutions</p>
                    </div>
                    <div class="service-content">
                        <p>Expert treatment for a comprehensive range of conditions affecting West Shore residents:</p>
                        
                        <ul class="service-features">
                            <li><a data-wpil="url" href="https://synctherapylocal.local/conditions/back-pain-victoria/" class="service-link">Back Pain Relief</a></li>
                            <li><a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9oZWFkYWNoZXMtYW5kLW5lY2stcGFpbi8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9oZWFkYWNoZXMtYW5kLW5lY2stcGFpbi8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9oZWFkYWNoZXMtYW5kLW5lY2stcGFpbi8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9oZWFkYWNoZXMtYW5kLW5lY2stcGFpbi8=" href="https://synctherapylocal.local/conditions/headaches-and-neck-pain/" class="service-link">Headaches & Neck Pain</a></li>
                            <li><a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29uZGl0aW9ucy9zaG91bGRlci1wYWluLXZpY3RvcmlhLWJjLw==" href="https://synctherapylocal.local/conditions/shoulder-pain-victoria-bc/" class="service-link">Shoulder Pain Treatment</a></li>
                            <li><a href="https://synctherapylocal.local/conditions/sciatica-treatment-victoria/" class="service-link">Sciatica Treatment</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Additional Conditions Grid -->
            <div class="specialty-links">
                <a data-wpil="url" href="https://synctherapylocal.local/conditions/hip-and-knee-pain/" class="specialty-link">Hip & Knee Pain</a>
                <a href="https://synctherapylocal.local/conditions/arthritis-pain-victoria/" class="specialty-link">Arthritis Pain</a>
                <a href="https://synctherapylocal.local/conditions/muscle-tension-relief-victoria/" class="specialty-link">Muscle Tension</a>
                <a href="https://synctherapylocal.local/conditions/plantar-fasciitis-treatment-victoria/" class="specialty-link">Plantar Fasciitis</a>
                <a href="https://synctherapylocal.local/conditions/tendonitis-treatment-victoria/" class="specialty-link">Tendonitis</a>
                <a href="https://synctherapylocal.local/services/" class="specialty-link">Bursitis</a>
                <a href="https://synctherapylocal.local/services/" class="specialty-link">Shin Splints</a>
                <a href="https://synctherapylocal.local/conditions/it-band-syndrome-victoria/" class="specialty-link">IT Band Syndrome</a>
            </div>
        </div>
    </section>

    <!-- Awards Section -->
    <section class="section awards-section">
        <div class="container">
            <div class="section-header">
                <h2 style="color: white;">Award-Winning Excellence</h2>
                <p style="color: rgba(255,255,255,0.9);">Recognized by the Victoria community for outstanding therapeutic care and clinical excellence</p>
            </div>

            <div class="awards-grid">
                <div class="award-item">
                    <div class="award-icon">🏆</div>
                    <h3 class="award-title">Best Massage Therapy Clinic</h3>
                    <p class="award-years">Winner 2022, 2023, 2024</p>
                </div>
                <div class="award-item">
                    <div class="award-icon">🥇</div>
                    <h3 class="award-title">Best Rehabilitation Clinic</h3>
                    <p class="award-years">Winner 2022, 2023, 2024</p>
                </div>
                <div class="award-item">
                    <div class="award-icon">⭐</div>
                    <h3 class="award-title">Top 3 Massage Therapy</h3>
                    <p class="award-years">Rated 2022, 2023</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="section testimonials-section">
        <div class="container">
            <div class="section-header">
                <h2>What Victoria Clients Say</h2>
                <p>Real experiences from real people in our community</p>
            </div>

            <div class="testimonial-card">
                <p class="testimonial-text">
                    "Hands down the best experience I've had! Daryl really knows his craft and is a wealth of knowledge! 
                    Highly recommend everyone to Sync Therapy!
                </p>
                <div class="testimonial-author">
                    <div class="author-avatar">G</div>
                    <div class="author-info">
                        <h4>Govind Khatkar</h4>
                        <p>Real Estate Agent</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <p class="testimonial-text">
                    "Daryl is clearly a master practitioner. His scope is broad and holistic and he has the toolkit to match. 
                    I was very impressed with the immediate benefits from my first session. 10/10 would recommend."
                </p>
                <div class="testimonial-author">
                    <div class="author-avatar">J</div>
                    <div class="author-info">
                        <h4>Jenn McRae</h4>
                        <p>Happy Client</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Practitioner Section -->
    <section class="section">
        <div class="container">
            <div class="practitioner-section">
                <div class="practitioner-content">
                    <h2>Meet Your Victoria Therapeutic Expert</h2>
                    <p>
                        <strong><a class="wpil_keyword_link" href="https://synctherapylocal.local/our-team/rmt-daryl-stubbs/"   title="Daryl Stubbs" data-wpil-keyword-link="linked"  data-wpil-monitor-id="7866">Daryl Stubbs</a></strong> brings over a decade of experience serving the Victoria community with a unique combination 
                        of expertise that sets Sync Therapy apart from other clinics in the region.
                    </p>
                    <p>
                        His comprehensive education and continuous learning ensure you receive the most effective, 
                        up-to-date treatments available. Learn more about <a data-wpil="url" href="https://synctherapylocal.local/our-team/" class="service-link">our team</a> 
                        and <a href="https://synctherapylocal.local/about/" class="service-link">our clinic's story</a>.
                    </p>

                    <ul class="credentials-list">
                        <li>
                            <span class="credential-badge">2013</span>
                            <strong>Certified Athletic Therapist</strong> - Camosun College
                        </li>
                        <li>
                            <span class="credential-badge">2017</span>
                            <strong>Registered Massage Therapist</strong> - CMTBC Member
                        </li>
                        <li>
                            <span class="credential-badge">2018</span>
                            <strong>Holistic Nutritionist</strong> - CSNN Graduate
                        </li>
                    </ul>
                </div>
                <div class="practitioner-image">
                    <img src="https://via.placeholder.com/500x600/2E5A88/FFFFFF?text=Daryl+Stubbs+RMT+CAT" alt="Daryl Stubbs - Owner of Sync Therapy Victoria">
                </div>
            </div>
        </div>
    </section>

    <!-- Additional Conditions -->
    <section class="section section-light">
        <div class="container">
            <div class="section-header">
                <h2>Specialized Treatment Areas</h2>
                <p>Comprehensive care for a wide range of conditions and concerns</p>
            </div>

            <div class="specialty-links">
                <a href="https://synctherapylocal.local/conditions/postural-imbalance-victoria/" class="specialty-link">Postural Imbalance</a>
                <a href="https://synctherapylocal.local/conditions/joint-stiffness-victoria/" class="specialty-link">Joint Stiffness</a>
                <a href="https://synctherapylocal.local/conditions/sprains-strains-victoria/" class="specialty-link">Sprains & Strains</a>
                <a data-wpil="url" href="https://synctherapylocal.local/services/swedish-relaxation-massage-victoria/" class="specialty-link">Stress & Anxiety</a>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="section cta-section">
        <div class="container">
            <div class="cta-content">
                <h2>Ready to Experience Victoria's Best Therapeutic Care?</h2>
                <p>
                    Join hundreds of satisfied clients who have chosen Sync Therapy for lasting pain relief and improved wellness. 
                    Our award-winning approach makes us the clear choice for therapeutic care in Victoria, Colwood, and Langford.
                 Our team of experienced professionals is dedicated to providing customized treatment plans tailored to your individual needs. Discover our range of effective back pain treatment options in Victoria, designed to help you regain your mobility and enjoy a pain-free life. Experience the difference that personalized care can make in your wellness journey. With our state-of-the-art facilities and compassionate staff, you can trust that you are in good hands as you embark on your healing process. Explore our diverse <a href="https://synctherapylocal.local/back-pain-treatment-victoria-options/">back pain treatment options in Victoria</a>, each designed to address the root causes of your discomfort and promote long-term health. Take the first step towards a healthier, happier you by scheduling a consultation today.</p>
                
                <div class="btn-group">
                    <a href="https://synctherapy.janeapp.com/" class="btn btn-primary">Book Your Appointment</a>
                    <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" href="https://synctherapylocal.local/contact/" class="btn btn-secondary" style="color: var(--text-dark); border-color: var(--text-dark);">Contact Us</a>
                </div>
                
                <p style="margin-top: 30px; font-size: 1rem;">
                    Questions? <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvY29udGFjdC8=" href="https://synctherapylocal.local/contact/" style="color: var(--text-dark); font-weight: 600;">Contact our Victoria clinic</a> today. 
                    View all our <a data-wpil="url" href="https://synctherapylocal.local/services/" style="color: var(--text-dark); font-weight: 600;">services here</a>.
                </p>
            </div>
        </div>
    </section>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->
