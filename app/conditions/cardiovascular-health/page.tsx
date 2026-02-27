import { Metadata } from 'next';
import { CardiovascularHealth } from '@/components/pages/CardiovascularHealth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Cardiovascular Health & Nutrition Colwood | Sync Massage Therapy',
    description: 'Cardiovascular health and nutrition support in Colwood. Preventative, heart-healthy educational care to help manage your blood pressure naturally.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/cardiovascular-health/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <CardiovascularHealth />
            <Footer />
        </main>
    );
}
