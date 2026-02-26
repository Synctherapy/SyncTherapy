import { Metadata } from 'next';
import { ArthritisPain } from '@/components/pages/ArthritisPain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Arthritis Treatment Colwood | Sync Massage Therapy',
    description: 'Arthritis pain treatment in Colwood. Reduce joint stiffness and inflammation with clinical massage, mobilization, and targeted exercise therapy.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/arthritis-pain/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <ArthritisPain />
            <Footer />
        </main>
    );
}
