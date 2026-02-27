import { Metadata } from 'next';
import { MyofascialRelease } from '@/components/pages/MyofascialRelease';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Myofascial Release Therapy | Colwood RMT Clinic',
    description: 'Specialized myofascial release in Colwood & Langford. We address fascial restrictions causing chronic pain, limited mobility, and recurring injuries.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/myofascial-release/',
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
