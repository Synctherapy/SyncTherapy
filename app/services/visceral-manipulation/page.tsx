
import { Metadata } from "next";
import { VisceralManipulation } from "@/components/pages/VisceralManipulation";

export const metadata: Metadata = {
    title: 'Visceral Manipulation Colwood | Sync Massage Therapy',
    description: 'Specialized Visceral Manipulation in Colwood. We focus on physical rehabilitation to treat deep structural pain. Book an appointment today to start recovery!',
};

export default function VisceralManipulationPage() {
    return <VisceralManipulation />;
}
