import { Metadata } from 'next';
import { BaseballInjuries } from '@/components/pages/BaseballInjuries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Baseball Injury Rehab Colwood | Sync Massage Therapy',
    description: 'Baseball injury rehab and treatment in Colwood. Sport-specific, biomechanical, and progressive therapy for throwing and swinging injuries.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/baseball-injuries/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <BaseballInjuries />
            <Footer />
        </main>
    );
}
