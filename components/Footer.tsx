import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white mt-12">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Psymaghreb</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              La référence de la consultation psychologique en ligne au Maroc.
              Professionnalisme, écoute et bienveillance à portée de clic.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Liens Rapides</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nos Psychologues</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tarifs & Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog Santé Mentale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Besoin d'aide ?</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Contactez-nous</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support technique</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Psymaghreb. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;