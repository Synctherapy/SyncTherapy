import { Metadata } from 'next';
import { PlantarFasciitis } from '@/components/pages/PlantarFasciitis';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Plantar Fasciitis Treatment | Colwood RMT Clinic',
    description: 'Plantar fasciitis treatment in Colwood. We treat the calf, ankle, and foot mechanics driving your heel pain — not just the symptoms. Book today.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/plantar-fasciitis/',
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
