
import { Metadata } from 'next';
import { PainManagement } from '@/components/pages/PainManagement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Pain Management Clinic Langford | Sync Massage',
    description: 'Comprehensive pain management from a triple-certified therapist serving Langford & the West Shore. We treat complex conditions other clinics miss.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/pain-management/',
    },
    openGraph: {
        title: 'Pain Management Clinic Langford | Sync Massage',
        description: 'Comprehensive pain management from a triple-certified therapist serving Langford & the West Shore. We treat complex conditions other clinics miss.',
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
