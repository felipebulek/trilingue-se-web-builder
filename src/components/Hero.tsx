
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-white to-trilingue-mint/20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Aprenda <span className="text-trilingue-purple">Inglês</span> e <span className="text-trilingue-orange">Espanhol</span> de forma eficaz
            </h1>
            <p className="text-lg md:text-xl text-trilingue-gray mb-8 max-w-lg">
              Aulas particulares personalizadas para você atingir fluência mais rápido. Metodologia exclusiva adaptada ao seu perfil de aprendizado.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-trilingue-purple hover:bg-trilingue-purple/80 text-white px-8 py-6 text-lg">
                <a href="#languages">Conheça os Cursos</a>
              </Button>
              <Button variant="outline" className="border-trilingue-purple text-trilingue-purple hover:bg-trilingue-purple hover:text-white px-8 py-6 text-lg">
                <a href="#contact">Entre em Contato</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-trilingue-purple opacity-10 absolute -top-6 -left-6"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-trilingue-orange opacity-10 absolute -bottom-6 -right-6"></div>
              <div className="relative z-10 bg-white rounded-lg shadow-xl p-6 max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-trilingue-purple">Com a Professora Ana Bulek</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-trilingue-mint flex items-center justify-center text-trilingue-gray mr-3">✓</div>
                    <span>Aulas 100% online e personalizadas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-trilingue-orange flex items-center justify-center text-white mr-3">✓</div>
                    <span>Horários flexíveis para sua agenda</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-trilingue-mint flex items-center justify-center text-trilingue-gray mr-3">✓</div>
                    <span>Material didático exclusivo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-trilingue-orange flex items-center justify-center text-white mr-3">✓</div>
                    <span>Foco em conversação e fluência</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-trilingue-orange hover:bg-trilingue-orange/80 text-white">
                  <a href="#contact">Agende sua Primeira Aula</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
