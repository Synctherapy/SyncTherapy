import { Metadata } from 'next';
import { BackPain } from '@/components/pages/BackPain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Back Pain Treatment Colwood | West Shore Clinic',
    description: 'Back pain diagnosis and treatment in Colwood. We use visceral manipulation, manual therapy, and corrective exercise to fix the root cause of your pain.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/back-pain/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <BackPain />
            <Footer />
        </main>
    );
}
