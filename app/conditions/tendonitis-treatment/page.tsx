import { Metadata } from 'next';
import { TendonitisTreatment } from '@/components/pages/TendonitisTreatment';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Athletic Therapy Langford | Sync Massage Therapy',
    description: 'Get professional Athletic Therapy in Langford. We provide strict physical rehabilitation to fully resolve your injuries. Book an appointment today for relief!'s Elbow, and Achilles Tendinopathy using progressive loading and soft tissue release.',
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
