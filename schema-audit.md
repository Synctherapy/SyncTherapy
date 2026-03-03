# Schema Code Blocks for Audit

Here are the extracted schema generation blocks from the codebase.

## 1. Global Organization/LocalBusiness Schema (from `app/layout.tsx`)
```tsx
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "additionalType": [
                "https://www.wikidata.org/wiki/Q1151069",
                "https://www.wikidata.org/wiki/Q2138622"
              ],
              "@id": "https://www.synctherapy.ca/#organization",
              "name": "Sync Massage Therapy",
              "alternateName": "Sync Therapy",
              "url": "https://www.synctherapy.ca/",
              "logo": "https://www.synctherapy.ca/icon.svg",
              "image": "https://www.synctherapy.ca/images/clinic-exterior.jpg",
              "telephone": "+12508128698",
              "email": "info@synctherapy.ca",
              "priceRange": "$$",
              "description": "Providing registered massage therapy and athletic therapy in Colwood, BC. Trusted by 800+ clients since 2015.",
              "foundingDate": "2015",
              "numberOfEmployees": { "@type": "QuantitativeValue", "value": 1 },
              "founder": { "@id": "https://www.synctherapy.ca/our-team/daryl-stubbs/#person" },
              "hasMap": "https://www.google.com/maps?cid=16919443298834082997",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "132, 328 Wale Rd #120",
                "addressLocality": "Colwood",
                "addressRegion": "BC",
                "postalCode": "V9B 1J2",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.445469,
                "longitude": -123.469921
              },
              "containedInPlace": {
                "@type": "Place",
                "name": "Coastal Offices"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "123",
                "bestRating": "5",
                "worstRating": "1"
              },
              "medicalSpecialty": [
                "Musculoskeletal",
                "PhysicalTherapy",
                "SportsMedicine"
              ],
              "award": [
                "Best Massage Therapy Clinic — Platinum Winner, Community Votes Victoria 2022",
                "Best Massage Therapy Clinic — Platinum Winner, Community Votes Victoria 2023",
                "Best Massage Therapy Clinic — Platinum Winner, Community Votes Victoria 2024",
                "Best Massage Therapy Clinic — Platinum Winner, Community Votes Victoria 2025",
                "Best Physio & Rehab Clinic — Platinum Winner, Community Votes Victoria 2022",
                "Best Physio & Rehab Clinic — Platinum Winner, Community Votes Victoria 2023",
                "Best Physio & Rehab Clinic — Platinum Winner, Community Votes Victoria 2024",
                "Best Physio & Rehab Clinic — Platinum Winner, Community Votes Victoria 2025"
              ],
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "17:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"], "opens": "08:00", "closes": "20:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "17:00" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Massage & Athletic Therapy Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Massage Therapy",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "60-Minute Massage Therapy", "url": "https://www.synctherapy.ca/services/massage-therapy/" }, "price": "130.00", "priceCurrency": "CAD" },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "75-Minute Massage Therapy", "url": "https://www.synctherapy.ca/services/massage-therapy/" }, "price": "157.50", "priceCurrency": "CAD" },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "90-Minute Massage Therapy", "url": "https://www.synctherapy.ca/services/massage-therapy/" }, "price": "178.50", "priceCurrency": "CAD" }
                    ]
                  },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Athletic Therapy", "description": "Injury rehabilitation and performance optimization", "url": "https://www.synctherapy.ca/services/athletic-therapy/" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sports Massage", "description": "Specialized treatment for athletes and active individuals", "url": "https://www.synctherapy.ca/services/sports-massage/" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Tissue Massage", "description": "Targeted pressure to release chronic tension", "url": "https://www.synctherapy.ca/services/deep-tissue-massage/" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Myofascial Release", "description": "Fascial release techniques for structural alignment", "url": "https://www.synctherapy.ca/services/myofascial-release/" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visceral Manipulation", "description": "Gentle organ mobilization to relieve referred musculoskeletal pain", "url": "https://www.synctherapy.ca/services/visceral-manipulation/" } }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/SyncTherapyVictoria/",
                "https://www.instagram.com/synctherapy/",
                "https://www.youtube.com/@synctherapy",
                "https://ca.pinterest.com/SyncTherapyWellness/",
                "https://www.linkedin.com/in/daryl-stubbs-36245379/",
                "https://synctherapy.janeapp.com/locations/sync-therapy",
                "https://web.westshore.bc.ca/member-directory/sync-massage-therapy/",
                "https://www.bbb.org/ca/bc/colwood/profile/massage-therapist/sync-therapy-0047-235958553"
              ],
              "knowsAbout": [
                "Massage Therapy",
                "Athletic Therapy",
                "Visceral Manipulation",
                "Deep Tissue Massage",
                "Myofascial Release",
                "Sports Medicine",
                "Sports Massage",
                "Holistic Nutrition",
                "Trigger Point Therapy",
                "Chronic Pain Management",
                "Sports Injury Rehabilitation",
                "Exercise Therapy",
                "Nutrition Counseling",
                "Pain Management"
              ],
              "areaServed": [
                { "@type": "City", "name": "Colwood" },
                { "@type": "City", "name": "Langford" },
                { "@type": "City", "name": "Victoria" },
                { "@type": "City", "name": "Esquimalt" },
                { "@type": "City", "name": "View Royal" },
                { "@type": "City", "name": "Sooke" },
                { "@type": "City", "name": "Metchosin" }
              ],
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://synctherapy.janeapp.com/",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                  ]
                },
                "result": {
                  "@type": "Reservation",
                  "name": "Massage Therapy Appointment"
                }
              }
            })
          }}
        />
        {/* Person Entity for Daryl Stubbs — linked from all blog posts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.synctherapy.ca/our-team/daryl-stubbs/#person",
              "name": "Daryl Stubbs",
              "url": "https://www.synctherapy.ca/our-team/daryl-stubbs/",
              "image": "https://www.synctherapy.ca/images/daryl-stubbs-author.jpg",
              "jobTitle": "Registered Massage Therapist & Certified Athletic Therapist",
              "description": "Daryl Stubbs is the founder of Sync Massage Therapy in Colwood, BC, offering musculoskeletal rehabilitation, athletic therapy, visceral manipulation, and functional nutrition since 2015.",
              "worksFor": { "@id": "https://www.synctherapy.ca/#organization" },
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Professional License",
                  "name": "Registered Massage Therapist (RMT)",
                  "recognizedBy": { "@type": "Organization", "name": "College of Complementary Health Professionals of BC (CCHPBC)" },
                  "identifier": "RMT-008082"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Professional Certification",
                  "name": "Certified Athletic Therapist — CAT(C)",
                  "recognizedBy": { "@type": "Organization", "name": "Canadian Athletic Therapists Association (CATA)" },
                  "identifier": "2-4534"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Continuing Education",
                  "name": "Visceral Manipulation VM-1",
                  "recognizedBy": { "@type": "Organization", "name": "Barral Institute" }
                }
              ],
              "memberOf": [
                { "@type": "Organization", "name": "College of Complementary Health Professionals of BC (CCHPBC)" },
                { "@type": "Organization", "name": "Canadian Athletic Therapists Association (CATA)" }
              ],
              "alumniOf": [
                { "@type": "EducationalOrganization", "name": "Camosun College" },
                { "@type": "EducationalOrganization", "name": "Barral Institute" }
              ],
              "knowsAbout": [
                "Massage Therapy",
                "Athletic Therapy",
                "Visceral Manipulation",
                "Holistic Nutrition",
                "Red Light Therapy",
                "Sports Rehabilitation",
                "Myofascial Release",
                "Deep Tissue Massage"
              ],
              "sameAs": [
                "https://www.instagram.com/synctherapy/",
                "https://www.facebook.com/SyncTherapyVictoria/",
                "https://www.youtube.com/@synctherapy",
                "https://ca.pinterest.com/SyncTherapyWellness/"
              ]
            })
          }}
        />
```

