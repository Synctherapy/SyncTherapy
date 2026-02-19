import { Metadata } from 'next';
import { NeckPain } from '@/components/pages/NeckPain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Neck Pain Treatment Colwood | Tech Neck Relief | Sync Therapy',
    description: 'Neck pain & headache relief in Colwood. We treat stiff necks, whiplash, and tension headaches caused by office work. Direct billing available.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/neck-pain/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <NeckPain />
            <Footer />
        </main>
    );
}
