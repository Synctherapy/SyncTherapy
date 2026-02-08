---
title: About
date: '2024-07-10 03:25:02'
slug: about
description: >-
  /* Custom CSS for Sync Therapy About Page */ .sync-therapy-about {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  sans-serif; line-height:...
seoTitle: About
---

<!-- wp:html -->
<style>
        /* Custom CSS for Sync Therapy About Page */
        .sync-therapy-about {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #F4F7F5;
        }
        
        .sync-therapy-about * {
            box-sizing: border-box;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .container-lg {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .section {
            padding: 4rem 1rem;
        }
        
        .section-white {
            background-color: white;
        }
        
        .section-light {
            background-color: #F4F7F5;
        }
        
        .section-gradient {
            background: linear-gradient(135deg, #2E5A88 0%, #1a4a73 100%);
            color: white;
        }
        
        .grid {
            display: grid;
            gap: 2rem;
        }
        
        .grid-2 {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        
        .grid-3 {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        
        .grid-4 {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        
        @media (min-width: 768px) {
            .lg-grid-2 {
                grid-template-columns: 1fr 1fr;
            }
            .lg-grid-3 {
                grid-template-columns: 1fr 1fr 1fr;
            }
            .lg-grid-4 {
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
        }
        
        .text-center {
            text-align: center;
        }
        
        .text-left {
            text-align: left;
        }
        
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        
        .mt-6 { margin-top: 1.5rem; }
        .mt-8 { margin-top: 2rem; }
        .mt-12 { margin-top: 3rem; }
        
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-full { border-radius: 50%; }
        
        .shadow-lg {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .shadow-xl {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .shadow-2xl {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .card {
            background: white;
            border-radius: 0.75rem;
            padding: 2rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
        }
        
        .card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .badge {
            display: inline-flex;
            align-items: center;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .badge-primary {
            background-color: #2E5A88;
            color: white;
        }
        
        .badge-accent {
            background-color: #F5B82E;
            color: #333333;
        }
        
        .badge-outline {
            background-color: white;
            border: 2px solid #2E5A88;
            color: #2E5A88;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }
        
        .btn-primary {
            background-color: #F5B82E;
            color: #333333;
        }
        
        .btn-primary:hover {
            opacity: 0.9;
            color: #333333;
            text-decoration: none;
        }
        
        .btn-outline {
            background-color: transparent;
            border: 2px solid #2E5A88;
            color: #2E5A88;
        }
        
        .btn-outline:hover {
            background-color: #2E5A88;
            color: white;
            text-decoration: none;
        }
        
        .btn-lg {
            padding: 1rem 2rem;
            font-size: 1.125rem;
        }
        
        .hero-title {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1.5rem;
        }
        
        @media (min-width: 768px) {
            .hero-title {
                font-size: 3rem;
            }
        }
        
        .section-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        @media (min-width: 768px) {
            .section-title {
                font-size: 2.5rem;
            }
        }
        
        .text-primary {
            color: #2E5A88;
        }
        
        .text-accent {
            color: #F5B82E;
        }
        
        .text-lg {
            font-size: 1.125rem;
        }
        
        .text-xl {
            font-size: 1.25rem;
        }
        
        .text-2xl {
            font-size: 1.5rem;
        }
        
        .text-3xl {
            font-size: 1.875rem;
        }
        
        .text-4xl {
            font-size: 2.25rem;
        }
        
        .font-bold {
            font-weight: 700;
        }
        
        .font-semibold {
            font-weight: 600;
        }
        
        .opacity-70 {
            opacity: 0.7;
        }
        
        .opacity-80 {
            opacity: 0.8;
        }
        
        .opacity-90 {
            opacity: 0.9;
        }
        
        .flex {
            display: flex;
        }
        
        .flex-col {
            flex-direction: column;
        }
        
        .flex-wrap {
            flex-wrap: wrap;
        }
        
        .items-center {
            align-items: center;
        }
        
        .items-start {
            align-items: flex-start;
        }
        
        .justify-center {
            justify-content: center;
        }
        
        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        
        .w-full {
            width: 100%;
        }
        
        .h-full {
            height: 100%;
        }
        
        .aspect-square {
            aspect-ratio: 1;
        }
        
        .relative {
            position: relative;
        }
        
        .absolute {
            position: absolute;
        }
        
        .icon {
            width: 1.5rem;
            height: 1.5rem;
            fill: currentColor;
        }
        
        .icon-sm {
            width: 1rem;
            height: 1rem;
        }
        
        .icon-lg {
            width: 2rem;
            height: 2rem;
        }
        
        .icon-xl {
            width: 3rem;
            height: 3rem;
        }
        
        .testimonial-carousel {
            position: relative;
            max-width: 64rem;
            margin: 0 auto;
            width: 100%;
            overflow: hidden; /* Prevent horizontal overflow */
        }

        .carousel-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: white;
            border: 2px solid #2E5A88;
            color: #2E5A88;
            border-radius: 50%;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            z-index: 10;
        }

        .carousel-nav:hover {
            background-color: #2E5A88;
            color: white;
        }

        .carousel-prev {
            left: 0.5rem;
        }

        .carousel-next {
            right: 0.5rem;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
            .testimonial-carousel {
                margin: 0 1rem; /* Add side margins on mobile */
            }
            
            .carousel-nav {
                width: 2rem;
                height: 2rem;
                display: none; /* Hide navigation buttons on mobile */
            }
            
            .card {
                margin: 0;
                padding: 1.5rem;
            }
            
            .testimonial-slide blockquote {
                font-size: 1.125rem; /* Smaller text on mobile */
                padding: 0 0.5rem;
            }
            
            .hero-image-container .aspect-square {
                margin: 0 auto;
                max-width: 400px;
            }
            
            .hero-buttons {
                padding: 0 1rem;
            }
            
            .btn {
                width: 100%;
                text-align: center;
            }
        }

        /* Extra small mobile devices */
        @media (max-width: 480px) {
            .container, .container-lg {
                padding: 0 0.75rem;
            }
            
            .section {
                padding: 2rem 0.75rem;
            }
            
            .testimonial-carousel {
                margin: 0 0.5rem;
            }
            
            .card {
                padding: 1rem;
            }
            
            .hero-title {
                font-size: 1.875rem;
            }
            
            .section-title {
                font-size: 1.75rem;
            }
        }

        /* Touch-friendly carousel for mobile */
        @media (max-width: 768px) {
            .testimonial-carousel .card {
                touch-action: pan-x;
            }
            
            .carousel-dots {
                margin-top: 2rem;
                padding: 0 1rem;
            }
            
            .carousel-dot {
                width: 0.875rem;
                height: 0.875rem;
                margin: 0 0.25rem;
            }
            
            .carousel-dot.active {
                width: 1.75rem;
            }
        }
        
        .testimonial-slide {
            display: none;
        }
        
        .testimonial-slide.active {
            display: block;
        }
        
        .carousel-dots {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1.5rem;
        }
        
        .carousel-dot {
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
            background-color: #333333;
            opacity: 0.3;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .carousel-dot.active {
            background-color: #2E5A88;
            opacity: 1;
            width: 2rem;
        }
        
        .star-rating {
            display: flex;
            gap: 0.25rem;
            justify-content: center;
            margin-bottom: 1.5rem;
        }
        
        .star {
            width: 1.5rem;
            height: 1.5rem;
            fill: #fbbf24;
            color: #fbbf24;
        }
        
        .award-images {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
        }
        
        .award-image {
            aspect-ratio: 1;
            border-radius: 0.5rem;
            overflow: hidden;
            background-color: rgba(255, 255, 255, 0.2);
        }
        
        .award-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .backdrop-blur {
            backdrop-filter: blur(8px);
        }
        
        .bg-white-10 {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        .border-white-20 {
            border-color: rgba(255, 255, 255, 0.2);
        }
        
        .hero-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        @media (min-width: 640px) {
            .hero-buttons {
                flex-direction: row;
            }
        }
        
        .feature-list {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            font-size: 0.875rem;
            opacity: 0.7;
        }
        
        .feature-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .checkmark {
            width: 1rem;
            height: 1rem;
            color: #2E5A88;
        }
        
        .hero-image-container {
            position: relative;
        }
        
        .hero-badge {
            position: absolute;
            bottom: -1.5rem;
            right: -1.5rem;
            background: white;
            border-radius: 0.75rem;
            padding: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            border: 2px solid #F5B82E;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 2rem;
            text-align: center;
        }
        
        .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: #2E5A88;
            margin-bottom: 0.5rem;
        }
        
        @media (min-width: 768px) {
            .stat-number {
                font-size: 2.5rem;
            }
        }
        
        .link-primary {
            color: #2E5A88;
            text-decoration: underline;
            font-weight: 600;
        }
        
        .link-primary:hover {
            color: #2E5A88;
            text-decoration: none;
        }
        
        .link-white {
            color: white;
            text-decoration: underline;
        }
        
        .link-white:hover {
            color: white;
            opacity: 0.8;
            text-decoration: none;
        }
    </style>

    <div class="sync-therapy-about">
        <!-- Hero Section -->
        <section class="section section-white">
            <div class="container-lg">
                <div class="grid lg-grid-2 items-center">
                    <div>
                        <div class="flex flex-wrap gap-3 mb-6">
                            <span class="badge badge-outline">Serving Victoria, Colwood & Langford</span>
                            <span class="badge badge-accent">6x Award Winner</span>
                        </div>
                        <h1 class="hero-title">
                            About Sync Therapy: Your Trusted Partner in
                            <span class="text-primary"> Wellness for the West Shore</span>
                        </h1>
                        <p class="text-xl opacity-80 mb-6">
                            Delivering personalized, holistic wellness to the West Shore community through integrated massage
                            therapy, athletic therapy, and holistic nutrition. Our commitment to your health & recovery spans over a
                            decade of dedicated service.
                        </p>
                        <div class="feature-list mb-8">
                            <div class="feature-item">
                                <svg class="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>11+ Years Experience</span>
                            </div>
                            <div class="feature-item">
                                <svg class="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>800+ Clients Served</span>
                            </div>
                            <div class="feature-item">
                                <svg class="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Personalized Care</span>
                            </div>
                        </div>
                        <div class="hero-buttons">
                            <a href="https://synctherapy.janeapp.com/" class="btn btn-primary btn-lg">
                                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-right: 0.5rem;">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                Book Your Personalized Treatment Today
                            </a>
                            <a href="https://synctherapy.janeapp.com/" class="btn btn-outline btn-lg">
                                Check Our Schedule
                            </a>
                        </div>
                    </div>
                    <div class="hero-image-container">
                        <div class="aspect-square rounded-2xl shadow-2xl" style="overflow: hidden;">
                            <img src="/uploads/2025/06/Daryl-is-an-RMT-in-Colwood-scaled.jpg" 
                                 alt="Daryl Stubbs - Owner of Sync Therapy, Victoria BC" 
                                 style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div class="hero-badge">
                            <div class="flex items-center gap-2">
                                <svg class="icon text-accent" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <div>
                                    <p class="font-semibold">6x Award Winner</p>
                                    <p class="text-sm opacity-70">2022-2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Awards Showcase Section -->
        <section class="section section-gradient">
            <div class="container-lg">
                <div class="text-center mb-12">
                    <h2 class="section-title text-white mb-4">Award-Winning Excellence</h2>
                    <p class="text-xl opacity-90">
                        Recognized 6 times for outstanding service and clinical excellence
                    </p>
                </div>

                <div class="grid lg-grid-2 mb-12">
                    <div class="card bg-white-10 backdrop-blur" style="color: white; border: none;">
                        <div class="text-center">
                            <div class="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" 
                                 style="background-color: #F5B82E; width: 5rem; height: 5rem;">
                                <svg class="icon-xl" style="color: #333333;" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">Best Massage Therapy Clinic</h3>
                            <div class="grid grid-3 gap-4 mb-6">
                                <div class="p-3 rounded-lg bg-white-10">
                                    <p class="font-bold text-lg">2022</p>
                                </div>
                                <div class="p-3 rounded-lg bg-white-10">
                                    <p class="font-bold text-lg">2023</p>
                                </div>
                                <div class="p-3 rounded-lg bg-white-10">
                                    <p class="font-bold text-lg">2024</p>
                                </div>
                            </div>
                            <div class="award-images">
                                <div class="award-image">
                                    <img src="/uploads/2025/07/sync-therapy-is-best-massage-therapy-clinic-winner-of-2022.png" 
                                         alt="Best Massage Therapy Clinic 2022 Award">
                                </div>
                                <div class="award-image">
                                    <img src="/uploads/2025/07/sync-therapy-is-best-massage-therapy-clinic-winner-of-2023.png" 
                                         alt="Best Massage Therapy Clinic 2023 Award">
                                </div>
                                <div class="award-image">
                                    <img src="/uploads/2025/07/sync-therapy-is-best-massage-therapy-clinic-winner-of-2024.png" 
                                         alt="Best Massage Therapy Clinic 2024 Award">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-white-10 backdrop-blur" style="color: white; border: none;">
                        <div class="text-center">
                            <div class="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" 
                                 style="background-color: #F5B82E; width: 5rem; height: 5rem;">
                                <svg class="icon-xl" style="color: #333333;" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">Best Rehab Clinic</h3>
                            <div class="grid grid-3 gap-4 mb-6">
                                <div class="p-3 rounded-lg bg-white-10">
                                    <p class="font-bold text-lg">2022</p>
                                </div>
                                <div class="p-3 rounded-lg bg-white-10">
                                    <p class="font-bold text-lg">2023</p>
                                </div>
                                <div class="p-3 rounded-lg bg-white-10">
                                    <p class="font-bold text-lg">2024</p>
                                </div>
                            </div>
                            <div class="award-images">
                                <div class="award-image">
                                    <img src="/uploads/2025/07/sync-therapy-is-best-physio-and-rehab-winner-of-2022-1.png" 
                                         alt="Best Rehab Clinic 2022 Award">
                                </div>
                                <div class="award-image">
                                    <img src="/uploads/2025/07/sync-therapy-is-best-physio-and-rehab-winner-of-2023-1.png" 
                                         alt="Best Rehab Clinic 2023 Award">
                                </div>
                                <div class="award-image">
                                    <img src="/uploads/2025/07/sync-therapy-is-best-physio-and-rehab-winner-of-2022.png" 
                                         alt="Best Rehab Clinic 2024 Award">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <p class="text-lg opacity-90 mb-6">
                        These awards reflect our unwavering commitment to excellence and the trust our community places in us.
                    </p>
                    <div class="flex justify-center items-center gap-8">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-accent">6</div>
                            <p class="text-sm opacity-80">Total Awards</p>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-accent">3</div>
                            <p class="text-sm opacity-80">Consecutive Years</p>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-accent">2</div>
                            <p class="text-sm opacity-80">Categories</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- EEAT & Trust Factors Section -->
        <section class="section section-white">
            <div class="container-lg">
                <div class="text-center mb-12">
                    <h2 class="section-title mb-4">Why Clients Trust Sync Therapy</h2>
                    <p class="text-xl opacity-80">
                        Experience, Expertise, Authority, and Trustworthiness you can count on
                    </p>
                </div>

                <div class="grid lg-grid-4 mb-12">
                    <div class="card text-center">
                        <div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" 
                             style="background-color: #2E5A88; width: 4rem; height: 4rem;">
                            <svg class="icon-lg text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12,6 12,12 16,14"></polyline>
                            </svg>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Experience</h3>
                        <div class="text-sm opacity-80">
                            <p>11+ Years in Practice</p>
                            <p>800+ Clients Treated</p>
                            <p>Thousands of Sessions</p>
                        </div>
                    </div>

                    <div class="card text-center">
                        <div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" 
                             style="background-color: #2E5A88; width: 4rem; height: 4rem;">
                            <svg class="icon-lg text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Expertise</h3>
                        <div class="text-sm opacity-80">
                            <p>RMT Registered (2017)</p>
                            <p>Athletic Therapy (2013)</p>
                            <p>Holistic Nutrition (2018)</p>
                        </div>
                    </div>

                    <div class="card text-center">
                        <div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" 
                             style="background-color: #2E5A88; width: 4rem; height: 4rem;">
                            <svg class="icon-lg text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Authority</h3>
                        <div class="text-sm opacity-80">
                            <p>6x Award Winner</p>
                            <p>Professional Licenses</p>
                            <p>Continuing Education</p>
                        </div>
                    </div>

                    <div class="card text-center">
                        <div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" 
                             style="background-color: #2E5A88; width: 4rem; height: 4rem;">
                            <svg class="icon-lg text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Trust</h3>
                        <div class="text-sm opacity-80">
                            <p>5-Star Reviews</p>
                            <p>Client Testimonials</p>
                            <p>Community Recognition</p>
                        </div>
                    </div>
                </div>

                <div class="grid lg-grid-3">
                    <div class="text-center p-6 rounded-xl" style="background-color: #F4F7F5;">
                        <svg class="icon-xl mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        <h4 class="font-bold text-lg mb-2">Continuous Learning</h4>
                        <p class="text-sm opacity-80">
                            Regular training in advanced techniques including Visceral Manipulation, Red Light Therapy, and
                            Molecular Hydrogen
                        </p>
                    </div>

                    <div class="text-center p-6 rounded-xl" style="background-color: #F4F7F5;">
                        <svg class="icon-xl mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <h4 class="font-bold text-lg mb-2">Proven Results</h4>
                        <p class="text-sm opacity-80">
                            Documented success in pain relief, injury recovery, and performance enhancement across diverse client
                            needs
                        </p>
                    </div>

                    <div class="text-center p-6 rounded-xl" style="background-color: #F4F7F5;">
                        <svg class="icon-xl mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                        </svg>
                        <h4 class="font-bold text-lg mb-2">Client Success</h4>
                        <p class="text-sm opacity-80">
                            High client satisfaction with many long-term relationships spanning multiple years of care
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Brand Story & Mission Statement -->
        <section class="section section-light">
            <div class="container">
                <div class="text-center mb-12">
                    <h2 class="section-title mb-4">Our Story & Mission</h2>
                    <p class="text-xl opacity-80">
                        Why Sync Therapy exists and what drives us every day
                    </p>
                </div>

                <div class="card mb-12">
                    <p class="text-lg mb-6">
                        "At Sync Therapy, we believe in an integrated approach to health, empowering the Victoria, Colwood, and
                        Langford communities to achieve optimal recovery and well-being. Our journey began with a passion for
                        helping individuals unlock their body's potential through personalized, evidence-based care tailored
                        specifically to each client's unique needs."
                    </p>
                    <p class="text-lg">
                        "Sync Therapy was founded with a clear mission: to provide unparalleled Registered Massage Therapy and
                        Athletic Therapy services across the West Shore, helping our clients move better, feel stronger, and live
                        pain-free through our award-winning holistic approach."
                    </p>
                </div>

                <div class="grid lg-grid-3">
                    <div class="text-center">
                        <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg" 
                             style="background: white; width: 4rem; height: 4rem;">
                            <svg class="icon-lg text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold mb-2">Personalized Care</h3>
                        <p class="opacity-80">
                            Every treatment is uniquely tailored to your specific needs, goals, and health conditions
                        </p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg" 
                             style="background: white; width: 4rem; height: 4rem;">
                            <svg class="icon-lg text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold mb-2">Award-Winning Excellence</h3>
                        <p class="opacity-80">
                            Recognized 6 times as the best massage therapy and rehab clinic in the region
                         Our highly trained staff utilizes a variety of techniques to ensure optimal recovery and relaxation for our clients. Additionally, we offer personalized back pain treatment options in Victoria that cater to individual needs, helping to alleviate discomfort and improve mobility. With a commitment to excellence, we strive to create a welcoming environment where every patient feels valued and cared for. Our patient-centered approach includes comprehensive assessments to identify the root causes of pain, allowing us to tailor effective <a href="https://synctherapylocal.local/back-pain-treatment-victoria-options/">back pain treatment options in Victoria</a>. We also emphasize education and empowerment, providing clients with the tools and knowledge they need to manage their conditions independently. Through our dedication to continuous improvement and innovation, we remain at the forefront of rehabilitation therapies, ensuring our clients achieve lasting results.</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg" 
                             style="background: white; width: 4rem; height: 4rem;">
                            <svg class="icon-lg text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold mb-2">Community Focused</h3>
                        <p class="opacity-80">
                            Proudly serving and supporting the West Shore and Victoria community for over 11 years
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Philosophy -->
        <section class="section section-white">
            <div class="container">
                <div class="text-center mb-12">
                    <h2 class="section-title mb-4">Our Philosophy</h2>
                    <p class="text-xl opacity-80">
                        The guiding principles that drive our personalized approach to wellness
                    </p>
                </div>

                <div class="text-lg" style="line-height: 1.8;">
                    <p class="mb-6">
                        We believe that true health is much more than the absence of disease. It is a total state of wellbeing,
                        including physical, mental, emotional, spiritual and social components.
                    </p>
                    <p class="mb-6">
                        Just as we all have unique physical features and personalities, we also have unique internal and
                        biochemical make-ups. Each of us differs in how we digest food, how our bodies detoxify, and which foods
                        nourish or inflame our systems. This explains why some diets and lifestyle changes work wonders for some
                        but can be harmful to others – confirming that honouring each person's individuality is essential.
                    </p>
                    <p class="mb-6">
                        My goal is to help others achieve and maintain optimal mental wellbeing. I believe in identifying the root
                        causes of illness, treating the underlying disturbances, and restoring balance in the body, mind and
                        environment to create lasting wellness.
                    </p>
                    <p>
                        Rather than treating just the symptoms, I utilize 
                        <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" href="https://synctherapylocal.local/services/massage-therapy-langford/" class="link-primary">massage therapy</a>,
                        <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" href="https://synctherapylocal.local/services/athletic-therapy-victoria/" class="link-primary">athletic therapy</a>, 
                        holistic nutrition, lifestyle changes, exercise, stress management practices, and more to improve
                        overall functioning and create vibrant, sustainable health tailored to each individual client.
                    </p>
                </div>
            </div>
        </section>

        <!-- What Makes Us Different -->
        <section class="section section-light">
            <div class="container-lg">
                <div class="text-center mb-12">
                    <h2 class="section-title mb-4">What Makes Sync Therapy Different</h2>
                    <p class="text-xl opacity-80">
                        Why choose our award-winning clinic over others in Victoria, Colwood, or Langford?
                    </p>
                </div>

                <div class="grid lg-grid-2 items-center">
                    <div>
                        <div class="flex items-start gap-4 mb-6">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center" 
                                 style="background-color: #2E5A88; width: 2rem; height: 2rem; flex-shrink: 0;">
                                <svg class="icon-sm text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold mb-2">Completely Personalized Treatments</h3>
                                <p class="opacity-80">
                                    Unlike conventional clinics, every single treatment at Sync Therapy is uniquely tailored to your
                                    specific condition, goals, and body's needs. No two treatments are ever the same because no two
                                    clients are the same.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4 mb-6">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center" 
                                 style="background-color: #2E5A88; width: 2rem; height: 2rem; flex-shrink: 0;">
                                <svg class="icon-sm text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold mb-2">Integrated Multi-Disciplinary Approach</h3>
                                <p class="opacity-80">
                                    Our comprehensive approach integrates cutting-edge athletic therapy techniques with deeply
                                    therapeutic massage therapy and holistic nutrition, creating personalized treatment plans designed
                                    for lasting results.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center" 
                                 style="background-color: #2E5A88; width: 2rem; height: 2rem; flex-shrink: 0;">
                                <svg class="icon-sm text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold mb-2">Continuous Education & Advanced Techniques</h3>
                                <p class="opacity-80">
                                    Our commitment to continuous education ensures you receive the most effective and up-to-date
                                    treatments for sports injuries, chronic pain, and rehabilitation right here in Victoria, BC.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-bold mb-4 text-primary">Multi-Disciplinary Expertise</h3>
                        <div class="mb-4">
                            <div class="flex items-center gap-3 mb-3">
                                <span class="badge badge-primary">RMT</span>
                                <span>Registered Massage Therapist (2017)</span>
                            </div>
                            <div class="flex items-center gap-3 mb-3">
                                <span class="badge badge-primary">CAT(C)</span>
                                <span>Athletic & Exercise Therapy (2013)</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="badge badge-primary">CCHP</span>
                                <span>Holistic Nutritionist (2018)</span>
                            </div>
                        </div>
                        <div class="pt-4" style="border-top: 1px solid #e5e7eb;">
                            <p class="text-sm text-primary mb-2">
                                <a href="https://synctherapylocal.local/our-team/rmt-daryl-stubbs/" class="link-primary">
                                    Learn more about Daryl's RMT expertise →
                                </a>
                            </p>
                            <p class="text-sm text-primary">
                                <a href="https://synctherapylocal.local/our-team/athletic-therapist-daryl-stubbs/" class="link-primary">
                                    Discover his Athletic Therapist specializations →
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education & Credentials -->
        <section class="section section-white">
            <div class="container">
                <div class="text-center mb-12">
                    <h2 class="section-title mb-4">Education & Credentials</h2>
                    <p class="text-xl opacity-80">
                        A commitment to excellence through continuous learning
                    </p>
                </div>

                <div class="mb-8">
                    <div class="flex items-start gap-6 mb-8">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" 
                             style="background: white; width: 3rem; height: 3rem; flex-shrink: 0;">
                            <svg class="icon text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            </svg>
                        </div>
                        <div>
                            <div class="flex items-center gap-3 mb-2">
                                <h3 class="text-lg font-bold">Bachelor's Degree in Athletic and Exercise Therapy</h3>
                                <span class="badge badge-outline">2013</span>
                            </div>
                            <p class="opacity-80">
                                Camosun College - Laying a strong foundation for my career in health and wellness
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-6 mb-8">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" 
                             style="background: white; width: 3rem; height: 3rem; flex-shrink: 0;">
                            <svg class="icon text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            </svg>
                        </div>
                        <div>
                            <div class="flex items-center gap-3 mb-2">
                                <h3 class="text-lg font-bold">Registered Massage Therapist</h3>
                                <span class="badge badge-outline">2017</span>
                            </div>
                            <p class="opacity-80">
                                Expanding expertise to provide more comprehensive care to clients
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-6 mb-8">
                        <div class="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" 
                             style="background: white; width: 3rem; height: 3rem; flex-shrink: 0;">
                            <svg class="icon text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            </svg>
                        </div>
                        <div>
                            <div class="flex items-center gap-3 mb-2">
                                <h3 class="text-lg font-bold">Registered Holistic Nutritionist</h3>
                                <span class="badge badge-outline">2018</span>
                            </div>
                            <p class="opacity-80">
                                CSNN Vancouver Island Natural Nutrition Program at the Canadian School of Natural Nutrition
                            </p>
                        </div>
                    </div>

                    <div class="rounded-lg p-6" style="background-color: #F4F7F5;">
                        <h4 class="font-bold mb-3">Specialized Training & Certifications:</h4>
                        <div class="grid lg-grid-2 gap-4">
                            <div class="flex items-center gap-2">
                                <svg class="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>
                                    <a href="https://synctherapylocal.local/services/visceral-manipulation-victoria/" class="link-primary">
                                        Visceral Manipulation (VM1)
                                    </a>
                                </span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg class="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Introduction to Visceral Manipulation</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg class="checkmark text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Molecular Hydrogen Institute (In Progress)</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg class="checkmark text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Red Light Therapy Certificate (In Progress)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Client Testimonials Carousel -->
        <section class="section section-light">
            <div class="container-lg">
                <div class="text-center mb-12">
                    <h2 class="section-title mb-4">What Our Clients Say</h2>
                    <p class="text-xl opacity-80">
                        Real experiences from the Victoria, Colwood & Langford community
                    </p>
                </div>

                <div class="testimonial-carousel">
                    <div class="card">
                        <div class="testimonial-slide active">
                            <div class="star-rating">
                                <svg class="star" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <svg class="star" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <svg class="star" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <svg class="star" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <svg class="star" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <blockquote class="text-xl text-center mb-8" style="line-height: 1.6;">
                                "Wow is all I can say. Daryl was able to fit me in on short notice… knowledgeable, courteous, asked a lot of questions and got me sorted very quickly. Highly recommend!"
                            </blockquote>
                            <div class="text-center">
                                <div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" 
                                     style="background-color: #2E5A88; width: 4rem; height: 4rem;">
                                    C
                                </div>
                                <p class="font-bold text-lg text-primary">Chris Ronald</p>
                                <p class="text-sm opacity-70">Client</p>
                            </div>
                        </div>

                        <!-- Additional testimonial slides would go here -->
                        <div class="testimonial-slide">
                            <div class="star-rating">
                                <svg class="star" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <svg class="star" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <svg class="star" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <svg class="star" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <svg class="star" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <blockquote class="text-xl text-center mb-8" style="line-height: 1.6;">
                                "I've been going to Daryl for about a year… very skilled, professional, and crucial in managing ongoing pain. His sports‑therapy and nutrition training make his service truly holistic."
                            </blockquote>
                            <div class="text-center">
                                <div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl" 
                                     style="background-color: #2E5A88; width: 4rem; height: 4rem;">
                                    M
                                </div>
                                <p class="font-bold text-lg text-primary">Melanie Morse</p>
                                <p class="text-sm opacity-70">Long-term Client</p>
                            </div>
                        </div>
                    </div>

                    <button class="carousel-nav carousel-prev" onclick="previousSlide()">
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>

                    <button class="carousel-nav carousel-next" onclick="nextSlide()">
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>

                    <div class="carousel-dots">
                        <button class="carousel-dot active" onclick="currentSlide(1)"></button>
                        <button class="carousel-dot" onclick="currentSlide(2)"></button>
                        <button class="carousel-dot" onclick="currentSlide(3)"></button>
                        <button class="carousel-dot" onclick="currentSlide(4)"></button>
                        <button class="carousel-dot" onclick="currentSlide(5)"></button>
                        <button class="carousel-dot" onclick="currentSlide(6)"></button>
                        <button class="carousel-dot" onclick="currentSlide(7)"></button>
                        <button class="carousel-dot" onclick="currentSlide(8)"></button>
                        <button class="carousel-dot" onclick="currentSlide(9)"></button>
                        <button class="carousel-dot" onclick="currentSlide(10)"></button>
                    </div>
                </div>

                <div class="stats-grid mt-12">
                    <div>
                        <div class="stat-number">4.9</div>
                        <p class="opacity-80">Google Rating</p>
                    </div>
                    <div>
                        <div class="stat-number">100+</div>
                        <p class="opacity-80">5-Star Reviews</p>
                    </div>
                    <div>
                        <div class="stat-number">800+</div>
                        <p class="opacity-80">Happy Clients</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Community Commitment -->
        <section class="section section-white">
            <div class="container text-center">
                <h2 class="section-title mb-6">Our Commitment to the West Shore Community</h2>
                <p class="text-xl mb-8 opacity-80">
                    We are proud to serve the vibrant communities of Victoria, Colwood, and Langford, and actively support local
                    events and initiatives. Our award-winning clinic is conveniently located to provide accessible
                    <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LXZpY3RvcmlhLw==" href="https://synctherapylocal.local/services/massage-therapy-victoria/" class="link-primary">massage therapy in Victoria</a>,
                    <a data-wpil="url" href="https://synctherapylocal.local/services/massage-therapy-colwood/" class="link-primary">Colwood</a>, and
                    <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" href="https://synctherapylocal.local/services/massage-therapy-langford/" class="link-primary">Langford</a>.
                </p>
                <div class="stats-grid">
                    <div>
                        <div class="stat-number">11+</div>
                        <p class="opacity-80">Years Serving West Shore</p>
                    </div>
                    <div>
                        <div class="stat-number">800+</div>
                        <p class="opacity-80">Local Clients Helped</p>
                    </div>
                    <div>
                        <div class="stat-number">6x</div>
                        <p class="opacity-80">Award Winner</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Personal Letter & CTA -->
        <section class="section section-gradient">
            <div class="container">
                <div class="text-center mb-12">
                    <h2 class="section-title mb-4">Let Us Help You Get Better And Stay Better</h2>
                    <p class="text-xl opacity-90">A personal message from Daryl</p>
                </div>

                <div class="bg-white-10 backdrop-blur rounded-2xl p-8 mb-12">
                    <p class="text-lg mb-6">
                        <strong>Dear Friend,</strong>
                    </p>
                    <p class="text-lg mb-6">
                        Are you constantly battling aches, pains, and stress that prevent you from living your best life? Do you
                        find yourself yearning for a way to not just feel better temporarily but to maintain that feeling of
                        well-being day after day? You're not alone, and there is a solution that can help you achieve lasting
                        health and happiness.
                    </p>
                    <p class="text-lg mb-6">
                        At Sync Therapy, we are dedicated to helping you not only get better but also stay feeling good. Our
                        comprehensive approach to wellness combines expert
                        <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvbWFzc2FnZS10aGVyYXB5LWxhbmdmb3JkLw==" href="https://synctherapylocal.local/services/massage-therapy-langford/" class="link-white">massage therapy</a>,
                        <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvYXRobGV0aWMtdGhlcmFweS12aWN0b3JpYS8=" href="https://synctherapylocal.local/services/athletic-therapy-victoria/" class="link-white">athletic therapy</a>, 
                        and holistic nutrition with completely personalized care tailored to your unique needs, ensuring that
                        you experience relief and lasting benefits.
                    </p>
                    <p class="text-lg mb-6">
                        Imagine waking up each morning feeling refreshed, free from pain, and ready to take on whatever the day
                        brings. Picture yourself enjoying life without the constant burden of discomfort or stress. This isn't
                        just a dream—it's the reality that many of our 800+ clients enjoy every day.
                    </p>
                </div>

                <div class="text-center mb-12">
                    <h3 class="text-2xl font-bold mb-6">Ready to Experience the Award-Winning Sync Therapy Difference?</h3>
                    <div class="mb-4">
                        <a href="https://synctherapy.janeapp.com/" class="btn btn-primary btn-lg">
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-right: 0.5rem;">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            Book Your Personalized Treatment Today
                        </a>
                    </div>
                    <p class="text-sm opacity-80">
                        Award-winning care • Completely personalized treatments • Same-day appointments available
                    </p>
                </div>

                <div class="pt-8 border-white-20" style="border-top: 1px solid rgba(255, 255, 255, 0.2);">
                    <div class="grid lg-grid-2">
                        <div>
                            <h4 class="font-bold mb-4">Explore Our Award-Winning Services:</h4>
                            <div class="text-left">
                                <p class="mb-2">
                                    <a href="https://synctherapylocal.local/services/massage-therapy-colwood/" class="link-white">
                                        → Registered Massage Therapy
                                    </a>
                                </p>
                                <p class="mb-2">
                                    <a href="https://synctherapylocal.local/services/sports-massage-therapy/" class="link-white">
                                        → Sports Massage Therapy
                                    </a>
                                </p>
                                <p class="mb-2">
                                    <a href="https://synctherapylocal.local/services/deep-tissue-massage-victoria/" class="link-white">
                                        → Deep Tissue Massage
                                    </a>
                                </p>
                                <p class="mb-2">
                                    <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2EvaWNiYy1tYXNzYWdlLXRoZXJhcHkv" href="https://synctherapylocal.local/icbc-massage-therapy/" class="link-white">                                        → ICBC Massage Therapy                                    </a>
                                </p>
                                <p class="mb-2">
                                    <a href="https://synctherapylocal.local/services/athletic-therapy-victoria/" class="link-white">
                                        → Athletic Therapy & Sports Injury Treatment
                                    </a>
                                 Our expert team is dedicated to helping athletes recover from injuries and enhance their performance. We also offer valuable <a href="https://synctherapylocal.local/conditions/sports-injury-prevention-victoria/">sports injury prevention tips</a> to help you stay in peak condition and avoid setbacks. With our tailored approach, you can feel confident as you pursue your athletic goals.</p>
                                <p class="mb-2">
                                    <a data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" data-wpil="url" data-wpil-url-old="aHR0cHM6Ly93d3cuc3luY3RoZXJhcHkuY2Evc2VydmljZXMvZGlyZWN0LWJpbGxpbmctbWFzc2FnZS8=" href="https://synctherapylocal.local/services/direct-billing-massage/" class="link-white">                                        → Direct Billing Available                                    </a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold mb-4">Get In Touch:</h4>
                            <div class="text-left">
                                <div class="flex items-center gap-2 mb-3">
                                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <span>(250) 812-8698</span>
                                </div>
                                <div class="flex items-center gap-2 mb-3">
                                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <span>info@synctherapy.ca</span>
                                </div>
                                <div class="flex items-center gap-2 mb-3">
                                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span>Wale Road, Victoria, BC</span>
                                </div>
                                <p class="mb-2">
                                    <a href="https://synctherapylocal.local/contact/" class="link-white">
                                        → Contact Us & Directions
                                    </a>
                                </p>
                                <p class="mb-2">
                                    <a href="https://synctherapylocal.local/about/why-us/" class="link-white">
                                        → Why Choose Sync Therapy
                                    </a>
                                </p>
                                <p class="mb-2">
                                    <a href="https://synctherapylocal.local/our-team/" class="link-white">                                        → Meet Our Award-Winning Team                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <script>
        // Testimonial Carousel JavaScript
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        const totalSlides = slides.length;

        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Show current slide
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
            showSlide(currentSlideIndex);
        }

        function previousSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentSlideIndex);
        }

        function currentSlide(index) {
            currentSlideIndex = index - 1;
            showSlide(currentSlideIndex);
        }

        // Auto-play carousel
        setInterval(nextSlide, 5000);

        // Initialize carousel
        showSlide(0);
    </script>
<!-- /wp:html -->