## 2. Service Page Schema Generator (`components/ServiceSchema.tsx`)
```tsx
/**
 * ServiceSchema — Reusable JSON-LD structured data for all service & condition pages.
 *
 * Outputs a single <script type="application/ld+json"> with:
 *   • BreadcrumbList (Home → Services/Conditions → Page)
 *   • Service or MedicalCondition entity with provider @id back-link
 *   • mainEntityOfPage (WebPage)
 *   • speakable (CSS selectors for voice / LLM answers)
 *   • FAQPage (if faqItems provided)
 */

interface FaqItem {
    question: string;
    answer: string;
}

export interface ServiceSchemaProps {
    /** 'service' → Service schema type, 'condition' → MedicalCondition */
    type: 'service' | 'condition';
    /** The service/condition name (matches h1) */
    name: string;
    /** Meta description for the schema */
    description: string;
    /** URL slug, e.g. "sports-medicine" or "knee-pain" */
    slug: string;
    /** Last breadcrumb label text */
    breadcrumbLabel: string;
    /** Optional parent category for schema categorization */
    parentCategory?: string;
    /** Optional FAQ items — generates FAQPage schema */
    faqItems?: FaqItem[];
    /** CSS selectors for speakable. Defaults to ["h1"]. Add "[data-speakable]" when pages use that attribute. */
    speakableCssSelectors?: string[];
    /** Optional hero/feature image URL for schema */
    imageUrl?: string;
}

const BASE_URL = 'https://www.synctherapy.ca';
const ORG_ID = `${BASE_URL}/#organization`;
const PERSON_ID = `${BASE_URL}/our-team/daryl-stubbs/#person`;

