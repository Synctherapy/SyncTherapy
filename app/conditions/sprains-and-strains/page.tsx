import { Metadata } from 'next';
import { SprainsAndStrains } from '@/components/pages/SprainsAndStrains';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Athletic Therapy Colwood | Sync Massage Therapy',
    description: 'Get professional Athletic Therapy in Colwood. We provide strict physical rehabilitation to fully resolve your injuries. Book an appointment today for relief!',
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
