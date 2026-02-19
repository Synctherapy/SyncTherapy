import { Metadata } from 'next';
import { ShoulderPain } from '@/components/pages/ShoulderPain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Shoulder Pain Treatment Colwood | Rotator Cuff Rehab | Sync Therapy',
    description: 'Shoulder pain relief in Colwood & Langford. We treat Rotator Cuff injuries, Frozen Shoulder, and Impingement. Direct billing available.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/shoulder-pain/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <ShoulderPain />
            <Footer />
        </main>
    );
}
