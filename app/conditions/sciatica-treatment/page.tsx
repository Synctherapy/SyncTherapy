import { Metadata } from 'next';
import { SciaticaTreatment } from '@/components/pages/SciaticaTreatment';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Sciatica Treatment Colwood | West Shore Clinic',
    description: 'Sciatica treatment in Colwood. We identify whether your nerve pain is disc, piriformis, or visceral in origin, then treat the actual source.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/sciatica/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <SciaticaTreatment />
            <Footer />
        </main>
    );
}
