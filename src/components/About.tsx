
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Sobre Nossos Cursos</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full h-80 rounded-lg bg-trilingue-mint/20"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-lg border-4 border-trilingue-orange"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
                  <h3 className="text-xl font-semibold text-trilingue-purple mb-2">Professora Ana Bulek</h3>
                  <p className="text-trilingue-gray mb-4">
                    Formada em Letras e com certificações internacionais em inglês e espanhol. Mais de 5 anos de experiência em ensino personalizado de idiomas.
                  </p>
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 rounded-full bg-trilingue-purple"></div>
                    <div className="h-2 w-2 rounded-full bg-trilingue-orange"></div>
                    <div className="h-2 w-2 rounded-full bg-trilingue-mint"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-trilingue-purple mb-3">Metodologia Personalizada</h3>
              <p className="text-trilingue-gray">
                Cada aluno aprende de forma diferente, por isso nossos cursos são totalmente adaptados ao seu ritmo, objetivos e estilo de aprendizado. Trabalhamos com material exclusivo e as aulas são planejadas de acordo com suas necessidades específicas.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-trilingue-orange mb-3">Foco em Resultados</h3>
              <p className="text-trilingue-gray">
                Nosso método foi desenvolvido para garantir resultados rápidos e efetivos. Você aprenderá a se comunicar no idioma desde a primeira aula, com foco em situações práticas do dia a dia e de acordo com seus objetivos - seja viagens, trabalho ou estudos.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-trilingue-mint mb-3">Flexibilidade Total</h3>
              <p className="text-trilingue-gray">
                Aulas online com horários adaptados à sua agenda. Você pode escolher a frequência e duração das aulas, além de poder remarcá-las com antecedência quando necessário.
              </p>
            </div>
            
            <Button className="bg-trilingue-purple hover:bg-trilingue-purple/80 text-white mt-4">
              <a href="#languages">Conheça Nossos Idiomas</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
