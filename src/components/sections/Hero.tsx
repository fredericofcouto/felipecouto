import { Globe2 } from 'lucide-react';
import { ContentType } from '../../types';

interface HeroProps {
  t: ContentType;
}

export const Hero = ({ t }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-transparent to-[#0A0A0F]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Globe2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t.hero.title}
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>
            {/* Adicionado conteúdo mínimo para que não fique em branco */}
            <p className="text-lg text-gray-300">{t.hero.description}</p>
            
            {/* ... resto do código do Hero ... */}
          </div>

          <div className="md:w-1/2 relative">
            {/* ... código da imagem ... */}
          </div>
        </div>
      </div>
    </section>
  );
};
