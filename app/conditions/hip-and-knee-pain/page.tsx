import { Metadata } from 'next';
import { HipKneePain } from '@/components/pages/HipKneePain';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Hip & Knee Pain Relief Colwood | Sync Massage',
    description: 'Hip and knee pain relief in Colwood. Biomechanical assessment, manual therapy, and corrective exercise to treat the cause of your hip or knee pain.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/hip-and-knee-pain/',
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
