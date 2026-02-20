
import Link from "next/link";
import Image from "next/image";

export function NutritionConsulting() {
    const treatments = [
        { name: 'Nutrition Counseling', url: '/services/nutrition-counseling/', desc: 'Personalized macro/micro nutrient strategy.' },
        { name: 'Dietary Consultation', url: '/services/dietary-consultation/', desc: 'Audit of current habits & inflammatory triggers.' },
        { name: 'Diabetes Nutrition', url: '/services/diabetes-nutrition/', desc: 'Blood sugar stabilization support.' },
        { name: 'Cholesterol Management', url: '/services/cholesterol-diet/', desc: 'Heart-healthy, anti-inflammatory protocols.' },
        { name: 'Immune Support', url: '/services/immune-support-nutrition/', desc: 'Micronutrient density for resilience.' },
        { name: 'Low-FODMAP Guidance', url: '/services/low-fodmap-diet/', desc: 'Elimination strategy for bloating/gas.' },
        { name: 'IBS Diet Counseling', url: '/services/ibs-diet-counseling/', desc: 'Managing gut irritation & triggers.' },
        { name: 'Supplement Advice', url: '/services/supplements-advice/', desc: 'Evidence-based protocols, no guesswork.' },
        { name: 'Gut Health Optimization', url: '/services/gut-health-optimization/', desc: 'Microbiome restoration strategies.' },
    ];

    return (
        <div className="bg-white text-gray-900 font-sans">
            {/* 1. HERO SECTION: High Impact Hook */}
            <section className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                        Holistic Nutrition & Dietary Consulting
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        The Fuel Strategy: <br />
                        <span className="text-blue-400">Reduce Inflammation from the Inside Out</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        You can't out-train a bad diet, and you can't heal injured tissue if you are feeding it inflammation. We analyze metabolic health and gut function to speed up your physical recovery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="https://synctherapy.janeapp.com/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all text-lg shadow-lg hover:shadow-blue-500/20">
                            Book Nutrition Consult
                        </a>
                        <div className="text-sm text-gray-400 flex flex-col items-start">
                            <span className="flex items-center"><span className="text-blue-400 mr-2">✓</span> Voted Platinum Winner: Best Clinic (2024)</span>
                            <span className="flex items-center"><span className="text-blue-400 mr-2">✓</span> Check Insurance (Nutritionist/HSA)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. IDENTITY SECTION: The "Sync Difference" */}
            <section className="py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Combine Nutrition with Physical Therapy?</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Many chronic pain conditions—like arthritis, fibromyalgia, and recurring tendonitis—are driven by <strong>Systemic Inflammation</strong>.
                        Standard rehab treats the mechanical issue, but if your body is inflamed, recovery stalls.
                        <br /><br />
                        Our <strong>Holistic Nutrition</strong> approach provides the raw materials your body needs to repair tissue, regulate hormones, and lower pain signals.
                    </p>
                </div>
            </section>

            {/* 3. TREATMENTS GRID: The Hub Links */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center">Nutrition Services</h2>
                    <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">Evidence-based dietary strategies for health and recovery.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {treatments.map((item) => (
                            <Link key={item.url} href={item.url} className="group block p-8 border border-gray-200 rounded-xl hover:shadow-xl hover:border-blue-500 transition-all bg-white relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 flex items-center justify-between">
                                    {item.name}
                                    <span className="text-gray-300 group-hover:translate-x-1 transition-transform">→</span>
                                </h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PATIENT ROADMAP: The Process */}
            <section className="py-16 px-4 bg-blue-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">The "Anti-Inflammatory" Protocol</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-blue-200 -z-10"></div>

                        <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">1</div>
                            <h3 className="font-bold text-xl mb-2">The Dietary Audit</h3>
                            <p className="text-gray-600 text-sm">We analyze your current intake, symptoms, and energy levels to find the "Inflammatory Triggers" holding you back.</p>
                        </div>
                        <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">2</div>
                            <h3 className="font-bold text-xl mb-2">The Repair Strategy</h3>
                            <p className="text-gray-600 text-sm">We build a custom plan focused on gut healing, nutrient density, and blood sugar stabilization.</p>
                        </div>
                        <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">3</div>
                            <h3 className="font-bold text-xl mb-2">Lifestyle Integration</h3>
                            <p className="text-gray-600 text-sm">No crash diets. We provide meal planning, prep guides, and strategies to make this sustainable for life.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. MEET THE EXPERT: Dual Credential Focus */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                    <div className="md:w-1/3">
                        {/* Placeholder for Daryl's Image */}
                        <div className="aspect-square bg-slate-200 rounded-xl w-full flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                            <Image
                                src="/images/daryl-stubbs-thumb.jpg"
                                alt="Daryl Stubbs"
                                width={300}
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">CNP</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">RMT</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">CAT(C)</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Meet Daryl Stubbs, Holistic Nutritionist</h3>
                        <p className="text-gray-600 mb-6 italic">
                            "I combine my background in physical therapy with holistic nutrition because I've seen too many patients fail to recover due to poor fueling. Nutrition isn't about restriction; it's about giving your body the raw materials it needs to repair tissue."
                        </p>
                        <Link href="/about" className="text-blue-600 font-bold hover:underline flex items-center">
                            Read Full Bio <span className="ml-1">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. PRICING TABLE */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Consulting Rates</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
                            <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                            <div className="text-3xl font-black text-blue-600 mb-4">$130<span className="text-sm text-gray-400 font-normal">/60 min</span></div>
                            <ul className="text-sm text-gray-600 space-y-3 mb-8 flex-grow">
                                <li className="flex gap-2"><span className="text-blue-500">✓</span> Dietary & Lifestyle Audit</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span> Metabolic Health Review</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span> Personalized Strategy</li>
                            </ul>
                            <a href="https://synctherapy.janeapp.com/" className="block text-center bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">Book Initial</a>
                        </div>

                        {/* Card 2 - Featured */}
                        <div className="bg-white p-6 rounded-xl border-2 border-blue-500 shadow-md flex flex-col relative transform md:-translate-y-2">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-b-lg text-xs font-bold uppercase">Popular</div>
                            <h3 className="text-xl font-bold mb-2 mt-2">Meal Plan Package</h3>
                            <div className="text-3xl font-black text-blue-600 mb-4">$299<span className="text-sm text-gray-400 font-normal">/one-time</span></div>
                            <ul className="text-sm text-gray-600 space-y-3 mb-8 flex-grow">
                                <li className="flex gap-2"><span className="text-blue-500">✓</span> 7-Day Custom Meal Plan</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span> Grocery Lists & Recipes</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span> Tailored to Macros/Micros</li>
                            </ul>
                            <a href="https://synctherapy.janeapp.com/" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Get Meal Plan</a>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
                            <h3 className="text-xl font-bold mb-2">Follow-Up</h3>
                            <div className="text-3xl font-black text-blue-600 mb-4">$95<span className="text-sm text-gray-400 font-normal">/45 min</span></div>
                            <ul className="text-sm text-gray-600 space-y-3 mb-8 flex-grow">
                                <li className="flex gap-2"><span className="text-blue-500">✓</span> Progress Tracking</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span> Strategy Refinement</li>
                                <li className="flex gap-2"><span className="text-blue-500">✓</span> Accountability</li>
                            </ul>
                            <a href="https://synctherapy.janeapp.com/" className="block text-center bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition">Book Follow-Up</a>
                        </div>

                    </div>
                </div>
            </section>

            {/* 7. FAQ: Addressing Objections */}
            <section className="py-16 px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-2">Is Nutrition covered by insurance?</h3>
                            <p className="text-gray-600">Many extended health plans cover "Nutritional Counseling" or services provided by a "Certified Nutritional Practitioner" or "Registered Massage Therapist" (if within scope of lifestyle advice). Please check your specific booklet.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-2">Do you treat Diabetes?</h3>
                            <p className="text-gray-600">We provide nutritional support for blood sugar management. We do not "treat" the disease itself but help you optimize your diet to support your doctor's treatment plan.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-2">What is the "Anti-Inflammatory" approach?</h3>
                            <p className="text-gray-600">It involves removing common triggers (like processed sugar, seed oils, and specific allergens) and increasing nutrient-dense foods to lower systemic inflammation markers naturally.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-20 px-4 text-center bg-blue-900 text-white">
                <h2 className="text-3xl font-bold mb-6">Invest in Your Long-Term Health</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Serving Colwood, Langford, and the West Shore. Start your personalized nutrition strategy today.</p>
                <a href="https://synctherapy.janeapp.com/" className="bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all">
                    Book Initial Consult
                </a>
            </section>
        </div>
    );
}
