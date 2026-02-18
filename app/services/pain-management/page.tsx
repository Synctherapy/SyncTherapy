
import { Metadata } from 'next';
import { PainManagement } from '@/components/pages/PainManagement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Pain Management & Chronic Pain Relief in Colwood | Sync Therapy',
    description: 'Pain isn\'t just a muscle problem. We specialize in down-regulating Central Sensitization and managing chronic inflammation. RMT Direct Billing available.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/pain-management/',
    },
    openGraph: {
        title: 'Pain Management & Chronic Pain Relief in Colwood | Sync Therapy',
        description: 'Pain isn\'t just a muscle problem. We specialize in down-regulating Central Sensitization and managing chronic inflammation.',
        url: 'https://www.synctherapy.ca/services/pain-management/',
        siteName: 'Sync Therapy',
        locale: 'en_CA',
        type: 'website',
    },
};

export default function Page() {
    return (
        <>
            <Header />
            <PainManagement />
            <Footer />
        </>
    );
}
