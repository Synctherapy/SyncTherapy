import { Metadata } from 'next';
import { FibromyalgiaTreatment } from '@/components/pages/FibromyalgiaTreatment';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Fibromyalgia Support & Management Colwood | Sync Massage Therapy',
    description: 'Highly empathetic, gentle, nervous-system focused fibromyalgia support and management in Colwood.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/fibromyalgia/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <FibromyalgiaTreatment />
            <Footer />
        </main>
    );
}
