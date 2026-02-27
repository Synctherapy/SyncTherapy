import { Metadata } from 'next';
import { RelaxationMassage } from '@/components/pages/RelaxationMassage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Relaxation Massage Colwood | Sync Massage Therapy',
    description: 'Unwind with a relaxation or Swedish massage in Colwood. Reduce stress, improve sleep, and restore balance. Direct billing available. Book online today.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/relaxation-massage/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <RelaxationMassage />
            <Footer />
        </main>
    );
}
