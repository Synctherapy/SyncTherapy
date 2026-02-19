import { Metadata } from 'next';
import { ShinSplints } from '@/components/pages/ShinSplints';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Shin Splints Treatment Langford & Colwood | Lower Leg Rehab',
    description: 'Effective shin splints treatment (MTSS) in Langford & Colwood. We fix the root cause: calf tightness and arch collapse. Book your assessment today.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/shin-splints/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <ShinSplints />
            <Footer />
        </main>
    );
}
