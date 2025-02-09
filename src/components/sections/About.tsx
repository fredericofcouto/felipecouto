import { Sparkles } from 'lucide-react';
import { ContentType } from '../../types';

interface AboutProps {
  t: ContentType;
}

export const About = ({ t }: AboutProps) => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 relative">
        {/* Conteúdo mínimo para About */}
        <h2 className="text-4xl font-bold mb-4">{t.about.badge}</h2>
        {/* Adicionado conteúdo mínimo para que não fique em branco */}
        <p className="text-lg text-gray-300">{t.about.description}</p>
        {/* ... código do About ... */}
      </div>
    </section>
  );
};
