import { Layers, Code2, Cloud, Shield, Database, Cpu, Globe2 } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import { ContentType } from '../../types';

interface ServicesProps {
  t: ContentType;
}

export const Services = ({ t }: ServicesProps) => {
  const icons = [<Code2 />, <Cloud />, <Shield />, <Database />, <Cpu />, <Globe2 />];

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        {/* ... código do cabeçalho da seção ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={icons[index]}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
