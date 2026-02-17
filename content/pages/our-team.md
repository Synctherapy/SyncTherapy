---
title: Our Team
date: '2025-06-22 15:16:38'
slug: our-team
description: >-
  :root { --primary: #2e5a88; --secondary: #86bbd8; --accent: #f5b82e; } * {
  margin: 0; padding: 0; box-sizing: border-box; } body { font-family:
  'Inter',...
seoTitle: Our Team
---

<!-- wp:html -->
<!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --primary: #2e5a88;
            --secondary: #86bbd8;
            --accent: #f5b82e;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #374151;
            background: #ffffff;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', sans-serif;
        }
        
        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        /* Navigation Breadcrumb */
        .breadcrumb {
            background: white;
            border-bottom: 1px solid #e5e7eb;
            padding: 1rem 0;
        }
        
        .breadcrumb-nav {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
        }
        
        .breadcrumb a {
            color: #6b7280;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .breadcrumb a:hover {
            color: var(--primary);
        }
        
        .breadcrumb-current {
            color: var(--primary);
            font-weight: 500;
        }
        
        /* Hero Section */
        .hero-section {
            background: linear-gradient(135deg, #dbeafe 0%, white 50%, rgba(134, 187, 216, 0.1) 100%);
            padding: 4rem 0;
        }
        
        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(134, 187, 216, 0.2);
            color: var(--primary);
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
        }
        
        .hero-title {
            font-size: 3rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 1.5rem;
            line-height: 1.1;
            text-align: center;
        }
        
        .hero-subtitle {
            font-size: 1.25rem;
            color: #6b7280;
            max-width: 48rem;
            margin: 0 auto 3rem;
            line-height: 1.6;
            text-align: center;
        }
        
        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-icon {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 2rem;
        }
        
        .stat-number {
            font-size: 1.5rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 0.5rem;
        }
        
        .stat-label {
            color: #6b7280;
        }
        
        /* Philosophy Section */
        .philosophy-section {
            padding: 4rem 0;
            background: white;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 1rem;
        }
        
        .section-subtitle {
            font-size: 1.25rem;
            color: var(--secondary);
            font-weight: 600;
            margin-bottom: 1rem;
        }
        
        .section-description {
            font-size: 1.125rem;
            color: #6b7280;
            max-width: 48rem;
            margin: 0 auto;
        }
        
        .philosophy-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        
        .philosophy-card {
            background: white;
            border-radius: 1rem;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }
        
        .philosophy-card:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transform: translateY(-0.25rem);
            border-color: rgba(46, 90, 136, 0.2);
        }
        
        .philosophy-icon {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: rgba(46, 90, 136, 0.1);
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 1.5rem;
        }
        
        .philosophy-title {
            font-weight: 600;
            color: #111827;
            margin-bottom: 0.75rem;
        }
        
        .philosophy-text {
            font-size: 0.875rem;
            color: #6b7280;
            line-height: 1.6;
        }
        
        /* Team Section */
        .team-section {
            padding: 4rem 0;
            background: #f9fafb;
        }
        
        .team-grid {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 4rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .team-card {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            border: 2px solid transparent;
            transition: all 0.5s ease;
            position: relative;
            overflow: hidden;
            width: 100%;
        }
        
        .team-content {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
        }

        @media (min-width: 768px) {
            .team-content {
                flex-direction: row;
                align-items: flex-start;
            }
        }
        
        .team-image-container {
            position: relative;
            text-align: center;
            flex-shrink: 0;
            align-self: center;
        }

        @media (min-width: 768px) {
            .team-image-container {
                align-self: flex-start;
            }
        }
        
        .team-image {
            width: 160px;
            height: 160px;
            border-radius: 1rem;
            border: 4px solid white;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .team-card:hover .team-image {
            transform: scale(1.05);
        }
        
        .team-badge {
            position: absolute;
            top: -0.5rem;
            right: -0.5rem;
            background: var(--accent);
            border-radius: 50%;
            padding: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            color: white;
        }
        
        .team-info {
            flex: 1;
            text-align: center;
            width: 100%;
        }

        @media (min-width: 768px) {
            .team-info {
                text-align: left;
            }
        }
        
        .team-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 0.5rem;
        }
        
        .team-credentials {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
            margin-bottom: 0.75rem;
        }
        
        @media (min-width: 768px) {
            .team-credentials {
                justify-content: flex-start;
            }
        }
        
        .credential-badge {
            background: rgba(46, 90, 136, 0.1);
            color: var(--primary);
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
            border: 1px solid rgba(46, 90, 136, 0.2);
        }
        
        .team-specialty {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--secondary);
            margin-bottom: 0.5rem;
        }
        
        .team-experience {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: #6b7280;
            margin-bottom: 1rem;
        }
        
        @media (min-width: 768px) {
            .team-experience {
                justify-content: flex-start;
            }
        }
        
        .team-bio {
            color: #374151;
            line-height: 1.6;
            margin-bottom: 1rem;
        }
        
        .team-philosophy {
            background: rgba(46, 90, 136, 0.05);
            padding: 1rem;
            border-radius: 0.5rem;
            border-left: 4px solid var(--primary);
            margin-bottom: 1rem;
        }
        
        .philosophy-label {
            font-weight: 600;
            color: #111827;
            margin-bottom: 0.5rem;
        }
        
        .philosophy-quote {
            font-size: 0.875rem;
            color: #374151;
            font-style: italic;
        }
        
        .specializations {
            margin-bottom: 1rem;
        }
        
        .specializations-title {
            font-weight: 600;
            color: #111827;
            margin-bottom: 0.5rem;
        }
        
        .specializations-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
        }
        
        @media (min-width: 768px) {
            .specializations-list {
                justify-content: flex-start;
            }
        }
        
        .specialization-tag {
            font-size: 0.75rem;
            background: rgba(134, 187, 216, 0.2);
            color: var(--secondary);
            padding: 0.25rem 0.5rem;
            border-radius: 9999px;
            border: 1px solid rgba(134, 187, 216, 0.3);
        }
        
        .certifications {
            margin-bottom: 1rem;
        }
        
        .certifications-title {
            font-weight: 600;
            color: #111827;
            margin-bottom: 0.5rem;
        }
        
        .certification-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: #6b7280;
            margin-bottom: 0.25rem;
            justify-content: center;
        }
        
        @media (min-width: 768px) {
            .certification-item {
                justify-content: flex-start;
            }
        }
        
        .certification-check {
            color: var(--primary);
        }
        
        .personal-touch {
            background: rgba(134, 187, 216, 0.1);
            padding: 0.75rem;
            border-radius: 0.5rem;
            border: 1px solid rgba(134, 187, 216, 0.2);
            margin-bottom: 1rem;
        }
        
        .personal-text {
            font-size: 0.875rem;
            color: #374151;
        }
        
        .team-cta {
            margin-top: 1.5rem;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }
        
        .btn-primary {
            background: var(--primary);
            color: white;
        }
        
        .btn-primary:hover {
            background: #1e3a5f;
        }
        
        .btn-accent {
            background: var(--accent);
            color: white;
        }
        
        .btn-accent:hover {
            background: #e6a429;
        }
        
        .btn-white {
            background: white;
            color: var(--primary);
            border: 2px solid white;
        }
        
        .btn-white:hover {
            background: #f3f4f6;
        }
        
        .btn-icon {
            margin-left: 0.5rem;
            transition: transform 0.3s ease;
        }
        
        .btn:hover .btn-icon {
            transform: translateX(0.25rem);
        }
        
        /* Services Section */
        .services-section {
            padding: 4rem 0;
            background: white;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }
        
        .service-card {
            background: white;
            border-radius: 1rem;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            border: 2px solid transparent;
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
        }
        
        .service-card:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transform: translateY(-0.25rem);
            border-color: rgba(46, 90, 136, 0.2);
            text-decoration: none;
            color: inherit;
        }
        
        .service-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            transition: transform 0.3s ease;
        }
        
        .service-card:hover .service-icon {
            transform: scale(1.1);
        }
        
        .service-title {
            font-weight: 600;
            color: #111827;
            margin-bottom: 0.5rem;
            transition: color 0.3s ease;
        }
        
        .service-card:hover .service-title {
            color: var(--primary);
        }
        
        .service-description {
            font-size: 0.875rem;
            color: #6b7280;
        }
        
        /* CTA Section */
        .cta-section {
            padding: 4rem 0;
            background: var(--primary);
            color: white;
            text-align: center;
        }
        
        .cta-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }
        
        .cta-description {
            font-size: 1.25rem;
            color: #f3f4f6;
            max-width: 32rem;
            margin: 0 auto 2rem;
        }
        
        .cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            margin-bottom: 2rem;
            align-items: center;
        }
        
        @media (min-width: 640px) {
            .cta-buttons {
                flex-direction: row;
            }
        }
        
        .cta-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            color: #f3f4f6;
        }
        
        @media (min-width: 640px) {
            .cta-info {
                flex-direction: row;
                justify-content: center;
            }
        }
        
        .cta-info-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        /* Footer Links */
        .footer-section {
            padding: 3rem 0;
            background: #111827;
            color: white;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }
        
        .footer-column h3 {
            color: white;
            margin-bottom: 1rem;
            font-size: 1.125rem;
            font-weight: 600;
        }
        
        .footer-column a {
            color: #d1d5db;
            text-decoration: none;
            display: block;
            margin-bottom: 0.5rem;
            transition: color 0.3s ease;
        }
        
        .footer-column a:hover {
            color: white;
        }
        
        /* Responsive adjustments */
        @media (max-width: 767px) {
            .hero-title {
                font-size: 2rem;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .cta-title {
                font-size: 2rem;
            }
            
            .team-card {
                padding: 1.5rem;
            }
            
            .team-image {
                width: 120px;
                height: 120px;
            }
        }
    </style>

    <!-- Navigation Breadcrumb -->
    <nav class="breadcrumb">
        <div class="container">
            <div class="breadcrumb-nav">
                Home
                <span>/</span>
                <a href="https://synctherapylocal.local/about/">About</a>
                <span>/</span>
                <span class="breadcrumb-current">Our Team</span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div style="text-align: center;">
                <div class="hero-badge">
                    <i class="fas fa-users"></i>
                    Meet Our Expert Team
                </div>
                <h1 class="hero-title">
                    Dedicated to Your <span style="color: var(--primary);">Wellness Journey</span>
                </h1>
                <p class="hero-subtitle">
                    At Sync Therapy, our team of highly skilled Registered Massage Therapists (RMTs) and Athletic Therapists
                    are dedicated to providing personalized care that helps you achieve your health and recovery goals. Get to
                    know the professionals committed to your well-being.
                </p>
            </div>

            <!-- Stats Section -->
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-icon" style="background: rgba(46, 90, 136, 0.1); color: var(--primary);">
                        <i class="fas fa-award"></i>
                    </div>
                    <div class="stat-number">12+ Years</div>
                    <div class="stat-label">Combined Experience</div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon" style="background: rgba(134, 187, 216, 0.2); color: var(--secondary);">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="stat-number">800+</div>
                    <div class="stat-label">Clients Helped</div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon" style="background: rgba(245, 184, 46, 0.2); color: var(--accent);">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <div class="stat-number">12+</div>
                    <div class="stat-label">Years Serving Victoria</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Treatment Philosophy Section -->
    <section class="philosophy-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Treatment Philosophy</h2>
                <p class="section-subtitle">Holistic, Evidence-Based Care Tailored to You</p>
                <p class="section-description">At Sync Therapy, we believe that effective treatment goes beyond addressing symptoms—it's about understanding the whole person and their unique needs.</p>
            </div>

            <div class="philosophy-grid">
                <div class="philosophy-card">
                    <div class="philosophy-icon">
                        <i class="fas fa-stethoscope"></i>
                    </div>
                    <h3 class="philosophy-title">Evidence-Based Practice</h3>
                    <p class="philosophy-text">We integrate the latest research with proven clinical techniques to ensure you receive the most effective treatments available.</p>
                </div>
                
                <div class="philosophy-card">
                    <div class="philosophy-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h3 class="philosophy-title">Patient-Centered Care</h3>
                    <p class="philosophy-text">Your goals, concerns, and preferences guide every aspect of your treatment plan. We listen, understand, and adapt our approach to meet your individual needs.</p>
                </div>
                
                <div class="philosophy-card">
                    <div class="philosophy-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3 class="philosophy-title">Collaborative Approach</h3>
                    <p class="philosophy-text">We work as partners in your health journey, empowering you with knowledge and tools to take an active role in your recovery and wellness.</p>
                </div>
                
                <div class="philosophy-card">
                    <div class="philosophy-icon">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <h3 class="philosophy-title">Holistic Wellness</h3>
                    <p class="philosophy-text">We consider all aspects of your health—physical, mental, and lifestyle factors—to create comprehensive treatment plans that promote lasting well-being.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Members Section -->
    <section class="team-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Meet Your Therapy Experts</h2>
                <p class="section-description">Our certified professionals bring years of experience and specialized training to help you achieve optimal health and wellness.</p>
            </div>

            <div class="team-grid">
                <!-- RMT Daryl Stubbs -->
                <div class="team-card">
                    <div class="team-content">
                        <div class="team-image-container">
                            <img src="/uploads/2025/06/Daryl-is-an-RMT-in-Colwood-scaled.jpg" alt="Daryl Stubbs - Registered Massage Therapist" class="team-image">
                            <div class="team-badge">
                                <i class="fas fa-star"></i>
                            </div>
                        </div>

                        <div class="team-info">
                            <h3 class="team-name">Daryl Stubbs</h3>
                            <div class="team-credentials">
                                <span class="credential-badge">RMT</span>
                                <span class="credential-badge">Registered Massage Therapist</span>
                            </div>
                            <p class="team-specialty">Deep Tissue & Sports Massage Therapy</p>
                            <div class="team-experience">
                                <i class="fas fa-clock"></i>
                                <span>8 Years Experience</span>
                            </div>

                            <p class="team-bio">Specializing in sports massage, deep tissue work, and ICBC treatments, Daryl combines clinical expertise with a genuine passion for helping clients achieve their recovery goals and return to optimal function. Daryl's extensive knowledge allows him to offer tailored back pain treatment options in Victoria, ensuring that each client receives a personalized approach to their needs. He believes that effective communication and understanding are key components in the healing process, empowering clients to take an active role in their recovery. With a commitment to ongoing education, Daryl stays updated on the latest techniques and advancements in the field, continuously enhancing his practice. Daryl is dedicated to collaborating with clients to explore various <a href="https://synctherapylocal.local/back-pain-treatment-victoria-options/">back pain relief options in Victoria</a>, ensuring that they feel supported every step of the way. He also incorporates feedback from his clients to refine his methods, creating an environment where they feel heard and valued. In doing so, he aims to not only alleviate pain but also educate clients on preventive measures for long-term wellness.</p>

                            <div class="team-philosophy">
                                <h4 class="philosophy-label">Treatment Philosophy:</h4>
                                <p class="philosophy-quote">"I believe in empowering my clients through education and hands-on treatment, helping them understand their bodies and take an active role in their recovery journey."</p>
                            </div>

                            <div class="specializations">
                                <h4 class="specializations-title">Specializations:</h4>
                                <div class="specializations-list">
                                    <span class="specialization-tag">Sports Massage</span>
                                    <span class="specialization-tag">Deep Tissue Massage</span>
                                    <span class="specialization-tag">Visceral Manipulation</span>
                                    <span class="specialization-tag">Myofascial Release</span>
                                </div>
                            </div>

                            <div class="certifications">
                                <h4 class="certifications-title">Certifications:</h4>
                                <div class="certification-item">
                                    <i class="fas fa-check-circle certification-check"></i>
                                    <span>Registered Massage Therapist (RMT)</span>
                                </div>
                                <div class="certification-item">
                                    <i class="fas fa-check-circle certification-check"></i>
                                    <span>Sports Massage Specialist</span>
                                </div>
                                <div class="certification-item">
                                    <i class="fas fa-check-circle certification-check"></i>
                                    <span>ICBC Certified Provider</span>
                                </div>
                            </div>

                            <div class="personal-touch">
                                <p class="personal-text">When not in the clinic, Daryl enjoys hiking the local trails around Victoria and staying active in the community through various sports activities.</p>
                            </div>

                            <div class="team-cta">
                                <a href="https://synctherapylocal.local/our-team/rmt-daryl-stubbs/" class="btn btn-primary">
                                    View Full Profile
                                    <i class="fas fa-arrow-right btn-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Athletic Therapist Daryl Stubbs -->
                <div class="team-card">
                    <div class="team-content">
                        <div class="team-image-container">
                            <img src="/uploads/2025/06/daryls-an-RMT-in-downtown-victoria-offering-massage-therapy.jpg" alt="Daryl Stubbs - Athletic Therapist" class="team-image">
                            <div class="team-badge">
                                <i class="fas fa-star"></i>
                            </div>
                        </div>

                        <div class="team-info">
                            <h3 class="team-name">Daryl Stubbs</h3>
                            <div class="team-credentials">
                                <span class="credential-badge">CAT(C)</span>
                                <span class="credential-badge">Certified Athletic Therapist</span>
                            </div>
                            <p class="team-specialty">Sports Injury Rehabilitation & Performance</p>
                            <div class="team-experience">
                                <i class="fas fa-clock"></i>
                                <span>12 Years Experience</span>
                            </div>

                            <p class="team-bio">With extensive experience in sports injury rehabilitation and visceral manipulation, Daryl helps athletes and active individuals return to peak performance safely and effectively through evidence-based treatment methods.</p>

                            <div class="team-philosophy">
                                <h4 class="philosophy-label">Treatment Philosophy:</h4>
                                <p class="philosophy-quote">"My approach focuses on treating the whole person, not just the injury. I work collaboratively with clients to develop comprehensive treatment plans that address both immediate concerns and long-term athletic goals."</p>
                            </div>

                            <div class="specializations">
                                <h4 class="specializations-title">Specializations:</h4>
                                <div class="specializations-list">
                                    <span class="specialization-tag">Injury Rehabilitation</span>
                                    <span class="specialization-tag">Visceral Manipulation</span>
                                    <span class="specialization-tag">Performance Enhancement</span>
                                    <span class="specialization-tag">Headache Relief</span>
                                </div>
                            </div>

                            <div class="certifications">
                                <h4 class="certifications-title">Certifications:</h4>
                                <div class="certification-item">
                                    <i class="fas fa-check-circle certification-check"></i>
                                    <span>Certified Athletic Therapist CAT(C)</span>
                                </div>
                                <div class="certification-item">
                                    <i class="fas fa-check-circle certification-check"></i>
                                    <span>Visceral Manipulation Specialist</span>
                                </div>
                                <div class="certification-item">
                                    <i class="fas fa-check-circle certification-check"></i>
                                    <span>Concussion Management Certified</span>
                                </div>
                            </div>

                            <div class="personal-touch">
                                <p class="personal-text">Daryl is passionate about sports science and enjoys working with athletes of all levels, from weekend warriors to elite competitors, to optimize their performance and longevity in their chosen activities.</p>
                            </div>

                            <div class="team-cta">
                                <a href="https://synctherapylocal.local/our-team/athletic-therapist-daryl-stubbs/" class="btn btn-primary">
                                    View Full Profile
                                    <i class="fas fa-arrow-right btn-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Overview -->
    <section class="services-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Comprehensive Treatment Options</h2>
                <p class="section-description">Our team offers a wide range of specialized treatments to address your unique needs and goals.</p>
            </div>

            <div class="services-grid">
                <a href="https://synctherapylocal.local/services/massage-therapy/" class="service-card">
                    <div class="service-icon">💆‍♂️</div>
                    <h3 class="service-title">Massage Therapy</h3>
                    <p class="service-description">Therapeutic massage treatments</p>
                </a>
                
                <a href="https://synctherapylocal.local/services/athletic-therapy-victoria/" class="service-card">
                    <div class="service-icon">🏃‍♂️</div>
                    <h3 class="service-title">Athletic Therapy</h3>
                    <p class="service-description">Sports injury rehabilitation</p>
                </a>
                
                <a href="https://synctherapylocal.local/services/sports-massage-therapy/" class="service-card">
                    <div class="service-icon">⚽</div>
                    <h3 class="service-title">Sports Massage</h3>
                    <p class="service-description">Performance-focused treatments</p>
                </a>
                
                <a href="https://synctherapylocal.local/services/deep-tissue-massage-victoria/" class="service-card">
                    <div class="service-icon">💪</div>
                    <h3 class="service-title">Deep Tissue Massage</h3>
                    <p class="service-description">Intensive muscle therapy</p>
                </a>
                
                <a href="https://synctherapylocal.local/conditions/headaches-and-neck-pain/" class="service-card">
                    <div class="service-icon">🧠</div>
                    <h3 class="service-title">Headaches & Neck Pain</h3>
                    <p class="service-description">Specialized headache and neck pain relief</p>
                </a>
                
                <a href="https://synctherapylocal.local/services/visceral-manipulation-victoria/" class="service-card">
                    <div class="service-icon">🫁</div>
                    <h3 class="service-title">Visceral Manipulation</h3>
                    <p class="service-description">Internal organ mobility therapy</p>
                </a>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2 class="cta-title">Ready to Start Your Wellness Journey?</h2>
            <p class="cta-description">Our expert team is here to help you achieve your health and recovery goals. Book your appointment today and experience the Sync Therapy difference.</p>

            <div class="cta-buttons">
                <a href="https://synctherapy.janeapp.com/" class="btn btn-accent">
                    <i class="fas fa-calendar" style="margin-right: 0.5rem;"></i>
                    Book Your Appointment
                </a>
                <a href="https://synctherapylocal.local/contact/" class="btn btn-white">
                    <i class="fas fa-phone" style="margin-right: 0.5rem;"></i>
                    Contact Our Team
                </a>
            </div>

            <div class="cta-info">
                <div class="cta-info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Serving Victoria, Colwood & Langford</span>
                </div>
                <div class="cta-info-item">
                    <i class="fas fa-shield-alt"></i>
                    <span>Direct Billing Available</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer Links -->
    <section class="footer-section">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h3>Learn More About Us</h3>
                    <a href="https://synctherapylocal.local/about/">About Sync Therapy</a>
                    <a data-wpil="url" href="https://synctherapylocal.local/about/why-us/">Why Choose Us</a>
                </div>
                <div class="footer-column">
                    <h3>Our Services</h3>
                    <a data-wpil="url" href="https://synctherapylocal.local/services/">All Services</a>
                    <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" href="https://synctherapylocal.local/services/direct-billing-massage/">Direct Billing</a>
                </div>
                <div class="footer-column">
                    <h3>Conditions We Treat</h3>
                    <a data-wpil="url" href="https://synctherapylocal.local/conditions/back-pain-victoria/">Back Pain</a>
                    <a href="https://synctherapylocal.local/conditions/sports-injury-prevention-victoria/">Sports Injuries</a>
                </div>
                <div class="footer-column">
                    <h3>Locations</h3>
                    <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" href="https://synctherapylocal.local/services/massage-therapy-victoria/">Victoria</a>
                    <a data-wpil="url" href="https://synctherapylocal.local/services/massage-therapy/">Colwood</a>
                    <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" href="https://synctherapylocal.local/services/massage-therapy/">Langford</a>
                </div>
            </div>
        </div>
    </section>
<!-- /wp:html -->
