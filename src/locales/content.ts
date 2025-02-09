import { ContentType } from '../types';

export const content: Record<string, ContentType> = {
  en: {
    nav: {
      home: 'home',
      services: 'services',
      about: 'about',
      contact: 'contact'
    },
    hero: {
      badge: 'Pioneering Digital Innovation',
      title: 'Shaping the',
      titleHighlight: 'Future of Tech',
      description: 'We combine cutting-edge technology with innovative solutions to transform businesses for the digital age. Experience the next generation of digital transformation.',
      cta: 'Explore Solutions',
      watchDemo: 'Watch Demo',
      stats: {
        satisfaction: 'Client Satisfaction',
        projects: 'Projects Delivered'
      }
    },
    services: {
      badge: 'Our Solutions',
      title: 'Comprehensive Tech Solutions',
      description: 'Leverage our expertise in cutting-edge technologies to drive your business forward',
      items: [
        { title: 'AI Development', description: 'Advanced AI solutions powered by ML and neural networks' },
        { title: 'Cloud Architecture', description: 'Scalable cloud infrastructure for modern enterprises' },
        { title: 'Cyber Security', description: 'Comprehensive security solutions to protect your assets' },
        { title: 'Big Data Analytics', description: 'Transform raw data to actionable insights' },
        { title: 'IoT Solutions', description: 'Connected device ecosystems for smart operations' },
        { title: 'Digital Transformation', description: 'End-to-end digital solutions to modernize your business' }
      ]
    },
    about: {
      badge: 'About Us',
      title: 'Pioneering the Future of',
      titleHighlight: 'Digital Innovation',
      description: 'With over a decade of experience delivering cutting-edge tech solutions, we help businesses transform digitally.',
      stats: {
        projects: 'Projects Delivered',
        satisfaction: 'Client Satisfaction',
        team: 'Expert Team',
        support: 'Support Available'
      }
    },
    contact: {
      badge: 'Contact Us',
      title: "Let's Build Something Amazing Together",
      description: 'Ready to start your transformation journey? Get in touch with our team.',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message'
      },
      cards: {
        email: { title: 'Email Us', info: 'contact@nexustech.com' },
        phone: { title: 'Call Us', info: '+1 (555) 123-4567' },
        visit: { title: 'Visit Us', info: '123 Innovation Drive, Silicon Valley, CA' }
      }
    },
    footer: {
      description: 'Pioneering the future of digital innovation with cutting-edge solutions.',
      sections: {
        solutions: 'Solutions',
        company: 'Company',
        legal: 'Legal'
      },
      copyright: '© 2024 NexusTech. All rights reserved.'
    },
    getStarted: 'Get Started'
  },
  pt: {
    nav: {
      home: 'início',
      services: 'serviços',
      about: 'sobre',
      contact: 'contato'
    },
    hero: {
      badge: 'Pioneirismo em Inovação Digital',
      title: 'Moldando o',
      titleHighlight: 'Futuro da Tecnologia',
      description: 'Combinamos tecnologia de ponta com soluções inovadoras para transformar empresas na era digital.',
      cta: 'Explorar Soluções',
      watchDemo: 'Ver Demo',
      stats: {
        satisfaction: 'Satisfação dos Clientes',
        projects: 'Projetos Entregues'
      }
    },
    services: {
      badge: 'Nossas Soluções',
      title: 'Soluções Tecnológicas Completas',
      description: 'Aproveite nossa expertise em tecnologias de ponta para impulsionar seu negócio',
      items: [
        { title: 'Desenvolvimento de IA', description: 'Soluções avançadas de IA com machine learning e redes neurais' },
        { title: 'Arquitetura em Nuvem', description: 'Infraestrutura em nuvem escalável e segura' },
        { title: 'Segurança Cibernética', description: 'Soluções abrangentes para proteger seus ativos digitais' },
        { title: 'Análise de Big Data', description: 'Transforme dados brutos em insights acionáveis' },
        { title: 'Soluções IoT', description: 'Ecossistemas de dispositivos conectados' },
        { title: 'Transformação Digital', description: 'Soluções digitais completas para modernizar seu negócio' }
      ]
    },
    about: {
      badge: 'Sobre Nós',
      title: 'Pioneiros no Futuro da',
      titleHighlight: 'Inovação Digital',
      description: 'Com mais de uma década de experiência, ajudamos empresas a alcançar a transformação digital.',
      stats: {
        projects: 'Projetos Entregues',
        satisfaction: 'Satisfação dos Clientes',
        team: 'Equipe Especialista',
        support: 'Suporte Disponível'
      }
    },
    contact: {
      badge: 'Contato',
      title: 'Vamos Construir Algo Incrível Juntos',
      description: 'Pronto para iniciar sua jornada de transformação digital? Entre em contato.',
      form: {
        name: 'Seu Nome',
        email: 'Seu Email',
        subject: 'Assunto',
        message: 'Sua Mensagem',
        submit: 'Enviar Mensagem'
      },
      cards: {
        email: { title: 'Email', info: 'contato@nexustech.com' },
        phone: { title: 'Telefone', info: '+55 (11) 1234-5678' },
        visit: { title: 'Visite-nos', info: 'Av. Paulista, 1000, São Paulo, SP' }
      }
    },
    footer: {
      description: 'Pioneiros no futuro da inovação digital com soluções de ponta.',
      sections: {
        solutions: 'Soluções',
        company: 'Empresa',
        legal: 'Legal'
      },
      copyright: '© 2024 NexusTech. Todos os direitos reservados.'
    },
    getStarted: 'Começar'
  }
};