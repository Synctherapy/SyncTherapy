import { Metadata } from 'next';
import { MuscleTension } from '@/components/pages/MuscleTension';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Registered Massage Therapy Westshore | Sync Massage Therapy',
    description: 'Clinical Registered Massage Therapy in Westshore. We focus on physical rehabilitation to treat root causes of pain. Book an appointment today to start healing!',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/muscle-tension/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <MuscleTension />
            <Footer />
        </main>
    );
}
