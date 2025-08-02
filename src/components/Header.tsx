import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              LogiByte
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Clients
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="cta" onClick={() => scrollToSection('contact')}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button 
                onClick={() => navigate('/')}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('clients')}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Clients
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button variant="cta" className="w-full" onClick={() => scrollToSection('contact')}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;