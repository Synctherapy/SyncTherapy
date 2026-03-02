import { Metadata } from 'next';
import { FibromyalgiaTreatment } from '@/components/pages/FibromyalgiaTreatment';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Fibromyalgia Massage Therapy Colwood | Sync Massage',
    description: 'Relieve fibromyalgia pain with targeted massage therapy in Colwood. Get trusted care from an award-winning local clinic. Call 250-812-8698 to book today!',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/fibromyalgia/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <FibromyalgiaTreatment />
            <Footer />
        </main>
    );
}
