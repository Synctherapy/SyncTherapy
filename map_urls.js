const fs = require('fs');

const missingUrls = [
  'https://sync-therapy.vercel.app/deep-tissue-massage/',
  'https://sync-therapy.vercel.app/athletic-therapy/',
  'https://sync-therapy.vercel.app/terms/',
  'https://sync-therapy.vercel.app/conditions/shoulder-pain-relief-victoria/',
  'https://sync-therapy.vercel.app/sitemap/',
  'https://sync-therapy.vercel.app/myofascial-release/',
  'https://search.google.com/local/reviews?placeid=ChIJh0e3HIV0j1QRtWxeiAnwzeo',
  'https://sync-therapy.vercel.app/conditions/neck-pain-relief-victoria/',
  'https://sync-therapy.vercel.app/conditions/chronic-pain-relief-victoria/',
  'https://sync-therapy.vercel.app/team/',
  'https://sync-therapy.vercel.app/conditions/sciatica-relief-victoria/',
  'https://sync-therapy.vercel.app/visceral-manipulation/',
  'https://sync-therapy.vercel.app/services/athletic-therapy/',
  'https://sync-therapy.vercel.app/about/about-sync-therapy/',
  'https://sync-therapy.vercel.app/_next/image/?url=%2Fimages%2Fdaryl-stubbs-thumb.jpg&w=640&q=75',
  'https://sync-therapy.vercel.app/services/ibs-diet-counseling/',
  'https://sync-therapy.vercel.app/services/dietary-consultation/',
  'https://sync-therapy.vercel.app/services/immune-support-nutrition/',
  'https://sync-therapy.vercel.app/services/nutrition-counseling/',
  'https://sync-therapy.vercel.app/services/sports-medicine/',
  'https://sync-therapy.vercel.app/wp-login.php?redirect_to=https%3A%2F%2Fwww.synctherapy.ca%2Fwp-admin%2Fedit.php%3Fpost_type%3Dpage&reauth=1',
  'https://sync-therapy.vercel.app/services/gut-health-optimization/',
  'https://ca.iherb.com/pr/thorne-women-s-daily-probiotic-30-capsules/117164?gad_campaignid=818099273&gad_source=1&gclid=CjwKCAjw-svEBhB6EiwAEzSdrkHHqtkUxk7D96Bd7w_gtUx62PO2HnYSNM591aQNOfbaIxX8zBAZmRoC36AQAvD_BwE&gclsrc=aw.ds&rcode=IQE9230',
  'https://drc.bmj.com/content/8/1/e001319',
  'https://sync-therapy.vercel.app/services/sports-massage/',
  'https://ca.iherb.com/pr/culturelle-probiotics-women-s-4-in-1-protection-30-once-daily-vegetarian-capsules/88637?rcode=IQE9230',
  'https://sync-therapy.vercel.app/massage-therapist-langford/',
  'https://www.synctherapy.ca/services/nutrition-consulting/',
  'https://sync-therapy.vercel.app/services/swedish-massage/',
  'https://sync-therapy.vercel.app/services/low-fodmap-diet/',
  'https://www.wjgnet.com/1007-9327/full/v21/i10/3072.htm',
  'https://sync-therapy.vercel.app/massage-therapist-victoria/',
  'https://sync-therapy.vercel.app/services/supplements-advice/',
  'https://sync-therapy.vercel.app/services/diabetes-nutrition/',
  'https://sync-therapy.vercel.app/services/cholesterol-diet/',
  'https://www.synctherapy.ca/our-team/daryl-stubbs/',
  'https://sync-therapy.vercel.app/nutrition-consulting/',
  'https://sync-therapy.vercel.app/red-light-therapy-and-mitochondria/',
  'https://staging.synctherapy.ca/wordpress/wp-content/uploads/content/Infraredi-LED-Light-Therapy-Mask-using-red-light-to-improve-wrinkles-and-skin-health_224f2455-418c-43f5-9d7d-2e91414bbbec.webp',
  'https://staging.synctherapy.ca/wordpress/wp-content/uploads/content/the-omnilux-contour-face-mask-is-a-top-rated-best-red-light-therapy-face-mask-to-help-with-aging_71d55d7a-eda3-44bb-ac46-f828263b1a50.webp',
  'https://onlinelibrary.wiley.com/doi/10.1111/phpp.12812'
];

const sitemapData = fs.readFileSync('sitemap_urls.txt', 'utf8').split('\n').filter(Boolean);
const liveUrls = new Set(sitemapData.map(u => {
    try { return new URL(u).pathname; } catch(e) { return u.replace('https://www.synctherapy.ca', '');}
}));

const analyze = () => {
  const actions = { redirects: [], creates: [], ignores: [] };

  missingUrls.forEach(urlStr => {
    // external links just ignore
    if (!urlStr.includes('sync-therapy.vercel.app') && !urlStr.includes('synctherapy.ca')) {
       actions.ignores.push({ url: urlStr, reason: 'External/Asset URL' });
       return;
    }

    try {
        const urlObj = new URL(urlStr);
        let path = urlObj.pathname;
        if(path.endsWith('.php')) {
            actions.ignores.push({url: urlStr, reason: 'WordPress admin page/ignore'});
            return;
        }

        if(path.includes('/wp-content/')) {
             actions.ignores.push({url: urlStr, reason: 'Old WordPress asset/ignore'});
             return;
        }
        
        if(path.includes('/_next/')) {
             actions.ignores.push({url: urlStr, reason: 'Next.js system image route/ignore'});
             return;
        }

        // See if a similar path exists
        let bestMatch = null;
        const normalizedMissing = path.replace(/\/$/, '');
        
        // Exact active match?
        if (liveUrls.has(normalizedMissing) || liveUrls.has(normalizedMissing + '/')) {
             actions.ignores.push({ url: urlStr, reason: 'Already live and handled' });
             return;
        }

        const parts = normalizedMissing.split('/').filter(Boolean);
        const lastPart = parts[parts.length - 1];
        
        for (const live of liveUrls) {
            if(live.includes(lastPart)) {
                bestMatch = live;
                break;
            }
        }
        
        // Manual heuristics
        if(!bestMatch) {
             if(path.includes('massage')) bestMatch = '/services/massage-therapy/';
             else if (path.includes('diet') || path.includes('nutrition') || path.includes('supplements')) {
                 actions.creates.push(path); // Might need a new page for nutrition/diet if we don't have one
                 return;
             }
             else if(path.includes('terms')) bestMatch = '/'; // Or create a terms page
             else if(path.includes('sitemap')) bestMatch = '/sitemap.xml';
             else if(path.includes('team') || path.includes('about')) bestMatch = '/our-team/daryl-stubbs/';
        }

        if (bestMatch) {
             actions.redirects.push({ source: path, destination: bestMatch });
        } else {
             actions.creates.push(path);
        }

    } catch(e) {
       console.log('Error parsing:', urlStr);
    }
  });

  console.log(JSON.stringify(actions, null, 2));
}

analyze();
