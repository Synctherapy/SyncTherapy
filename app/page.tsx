import { HomeLayout } from "@/components/layouts/HomeLayout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Massage Therapist Colwood | RMT Colwood | Sync Therapy',
  description: 'Sync Therapy is a leading Registered Massage Therapist in Colwood. Our expert RMT team provides athletic therapy, massage therapy, nutrition counseling, and visceral manipulation. Book your appointment today.',
};

import { GoogleReviewsColumns } from "@/components/testimonials/google-reviews-columns";

export default function Home() {
  // ... existing faqSchema logic ...
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer direct billing to insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we direct bill to most major insurance providers, including Pacific Blue Cross, Canada Life, Manulife, Sun Life, and many others. Please bring your insurance card to your first appointment.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between RMT and Athletic Therapy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RMT (Registered Massage Therapy) focuses on soft tissue manipulation to relieve pain and tension. Athletic Therapy [CAT(C)] specializes in musculoskeletal injury assessment and rehabilitation, often involving more active rehab and orthopedic testing. Daryl is dual-certified in both.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a doctor\'s referral?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You do not need a referral to see an RMT or Athletic Therapist at Sync Therapy. However, some insurance plans may require one for reimbursement. It\'s best to check your specific plan details.'
        }
      },
      {
        '@type': 'Question',
        name: 'What should I expect during my first visit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your initial appointment includes a comprehensive history taking and physical assessment to understand the root cause of your issue. This is followed by hands-on treatment and a discussion of your care plan.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is there parking available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, there is ample free parking available at our Colwood location (328 Wale Rd). The clinic is easily accessible.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long are the treatments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer 60-minute and 75-minute appointments. For an initial assessment and treatment, we recommend a 60-minute session.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeLayout reviewsComponent={<GoogleReviewsColumns />} />
    </>
  );
}
