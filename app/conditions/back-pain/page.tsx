import { Metadata } from 'next';
import { BackPain } from '@/components/pages/BackPain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Back Pain Treatment Colwood & Langford | Sync Massage Therapy',
    description: 'Relief for lower back pain, stiffness, and spasms in Colwood & Langford. We treat the root cause: weak core, tight hips, and organ restrictions.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/back-pain/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <BackPain />
            <Footer />
        </main>
    );
}
