import { Monitor, Sparkles } from 'lucide-react';
import { ContentType } from '../../types';

interface FooterProps {
  t: ContentType;
}

export const Footer = ({ t }: FooterProps) => {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Monitor className="w-8 h-8 text-blue-500" />
                <Sparkles className="w-4 h-4 text-blue-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                NexusTech
              </span>
            </div>
            <p className="text-gray-400">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.sections.solutions}</h4>
            <ul className="space-y-2 text-gray-400">
              {t.services.items.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 transition">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.sections.company}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">{t.about.badge}</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">{t.contact.badge}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.sections.legal}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};
