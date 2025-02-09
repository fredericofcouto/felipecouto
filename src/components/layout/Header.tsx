import { Monitor, Languages, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
  language: string;
  t: any;
  toggleLanguage: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

export const Header = ({ isScrolled, activeSection, language, t, toggleLanguage, isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A0A0F]/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      {/* ... código existente do header ... */}
    </header>
  );
};
