import React from "react"
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.synctherapy.ca'),
  title: {
    default: 'Massage Therapist Colwood | RMT Colwood | Sync Therapy',
    template: '%s | Sync Therapy'
  },
  description: 'Sync Therapy is a leading Registered Massage Therapist in Colwood. Our expert RMT team provides athletic therapy, massage therapy, nutrition counseling, and visceral manipulation. Book your appointment today.',
  keywords: ['Massage Therapist Colwood', 'RMT Colwood', 'Registered Massage Therapist Colwood', 'Athletic Therapy Colwood', 'Nutritionist Colwood'],
  authors: [{ name: 'Sync Therapy' }],
  creator: 'Sync Therapy',
  publisher: 'Sync Therapy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Massage Therapist Colwood | RMT Colwood | Sync Therapy',
    description: 'Sync Therapy is a leading Registered Massage Therapist in Colwood. Our expert RMT team provides athletic therapy, massage therapy, nutrition counseling, and visceral manipulation. Book your appointment today.',
    url: 'https://www.synctherapy.ca',
    siteName: 'Sync Therapy',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massage Therapist Colwood | RMT Colwood | Sync Therapy',
    description: 'Sync Therapy is a leading Registered Massage Therapist in Colwood. Our expert RMT team provides athletic therapy, massage therapy, nutrition counseling, and visceral manipulation. Book your appointment today.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-roboto antialiased text-foreground bg-background`}>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://www.synctherapy.ca/#organization",
              "name": "Sync Massage Therapy",
              "alternateName": "Sync Therapy",
              "url": "https://www.synctherapy.ca/",
              "logo": "https://www.synctherapy.ca/icon.svg",
              "image": "https://www.synctherapy.ca/images/clinic-exterior.jpg",
              "telephone": "+12508128698",
              "email": "info@synctherapy.ca",
              "priceRange": "$$",
              "hasMap": "https://www.google.com/maps?cid=16919443298834082997",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "132, 328 Wale Rd #120",
                "addressLocality": "Colwood",
                "addressRegion": "BC",
                "postalCode": "V9B 1J2",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.445469,
                "longitude": -123.469921
              },
              "containedInPlace": {
                "@type": "Place",
                "name": "Coastal Offices"
              },
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "17:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"], "opens": "08:00", "closes": "20:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "17:00" }
              ],
              "sameAs": [
                "https://www.facebook.com/SyncTherapyVictoria/",
                "https://www.instagram.com/synctherapy/",
                "https://www.youtube.com/@synctherapy",
                "https://ca.pinterest.com/SyncTherapyWellness/",
                "https://synctherapy.janeapp.com/locations/sync-therapy",
                "https://web.westshore.bc.ca/member-directory/sync-massage-therapy/",
                "https://www.bbb.org/ca/bc/colwood/profile/massage-therapist/sync-therapy-0047-235958553"
              ],
              "knowsAbout": [
                "Massage Therapy",
                "Athletic Therapy",
                "Visceral Manipulation",
                "Deep Tissue Massage",
                "Myofascial Release",
                "Sports Medicine",
                "Holistic Nutrition"
              ],
              "areaServed": [
                { "@type": "City", "name": "Colwood" },
                { "@type": "City", "name": "Langford" },
                { "@type": "City", "name": "Victoria" }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
