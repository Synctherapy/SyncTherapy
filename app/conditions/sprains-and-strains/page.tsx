import { Metadata } from 'next';
import { SprainsAndStrains } from '@/components/pages/SprainsAndStrains';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Sprains & Strains Treatment Colwood | Sync',
    description: 'Sprain and strain treatment in Colwood. Acute care, progressive loading, and structured rehab from a Certified Athletic Therapist. Book today.',
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
