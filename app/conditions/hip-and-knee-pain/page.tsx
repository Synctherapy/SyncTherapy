import { Metadata } from 'next';
import { HipKneePain } from '@/components/pages/HipKneePain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Hip & Knee Pain Treatment Colwood & Langford | Sync Massage Therapy',
    description: "Relief for hip and knee pain, including runner's knee, IT band syndrome, and osteoarthritis. Correct your alignment and move pain-free again.",
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/hip-and-knee-pain/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <HipKneePain />
            <Footer />
        </main>
    );
}
