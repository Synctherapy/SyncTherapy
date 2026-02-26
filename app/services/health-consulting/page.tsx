
import { Metadata } from 'next';
import { HealthConsulting } from '@/components/pages/HealthConsulting';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Health Consulting West Shore | Sync Therapy',
    description: 'Health consulting and wellness strategy on the West Shore. Our triple-certified therapist assesses your vitality and creates an actionable health plan.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/health-consulting/',
    },
    openGraph: {
        title: 'Health Consulting West Shore | Sync Therapy',
        description: 'Health consulting and wellness strategy on the West Shore. Our triple-certified therapist assesses your vitality and creates an actionable health plan.',
        url: 'https://www.synctherapy.ca/services/health-consulting/',
        siteName: 'Sync Therapy',
        locale: 'en_CA',
        type: 'website',
    },
};

export default function Page() {
    return (
        <>
            <Header />
            <HealthConsulting />
            <Footer />
        </>
    );
}
