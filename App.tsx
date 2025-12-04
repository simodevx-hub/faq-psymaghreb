import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JsonLd from './components/JsonLd';
import { FAQ_DATA } from './constants';

const App: React.FC = () => {
  // State to track which categories are expanded if we wanted to collapse them,
  // but for SEO friendliness and "Readability" as per request, we display all openly
  // or use native details/summary which requires no React state for basic function.
  // We will use semantic headings structure as requested.

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <JsonLd categories={FAQ_DATA} />
      
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-teal-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Foire Aux Questions
            </h1>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Retrouvez ici les réponses à vos interrogations concernant nos services de psychologie en ligne, le déroulement des séances et les modalités pratiques.
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="space-y-12">
            {FAQ_DATA.map((category, catIndex) => (
              <section key={catIndex} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-teal-800">
                    {category.title}
                  </h2>
                </div>
                <div className="p-6 divide-y divide-slate-100">
                  {category.items.map((item, itemIndex) => (
                    <article key={itemIndex} className="py-6 first:pt-0 last:pb-0">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-start">
                        <span className="text-teal-500 mr-2 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                          </svg>
                        </span>
                        {item.question}
                      </h3>
                      <p className="text-slate-600 leading-relaxed ml-8">
                        {item.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-teal-50 rounded-2xl p-8 md:p-12 text-center border border-teal-100">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-teal-800 mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour vous orienter. N'hésitez pas à nous contacter ou à consulter directement les profils de nos psychologues.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm">
                Voir les psychologues
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-teal-300 text-base font-medium rounded-md text-teal-700 bg-white hover:bg-teal-50 transition-colors shadow-sm">
                Contactez-nous
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;