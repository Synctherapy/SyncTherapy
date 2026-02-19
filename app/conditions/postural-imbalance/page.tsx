import { Metadata } from 'next';
import { PosturalImbalance } from '@/components/pages/PosturalImbalance';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Postural Correction & Structural Integration Langford | Sync Therapy',
    description: 'Fix slouching, uneven shoulders, and forward head posture. Structural integration and massage therapy to realign your body and relieve chronic tension.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/postural-imbalance/',
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
