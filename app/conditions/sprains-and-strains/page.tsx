import { Metadata } from 'next';
import { SprainsAndStrains } from '@/components/pages/SprainsAndStrains';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Sprains & Strains Treatment Colwood | Acute Injury Rehab',
    description: 'Fast assessment and rehab for ankle sprains, muscle strains, and sports injuries in Colwood & Langford using the PEACE & LOVE protocol.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/sprains-and-strains/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <SprainsAndStrains />
            <Footer />
        </main>
    );
}
