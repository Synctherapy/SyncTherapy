import { Metadata } from 'next';
import { JointStiffness } from '@/components/pages/JointStiffness';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Joint Stiffness Relief Colwood | Sync Massage',
    description: 'Joint stiffness treatment in Colwood. Restore mobility and range of motion with joint mobilizations, manual therapy, and progressive movement work.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/conditions/joint-stiffness/',
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
