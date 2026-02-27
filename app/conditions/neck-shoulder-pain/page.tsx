import { Metadata } from 'next';
import { NeckPain } from '@/components/pages/NeckPain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Neck & Shoulder Pain Treatment | Colwood RMT',
    description: 'Neck and shoulder pain treatment in Colwood. We address cervical dysfunction, upper trap tension, and thoracic restrictions causing your discomfort.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/neck-shoulder-pain/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <NeckPain />
            <Footer />
        </main>
    );
}
