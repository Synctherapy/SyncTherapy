
import { Metadata } from 'next';
import { SportsInjuryRehab } from '@/components/pages/SportsInjuryRehab';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Sports Injury Rehab Colwood | Sync Massage Therapy',
    description: 'Sports injury rehabilitation by a Certified Athletic Therapist in Colwood. We diagnose the root cause of your injury and build a full recovery plan.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/sports-injury-rehab/',
    },
    openGraph: {
        title: 'Sports Injury Rehab Colwood | Sync Massage Therapy',
        description: 'Sports injury rehabilitation by a Certified Athletic Therapist in Colwood. We diagnose the root cause of your injury and build a full recovery plan.',
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
