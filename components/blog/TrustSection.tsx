import React from 'react';

interface TrustBadge {
  icon: string;
  title: string;
  description: string;
}

interface TrustSectionProps {
  title?: string;
  intro?: string;
  badges: TrustBadge[];
}

export function TrustSection({
  title = "Why You Can Trust Our Reviews",
  intro,
  badges
}: TrustSectionProps) {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md my-8">
      <h2 className="text-2xl font-bold mb-4">
        <i className="fas fa-shield-halved text-accent mr-2"></i>
        {title}
      </h2>

      {intro && (
        <p className="mb-6 text-gray-600">{intro}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-start space-x-4">
            <i className={`${badge.icon} text-primary text-2xl mt-1`}></i>
            <div>
              <h4 className="font-semibold">{badge.title}</h4>
              <p className="text-gray-600">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
