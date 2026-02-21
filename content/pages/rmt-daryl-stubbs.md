---
title: Our RMT
date: '2025-06-21 18:46:12'
slug: rmt-daryl-stubbs
description: >-
  :root { --primary: #2E5A88; --secondary: #86BBD8; --accent: #F5B82E;
  --accent-hover: #E5A71E; } * { margin: 0; padding: 0; box-sizing: border-box;
  } body {...
seoTitle: Our RMT
---

<!-- wp:html -->
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Smartcrawl will inject meta description here automatically - do NOT add it manually -->
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    
    <style>
        :root {
            --primary: #2E5A88;
            --secondary: #86BBD8;
            --accent: #F5B82E;
            --accent-hover: #E5A71E;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #fff;
        }
        
        .font-poppins {
            font-family: 'Poppins', sans-serif;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        /* Breadcrumb */
        .breadcrumb {
            background-color: #f9fafb;
            padding: 1rem 0;
        }
        
        .breadcrumb nav {
            font-size: 0.875rem;
            color: #6b7280;
        }
        
        .breadcrumb a {
            color: #6b7280;
            text-decoration: none;
        }
        
        .breadcrumb a:hover {
            color: var(--primary);
        }
        
        .breadcrumb .current {
            color: var(--primary);
        }
        
        /* Main Layout */
        .main-content {
            padding: 3rem 0;
        }
        
        .grid {
            display: grid;
            gap: 3rem;
        }
        
        @media (min-width: 1024px) {
            .grid {
                grid-template-columns: 1fr 2fr;
            }
        }
        
        /* Card Styles */
        .card {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
        }
        
        .card-content {
            padding: 1.5rem;
        }
        
        .sticky {
            position: sticky;
            top: 2rem;
        }
        
        /* Profile Image */
        .profile-image {
            width: 100%;
            height: auto;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            margin-bottom: 1.5rem;
        }
        
        /* Buttons */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 2rem;
            border-radius: 0.375rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }
        
        .btn-primary {
            background-color: var(--accent);
            color: black;
        }
        
        .btn-primary:hover {
            background-color: var(--accent-hover);
        }
        
        .btn-outline {
            background-color: transparent;
            color: white;
            border: 1px solid white;
        }
        
        .btn-outline:hover {
            background-color: white;
            color: var(--primary);
        }
        
        .btn-full {
            width: 100%;
        }
        
        .btn-icon {
            margin-right: 0.5rem;
        }
        
        /* Badges */
        .badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
            margin: 0.125rem;
        }
        
        .badge-primary {
            background-color: var(--primary);
            color: white;
        }
        
        .badge-secondary {
            background-color: var(--secondary);
            color: white;
        }
        
        .badge-accent {
            background-color: var(--accent);
            color: black;
        }
        
        /* Typography */
        h1 {
            font-size: 2.25rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }
        
        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
        }
        
        h3 {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 0.75rem;
        }
        
        .subtitle {
            font-size: 1.25rem;
            color: #6b7280;
            margin-bottom: 2rem;
        }
        
        /* Lists */
        .list-none {
            list-style: none;
        }
        
        .list-item {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        
        .list-dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin-right: 0.75rem;
            flex-shrink: 0;
        }
        
        .dot-accent {
            background-color: var(--accent);
        }
        
        .dot-secondary {
            background-color: var(--secondary);
        }
        
        /* Links */
        a {
            color: inherit;
            text-decoration: none;
        }
        
        a:hover {
            color: var(--primary);
            text-decoration: underline;
        }
        
        /* Highlight Boxes */
        .highlight-box {
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1.5rem;
        }
        
        .highlight-secondary {
            background-color: rgba(134, 187, 216, 0.1);
        }
        
        .highlight-accent {
            background-color: rgba(245, 184, 46, 0.1);
        }
        
        .highlight-primary {
            background-color: rgba(46, 90, 136, 0.05);
            border-left: 4px solid var(--primary);
        }
        
        /* CTA Section */
        .cta-section {
            background-color: var(--primary);
            color: white;
            text-align: center;
        }
        
        .cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            margin: 1.5rem 0;
        }
        
        @media (min-width: 640px) {
            .cta-buttons {
                flex-direction: row;
            }
        }
        
        .cta-info {
            margin-top: 1.5rem;
            font-size: 0.875rem;
            opacity: 0.9;
        }
        
        /* Contact Info */
        .contact-info {
            text-align: center;
            font-size: 0.875rem;
            color: #6b7280;
            margin-top: 1rem;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0.5rem;
        }
        
        .contact-icon {
            margin-right: 0.25rem;
        }
        
        /* Content Sections */
        .content-section {
            margin-bottom: 2rem;
        }
        
        .content-grid {
            display: grid;
            gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
            .content-grid {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        /* Footer Links */
        .footer-links {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid #e5e7eb;
            text-align: center;
        }
        
        .footer-links h3 {
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .footer-nav {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            align-items: center;
        }
        
        .footer-nav a {
            color: var(--primary);
        }
        
        .footer-nav a:hover {
            color: var(--accent);
        }
        
        .footer-separator {
            color: #9ca3af;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            h1 {
                font-size: 1.875rem;
            }
            
            .subtitle {
                font-size: 1.125rem;
            }
            
            .container {
                padding: 0 0.5rem;
            }
        }
    </style>

    <!-- Breadcrumb Navigation -->
    <div class="breadcrumb">
        <div class="container">
            <nav>
                <a href="/">Home</a>
                <span> / </span>
                <a data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" href="/our-team/">Our Team</a>
                <span> / </span>
                <span class="current">Daryl Stubbs RMT</span>
            </nav>
        </div>
    </div>
    
    <div class="container main-content">
        <div class="grid">
            <!-- Left Column - Photo and Quick Info -->
            <div>
                <div class="card sticky">
                    <div class="card-content">
                        <!-- Professional Headshot -->
                        <img src="/uploads/2025/06/Daryl-is-an-RMT-in-Colwood-scaled.jpg" alt="Daryl Stubbs, Registered Massage Therapist" class="profile-image">
                        
                        <!-- Quick Contact -->
                        <div style="margin-bottom: 1.5rem;">
                            <a href="https://synctherapy.janeapp.com/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-full">
                                <i data-lucide="calendar" class="btn-icon"></i>
                                Book with Daryl
                            </a>
                        </div>
                        
                        <div class="contact-info">
                            <div class="contact-item">
                                <i data-lucide="map-pin" class="contact-icon"></i>
                                Serves Colwood, Langford, and Westshore
                            </div>
                            <div class="contact-item">
                                <i data-lucide="clock" class="contact-icon"></i>
                                Available Mon-Fri
                            </div>
                        </div>
                        
                        <!-- Credentials Badge -->
                        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #e5e7eb;">
                            <div>
                                <span class="badge badge-primary">RMT Licensed</span>
                                <span class="badge badge-secondary">CMTBC Member</span>
                                <span class="badge badge-accent">12+ Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Right Column - Detailed Information -->
            <div>
                <!-- Header -->
                <div class="content-section">
                    <h1 class="font-poppins">Daryl Stubbs, RMT Langford</h1>
                    <p class="subtitle">
                        Registered Massage Therapist Helping Clients Recover From Pain, Injury, Or To Relax
                    </p>
                </div>
                
                <!-- Credentials & Qualifications -->
                <div class="card content-section">
                    <div class="card-content">
                        <h2 class="font-poppins">
                            <i data-lucide="award" style="margin-right: 0.5rem;"></i>
                            Credentials & Qualifications
                        </h2>
                        <ul class="list-none">
                            <li class="list-item">
                                <div class="list-dot dot-accent"></div>
                                <div><strong>Registered Massage Therapist (RMT)</strong> - Licensed in British Columbia</div>
                            </li>
                            <li class="list-item">
                                <div class="list-dot dot-accent"></div>
                                <div><strong>Member of CMTBC</strong> (College of Massage Therapists of British Columbia)</div>
                            </li>
                            <li class="list-item">
                                <div class="list-dot dot-accent"></div>
                                <div><strong>Bachelors In Athletic & Exercise Therapy</strong> - Camosun College</div>
                            </li>
                            <li class="list-item">
                                <div class="list-dot dot-accent"></div>
                                <div><strong>Advanced Certification</strong> - Visceral Manipulation</div>
                            </li>
                            <li class="list-item">
                                <div class="list-dot dot-accent"></div>
                                <div><strong>Specialized Training</strong> - Sports Injury Assessment & Rehabilitation</div>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- Specializations & Expertise -->
                <div class="card content-section">
                    <div class="card-content">
                        <h2 class="font-poppins">Specializations & Expertise</h2>
                        <div class="content-grid">
                            <div>
                                <h3>Treatment Specialties:</h3>
                                <ul class="list-none">
                                    <li class="list-item">
                                        <div class="list-dot dot-secondary"></div>
                                        <a wpil="url" old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGVlcC10aXNzdWUtbWFzc2FnZS12aWN0b3JpYQ==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGVlcC10aXNzdWUtbWFzc2FnZS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGVlcC10aXNzdWUtbWFzc2FnZS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGVlcC10aXNzdWUtbWFzc2FnZS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly9zdGFnaW5nMi5zeW5jdGhlcmFweS5jYS9zZXJ2aWNlcy9kZWVwLXRpc3N1ZS1tYXNzYWdlLXZpY3Rvcmlh" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly9zdGFnaW5nMi5zeW5jdGhlcmFweS5jYS9zZXJ2aWNlcy9kZWVwLXRpc3N1ZS1tYXNzYWdlLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly9zdGFnaW5nMi5zeW5jdGhlcmFweS5jYS9zZXJ2aWNlcy9kZWVwLXRpc3N1ZS1tYXNzYWdlLXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGVlcC10aXNzdWUtbWFzc2FnZS12aWN0b3JpYQ==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGVlcC10aXNzdWUtbWFzc2FnZS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGVlcC10aXNzdWUtbWFzc2FnZS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGVlcC10aXNzdWUtbWFzc2FnZS12aWN0b3JpYS8=" href="https://synctherapylocal.local/services/deep-tissue-massage-victoria/">Deep Tissue Massage</a>
                                    </li>
                                    <li class="list-item">
                                        <div class="list-dot dot-secondary"></div>
                                        <a href="https://synctherapylocal.local/services/sports-massage-therapy/">Sports Massage</a>
                                    </li>
                                    <li class="list-item">
                                        <div class="list-dot dot-secondary"></div>
                                        <a href="https://synctherapylocal.local/services/">Myofascial Release</a>
                                    </li>
                                    <li class="list-item">
                                        <div class="list-dot dot-secondary"></div>
                                        <a href="https://synctherapylocal.local/conditions/sports-injury-prevention-victoria/">Injury Rehabilitation</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3>Conditions Treated:</h3>
                                <ul class="list-none">
                                    <li class="list-item">
                                        <div class="list-dot dot-secondary"></div>
                                        <a href="https://synctherapylocal.local/conditions/sports-injury-prevention-victoria/">Sports Injuries</a>
                                    </li>
                                    <li class="list-item">
                                        <div class="list-dot dot-secondary"></div>
                                        <a href="https://synctherapylocal.local/conditions/chronic-pain-victoria/">Chronic Pain Management</a>
                                    </li>
                                    <li class="list-item">
                                        <div class="list-dot dot-secondary"></div>
                                        <a href="https://synctherapylocal.local/services/">Workplace Injuries</a>
                                    </li>
                                    <li class="list-item">
                                        <div class="list-dot dot-secondary"></div>
                                        <a href="https://synctherapylocal.local/conditions/postural-imbalance-victoria/">Postural Dysfunction</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="highlight-box highlight-secondary">
                            <p><strong>Daryl's Approach:</strong> Combining evidence-based manual therapy techniques with personalized treatment plans, Daryl focuses on not just treating symptoms but addressing root causes to prevent future injuries. His expertise in sports massage makes him a trusted choice for athletes and active individuals throughout Victoria and Colwood. Daryl also emphasizes education, empowering his clients with knowledge about their bodies and ways to enhance recovery and performance. For those seeking effective back pain treatment options in Victoria, Daryl provides tailored strategies that help clients regain strength and mobility. His commitment to ongoing support ensures that every individual feels valued and understood throughout their healing journey.</p>
                        </div>
                    </div>
                </div>
                
                <!-- Philosophy of Care -->
                <div class="card content-section">
                    <div class="card-content">
                        <h2 class="font-poppins">
                            <i data-lucide="heart" style="margin-right: 0.5rem;"></i>
                            Philosophy of Care
                        </h2>
                        <p style="margin-bottom: 1rem; line-height: 1.7;">
                            "I believe in empowering my clients through education and understanding. When you know how your body works and what's causing your pain or dysfunction, you become an active participant in your recovery and prevention strategy."
                         This knowledge not only enhances your healing journey but also enables you to make informed decisions regarding your health. Whether you're exploring <a href="https://synctherapylocal.local/conditions/back-pain-victoria/">back pain treatments in Victoria</a> or adopting lifestyle changes, understanding your body is key to lasting wellness. Together, we can create a tailored approach that not only addresses your current issues but also supports your long-term health goals. Incorporating techniques like RMT massage can significantly enhance your overall well-being, offering various rmt massage benefits for health. By alleviating tension, improving circulation, and promoting relaxation, these therapies play a crucial role in your recovery process. Together, we will leverage these methods to empower your healing journey and help you achieve a balanced, healthy lifestyle.</p>
                        <p style="margin-bottom: 1rem; line-height: 1.7;">
                            My approach combines hands-on manual therapy with movement education and lifestyle modifications. I don't just want to help you feel better today – I want to give you the tools and knowledge to maintain optimal health and prevent future injuries.
                         By incorporating techniques such as <a href="https://synctherapylocal.local/services/visceral-manipulation-victoria/">visceral manipulation therapy Victoria</a>, I aim to address not only musculoskeletal issues but also the underlying factors that contribute to your overall well-being. This holistic approach ensures that you gain a deeper understanding of your body’s signals, allowing for a more proactive approach to health. Together, we will work towards a personalized plan that fits your unique lifestyle and goals.</p>
                        <div class="highlight-box highlight-primary">
                            <p style="color: var(--primary); font-weight: 600;">
                                "Every client is unique, and so is their path to recovery. I take the time to understand not just your symptoms, but your lifestyle, goals, and what success looks like for you."
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Experience & Background -->
                <div class="card content-section">
                    <div class="card-content">
                        <h2 class="font-poppins">
                            <i data-lucide="users" style="margin-right: 0.5rem;"></i>
                            Experience & Background
                        </h2>
                        <div class="content-grid">
                            <div>
                                <h3>Professional Experience:</h3>
                                <ul style="color: #4b5563;">
                                    <li>• 8+ years as a Registered Massage Therapist</li>
                                    <li>• Worked With Team Canada Athletes</li>
                                    <li>• Clinic owner and lead therapist since 2015</li>
                                    <li>• Over 8000 successful treatment sessions</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Advanced Training:</h3>
                                <ul style="color: #4b5563;">
                                    <li>• Visceral Manipulation Certification (2019)</li>
                                    <li>• Sports Injury Assessment Course (2020)</li>
                                    <li>• Visceral Manipulation Level 1 (2021)</li>
                                    <li>• Ongoing continuing education</li>
                                </ul>
                            </div>
                        </div>
                        <div class="highlight-box highlight-accent">
                            <p style="color: #4b5563;">
                                <strong>Professional Development:</strong> Daryl is committed to staying current with the latest massage therapy techniques and research. He regularly attends continuing education courses and workshops to ensure his clients receive the most effective, evidence-based treatments available.
                             In addition to enhancing his skill set, Daryl also strives to make his services more accessible to clients by offering <a href="https://synctherapylocal.local/services/direct-billing-massage/">massage direct billing options</a>. This convenience allows clients to focus on their health and wellness without the added stress of financial logistics. By combining ongoing education with flexible payment solutions, he fosters a supportive environment for all individuals seeking effective massage therapy.</p>
                        </div>
                    </div>
                </div>
                
                <!-- Personal Touch -->
                <div class="card content-section">
                    <div class="card-content">
                        <h2 class="font-poppins">Beyond the Clinic and Being an RMT Langford</h2>
                        <p style="line-height: 1.7; color: #4b5563;">
                            Outside the clinic, Daryl enjoys exploring Vancouver Island's hiking trails and is an avid mountain biker. This personal passion for outdoor activities gives him firsthand understanding of the physical demands his active clients face. When he's not treating patients or hitting the trails, you'll find him spending time with his family or volunteering as a coach for local youth sports teams.
                        </p>
                    </div>
                </div>
                
                <!-- Services & Booking CTA -->
                <div class="card cta-section content-section">
                    <div class="card-content">
                        <h2 class="font-poppins" style="color: white;">Ready to Start Your Recovery Journey?</h2>
                        <p style="margin-bottom: 1.5rem;">
                            Book your appointment with Daryl today and experience personalized, expert massage therapy in Victoria or Colwood. Daryl offers a range of techniques tailored to address your specific needs, ensuring a revitalizing experience. Whether you're seeking relief from stress or recovery from an injury, his extensive expertise will guide you. Be sure to ask about his availability for the first rmt massage in langford, and treat yourself to a rejuvenating session. Daryl is also well-versed in a variety of back pain treatment options in Victoria, helping clients find lasting relief from discomfort. His approach combines targeted techniques and personalized care to ensure you leave feeling balanced and refreshed. Don't hesitate to reach out for more information or to schedule your appointment today!
                        </p>
                        <div class="cta-buttons">
                            <a href="https://synctherapy.janeapp.com/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                                <i data-lucide="calendar" class="btn-icon"></i>
                                Book Online Now
                            </a>
                            <a href="tel:2508128698" class="btn btn-outline">
                                Call (250) 812-8698
                            </a>
                        </div>
                        <div class="cta-info">
                            <p>Available at both Victoria and Colwood locations</p>
                            <p>Direct billing available for most insurance plans</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Related Links -->
        <div class="footer-links">
            <h3 class="font-poppins">Learn More About Our Team & Services</h3>
            <div class="footer-nav">
                <a data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" data-wpil="url" data-wpil-url-old="L291ci10ZWFtLw==" href="/our-team/">Meet Our Full Team</a>
                <span class="footer-separator">|</span>
                <a href="https://synctherapylocal.local/services/">All Services</a>
                <span class="footer-separator">|</span>
                <a data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" data-wpil="url" data-wpil-url-old="L2NvbnRhY3Qv" href="/contact/">Contact Us</a>
                <span class="footer-separator">|</span>
                Our Locations
            </div>
        </div>
    </div>
    
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Daryl Stubbs",
    "jobTitle": [
        "Registered Massage Therapist", 
        "RMT", 
        "Massage Therapy Specialist"
    ],
    "description": "Daryl Stubbs is a Registered Massage Therapist (RMT) serving Langford and Colwood, BC. With over 7 years of experience, he specializes in deep tissue massage, sports injury rehabilitation, and visceral manipulation.",
    "url": "https://synctherapylocal.local/about/daryl-stubbs-rmt",
    "image": "/uploads/2025/06/Daryl-is-an-RMT-in-Colwood-scaled.jpg",
    "email": "daryl@synctherapy.ca",
    "telephone": "+1-250-812-8698",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "132, 328 Wale Rd #120",
      "addressLocality": "Colwood",
      "addressRegion": "BC",
      "postalCode": "V9B 1J2",
      "addressCountry": "CA"
    },
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Sync Massage Therapy",
      "url": "https://synctherapylocal.local",
      "sameAs": "https://synctherapylocal.local"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Camosun College", 
      "url": "https://camosun.ca/"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Registered Massage Therapist (RMT)",
        "credentialCategory": "Professional License",
        "identifier": "RMT-008082",
        "url": "https://cchpbc.ca/public/practitioner-search/",
        "recognizedBy": {
          "@type": "Organization",
          "name": "College of Complementary Health Professionals of British Columbia",
          "alternateName": "CCHPBC"
        }
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/daryl-stubbs-36245379/",
      "https://luminohealth.sunlife.ca/en/health-care-provider-profile/athletic-therapist/sync-therapy/daryl-stubbs-603519-692895/" 
    ],
    "knowsAbout": [
      "Registered Massage Therapy",
      "Sports Massage",
      "Deep Tissue Massage",
      "Myofascial Release",
      "Visceral Manipulation",
      "Injury Rehabilitation",
      "Chronic Pain Management"
    ]
  }
}
</script>
    
    <!-- Initialize Lucide Icons -->
    <script>
        lucide.createIcons();
    </script>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->
