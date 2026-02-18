
import { Metadata } from 'next';
import { PhysicalRehabilitation } from '@/components/pages/PhysicalRehabilitation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Physical Rehabilitation Center in Colwood | Sync Therapy',
    description: 'Recovery doesn\'t end when the pain stops. We build load capacity and functional strength. Bridging the gap between healthcare and the gym.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/physical-rehabilitation/',
    },
    openGraph: {
        title: 'Physical Rehabilitation Center in Colwood | Sync Therapy',
        description: 'Recovery doesn\'t end when the pain stops. We build load capacity and functional strength. Bridging the gap between healthcare and the gym.',
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
