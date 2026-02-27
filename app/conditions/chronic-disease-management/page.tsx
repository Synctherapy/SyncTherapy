import { Metadata } from 'next';
import { ChronicDiseaseManagement } from '@/components/pages/ChronicDiseaseManagement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Chronic Disease Lifestyle Management Colwood | Sync Massage Therapy',
    description: 'Chronic disease lifestyle management in Colwood. We focus on natural ways to support your medical treatments, maintain mobility, and manage fatigue.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/chronic-disease-management/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <ChronicDiseaseManagement />
            <Footer />
        </main>
    );
}
