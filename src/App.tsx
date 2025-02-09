import { useState, useEffect } from 'react';
import { 
  Monitor, 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Shield, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  ArrowRight,
  Globe2,
  Layers,
  Sparkles,
  Languages
} from 'lucide-react';
import ServiceCard from './components/ui/ServiceCard';
import { ContactCard } from './components/ui/ContactCard';
import { content } from './locales/content';
import { ContentType } from './types';

type LanguageType = 'en' | 'pt';
type NavKeys = keyof ContentType['nav'];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<NavKeys>('home');
  const [language, setLanguage] = useState<LanguageType>('en');

  const t = content[language] as ContentType;
  const navItems = ['home', 'services', 'about', 'contact'] as const;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as NavKeys);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0F]/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Monitor className="w-8 h-8 text-blue-500" />
                <Sparkles className="w-4 h-4 text-blue-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                NexusTech
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`relative text-sm uppercase tracking-wider transition-colors ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {t.nav[item as keyof typeof t.nav]}
                  {activeSection === item && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400" />
                  )}
                </a>
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition"
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm uppercase">{language === 'en' ? 'PT' : 'EN'}</span>
              </button>

              <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full hover:opacity-90 transition group">
                <span>{t.getStarted}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition"
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm uppercase">{language === 'en' ? 'PT' : 'EN'}</span>
              </button>

              <button 
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0F]/95 backdrop-blur-lg py-6">
              <div className="flex flex-col space-y-4 px-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`text-sm uppercase tracking-wider ${
                      activeSection === item ? 'text-blue-400' : 'text-gray-300'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav[item as NavKeys]}
                  </a>
                ))}
                <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full hover:opacity-90 transition">
                  <span>{t.getStarted}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
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
              
              <p className="text-lg text-gray-400 max-w-xl">
                {t.hero.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full hover:opacity-90 transition group">
                  <span>{t.hero.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition backdrop-blur-sm">
                  {t.hero.watchDemo}
                </button>
              </div>

              <div className="flex items-center gap-8 pt-8">
                <div>
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    98%
                  </h4>
                  <p className="text-sm text-gray-400">{t.hero.stats.satisfaction}</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    250+
                  </h4>
                  <p className="text-sm text-gray-400">{t.hero.stats.projects}</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80" 
                  alt="Technology Innovation"
                  className="w-full object-cover transform hover:scale-105 transition duration-700"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-sm">{t.services.badge}</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              {t.services.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service: { title: string; description: string }, index: number) => (
              <ServiceCard 
                key={index}
                icon={[<Code2 />, <Cloud />, <Shield />, <Database />, <Cpu />, <Globe2 />][index]}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80" 
                  alt="Our Team"
                  className="w-full object-cover transform hover:scale-105 transition duration-700"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-3xl -z-10" />
            </div>

            <div className="md:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{t.about.badge}</span>
              </div>

              <h2 className="text-4xl font-bold leading-tight">
                {t.about.title}
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {t.about.titleHighlight}
                </span>
              </h2>

              <p className="text-gray-400">
                {t.about.description}
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    250+
                  </h3>
                  <p className="text-gray-400">{t.about.stats.projects}</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    98%
                  </h3>
                  <p className="text-gray-400">{t.about.stats.satisfaction}</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    50+
                  </h3>
                  <p className="text-gray-400">{t.about.stats.team}</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    24/7
                  </h3>
                  <p className="text-gray-400">{t.about.stats.support}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-purple-500/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="text-sm">{t.contact.badge}</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              {t.contact.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactCard 
              icon={<Mail />}
              title={t.contact.cards.email.title}
              info={t.contact.cards.email.info}
            />
            <ContactCard 
              icon={<Phone />}
              title={t.contact.cards.phone.title}
              info={t.contact.cards.phone.info}
            />
            <ContactCard 
              icon={<MapPin />}
              title={t.contact.cards.visit.title}
              info={t.contact.cards.visit.info}
            />
          </div>

          <div className="mt-16 max-w-3xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder={t.contact.form.name}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder={t.contact.form.email}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder={t.contact.form.subject}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <textarea
                placeholder={t.contact.form.message}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center space-x-2 group">
                <span>{t.contact.form.submit}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                {t.services.items.slice(0, 4).map((service: { title: string }, index: number) => (
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
    </div>
  );
}

export default App;