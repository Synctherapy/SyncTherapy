import { Metadata } from 'next';
import { RelaxationMassage } from '@/components/pages/RelaxationMassage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Relaxation & Swedish Massage Colwood | Sync Massage Therapy',
    description: 'Calming Swedish massage to reduce stress, anxiety, and burnout. Reset your nervous system with our therapeutic relaxation treatments.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/relaxation-massage/',
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
