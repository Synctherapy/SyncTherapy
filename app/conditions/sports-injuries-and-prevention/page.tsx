import { Metadata } from 'next';
import { SportsInjuriesPrevention } from '@/components/pages/SportsInjuriesPrevention';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Sports Injury Rehab & Prevention Colwood | Athletic Therapy',
    description: 'Stop the injury cycle. Specialized sports injury rehab and prevention in Colwood & Langford. We improve performance by fixing biomechanical leaks.',
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