export function ServiceSchema({
    type,
    name,
    description,
    slug,
    breadcrumbLabel,
    parentCategory,
    faqItems,
    speakableCssSelectors = ['h1'],
    imageUrl,
}: ServiceSchemaProps) {
    const pathPrefix = type === 'service' ? 'services' : 'conditions';
    const canonicalUrl = `${BASE_URL}/${pathPrefix}/${slug}/`;
    const parentLabel = type === 'service' ? 'Services' : 'Conditions';
    const parentUrl = `${BASE_URL}/${pathPrefix}/`;

    // ── BreadcrumbList ──────────────────────────────────────────
    const breadcrumbList = {
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': `${BASE_URL}/`,
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': parentLabel,
                'item': parentUrl,
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': breadcrumbLabel,
                'item': canonicalUrl,
            },
        ],
    };

    // ── Main Entity (Service or MedicalCondition) ───────────────
    const mainEntity =
        type === 'service'
            ? {
                '@type': 'Service',
                '@id': `${canonicalUrl}#service`,
                'name': name,
                'description': description,
                'url': canonicalUrl,
                ...(imageUrl && { image: imageUrl }),
                'provider': { '@id': ORG_ID },
                'areaServed': [
                    { '@type': 'City', 'name': 'Colwood' },
                    { '@type': 'City', 'name': 'Langford' },
                    { '@type': 'City', 'name': 'Victoria' },
                    { '@type': 'City', 'name': 'Esquimalt' },
                    { '@type': 'City', 'name': 'View Royal' },
                ],
                'audience': {
                    '@type': 'MedicalAudience',
                    'audienceType': 'Patient',
                },
                ...(parentCategory && { 'serviceType': parentCategory }),
                'availableChannel': {
                    '@type': 'ServiceChannel',
                    'serviceUrl': 'https://synctherapy.janeapp.com/',
                    'serviceSmsNumber': '+12508128698',
                },
            }
            : {
                '@type': 'MedicalCondition',
                '@id': `${canonicalUrl}#condition`,
                'name': name,
                'description': description,
                'url': canonicalUrl,
                ...(imageUrl && { image: imageUrl }),
                'possibleTreatment': {
                    '@type': 'MedicalTherapy',
                    'name': 'Massage Therapy & Athletic Therapy',
                },
                'signOrSymptom': {
                    '@type': 'MedicalSignOrSymptom',
                    'name': name,
                },
            };

    // ── WebPage with mainEntityOfPage + speakable ───────────────
    const webPage = {
        '@type': 'WebPage',
        '@id': canonicalUrl,
        'url': canonicalUrl,
        'name': name,
        'description': description,
        'isPartOf': { '@id': `${BASE_URL}/#website` },
        'about': { '@id': mainEntity['@id'] },
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': speakableCssSelectors,
        },
        'breadcrumb': { '@id': `${canonicalUrl}#breadcrumb` },
    };

    // Attach @id to breadcrumb for cross-reference
    (breadcrumbList as Record<string, unknown>)['@id'] = `${canonicalUrl}#breadcrumb`;

    // Add mainEntityOfPage back-link to the main entity
    (mainEntity as Record<string, unknown>)['mainEntityOfPage'] = {
        '@id': canonicalUrl,
    };

    // ── @graph assembly ─────────────────────────────────────────
    const graph: Record<string, unknown>[] = [
        breadcrumbList,
        webPage,
        mainEntity,
    ];

    // ── FAQPage (optional) ──────────────────────────────────────
    if (faqItems && faqItems.length > 0) {
        graph.push({
            '@type': 'FAQPage',
            '@id': `${canonicalUrl}#faq`,
            'mainEntity': faqItems.map((item) => ({
                '@type': 'Question',
                'name': item.question,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': item.answer,
                },
            })),
        });
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': graph,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

