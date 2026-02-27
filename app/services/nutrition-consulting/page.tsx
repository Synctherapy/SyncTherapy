
import { Metadata } from 'next';
import { NutritionConsulting } from '@/components/pages/NutritionConsulting';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Holistic Nutrition Consulting Colwood | Sync',
    description: 'Holistic nutrition consulting in Colwood by a Certified Nutritionist. Personalized diet plans for gut health, inflammation, and chronic conditions.',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/services/nutrition-consulting/',
    },
    openGraph: {
        title: 'Holistic Nutrition Consulting Colwood | Sync',
        description: 'Holistic nutrition consulting in Colwood by a Certified Nutritionist. Personalized diet plans for gut health, inflammation, and chronic conditions.',
        url: 'https://www.synctherapy.ca/services/services/nutrition-consulting/',
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
