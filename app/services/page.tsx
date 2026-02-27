import { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/ServicesPage';

export const metadata: Metadata = {
    title: 'Our Services | Sync Massage Therapy Colwood',
    description: 'RMT, athletic therapy, and holistic nutrition in Colwood & Langford. View all 30+ services and book your next appointment online today.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/',
    },
    openGraph: {
        title: 'Our Services | Sync Massage Therapy Colwood',
        description: 'Comprehensive treatment for a wide range of needs using evidence-based massage therapy, athletic therapy, and holistic nutrition.',
        url: 'https://synctherapy.ca/services/',
        type: 'website',
        images: [
            {
                url: '/images/og/services-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Sync Massage Therapy Services',
            }
        ]
    }
};

export default function Page() {
    return <ServicesPage />;
}
