
import { Metadata } from 'next';
import { SportsInjuryRehab } from '@/components/pages/SportsInjuryRehab';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Athletic Therapy Colwood | Sync Massage Therapy',
    description: 'Get professional Athletic Therapy in Colwood. We provide strict physical rehabilitation to fully resolve your injuries. Book an appointment today for relief!',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/sports-injury-rehab/',
    },
    openGraph: {
        title: 'Athletic Therapy Colwood | Sync Massage Therapy',
        description: 'Get professional Athletic Therapy in Colwood. We provide strict physical rehabilitation to fully resolve your injuries. Book an appointment today for relief!',
        url: 'https://www.synctherapy.ca/services/sports-injury-rehab/',
        siteName: 'Sync Therapy',
        locale: 'en_CA',
        type: 'website',
    },
};

export default function Page() {
    return (
        <>
            <Header />
            <SportsInjuryRehab />
            <Footer />
        </>
    );
}
