import React from 'react';
import Image from 'next/image';

const STARS = [0, 1, 2, 3, 4];

interface ProductCardProps {
  id?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  description: React.ReactNode;
  features?: string[];
  pros?: string[];
  cons?: string[];
  price?: string;
  link: string;
  linkText?: string;
  rating?: number;
  children?: React.ReactNode;
}

export function ProductCard({
  id,
  title,
  subtitle,
  image,
  imageAlt,
  description,
  features,
  pros,
  cons,
  price,
  link,
  linkText = "Check Price",
  rating,
  children
}: ProductCardProps) {
  return (
    <div id={id} className="bg-white p-6 rounded-lg shadow-md mb-8 border-t-4 border-accent">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      {subtitle && <p className="text-accent font-semibold mb-4">{subtitle}</p>}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="rounded-lg shadow-sm object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          {rating && (
            <div className="flex items-center mb-4">
              <span className="text-accent font-bold text-lg mr-2">{rating}/5</span>
              {STARS.map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star${i < Math.floor(rating) ? '' : i < rating ? '-half-alt' : ''} text-accent`}
                />
              ))}
            </div>
          )}

          <div className="mb-4">{description}</div>

          {features && (
            <ul className="list-disc list-inside space-y-2 mb-4">
              {features.map((feature, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: feature }} />
              ))}
            </ul>
          )}

          {(pros || cons) && (
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              {pros && (
                <div>
                  <strong className="text-green-600">Pros:</strong>
                  <ul className="list-disc list-inside">
                    {pros.map((pro, i) => <li key={i}>{pro}</li>)}
                  </ul>
                </div>
              )}
              {cons && (
                <div>
                  <strong className="text-red-600">Cons:</strong>
                  <ul className="list-disc list-inside">
                    {cons.map((con, i) => <li key={i}>{con}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}

          {children}

          <a
            href={link}
            target="_blank"
            rel="nofollow sponsored"
            className="affiliate-button w-full inline-block text-center"
          >
            {linkText} <i className="fas fa-arrow-right ml-2"></i>
          </a>

          {price && (
            <p className="text-center text-sm mt-2 text-gray-500">{price}</p>
          )}
        </div>
      </div>
    </div>
  );
}
