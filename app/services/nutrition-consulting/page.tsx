
import { Metadata } from 'next';
import { NutritionConsulting } from '@/components/pages/NutritionConsulting';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Holistic Nutrition Westshore | Sync Massage Therapy',
    description: 'Comprehensive Holistic Nutrition in Westshore. We support physical rehabilitation with targeted dietary plans. Book an appointment today to improve your health!',
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/nutrition-consulting/',
    },
    openGraph: {
        title: 'Holistic Nutrition Westshore | Sync Massage Therapy',
        description: 'Comprehensive Holistic Nutrition in Westshore. We support physical rehabilitation with targeted dietary plans. Book an appointment today to improve your health!',
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
