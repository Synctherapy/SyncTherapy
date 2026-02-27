import { Metadata } from 'next';
import { PosturalImbalance } from '@/components/pages/PosturalImbalance';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Postural Imbalance Correction | Sync Colwood',
    description: 'Postural imbalance assessment and correction in Colwood. We identify structural dysfunction and build a progressive plan to restore proper alignment.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/postural-imbalance/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <PosturalImbalance />
            <Footer />
        </main>
    );
}
