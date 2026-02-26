
import { Metadata } from 'next';
import { PhysicalRehabilitation } from '@/components/pages/PhysicalRehabilitation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Physical Rehabilitation | West Shore Clinic',
    description: 'Physical rehabilitation in Colwood & Langford. We combine hands-on therapy with progressive exercise to fully resolve injuries and chronic conditions.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/physical-rehabilitation/',
    },
    openGraph: {
        title: 'Physical Rehabilitation | West Shore Clinic',
        description: 'Physical rehabilitation in Colwood & Langford. We combine hands-on therapy with progressive exercise to fully resolve injuries and chronic conditions.',
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
