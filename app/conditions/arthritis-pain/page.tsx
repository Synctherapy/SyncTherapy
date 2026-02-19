import { Metadata } from 'next';
import { ArthritisPain } from '@/components/pages/ArthritisPain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Arthritis Pain Management Colwood & Langford | Sync Therapy',
    description: 'Manage osteoarthritis pain without just relying on medication. Our gentle, effective therapies reduce inflammation and improve joint function.',
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/arthritis-pain/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <ArthritisPain />
            <Footer />
        </main>
    );
}
