const https = require('https');

const urls = [
    "https://www.synctherapy.ca/",
    "https://www.synctherapy.ca/about/",
    "https://www.synctherapy.ca/blog/",
    "https://www.synctherapy.ca/conditions/",
    "https://www.synctherapy.ca/conditions/anterior-knee-pain/",
    "https://www.synctherapy.ca/conditions/arthritis-pain/",
    "https://www.synctherapy.ca/conditions/back-pain/",
    "https://www.synctherapy.ca/conditions/baseball-injuries/",
    "https://www.synctherapy.ca/conditions/bursitis-treatment/",
    "https://www.synctherapy.ca/conditions/cardiovascular-health/",
    "https://www.synctherapy.ca/conditions/chronic-disease-management/",
    "https://www.synctherapy.ca/conditions/chronic-pain/",
    "https://www.synctherapy.ca/conditions/fibromyalgia/",
    "https://www.synctherapy.ca/conditions/headaches-migraines/",
    "https://www.synctherapy.ca/conditions/hip-and-knee-pain/",
    "https://www.synctherapy.ca/conditions/it-band-syndrome/",
    "https://www.synctherapy.ca/conditions/joint-stiffness/",
    "https://www.synctherapy.ca/conditions/muscle-tension/",
    "https://www.synctherapy.ca/conditions/neck-shoulder-pain/",
    "https://www.synctherapy.ca/conditions/plantar-fasciitis/",
    "https://www.synctherapy.ca/conditions/postural-imbalance/",
    "https://www.synctherapy.ca/conditions/rotator-cuff-injury/",
    "https://www.synctherapy.ca/conditions/sciatica-treatment/",
    "https://www.synctherapy.ca/conditions/shin-splints/",
    "https://www.synctherapy.ca/conditions/shoulder-impingement/",
    "https://www.synctherapy.ca/conditions/shoulder-pain/",
    "https://www.synctherapy.ca/conditions/sports-injuries-and-prevention/",
    "https://www.synctherapy.ca/conditions/sprains-and-strains/",
    "https://www.synctherapy.ca/conditions/tendonitis-treatment/",
    "https://www.synctherapy.ca/html-sitemap/",
    "https://www.synctherapy.ca/our-team/daryl-stubbs/",
    "https://www.synctherapy.ca/services/",
    "https://www.synctherapy.ca/services/athletic-therapy/",
    "https://www.synctherapy.ca/services/cholesterol-diet/",
    "https://www.synctherapy.ca/services/diabetes-nutrition/",
    "https://www.synctherapy.ca/services/dietary-consultation/",
    "https://www.synctherapy.ca/services/exercise-therapy/",
    "https://www.synctherapy.ca/services/food-sensitivity-counseling/",
    "https://www.synctherapy.ca/services/gut-health-optimization/",
    "https://www.synctherapy.ca/services/health-consulting/",
    "https://www.synctherapy.ca/services/home-exercise-plans/",
    "https://www.synctherapy.ca/services/ibs-diet-counseling/",
    "https://www.synctherapy.ca/services/immune-support-nutrition/",
    "https://www.synctherapy.ca/services/injury-rehab-massage/",
    "https://www.synctherapy.ca/services/low-fodmap-diet/",
    "https://www.synctherapy.ca/services/mens-health-consulting/",
    "https://www.synctherapy.ca/services/muscle-recovery-massage/",
    "https://www.synctherapy.ca/services/muscle-tension-relief/",
    "https://www.synctherapy.ca/services/myofascial-release/",
    "https://www.synctherapy.ca/services/nutrition-consulting/",
    "https://www.synctherapy.ca/services/nutrition-counseling/",
    "https://www.synctherapy.ca/services/pain-management/",
    "https://www.synctherapy.ca/services/personalized-health-plan/",
    "https://www.synctherapy.ca/services/physical-rehabilitation/",
    "https://www.synctherapy.ca/services/post-event-massage/",
    "https://www.synctherapy.ca/services/pre-event-massage/",
    "https://www.synctherapy.ca/services/relaxation-massage/",
    "https://www.synctherapy.ca/services/rotator-cuff-release/",
    "https://www.synctherapy.ca/services/sports-injury-rehab/",
    "https://www.synctherapy.ca/services/sports-injury-treatment/",
    "https://www.synctherapy.ca/services/sports-medicine/",
    "https://www.synctherapy.ca/services/supplements-advice/",
    "https://www.synctherapy.ca/services/trigger-point-therapy/",
    "https://www.synctherapy.ca/services/visceral-manipulation/",
    "https://www.synctherapy.ca/services/wellness-consultation/",
    "https://www.synctherapy.ca/services/womens-health-consulting/",
    "https://www.synctherapy.ca/affiliate-disclosure/",
    "https://www.synctherapy.ca/contact/",
    "https://www.synctherapy.ca/cookies-policy/",
    "https://www.synctherapy.ca/direct-billing/",
    "https://www.synctherapy.ca/magic/",
    "https://www.synctherapy.ca/medical-disclaimer/",
    "https://www.synctherapy.ca/my-account/",
    "https://www.synctherapy.ca/privacy-policy/",
    "https://www.synctherapy.ca/terms-of-service/",
    "https://www.synctherapy.ca/testimonials-disclosure/",
    "https://www.synctherapy.ca/services/massage-therapy/"
];

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                let hasService = false;
                let hasCondition = false;
                const matches = data.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
                if (matches) {
                    matches.forEach(m => {
                        try {
                            const jsonStr = m.replace(/<script type="application\/ld\+json">/i, '').replace(/<\/script>/i, '').trim();
                            const parsed = JSON.parse(jsonStr);
                            if (parsed['@type'] === 'Service') hasService = true;
                            if (parsed['@type'] === 'MedicalCondition') hasCondition = true;
                        } catch (e) { }
                    });
                }
                resolve({ url, status: res.statusCode, hasService, hasCondition });
            });
        }).on('error', (e) => {
            resolve({ url, status: 'ERROR', error: e.message });
        });
    });
}

async function run() {
    console.log('Checking all URLs for Service or Condition schemas...\n');
    const batchSize = 10;
    const results = [];

    for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        const batchResults = await Promise.all(batch.map(checkUrl));
        results.push(...batchResults);
        process.stdout.write(`Checked ${Math.min(i + batchSize, urls.length)} / ${urls.length}\r`);
    }

    console.log('\n\nResults:');
    results.forEach(r => {
        const isExpectedToHaveSchema = r.url.includes('/services/') || r.url.includes('/conditions/');
        const hasCorrectSchema = r.hasService || r.hasCondition;

        // Ignore root /services/ and /conditions/ indices
        const isIndex = r.url.endsWith('/services/') || r.url.endsWith('/conditions/');

        if (isExpectedToHaveSchema && !isIndex && !hasCorrectSchema) {
            console.log(`[MISSING] ${r.url}`);
        } else if (hasCorrectSchema) {
            console.log(`[OK]      ${r.url} (Service: ${r.hasService}, Condition: ${r.hasCondition})`);
        }
    });
}

run();
