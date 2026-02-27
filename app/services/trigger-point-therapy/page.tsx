import { Metadata } from 'next';
import { TriggerPointTherapy } from '@/components/pages/TriggerPointTherapy';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Clinical Trigger Point Therapy Colwood | Sync Massage Therapy',
    description: 'Clinical trigger point therapy in Colwood. Targeted relief for deep knots, restricted range of motion, and referred pain.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/trigger-point-therapy/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <TriggerPointTherapy />
            <Footer />
        </main>
    );
}
