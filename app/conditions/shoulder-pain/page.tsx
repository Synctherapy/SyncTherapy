import { Metadata } from 'next';
import { ShoulderPain } from '@/components/pages/ShoulderPain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Shoulder Pain Treatment Colwood | Sync Massage',
    description: 'Shoulder pain treatment in Colwood. We assess the entire shoulder complex to determine whether the problem is rotator cuff, labrum, or referred.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/shoulder-pain/',
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
