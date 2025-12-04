import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-teal-700">Psymaghreb</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-teal-600 font-medium">Accueil</a>
            <a href="#" className="text-teal-700 font-bold border-b-2 border-teal-500">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 font-medium">Nos Psychologues</a>
            <a href="#" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 font-medium transition-colors">
              Prendre RDV
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">Accueil</a>
          <a href="#" className="block px-4 py-2 text-teal-600 font-semibold bg-teal-50">FAQ</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">Nos Psychologues</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">Contact</a>
          <div className="px-4 pt-2">
            <a href="#" className="block w-full text-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 font-medium">
              Prendre RDV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;