import { Metadata } from 'next';
import { ShinSplints } from '@/components/pages/ShinSplints';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Athletic Therapy Langford | Sync Massage Therapy',
    description: 'Get professional Athletic Therapy in Langford. We provide strict physical rehabilitation to fully resolve your injuries. Book an appointment today for relief!',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/shin-splints/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <ShinSplints />
            <Footer />
        </main>
    );
}
