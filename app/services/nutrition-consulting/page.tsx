
import { Metadata } from 'next';
import { NutritionConsulting } from '@/components/pages/NutritionConsulting';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Holistic Nutrition & Dietary Consulting | Sync Therapy',
    description: 'Reduce inflammation from the inside out. We analyze metabolic health and gut function to speed up physical recovery.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/nutrition-consulting/',
    },
    openGraph: {
        title: 'Holistic Nutrition & Dietary Consulting | Sync Therapy',
        description: 'Reduce inflammation from the inside out. We analyze metabolic health and gut function to speed up physical recovery.',
        url: 'https://www.synctherapy.ca/services/nutrition-consulting/',
        siteName: 'Sync Therapy',
        locale: 'en_CA',
        type: 'website',
    },
};

export default function Page() {
    return (
        <>
            <Header />
            <NutritionConsulting />
            <Footer />
        </>
    );
}
