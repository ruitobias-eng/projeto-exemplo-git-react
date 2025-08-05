import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Code, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Github className="h-8 w-8" />
            <h1 className="text-xl font-bold">Meu Projeto React + Git</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={() => scrollToSection('home')}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Início
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={() => scrollToSection('sobre')}
            >
              <Code className="h-4 w-4 mr-2" />
              Sobre
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={() => scrollToSection('recursos')}
            >
              <Github className="h-4 w-4 mr-2" />
              Recursos
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={() => scrollToSection('contato')}
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full text-left text-white hover:bg-white/20 justify-start"
              onClick={() => scrollToSection('home')}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Início
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-white hover:bg-white/20 justify-start"
              onClick={() => scrollToSection('sobre')}
            >
              <Code className="h-4 w-4 mr-2" />
              Sobre
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-white hover:bg-white/20 justify-start"
              onClick={() => scrollToSection('recursos')}
            >
              <Github className="h-4 w-4 mr-2" />
              Recursos
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-white hover:bg-white/20 justify-start"
              onClick={() => scrollToSection('contato')}
            >
              Contato
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

