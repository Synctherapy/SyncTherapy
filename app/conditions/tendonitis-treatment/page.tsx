import { Metadata } from 'next';
import { TendonitisTreatment } from '@/components/pages/TendonitisTreatment';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Tendonitis Treatment Colwood | Sync Massage',
    description: 'Tendonitis treatment in Colwood & Langford. Load management, manual therapy, and progressive tendon rehab to resolve pain and restore function.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/tendonitis-treatment/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <TendonitisTreatment />
            <Footer />
        </main>
    );
}
