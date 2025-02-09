import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { ContactCard } from '../ui/ContactCard';
import { ContentType } from '../../types';

interface ContactProps {
  t: ContentType;
}

export const Contact = ({ t }: ContactProps) => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">{t.contact.badge}</h2>
        {/* Adicionado conteúdo mínimo para que não fique em branco */}
        <p className="text-lg text-gray-300">{t.contact.description}</p>
        {/* ... código do Contact ... */}
      </div>
    </section>
  );
};
