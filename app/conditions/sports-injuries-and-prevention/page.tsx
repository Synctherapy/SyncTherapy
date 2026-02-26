import { Metadata } from 'next';
import { SportsInjuriesPrevention } from '@/components/pages/SportsInjuriesPrevention';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Sports Injuries Colwood | Sync Massage Therapy',
    description: 'Sports injury treatment and prevention in Colwood. Our Certified Athletic Therapist treats acute injuries and builds prehab programs for athletes.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/sports-injuries-and-prevention/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <SportsInjuriesPrevention />
            <Footer />
        </main>
    );
}
