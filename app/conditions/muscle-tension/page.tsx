import { Metadata } from 'next';
import { MuscleTension } from '@/components/pages/MuscleTension';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Muscle Tension Relief Colwood & Langford | Sync Therapy',
    description: 'Expert deep tissue massage for chronic muscle knots and tension. Flush out stress and restore flexibility with targeted therapeutic massage.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/muscle-tension-relief/',
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
