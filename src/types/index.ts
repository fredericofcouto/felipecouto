export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  info: string;
}

export interface ContentType {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    watchDemo: string;
    stats: {
      satisfaction: string;
      projects: string;
    }
  };
  // ... continue com os outros tipos do content
}
