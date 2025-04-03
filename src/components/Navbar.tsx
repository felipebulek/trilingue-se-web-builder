
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Idiomas', href: '#languages' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-bold text-trilingue-blue">
          Trilíngue<span className="text-trilingue-orange">-se</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium text-gray-700 hover:text-trilingue-blue transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-trilingue-orange hover:bg-trilingue-lightorange text-white"
          >
            <a href="#contact">Agende uma Aula</a>
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 animate-fade-in">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block py-2 font-medium text-gray-700 hover:text-trilingue-blue transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="w-full mt-4 bg-trilingue-orange hover:bg-trilingue-lightorange text-white"
            onClick={() => setIsOpen(false)}
          >
            <a href="#contact">Agende uma Aula</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
