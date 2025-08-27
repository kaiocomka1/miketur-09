import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  console.log('Header component loading...');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToForm = () => {
    console.log('scrollToForm called in Header');
    const element = document.getElementById('cotacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Mobile Layout */}
        <div className="flex items-center justify-start h-16 md:h-20 md:justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/e7ee80fe-0b4d-4bc9-bac9-bb39ad439302.png" 
              alt="Miketur" 
              className="h-6 md:h-12 w-auto transition-smooth hover:scale-105"
            />
          </div>

          {/* Mobile Navigation - Right of logo */}
          <nav className="md:hidden flex items-center ml-4 space-x-3 text-xs">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('experiencias')}
              className="text-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
            >
              Experiências
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
            >
              Depoimentos
            </button>
          </nav>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('experiencias')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Experiências
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button 
              variant="premium"
              onClick={scrollToForm}
              className="shadow-button"
            >
              Solicite sua cotação exclusiva
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;