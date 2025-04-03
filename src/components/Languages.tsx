
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Languages = () => {
  const languages = [
    {
      id: 'english',
      name: 'Inglês',
      icon: '🇺🇸',
      color: 'bg-trilingue-blue',
      description: 'Desenvolva fluência no idioma mais falado no mundo dos negócios, tecnologia e turismo.',
      features: [
        'Conversação focada em situações reais',
        'Gramática aplicada de forma prática',
        'Expressões idiomáticas e vocabulário atual',
        'Preparação para exames internacionais'
      ]
    },
    {
      id: 'spanish',
      name: 'Espanhol',
      icon: '🇪🇸',
      color: 'bg-trilingue-orange',
      description: 'Aprenda o segundo idioma mais falado no mundo, essencial para quem deseja expandir horizontes.',
      features: [
        'Foco em comunicação para viagens e trabalho',
        'Diferenças entre espanhol da Espanha e América Latina',
        'Cultura hispânica integrada às aulas',
        'Método conversacional desde a primeira aula'
      ]
    }
  ];

  return (
    <section id="languages" className="section-padding bg-trilingue-gray">
      <div className="container mx-auto">
        <h2 className="section-title">Nossos Idiomas</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Oferecemos cursos completos e personalizados em dois dos idiomas mais importantes do mundo. 
          Escolha o que melhor atende suas necessidades e objetivos.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {languages.map((language) => (
            <Card key={language.id} className="language-card-hover border-none shadow-lg overflow-hidden">
              <div className={`h-2 ${language.color} w-full`}></div>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{language.icon}</span>
                  <CardTitle className="text-2xl">{language.name}</CardTitle>
                </div>
                <CardDescription className="text-base">{language.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {language.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`h-5 w-5 rounded-full ${language.color} flex items-center justify-center text-white text-xs mr-3 mt-0.5`}>✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${language.id === 'english' ? 'bg-trilingue-blue hover:bg-trilingue-lightblue' : 'bg-trilingue-orange hover:bg-trilingue-lightorange'} text-white`}>
                  <a href="#contact">Saiba Mais</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Não sabe qual idioma escolher?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Entre em contato para uma consulta gratuita onde podemos discutir seus objetivos e recomendar o melhor caminho para você.
          </p>
          <Button className="bg-trilingue-blue hover:bg-trilingue-lightblue text-white">
            <a href="#contact">Agende uma Consulta Gratuita</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Languages;
