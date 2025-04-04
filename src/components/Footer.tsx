
import { Instagram, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-trilingue-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Trilíngue-se Logo" className="h-10 rounded-full" />
              <span className="text-2xl font-bold">
                Trilíngue<span className="text-trilingue-orange">-se</span>
              </span>
            </a>
            <p className="mt-4 text-gray-300">
              Aulas particulares de inglês e espanhol com metodologia exclusiva e personalizada.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-trilingue-yellow">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-trilingue-mint transition-colors">Início</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-trilingue-mint transition-colors">Sobre</a></li>
              <li><a href="#languages" className="text-gray-300 hover:text-trilingue-mint transition-colors">Idiomas</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-trilingue-mint transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-trilingue-yellow">Cursos</h3>
            <ul className="space-y-2">
              <li><a href="#languages" className="text-gray-300 hover:text-trilingue-mint transition-colors">Inglês</a></li>
              <li><a href="#languages" className="text-gray-300 hover:text-trilingue-mint transition-colors">Espanhol</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-trilingue-mint transition-colors">Aula Experimental</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-trilingue-mint transition-colors">Pacotes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-trilingue-yellow">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-trilingue-mint" />
                <a href="mailto:contato@trilingue-se.com.br" className="text-gray-300 hover:text-trilingue-mint transition-colors">
                  contato@trilingue-se.com.br
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-trilingue-mint" />
                <span className="text-gray-300">(00) 00000-0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-trilingue-mint" />
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-trilingue-mint transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a href="https://instagram.com/trilingue_se" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-trilingue-purple transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com/in/ana-bulek" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-trilingue-purple transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Trilíngue-se. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com <span className="text-trilingue-mint">💚</span> por Lovable</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
