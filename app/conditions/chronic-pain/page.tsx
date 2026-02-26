import { Metadata } from 'next';
import { ChronicPain } from '@/components/pages/ChronicPain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Chronic Pain Treatment Colwood | West Shore RMT',
    description: 'Chronic pain treatment in Colwood & Langford. Our triple-certified therapist combines manual therapy, visceral work, and nutrition to manage pain.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/chronic-pain/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <ChronicPain />
            <Footer />
        </main>
    );
}
