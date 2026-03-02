import { Metadata } from 'next';
import { MensHealthConsulting } from '@/components/pages/MensHealthConsulting';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Men\'s Health & Holistic Nutrition Colwood | Sync Massage',
    description: 'Take control of your wellness with expert men\'s health consulting & holistic nutrition in Colwood, BC. Customized plans for your goals. Call 250-812-8698!',
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
