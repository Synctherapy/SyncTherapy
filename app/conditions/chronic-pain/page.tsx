import { Metadata } from 'next';
import { ChronicPain } from '@/components/pages/ChronicPain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Registered Massage Therapy Westshore | Sync Massage Therapy',
    description: 'Clinical Registered Massage Therapy in Westshore. We focus on physical rehabilitation to treat root causes of pain. Book an appointment today to start healing!',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/chronic-pain/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <ChronicPain />
            <Footer />
        </main>
    );
}
