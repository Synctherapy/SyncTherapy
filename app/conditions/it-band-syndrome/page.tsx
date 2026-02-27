import { Metadata } from 'next';
import { ITBandSyndrome } from '@/components/pages/ITBandSyndrome';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'IT Band Syndrome Rehab Colwood | Sync Massage',
    description: 'IT band syndrome treatment in Colwood. Our Athletic Therapist addresses the hip and glute dysfunction driving your lateral knee and thigh pain.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/it-band-syndrome/',
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
