import { HomeLayout } from "@/components/layouts/HomeLayout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Massage Therapist Colwood | RMT Colwood | Sync Therapy',
  description: 'Sync Therapy is a leading Registered Massage Therapist in Colwood. Our expert RMT team provides athletic therapy, massage therapy, nutrition counseling, and visceral manipulation. Book your appointment today.',
};

export default function Home() {
  return (
    <HomeLayout />
  );
}
