import React from 'react';
import { JsonLdProps } from '../types';

const JsonLd: React.FC<JsonLdProps> = ({ categories }) => {
  const allItems = categories.flatMap(cat => cat.items);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default JsonLd;