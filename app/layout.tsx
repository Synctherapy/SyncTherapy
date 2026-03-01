import React from "react"
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
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
      <body className={`${inter.variable} ${roboto.variable} font-roboto antialiased text-foreground bg-background`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalBusiness", "HealthAndBeautyBusiness"],
              "additionalType": [
                "https://www.wikidata.org/wiki/Q1151069",
                "https://www.wikidata.org/wiki/Q2138622"
              ],
              "@id": "https://www.synctherapy.ca/#organization",
              "name": "Sync Massage Therapy",
              "alternateName": "Sync Therapy",
              "url": "https://www.synctherapy.ca/",
              "logo": "https://www.synctherapy.ca/icon.svg",
              "image": "https://www.synctherapy.ca/images/clinic-exterior.jpg",
              "telephone": "+12508128698",
              "email": "info@synctherapy.ca",
              "priceRange": "$$",
              "description": "Providing registered massage therapy and athletic therapy in Colwood, BC. Trusted by 800+ clients since 2015.",
              "foundingDate": "2015",
              "numberOfEmployees": { "@type": "QuantitativeValue", "value": 1 },
              "founder": { "@id": "https://www.synctherapy.ca/our-team/daryl-stubbs/#person" },
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "123",
                "bestRating": "5",
                "worstRating": "1"
              },
              "medicalSpecialty": [
                "Musculoskeletal",
                "PhysicalTherapy",
                "SportsMedicine"
              ],
              "award": [
                "Best Massage Therapy Clinic — Platinum Winner, Community Votes Victoria 2022",
                "Best Massage Therapy Clinic — Platinum Winner, Community Votes Victoria 2023",
                "Best Massage Therapy Clinic — Platinum Winner, Community Votes Victoria 2024",
                "Best Massage Therapy Clinic — Platinum Winner, Community Votes Victoria 2025",
                "Best Physio & Rehab Clinic — Platinum Winner, Community Votes Victoria 2022",
                "Best Physio & Rehab Clinic — Platinum Winner, Community Votes Victoria 2023",
                "Best Physio & Rehab Clinic — Platinum Winner, Community Votes Victoria 2024",
                "Best Physio & Rehab Clinic — Platinum Winner, Community Votes Victoria 2025"
              ],
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "17:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"], "opens": "08:00", "closes": "20:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "17:00" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Massage & Athletic Therapy Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Massage Therapy",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "60-Minute Massage Therapy", "url": "https://www.synctherapy.ca/services/massage-therapy/" }, "price": "130.00", "priceCurrency": "CAD" },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "75-Minute Massage Therapy", "url": "https://www.synctherapy.ca/services/massage-therapy/" }, "price": "157.50", "priceCurrency": "CAD" },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "90-Minute Massage Therapy", "url": "https://www.synctherapy.ca/services/massage-therapy/" }, "price": "178.50", "priceCurrency": "CAD" }
                    ]
                  },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Athletic Therapy", "description": "Injury rehabilitation and performance optimization", "url": "https://www.synctherapy.ca/services/athletic-therapy/" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sports Massage", "description": "Specialized treatment for athletes and active individuals", "url": "https://www.synctherapy.ca/services/sports-massage/" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Tissue Massage", "description": "Targeted pressure to release chronic tension", "url": "https://www.synctherapy.ca/services/deep-tissue-massage/" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Myofascial Release", "description": "Fascial release techniques for structural alignment", "url": "https://www.synctherapy.ca/services/myofascial-release/" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visceral Manipulation", "description": "Gentle organ mobilization to relieve referred musculoskeletal pain", "url": "https://www.synctherapy.ca/services/visceral-manipulation/" } }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/SyncTherapyVictoria/",
                "https://www.instagram.com/synctherapy/",
                "https://www.youtube.com/@synctherapy",
                "https://ca.pinterest.com/SyncTherapyWellness/",
                "https://www.linkedin.com/in/daryl-stubbs-36245379/",
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
                "Sports Massage",
                "Holistic Nutrition",
                "Trigger Point Therapy",
                "Chronic Pain Management",
                "Sports Injury Rehabilitation",
                "Exercise Therapy",
                "Nutrition Counseling",
                "Pain Management"
              ],
              "areaServed": [
                { "@type": "City", "name": "Colwood" },
                { "@type": "City", "name": "Langford" },
                { "@type": "City", "name": "Victoria" },
                { "@type": "City", "name": "Esquimalt" },
                { "@type": "City", "name": "View Royal" },
                { "@type": "City", "name": "Sooke" },
                { "@type": "City", "name": "Metchosin" }
              ],
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://synctherapy.janeapp.com/",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                  ]
                },
                "result": {
                  "@type": "Reservation",
                  "name": "Massage Therapy Appointment"
                }
              }
            })
          }}
        />
        {/* Person Entity for Daryl Stubbs — linked from all blog posts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.synctherapy.ca/our-team/daryl-stubbs/#person",
              "name": "Daryl Stubbs",
              "url": "https://www.synctherapy.ca/our-team/daryl-stubbs/",
              "image": "https://www.synctherapy.ca/images/daryl-stubbs-author.jpg",
              "jobTitle": "Registered Massage Therapist & Certified Athletic Therapist",
              "description": "Daryl Stubbs is the founder of Sync Massage Therapy in Colwood, BC, offering musculoskeletal rehabilitation, athletic therapy, visceral manipulation, and functional nutrition since 2015.",
              "worksFor": { "@id": "https://www.synctherapy.ca/#organization" },
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Professional License",
                  "name": "Registered Massage Therapist (RMT)",
                  "recognizedBy": { "@type": "Organization", "name": "College of Complementary Health Professionals of BC (CCHPBC)" },
                  "identifier": "RMT-008082"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Professional Certification",
                  "name": "Certified Athletic Therapist — CAT(C)",
                  "recognizedBy": { "@type": "Organization", "name": "Canadian Athletic Therapists Association (CATA)" },
                  "identifier": "2-4534"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Continuing Education",
                  "name": "Visceral Manipulation VM-1",
                  "recognizedBy": { "@type": "Organization", "name": "Barral Institute" }
                }
              ],
              "memberOf": [
                { "@type": "Organization", "name": "College of Complementary Health Professionals of BC (CCHPBC)" },
                { "@type": "Organization", "name": "Canadian Athletic Therapists Association (CATA)" }
              ],
              "alumniOf": [
                { "@type": "EducationalOrganization", "name": "Camosun College" },
                { "@type": "EducationalOrganization", "name": "Barral Institute" }
              ],
              "knowsAbout": [
                "Massage Therapy",
                "Athletic Therapy",
                "Visceral Manipulation",
                "Holistic Nutrition",
                "Red Light Therapy",
                "Sports Rehabilitation",
                "Myofascial Release",
                "Deep Tissue Massage"
              ],
              "sameAs": [
                "https://www.instagram.com/synctherapy/",
                "https://www.facebook.com/SyncTherapyVictoria/",
                "https://www.youtube.com/@synctherapy",
                "https://ca.pinterest.com/SyncTherapyWellness/"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
