import { Metadata } from 'next';
import { PlantarFasciitis } from '@/components/pages/PlantarFasciitis';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Registered Massage Therapy Langford | Sync Massage Therapy',
    description: 'Clinical Registered Massage Therapy in Langford. We focus on physical rehabilitation to treat root causes of pain. Book an appointment today to start healing!',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/plantar-fasciitis/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <PlantarFasciitis />
            <Footer />
        </main>
    );
}
