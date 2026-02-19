import { Metadata } from 'next';
import { TendonitisTreatment } from '@/components/pages/TendonitisTreatment';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Tendonitis Treatment Colwood & Langford | Tennis Elbow & Achilles Rehab',
    description: 'Specialized tendonitis treatment in Colwood. We treat Tennis Elbow, Golfer\'s Elbow, and Achilles Tendinopathy using progressive loading and soft tissue release.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/tendonitis-treatment/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <TendonitisTreatment />
            <Footer />
        </main>
    );
}
