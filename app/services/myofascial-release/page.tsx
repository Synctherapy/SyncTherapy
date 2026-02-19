import { Metadata } from 'next';
import { MyofascialRelease } from '@/components/pages/MyofascialRelease';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Myofascial Release Therapy Colwood & Langford | Sync Therapy',
    description: 'Specialized myofascial release for chronic pain, scar tissue, and posture. Restore movement and eliminate deep-seated tension without force.',
    alternates: {
        canonical: 'https://synctherapy.ca/services/myofascial-release/',
    },
};

export default function Page() {
    return (
        <main>
            <Header />
            <MyofascialRelease />
            <Footer />
        </main>
    );
}
