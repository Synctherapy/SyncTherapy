import React from 'react';

interface DiscountBoxProps {
  code: string;
  description?: string;
  savings?: string;
}

export function DiscountBox({ code, description, savings }: DiscountBoxProps) {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-500 rounded-lg p-4 mb-4">
      <p className="font-bold text-lg mb-1">
        <i className="fas fa-gift mr-2"></i>
        Exclusive Discount!
      </p>
      {description && <p className="text-sm mb-2">{description}</p>}
      <p className="text-sm text-gray-600 mb-2">Use code:</p>
      <p className="text-2xl font-extrabold text-green-600 bg-white inline-block px-4 py-2 rounded">
        {code}
      </p>
      {savings && (
        <p className="text-sm text-gray-500 mt-2">{savings}</p>
      )}
    </div>
  );
}
