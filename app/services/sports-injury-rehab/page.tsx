
import { Metadata } from 'next';
import { SportsInjuryRehab } from '@/components/pages/SportsInjuryRehab';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Sports Injury Rehabilitation & Athletic Therapy | Sync Therapy',
    description: 'Clinical orthopedic assessment for acute injuries. We act as your primary care for sprains, tears, and return-to-play decisions. No referral needed.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/sports-injury-rehab/',
    },
    openGraph: {
        title: 'Sports Injury Rehabilitation & Athletic Therapy | Sync Therapy',
        description: 'Clinical orthopedic assessment for acute injuries. We act as your primary care for sprains, tears, and return-to-play decisions. No referral needed.',
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
