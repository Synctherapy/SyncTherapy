
import { Metadata } from "next";
import { VisceralManipulation } from "@/components/pages/VisceralManipulation";

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.synctherapy.ca/services/visceral-manipulation/',
    },
    title: 'Visceral Manipulation Colwood | Sync Massage',
    description: 'Visceral manipulation by an RMT & Athletic Therapist in Colwood. We treat hidden causes of back pain, bloating, and digestive dysfunction. Book today.',
};

export default function VisceralManipulationPage() {
    return <VisceralManipulation />;
}
