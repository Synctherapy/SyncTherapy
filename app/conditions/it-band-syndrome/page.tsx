import { Metadata } from 'next';
import { ITBandSyndrome } from '@/components/pages/ITBandSyndrome';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Athletic Therapy Langford | Sync Massage Therapy's Knee Rehab | Sync',
    description: 'Get professional Athletic Therapy in Langford. We provide strict physical rehabilitation to fully resolve your injuries. Book an appointment today for relief!',
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
