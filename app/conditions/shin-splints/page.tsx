import { Metadata } from 'next';
import { ShinSplints } from '@/components/pages/ShinSplints';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Shin Splints Treatment Colwood | Sync Massage',
    description: 'Shin splints treatment in Colwood & Langford. Biomechanical correction, load management, and targeted rehab to get you running pain-free again.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/shin-splints/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <ShinSplints />
            <Footer />
        </main>
    );
}
