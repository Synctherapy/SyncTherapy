
import { Metadata } from 'next';
import { PainManagement } from '@/components/pages/PainManagement';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Registered Massage Therapy Colwood | Sync Massage Therapy',
    description: 'Clinical Registered Massage Therapy in Colwood. We focus on physical rehabilitation to treat root causes of pain. Book an appointment today to start healing!',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/pain-management/',
    },
    openGraph: {
        title: 'Registered Massage Therapy Colwood | Sync Massage Therapy',
        description: 'Clinical Registered Massage Therapy in Colwood. We focus on physical rehabilitation to treat root causes of pain. Book an appointment today to start healing!',
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
