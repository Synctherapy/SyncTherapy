import { Metadata } from 'next';
import { ChronicPain } from '@/components/pages/ChronicPain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Chronic Pain Management Clinic West Shore | Sync Massage Therapy',
    description: 'Comprehensive chronic pain treatment focusing on the nervous system. Break the pain cycle with our specialized approach for long-term relief.',
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
