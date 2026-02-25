import { Metadata } from 'next';
import { BursitisTreatment } from '@/components/pages/BursitisTreatment';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Registered Massage Therapy Colwood | Sync Massage Therapy',
    description: 'Clinical Registered Massage Therapy in Colwood. We focus on physical rehabilitation to treat root causes of pain. Book an appointment today to start healing!',
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
