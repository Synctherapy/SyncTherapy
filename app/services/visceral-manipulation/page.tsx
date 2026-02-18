
import { Metadata } from "next";
import { VisceralManipulation } from "@/components/pages/VisceralManipulation";

export const metadata: Metadata = {
    title: "Visceral Manipulation Colwood | Abdominal Therapy | Sync Therapy",
    description: "Visceral Manipulation in Colwood. We treat organ restrictions (adhesions) that cause chronic back pain, digestive issues, and post-surgical stiffness.",
};

export default function VisceralManipulationPage() {
    return <VisceralManipulation />;
}
