import { Metadata } from 'next';
import { MensHealthConsulting } from '@/components/pages/MensHealthConsulting';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Men\'s Health Consulting Colwood | Sync Massage Therapy',
    description: 'Direct, performance-focused, and preventative men\'s holistic health consulting in Colwood.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/mens-health-consulting/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <MensHealthConsulting />
            <Footer />
        </main>
    );
}
