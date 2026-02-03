---
title: "Conditions"
date: "2025-06-26 05:25:01"
slug: "conditions"
description: ""
seoTitle: ""
---

<!-- wp:html -->
<script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }
        .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: .5; }
        }
        .animate-bounce {
            animation: bounce 1s infinite;
        }
        @keyframes bounce {
            0%, 100% {
                transform: translateY(-25%);
                animation-timing-function: cubic-bezier(0.8,0,1,1);
            }
            50% {
                transform: none;
                animation-timing-function: cubic-bezier(0,0,0.2,1);
            }
        }
        .hover\\:shadow-xl:hover {
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        .hover\\:-translate-y-1:hover {
            transform: translateY(-0.25rem);
        }
        .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
        }
        .group:hover .group-hover\\:text-blue-600 {
            color: rgb(37 99 235);
        }
        .backdrop-blur-sm {
            backdrop-filter: blur(4px);
        }
        .z-50 {
            z-index: 50;
        }
        .shadow-2xl {
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        }
        .text-balance {
            text-wrap: balance;
        }
        .hidden {
            display: none;
        }
        .block {
            display: block;
        }
        @media (min-width: 768px) {
            .md\\:hidden {
                display: none;
            }
            .md\\:block {
                display: block;
            }
        }
    </style>

