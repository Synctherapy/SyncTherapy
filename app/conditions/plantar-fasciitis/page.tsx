import { Metadata } from 'next';
import { PlantarFasciitis } from '@/components/pages/PlantarFasciitis';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Plantar Fasciitis Treatment Colwood | Foot Pain Relief | Sync Therapy',
    description: 'Heel pain relief in Colwood & Langford. We treat Plantar Fasciitis, Achilles Tendonitis, and foot pain. Direct billing available.',
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
