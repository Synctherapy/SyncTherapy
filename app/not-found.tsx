import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-600 bg-[#F0F5FF]">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
                <h2 className="text-4xl font-bold text-[#1A2B3C] mb-4">Page Not Found</h2>
                <p className="mb-8 text-lg">Could not find requested resource</p>
                <Link href="/" className="bg-[#2563EB] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                    Return Home
                </Link>
            </main>
            <Footer />
        </div>
    )
}
