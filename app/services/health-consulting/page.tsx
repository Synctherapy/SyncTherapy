
import { Metadata } from 'next';
import { HealthConsulting } from '@/components/pages/HealthConsulting';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Health Consulting & Wellness Strategy | Sync Therapy',
    description: 'A 360-degree audit of your health. Sleep, stress, environment, and lifestyle design to optimize your long-term vitality.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/health-consulting/',
    },
    openGraph: {
        title: 'Health Consulting & Wellness Strategy | Sync Therapy',
        description: 'A 360-degree audit of your health. Sleep, stress, environment, and lifestyle design to optimize your long-term vitality.',
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
