import { Metadata } from 'next';
import { ConditionsPage } from '@/components/pages/ConditionsPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Conditions We Treat in Victoria | Sync Massage Therapy',
    description: 'Back pain, sports injuries, chronic pain, sciatica, and more. Our Colwood clinic treats the root cause of your condition with a clinical rehab approach.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/',
    },
};

export default function ConditionsIndexRoute() {
    return (
        <>
            <Header />
            <ConditionsPage />
            <Footer />
        </>
    );
}
