import { Metadata } from 'next';
import { SciaticaTreatment } from '@/components/pages/SciaticaTreatment';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Sciatica Treatment Colwood & Langford | Nerve Pain Relief | Sync Therapy',
    description: 'Sciatica relief in Colwood & Langford. We treat piriformis syndrome, disc herniations, and shooting leg pain. Direct billing for West Shore residents.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/sciatica/',
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
