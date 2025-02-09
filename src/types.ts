import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface ContactCardProps {
  icon: React.ReactElement;
  title: string;
  info: string;
}

export interface NavItem {
  [key: string]: string;
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
    };
  };
  services: {
    badge: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    stats: {
      projects: string;
      satisfaction: string;
      team: string;
      support: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    };
    cards: {
      email: {
        title: string;
        info: string;
      };
      phone: {
        title: string;
        info: string;
      };
      visit: {
        title: string;
        info: string;
      };
    };
  };
  footer: {
    description: string;
    sections: {
      solutions: string;
      company: string;
      legal: string;
    };
    copyright: string;
  };
  getStarted: string;
}