<body class="bg-gray-50">
    <!-- Urgent Banner -->
    <div class="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium animate-pulse">
        <div class="flex items-center justify-center gap-2">
            <i class="fas fa-exclamation-circle w-4 h-4"></i>
            <span>⚡ Don't wait - early treatment leads to better outcomes!</span>
            <i class="fas fa-clock w-4 h-4"></i>
        </div>
    </div>

    <!-- Breadcrumbs -->
    <nav class="bg-white px-4 py-2 text-sm border-b">
        <div class="container mx-auto">
            <a href="/" class="text-blue-600 hover:underline">Home</a>
            <span class="mx-2 text-gray-600">›</span>
            <span class="text-gray-600">Conditions We Treat</span>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="max-w-4xl mx-auto text-center">
                <div class="flex flex-wrap justify-center gap-2 mb-6">
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                        <i class="fas fa-star mr-1"></i>
                        4.9★ Rating
                    </span>
                    <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        <i class="fas fa-award mr-1"></i>
                        8,000+ Treatments
                    </span>
                    <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        <i class="fas fa-users mr-1"></i>
                        800+ Happy Clients
                    </span>
                </div>

                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Conditions We Treat in Victoria
                </h1>

                <p class="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                    Comprehensive treatment for a wide range of conditions using evidence-based massage therapy, athletic
                    therapy, and holistic nutrition approaches.
                </p>

                <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                    <div class="flex items-center justify-center">
                        <i class="fas fa-shield-alt text-green-600 mr-2"></i>
                        <span class="text-green-700 font-semibold">Direct Billing Available</span>
                        <span class="text-gray-600 ml-2">• Most Insurance Providers</span>
                    </div>
                </div>

                <!-- Quick Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <a href="https://synctherapy.janeapp.com/" target="_blank" rel="noopener noreferrer"
                       class="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 inline-flex items-center justify-center">
                        <i class="fas fa-calendar-alt mr-2"></i>
                        Book Assessment
                    </a>
                    <a href="tel:+12508128698"
                       class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 inline-flex items-center justify-center">
                        <i class="fas fa-phone mr-2"></i>
                        Call (250) 812-8698
                    </a>
                </div>

                <!-- Trust Indicators -->
                <div class="flex items-center justify-center gap-4 text-sm text-gray-600">
                    <div class="flex items-center gap-1">
                        <i class="fas fa-check-circle text-green-600"></i>
                        <span>Same-day appointments</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <i class="fas fa-shield-alt text-blue-600"></i>
                        <span>Direct billing</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <i class="fas fa-clock text-orange-600"></i>
                        <span>Fast relief</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Conditions -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-12">
                    <div class="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <i class="fas fa-trending-up"></i>
                        Most Common Conditions
                    </div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Conditions We Treat Most Often</h2>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                        These are the most frequently treated conditions at our clinic, with proven treatment protocols and
                        excellent success rates.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <!-- Back Pain -->
                    <div class="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group rounded-lg">
                        <div class="p-6 pb-4">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-2xl">🔥</span>
                                <span class="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-semibold">Featured</span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                Back Pain
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">
                                Comprehensive treatment for acute and chronic back pain, including lower back pain, upper back tension, and spinal dysfunction.
                             Patients can benefit from a variety of back pain treatment options in Victoria, tailored to their specific needs and conditions. Through a combination of physical therapy, medication, and alternative therapies, individuals can find relief and regain mobility. A multidisciplinary approach ensures that every aspect of back health is addressed for optimal outcomes. In addition to traditional methods, patients can also explore innovative therapies such as acupuncture and chiropractic care, which may enhance recovery. The diverse <a href="https://synctherapylocal.local/back-pain-treatment-victoria-options/">back pain treatment options in Victoria</a> allow individuals to choose interventions that resonate with their lifestyle and preferences. By fostering a supportive environment and encouraging patient involvement in their care, the path to recovery becomes more effective and sustainable.</p>
                        </div>
                        <div class="px-6 pb-6">
                            <div class="space-y-3 mb-4">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Treatment Time:</span>
                                    <span class="font-medium text-gray-900">4-8 sessions</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Commonality:</span>
                                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Very Common</span>
                                </div>
                            </div>

                            <div class="mb-4">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                                <div class="flex flex-wrap gap-1">
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Lower back ache</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Upper back tension</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Muscle spasms</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">+2 more</span>
                                </div>
                            </div>

                            <a href="/conditions/back-pain-victoria/" 
                               class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300 inline-flex items-center justify-center">
                                Learn More
                                <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Headaches & Neck Pain -->
                    <div class="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group rounded-lg">
                        <div class="p-6 pb-4">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-2xl">🧠</span>
                                <span class="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-semibold">Featured</span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                Headaches & Neck Pain
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">
                                Relief for tension headaches, cervical pain, and neck stiffness through targeted massage therapy.
                            </p>
                        </div>
                        <div class="px-6 pb-6">
                            <div class="space-y-3 mb-4">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Treatment Time:</span>
                                    <span class="font-medium text-gray-900">3-6 sessions</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Commonality:</span>
                                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Very Common</span>
                                </div>
                            </div>

                            <div class="mb-4">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                                <div class="flex flex-wrap gap-1">
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Tension headaches</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Neck stiffness</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Shoulder tension</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">+2 more</span>
                                </div>
                            </div>

                            <a href="https://synctherapylocal.local/conditions/headaches-and-neck-pain/" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300 inline-flex items-center justify-center">
                                Learn More
                                <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Chronic Pain -->
                    <div class="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group rounded-lg">
                        <div class="p-6 pb-4">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-2xl">⚡</span>
                                <span class="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-semibold">Featured</span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                Chronic Pain
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">
                                Long-term pain management strategies for persistent conditions affecting daily life and mobility.
                            </p>
                        </div>
                        <div class="px-6 pb-6">
                            <div class="space-y-3 mb-4">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Treatment Time:</span>
                                    <span class="font-medium text-gray-900">Ongoing</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Commonality:</span>
                                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Common</span>
                                </div>
                            </div>

                            <div class="mb-4">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                                <div class="flex flex-wrap gap-1">
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Persistent pain</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Fatigue</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Sleep disturbance</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">+2 more</span>
                                </div>
                            </div>

                            <a href="/conditions/chronic-pain-victoria/" 
                               class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300 inline-flex items-center justify-center">
                                Learn More
                                <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Hip & Knee Pain -->
                    <div class="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group rounded-lg">
                        <div class="p-6 pb-4">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-2xl">🦵</span>
                                <span class="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-semibold">Featured</span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                Hip & Knee Pain
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">
                                Treatment for hip dysfunction, knee pain, and lower extremity mobility issues.
                            </p>
                        </div>
                        <div class="px-6 pb-6">
                            <div class="space-y-3 mb-4">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Treatment Time:</span>
                                    <span class="font-medium text-gray-900">4-8 sessions</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Commonality:</span>
                                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Common</span>
                                </div>
                            </div>

                            <div class="mb-4">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                                <div class="flex flex-wrap gap-1">
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Hip pain</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Knee stiffness</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Limping</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">+2 more</span>
                                </div>
                            </div>

                            <a href="https://synctherapylocal.local/conditions/hip-and-knee-pain/" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300 inline-flex items-center justify-center">
                                Learn More
                                <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Shoulder Pain -->
                    <div class="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group rounded-lg">
                        <div class="p-6 pb-4">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-2xl">💪</span>
                                <span class="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-semibold">Featured</span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                Shoulder Pain
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">
                                Comprehensive shoulder treatment for rotator cuff injuries, frozen shoulder, and impingement.
                            </p>
                        </div>
                        <div class="px-6 pb-6">
                            <div class="space-y-3 mb-4">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Treatment Time:</span>
                                    <span class="font-medium text-gray-900">6-12 sessions</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Commonality:</span>
                                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Common</span>
                                </div>
                            </div>

                            <div class="mb-4">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                                <div class="flex flex-wrap gap-1">
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Shoulder pain</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Limited range</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Weakness</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">+2 more</span>
                                </div>
                            </div>

                            <a href="https://synctherapylocal.local/conditions/shoulder-pain-victoria-bc/" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300 inline-flex items-center justify-center">
                                Learn More
                                <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Stress & Anxiety Relief -->
                    <div class="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group rounded-lg">
                        <div class="p-6 pb-4">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-2xl">🧘</span>
                                <span class="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-semibold">Featured</span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                Stress & Anxiety Relief
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">
                                Therapeutic massage for stress reduction, anxiety management, and overall mental wellness.
                            </p>
                        </div>
                        <div class="px-6 pb-6">
                            <div class="space-y-3 mb-4">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Treatment Time:</span>
                                    <span class="font-medium text-gray-900">Ongoing</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Commonality:</span>
                                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Very Common</span>
                                </div>
                            </div>

                            <div class="mb-4">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                                <div class="flex flex-wrap gap-1">
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Muscle tension</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Headaches</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">Sleep issues</span>
                                    <span class="border border-gray-300 px-2 py-1 rounded text-xs">+2 more</span>
                                </div>
                            </div>

                            <a href="https://synctherapylocal.local/services/swedish-relaxation-massage-victoria/" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300 inline-flex items-center justify-center">
                                Learn More
                                <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <p class="text-gray-600 mb-4">
                        Don't see your condition? We treat many more conditions not listed here.
                    </p>
                    <a href="tel:+12508128698" 
                       class="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center">
                        <i class="fas fa-phone mr-2"></i>
                        Call to Discuss Your Condition
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Search and Filter Section -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Find Your Condition</h2>
                    <p class="text-lg text-gray-600">
                        Search through our comprehensive list of treatable conditions or browse by category.
                     In addition to understanding various treatable conditions, we also provide valuable resources to enhance your overall well-being. Explore our insightful articles and expert advice, including <a href="https://synctherapylocal.local/conditions/sports-injury-prevention-victoria/">sports injury prevention tips</a> to help you stay safe while engaging in physical activities. Our aim is to empower you with knowledge to maintain your health and prevent potential setbacks.</p>
                </div>

                <!-- Search Bar -->
                <div class="max-w-2xl mx-auto mb-8">
                    <div class="relative">
                        <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input type="text" id="searchInput" 
                               placeholder="Search conditions, symptoms, or causes..."
                               class="pl-10 pr-4 py-3 w-full text-lg border-2 border-gray-200 focus:border-blue-600 rounded-xl outline-none">
                    </div>
                </div>

                <!-- Category Tabs -->
                <div class="mb-8">
                    <div class="grid grid-cols-2 lg:grid-cols-5 gap-2 bg-white rounded-xl shadow-sm p-1">
                        <button onclick="filterByCategory('all')" 
                                class="category-tab active flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300">
                            <i class="fas fa-heartbeat"></i>
                            <div class="text-center">
                                <div class="font-semibold text-sm">All Conditions</div>
                                <div class="text-xs opacity-70">(19)</div>
                            </div>
                        </button>
                        <button onclick="filterByCategory('Pain Management')" 
                                class="category-tab flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300">
                            <i class="fas fa-heart"></i>
                            <div class="text-center">
                                <div class="font-semibold text-sm">Pain Management</div>
                                <div class="text-xs opacity-70">(6)</div>
                            </div>
                        </button>
                        <button onclick="filterByCategory('Musculoskeletal')" 
                                class="category-tab flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300">
                            <i class="fas fa-bolt"></i>
                            <div class="text-center">
                                <div class="font-semibold text-sm">Musculoskeletal</div>
                                <div class="text-xs opacity-70">(4)</div>
                            </div>
                        </button>
                        <button onclick="filterByCategory('Sports Injuries')" 
                                class="category-tab flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300">
                            <i class="fas fa-running"></i>
                            <div class="text-center">
                                <div class="font-semibold text-sm">Sports Injuries</div>
                                <div class="text-xs opacity-70">(8)</div>
                            </div>
                        </button>
                        <button onclick="filterByCategory('Wellness')" 
                                class="category-tab flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300">
                            <i class="fas fa-spa"></i>
                            <div class="text-center">
                                <div class="font-semibold text-sm">Wellness</div>
                                <div class="text-xs opacity-70">(1)</div>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Advanced Filters -->
                <div class="flex flex-col sm:flex-row gap-4 mb-8">
                    <div class="flex-1">
                        <select id="severityFilter" class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 outline-none">
                            <option value="all">All Severities</option>
                            <option value="Low">Low Severity</option>
                            <option value="Medium">Medium Severity</option>
                            <option value="High">High Severity</option>
                        </select>
                    </div>
                    <div class="flex-1">
                        <select id="commonalityFilter" class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 outline-none">
                            <option value="all">All Conditions</option>
                            <option value="Very Common">Very Common</option>
                            <option value="Common">Common</option>
                            <option value="Less Common">Less Common</option>
                        </select>
                    </div>
                </div>

                <!-- Results Count -->
                <div class="mb-6">
                    <p id="resultsCount" class="text-gray-600">
                        Showing 19 of 19 conditions
                    </p>
                </div>

                <!-- Conditions Grid -->
                <div id="conditionsGrid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Conditions will be populated by JavaScript -->
                </div>

                <!-- No Results -->
                <div id="noResults" class="text-center py-12 hidden">
                    <div class="text-6xl mb-4">🔍</div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">No conditions found</h3>
                    <p class="text-gray-600 mb-6">
                        Try adjusting your search terms or filters, or contact us directly to discuss your specific condition.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onclick="clearAllFilters()" 
                                class="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded">
                            Clear All Filters
                        </button>
                        <a href="tel:+12508128698" 
                           class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center justify-center">
                            <i class="fas fa-phone mr-2"></i>
                            Call to Discuss
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Treatment Approach -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Treatment Approach</h2>
                <p class="text-lg text-gray-600 mb-12">
                    Every condition is unique, and so is our approach to treating it. Here's how we ensure the best outcomes
                    for our clients.
                </p>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white shadow-md rounded-lg">
                        <div class="p-6">
                            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-search text-2xl text-blue-600"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Comprehensive Assessment</h3>
                            <p class="text-gray-600">
                                Thorough evaluation of your condition, medical history, lifestyle factors, and treatment goals to
                                create a personalized plan.
                            </p>
                        </div>
                    </div>

                    <div class="bg-white shadow-md rounded-lg">
                        <div class="p-6">
                            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-heartbeat text-2xl text-blue-600"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Evidence-Based Treatment</h3>
                            <p class="text-gray-600">
                                Using proven techniques and modalities backed by research and clinical experience for optimal
                                results.
                            </p>
                        </div>
                    </div>

                    <div class="bg-white shadow-md rounded-lg">
                        <div class="p-6">
                            <div class="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-chart-line text-2xl text-blue-600"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Progress Monitoring</h3>
                            <p class="text-gray-600">
                                Regular assessment of your progress with treatment plan adjustments to ensure continuous
                                improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-br from-blue-50 via-gray-50 to-green-50">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <div class="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                    <i class="fas fa-clock"></i>
                    Don't Let Your Condition Get Worse
                </div>

                <h2 class="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Recovery?</h2>
                <p class="text-xl text-gray-600 mb-8">
                    Early intervention leads to better outcomes. Book your assessment today and take the first step toward
                    feeling better.
                </p>

                <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div class="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div class="text-3xl font-bold text-blue-600 mb-2">8,000+</div>
                            <div class="text-gray-600">Successful Treatments</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-blue-600 mb-2">4.9★</div>
                            <div class="text-gray-600">Average Rating</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-blue-600 mb-2">800+</div>
                            <div class="text-gray-600">Happy Clients</div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://synctherapy.janeapp.com/" target="_blank" rel="noopener noreferrer"
                       class="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-lg shadow-xl transition-all duration-300 inline-flex items-center justify-center">
                        <i class="fas fa-calendar-alt mr-2"></i>
                        Book Your Assessment
                    </a>
                    <a href="tel:+12508128698"
                       class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-lg shadow-xl transition-all duration-300 inline-flex items-center justify-center">
                        <i class="fas fa-phone mr-2"></i>
                        Call (250) 812-8698
                    </a>
                </div>

                <div class="mt-8 text-center">
                    <div class="flex items-center justify-center gap-4 text-sm text-gray-600">
                        <div class="flex items-center gap-1">
                            <i class="fas fa-check-circle text-green-600"></i>
                            <span>Same-day appointments</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <i class="fas fa-shield-alt text-blue-600"></i>
                            <span>Direct billing</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <i class="fas fa-map-marker-alt text-orange-600"></i>
                            <span>Convenient location</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mobile Sticky CTA -->
    <div class="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-2 border-green-300 p-4 md:hidden z-50 shadow-2xl">
        <div class="flex gap-3">
            <a href="https://synctherapy.janeapp.com/" target="_blank" rel="noopener noreferrer"
               class="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 inline-flex items-center justify-center">
                <i class="fas fa-calendar-alt mr-2"></i>
                Book Now
            </a>
            <a href="tel:+12508128698"
               class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 inline-flex items-center justify-center">
                <i class="fas fa-phone mr-2"></i>
                Call
            </a>
        </div>
    </div>

    <script>
        // Conditions data
        const conditions = [
            {
                id: "back-pain",
                title: "Back Pain",
                description: "Comprehensive treatment for acute and chronic back pain, including lower back pain, upper back tension, and spinal dysfunction.",
                category: "Pain Management",
                severity: "High",
                commonality: "Very Common",
                treatmentTime: "4-8 sessions",
                symptoms: ["Lower back ache", "Upper back tension", "Muscle spasms", "Stiffness", "Radiating pain"],
                url: "/conditions/back-pain-victoria/",
                icon: "🔥"
            },
            {
                id: "headaches-neck-pain",
                title: "Headaches & Neck Pain",
                description: "Relief for tension headaches, cervical pain, and neck stiffness through targeted massage therapy.",
                category: "Pain Management",
                severity: "Medium",
                commonality: "Very Common",
                treatmentTime: "3-6 sessions",
                symptoms: ["Tension headaches", "Neck stiffness", "Shoulder tension", "Jaw pain", "Eye strain"],
                url: "/conditions/headaches-neck-pain/",
                icon: "🧠"
            },
            {
                id: "chronic-pain",
                title: "Chronic Pain",
                description: "Long-term pain management strategies for persistent conditions affecting daily life and mobility.",
                category: "Pain Management",
                severity: "High",
                commonality: "Common",
                treatmentTime: "Ongoing",
                symptoms: ["Persistent pain", "Fatigue", "Sleep disturbance", "Mood changes", "Reduced mobility"],
                url: "/conditions/chronic-pain-victoria/",
                icon: "⚡"
            },
            {
                id: "muscle-tension",
                title: "Muscle Tension Relief",
                description: "Treatment for muscle knots, trigger points, and general muscular tension throughout the body.",
                category: "Pain Management",
                severity: "Medium",
                commonality: "Very Common",
                treatmentTime: "2-4 sessions",
                symptoms: ["Muscle knots", "Trigger points", "Stiffness", "Reduced flexibility", "Aching muscles"],
                url: "/conditions/muscle-tension-relief-victoria/",
                icon: "💪"
            },
            {
                id: "sciatica",
                title: "Sciatica Treatment",
                description: "Specialized care for sciatic nerve pain, leg numbness, and lower back radiating symptoms.",
                category: "Pain Management",
                severity: "High",
                commonality: "Common",
                treatmentTime: "6-10 sessions",
                symptoms: ["Leg pain", "Numbness", "Tingling", "Weakness", "Burning sensation"],
                url: "/conditions/sciatica-treatment-victoria/",
                icon: "⚡"
            },
            {
                id: "arthritis-pain",
                title: "Arthritis Pain",
                description: "Gentle, effective treatment for arthritis-related joint pain and stiffness.",
                category: "Pain Management",
                severity: "Medium",
                commonality: "Common",
                treatmentTime: "Ongoing",
                symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced range of motion", "Morning stiffness"],
                url: "/conditions/arthritis-pain-victoria/",
                icon: "🦴"
            },
            {
                id: "hip-knee-pain",
                title: "Hip & Knee Pain",
                description: "Treatment for hip dysfunction, knee pain, and lower extremity mobility issues.",
                category: "Musculoskeletal",
                severity: "Medium",
                commonality: "Common",
                treatmentTime: "4-8 sessions",
                symptoms: ["Hip pain", "Knee stiffness", "Limping", "Grinding sensation", "Weakness"],
                url: "/conditions/hip-knee-pain/",
                icon: "🦵"
            },
            {
                id: "shoulder-pain",
                title: "Shoulder Pain",
                description: "Comprehensive shoulder treatment for rotator cuff injuries, frozen shoulder, and impingement.",
                category: "Musculoskeletal",
                severity: "Medium",
                commonality: "Common",
                treatmentTime: "6-12 sessions",
                symptoms: ["Shoulder pain", "Limited range of motion", "Weakness", "Clicking sounds", "Night pain"],
                url: "/conditions/shoulder-pain-victoria/",
                icon: "💪"
            },
            {
                id: "postural-imbalance",
                title: "Postural Imbalance",
                description: "Correction of postural dysfunction and alignment issues affecting daily activities.",
                category: "Musculoskeletal",
                severity: "Medium",
                commonality: "Very Common",
                treatmentTime: "8-12 sessions",
                symptoms: ["Forward head posture", "Rounded shoulders", "Uneven hips", "Muscle imbalances", "Fatigue"],
                url: "/conditions/postural-imbalance-victoria/",
                icon: "🏃"
            },
            {
                id: "joint-stiffness",
                title: "Joint Stiffness",
                description: "Treatment for reduced joint mobility and stiffness affecting movement quality.",
                category: "Musculoskeletal",
                severity: "Medium",
                commonality: "Common",
                treatmentTime: "4-8 sessions",
                symptoms: ["Stiff joints", "Reduced flexibility", "Morning stiffness", "Difficulty moving", "Aching"],
                url: "/conditions/joint-stiffness-victoria/",
                icon: "🔧"
            },
            {
                id: "sprains-strains",
                title: "Sprains & Strains",
                description: "Acute injury treatment for ligament sprains and muscle strains with rehabilitation focus.",
                category: "Sports Injuries",
                severity: "Medium",
                commonality: "Common",
                treatmentTime: "4-8 sessions",
                symptoms: ["Pain", "Swelling", "Bruising", "Limited movement", "Instability"],
                url: "/conditions/sprains-strains-victoria/",
                icon: "🏃"
            },
            {
                id: "tendonitis",
                title: "Tendonitis Treatment",
                description: "Specialized care for inflamed tendons including tennis elbow, golfer's elbow, and Achilles tendonitis.",
                category: "Sports Injuries",
                severity: "Medium",
                commonality: "Common",
                treatmentTime: "6-10 sessions",
                symptoms: ["Tendon pain", "Stiffness", "Swelling", "Weakness", "Clicking sensation"],
                url: "/conditions/tendonitis-treatment-victoria/",
                icon: "🎾"
            },
            {
                id: "bursitis",
                title: "Bursitis Treatment",
                description: "Treatment for inflamed bursae causing pain and swelling around joints.",
                category: "Sports Injuries",
                severity: "Medium",
                commonality: "Less Common",
                treatmentTime: "4-8 sessions",
                symptoms: ["Joint pain", "Swelling", "Warmth", "Limited movement", "Tenderness"],
                url: "/conditions/bursitis-treatment-victoria/",
                icon: "🔥"
            },
            {
                id: "plantar-fasciitis",
                title: "Plantar Fasciitis",
                description: "Effective treatment for heel pain and plantar fascia inflammation.",
                category: "Sports Injuries",
                severity: "Medium",
                commonality: "Common",
                treatmentTime: "6-12 sessions",
                symptoms: ["Heel pain", "Morning stiffness", "Arch pain", "Difficulty walking", "Sharp pain"],
                url: "/conditions/plantar-fasciitis-treatment-victoria/",
                icon: "🦶"
            },
            {
                id: "shin-splints",
                title: "Shin Splints",
                description: "Treatment for medial tibial stress syndrome and lower leg pain in runners and athletes.",
                category: "Sports Injuries",
                severity: "Medium",
                commonality: "Common",
                treatmentTime: "4-8 sessions",
                symptoms: ["Shin pain", "Tenderness", "Swelling", "Pain during activity", "Aching"],
                url: "/conditions/shin-splints-treatment-victoria/",
                icon: "🏃"
            },
            {
                id: "it-band-syndrome",
                title: "IT Band Syndrome",
                description: "Treatment for iliotibial band friction syndrome causing lateral knee and hip pain.",
                category: "Sports Injuries",
                severity: "Medium",
                commonality: "Common",
                treatmentTime: "6-10 sessions",
                symptoms: ["Lateral knee pain", "Hip pain", "Snapping sensation", "Pain during running", "Stiffness"],
                url: "/conditions/it-band-syndrome-victoria/",
                icon: "🏃"
            },
            {
                id: "sports-injury-prevention",
                title: "Sports Injury Prevention",
                description: "Proactive care to prevent injuries and optimize athletic performance.",
                category: "Sports Injuries",
                severity: "Low",
                commonality: "Common",
                treatmentTime: "Ongoing",
                symptoms: ["Muscle tightness", "Fatigue", "Minor aches", "Reduced performance", "Stiffness"],
                url: "/conditions/sports-injury-prevention-victoria/",
                icon: "🛡️"
            },
            {
                id: "overuse-injuries",
                title: "Overuse Injuries",
                description: "Treatment for repetitive strain injuries and chronic overuse conditions.",
                category: "Sports Injuries",
                severity: "Medium",
                commonality: "Common",
                treatmentTime: "6-12 sessions",
                symptoms: ["Gradual pain onset", "Stiffness", "Weakness", "Reduced performance", "Persistent aching"],
                url: "/conditions/overuse-injuries-victoria/",
                icon: "🔄"
            },
            {
                id: "stress-anxiety-relief",
                title: "Stress & Anxiety Relief",
                description: "Therapeutic massage for stress reduction, anxiety management, and overall mental wellness.",
                category: "Wellness",
                severity: "Medium",
                commonality: "Very Common",
                treatmentTime: "Ongoing",
                symptoms: ["Muscle tension", "Headaches", "Sleep issues", "Fatigue", "Irritability"],
                url: "/conditions/stress-anxiety-relief-victoria/",
                icon: "🧘"
            }
        ];

        let filteredConditions = [...conditions];
        let currentCategory = 'all';
        let currentSeverity = 'all';
        let currentCommonality = 'all';
        let currentSearch = '';

        function renderConditions(conditionsToRender) {
            const grid = document.getElementById('conditionsGrid');
            const noResults = document.getElementById('noResults');
            
            if (conditionsToRender.length === 0) {
                grid.innerHTML = '';
                noResults.classList.remove('hidden');
                return;
            }
            
            noResults.classList.add('hidden');
            
            grid.innerHTML = conditionsToRender.map(condition => {
                const severityColor = condition.severity === 'High' ? 'bg-red-100 text-red-800' :
                                    condition.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800';
                
                return `
                    <div class="bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group rounded-lg">
                        <div class="p-6 pb-4">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-2xl">${condition.icon}</span>
                                <span class="${severityColor} px-2 py-1 rounded text-xs font-semibold">${condition.severity}</span>
                            </div>
                            <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                ${condition.title}
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">${condition.description}</p>
                        </div>
                        <div class="px-6 pb-6">
                            <div class="space-y-3 mb-4">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Category:</span>
                                    <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">${condition.category}</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Treatment Time:</span>
                                    <span class="font-medium text-gray-900 text-xs">${condition.treatmentTime}</span>
                                </div>
                            </div>

                            <div class="mb-4">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2">Key Symptoms:</h4>
                                <div class="flex flex-wrap gap-1">
                                    ${condition.symptoms.slice(0, 2).map(symptom => 
                                        `<span class="border border-gray-300 px-2 py-1 rounded text-xs">${symptom}</span>`
                                    ).join('')}
                                    ${condition.symptoms.length > 2 ? 
                                        `<span class="border border-gray-300 px-2 py-1 rounded text-xs">+${condition.symptoms.length - 2} more</span>` : 
                                        ''
                                    }
                                </div>
                            </div>

                            <a href="https://synctherapylocal.local/conditions/%7Bcondition.url" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300 inline-flex items-center justify-center">
                                Learn More
                                <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function updateResultsCount() {
            const count = document.getElementById('resultsCount');
            const searchText = currentSearch ? ` for "${currentSearch}"` : '';
            count.textContent = `Showing ${filteredConditions.length} of ${conditions.length} conditions${searchText}`;
        }

        function filterConditions() {
            filteredConditions = conditions.filter(condition => {
                const matchesSearch = !currentSearch || 
                    condition.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                    condition.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
                    condition.symptoms.some(symptom => symptom.toLowerCase().includes(currentSearch.toLowerCase()));
                
                const matchesCategory = currentCategory === 'all' || condition.category === currentCategory;
                const matchesSeverity = currentSeverity === 'all' || condition.severity === currentSeverity;
                const matchesCommonality = currentCommonality === 'all' || condition.commonality === currentCommonality;
                
                return matchesSearch && matchesCategory && matchesSeverity && matchesCommonality;
            });
            
            renderConditions(filteredConditions);
            updateResultsCount();
        }

        function filterByCategory(category) {
            currentCategory = category;
            
            // Update active tab
            document.querySelectorAll('.category-tab').forEach(tab => {
                tab.classList.remove('active', 'bg-blue-600', 'text-white');
                tab.classList.add('text-gray-600');
            });
            
            event.target.classList.add('active', 'bg-blue-600', 'text-white');
            event.target.classList.remove('text-gray-600');
            
            filterConditions();
        }

        function clearAllFilters() {
            currentCategory = 'all';
            currentSeverity = 'all';
            currentCommonality = 'all';
            currentSearch = '';
            
            document.getElementById('searchInput').value = '';
            document.getElementById('severityFilter').value = 'all';
            document.getElementById('commonalityFilter').value = 'all';
            
            // Reset category tabs
            document.querySelectorAll('.category-tab').forEach(tab => {
                tab.classList.remove('active', 'bg-blue-600', 'text-white');
                tab.classList.add('text-gray-600');
            });
            document.querySelector('.category-tab').classList.add('active', 'bg-blue-600', 'text-white');
            
            filterConditions();
        }

        // Event listeners
        document.getElementById('searchInput').addEventListener('input', function(e) {
            currentSearch = e.target.value;
            filterConditions();
        });

        document.getElementById('severityFilter').addEventListener('change', function(e) {
            currentSeverity = e.target.value;
            filterConditions();
        });

        document.getElementById('commonalityFilter').addEventListener('change', function(e) {
            currentCommonality = e.target.value;
            filterConditions();
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            renderConditions(conditions);
            updateResultsCount();
            
            // Set first tab as active
            document.querySelector('.category-tab').classList.add('active', 'bg-blue-600', 'text-white');
        });
    </script>
<!-- /wp:html -->