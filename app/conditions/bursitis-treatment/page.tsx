import { Metadata } from 'next';
import { BursitisTreatment } from '@/components/pages/BursitisTreatment';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Bursitis Treatment Colwood | Hip & Shoulder Pain Relief',
    description: 'Relief for bursitis and joint swelling in Colwood & Langford. Treat hip bursitis, shoulder impingement, and excessive friction. Book online.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/bursitis-treatment/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <BursitisTreatment />
            <Footer />
        </main>
    );
}
