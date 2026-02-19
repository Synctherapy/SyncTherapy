import { Metadata } from 'next';
import { ITBandSyndrome } from '@/components/pages/ITBandSyndrome';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'IT Band Syndrome Treatment Colwood | Runner\'s Knee Rehab | Sync',
    description: 'Stop knee pain when running. Effective IT Band Syndrome treatment and gait analysis in Colwood & Langford. We treat the root cause: weak glutes and hip mechanics.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/it-band-syndrome/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <ITBandSyndrome />
            <Footer />
        </main>
    );
}
