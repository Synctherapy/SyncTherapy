import { Metadata } from 'next';
import { MuscleTension } from '@/components/pages/MuscleTension';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Muscle Tension Treatment Colwood | Sync Massage',
    description: 'Chronic muscle tension treatment in Colwood. We release myofascial restrictions and address the postural habits keeping your muscles locked up.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/muscle-tension/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <MuscleTension />
            <Footer />
        </main>
    );
}