```

## 3. Blog/Review Schema Generator (from `app/[...slug]/page.tsx`)
```tsx
        // ─── Content Type Detection ────────────────────────────
        const schemaType = getSchemaType(currentSlug);

        // ─── Entity-chained Author + Publisher ─────────────────
        const authorEntity = {
            '@type': 'Person' as const,
            '@id': 'https://www.synctherapy.ca/our-team/daryl-stubbs/#person',
            'name': 'Daryl Stubbs',
            'url': 'https://www.synctherapy.ca/our-team/daryl-stubbs/',
            'jobTitle': 'RMT, CAT(C), Holistic Nutritionist',
            'worksFor': { '@id': 'https://www.synctherapy.ca/#organization' },
            'sameAs': [
                'https://www.instagram.com/synctherapy/',
                'https://www.facebook.com/SyncTherapyVictoria/',
            ],
        };

        const publisherEntity = {
            '@type': 'Organization' as const,
            '@id': 'https://www.synctherapy.ca/#organization',
            'name': 'Sync Massage Therapy',
            'url': 'https://www.synctherapy.ca',
            'logo': {
                '@type': 'ImageObject' as const,
                'url': 'https://www.synctherapy.ca/icon.svg',
            },
        };

        // ─── Build type-specific schema ────────────────────────
        const schemas: object[] = [];

        if (schemaType === 'review') {
            // Review schema for product review posts
            const productName = item.frontmatter.productName || (item.frontmatter.title || '')
                .replace(/review.*$/i, '')
                .replace(/\d{4}.*$/i, '')
                .replace(/[-–—:]\s*should.*$/i, '')
                .trim();

            const reviewSchema: any = {
                '@context': 'https://schema.org',
                '@type': 'Review',
                'name': item.frontmatter.title || '',
                'description': item.frontmatter.description || '',
                'datePublished': item.frontmatter.date,
                'dateModified': item.frontmatter.dateModified || item.frontmatter.date,
                'author': authorEntity,
                'publisher': publisherEntity,
                'itemReviewed': {
                    '@type': 'Product',
                    'name': productName,
                    'image': item.frontmatter.image || item.frontmatter.featuredImage || 'https://www.synctherapy.ca/icon.svg',
                },
                'mainEntityOfPage': { '@type': 'WebPage', '@id': canonicalUrl },
            };

            if (item.frontmatter.productPrice) {
                reviewSchema.itemReviewed.offers = {
                    '@type': 'Offer',
                    'priceCurrency': 'CAD',
                    'price': item.frontmatter.productPrice,
                };
            }

            if (item.frontmatter.rating) {
                reviewSchema.reviewRating = {
                    '@type': 'Rating',
                    'ratingValue': item.frontmatter.rating,
                    'bestRating': '5',
                };
            }

            if (item.frontmatter.pros) {
                reviewSchema.positiveNotes = {
                    '@type': 'ItemList',
                    'itemListElement': Array.isArray(item.frontmatter.pros)
                        ? item.frontmatter.pros.map((pro: string, idx: number) => ({
                            '@type': 'ListItem',
                            'position': idx + 1,
                            'name': pro
                        }))
                        : [{ '@type': 'ListItem', 'position': 1, 'name': item.frontmatter.pros }]
                };
            }

            if (item.frontmatter.cons) {
                reviewSchema.negativeNotes = {
                    '@type': 'ItemList',
                    'itemListElement': Array.isArray(item.frontmatter.cons)
                        ? item.frontmatter.cons.map((con: string, idx: number) => ({
                            '@type': 'ListItem',
                            'position': idx + 1,
                            'name': con
                        }))
                        : [{ '@type': 'ListItem', 'position': 1, 'name': item.frontmatter.cons }]
                };
            }

            schemas.push(reviewSchema);
        } else if (schemaType === 'listicle') {
            // Article + ItemList for best-of / top-N posts
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'Article',
                'headline': item.frontmatter.title || '',
                'description': item.frontmatter.description || '',
                'datePublished': item.frontmatter.date,
                'dateModified': item.frontmatter.dateModified || item.frontmatter.date,
                'author': authorEntity,
                'publisher': publisherEntity,
                'mainEntityOfPage': { '@type': 'WebPage', '@id': canonicalUrl },
            });
            // Extract the number from the slug for itemListElement count
            const numberMatch = currentSlug.match(/(\d+)/);
            const listCount = numberMatch ? parseInt(numberMatch[1], 10) : 10;
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                'name': item.frontmatter.title || '',
                'numberOfItems': listCount,
                'itemListOrder': 'https://schema.org/ItemListOrderDescending',
            });
        } else {
            // Standard Article schema
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'Article',
                'headline': item.frontmatter.title || '',
                'description': item.frontmatter.description || '',
                'datePublished': item.frontmatter.date,
                'dateModified': item.frontmatter.dateModified || item.frontmatter.date,
                'author': authorEntity,
                'publisher': publisherEntity,
                'mainEntityOfPage': { '@type': 'WebPage', '@id': canonicalUrl },
            });
        }

        // FAQ schema
        if (item.frontmatter.faqs && Array.isArray(item.frontmatter.faqs) && item.frontmatter.faqs.length > 0) {
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': item.frontmatter.faqs.map((faq: any) => ({
                    '@type': 'Question',
                    'name': typeof faq === 'string' ? faq : (faq.question || faq.q),
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': typeof faq === 'string' ? '' : (faq.answer || faq.a)
                    }
                }))
            });
        }

        // Breadcrumb schema (always present)
        schemas.push({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.synctherapy.ca/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://www.synctherapy.ca/blog/' },
                { '@type': 'ListItem', 'position': 3, 'name': item.frontmatter.title || '' },
            ],
        });

        return (
            <>
                <Header />
                {/* Structured Data — type-specific + breadcrumb */}
                {schemas.map((schema, i) => (
                    <script
                        key={i}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                ))}
```
