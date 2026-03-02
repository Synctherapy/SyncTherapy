import React from 'react';

interface KeyTakeawaysProps {
  children: React.ReactNode;
  title?: string;
}

export function KeyTakeaways({ children, title = "Key Takeaways" }: KeyTakeawaysProps) {
  return (
    <section className="bg-blue-50 border-l-4 border-primary p-6 rounded-lg shadow-sm my-8">
      <h2 className="text-2xl font-bold mb-4 !border-none !pl-0">
        <i className="fas fa-star text-accent mr-2"></i>
        {title}
      </h2>
      <ul className="space-y-3 list-disc list-inside text-gray-800">
        {children}
      </ul>
    </section>
  );
}

export function TakeawayItem({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}
