import { Metadata } from 'next';
import { JointStiffness } from '@/components/pages/JointStiffness';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Joint Stiffness & Mobility Relief Colwood | Sync Massage Therapy',
    description: "Unlock stiff joints and improve your range of motion. We treat the soft tissue restrictions causing 'rusty' joints and morning stiffness.",
    alternates: {
        canonical: 'https://synctherapy.ca/conditions/joint-stiffness/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <JointStiffness />
            <Footer />
        </main>
    );
}
