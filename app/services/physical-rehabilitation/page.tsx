
import { Metadata } from 'next';
import { PhysicalRehabilitation } from '@/components/pages/PhysicalRehabilitation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Registered Massage Therapy Langford | Sync Massage Therapy',
    description: 'Clinical Registered Massage Therapy in Langford. We focus on physical rehabilitation to treat root causes of pain. Book an appointment today to start healing!'t end when the pain stops. We build load capacity and functional strength. Bridging the gap between healthcare and the gym.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/physical-rehabilitation/',
    },
    openGraph: {
        title: 'Registered Massage Therapy Langford | Sync Massage Therapy',
        description: 'Clinical Registered Massage Therapy in Langford. We focus on physical rehabilitation to treat root causes of pain. Book an appointment today to start healing!'t end when the pain stops. We build load capacity and functional strength. Bridging the gap between healthcare and the gym.',
        url: 'https://www.synctherapy.ca/services/physical-rehabilitation/',
        siteName: 'Sync Therapy',
        locale: 'en_CA',
        type: 'website',
    },
};

export default function Page() {
    return (
        <>
            <Header />
            <PhysicalRehabilitation />
            <Footer />
        </>
    );
}
