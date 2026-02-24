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
