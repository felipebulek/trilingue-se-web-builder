
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    language: 'Não selecionado'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Display success toast
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      language: 'Não selecionado'
    });
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="h-6 w-6" />,
      url: 'https://wa.me/5500000000000', // Replace with actual number
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-6 w-6" />,
      url: 'https://instagram.com/trilingue_se', // Replace with actual account
      color: 'bg-pink-500 hover:bg-pink-600'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-6 w-6" />,
      url: 'https://linkedin.com/in/ana-bulek', // Replace with actual profile
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Tire suas dúvidas, solicite informações sobre valores ou agende sua primeira aula experimental.
          Estamos à disposição para ajudar você em sua jornada de aprendizado.
        </p>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome completo</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700">Idioma de interesse</label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  >
                    <option value="Não selecionado">Selecione um idioma</option>
                    <option value="Inglês">Inglês</option>
                    <option value="Espanhol">Espanhol</option>
                    <option value="Ambos">Ambos</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem, dúvida ou solicitação..."
                  rows={5}
                  required
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="w-full bg-trilingue-blue hover:bg-trilingue-lightblue text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div className="md:col-span-2 flex flex-col justify-between">
            <div className="bg-trilingue-gray p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-trilingue-blue">Informações de Contato</h3>
              <div className="space-y-4">
                <p className="flex items-start">
                  <span className="font-semibold mr-2">E-mail:</span>
                  <a href="mailto:contato@trilingue-se.com.br" className="text-trilingue-blue hover:underline">
                    contato@trilingue-se.com.br
                  </a>
                </p>
                <p className="flex items-start">
                  <span className="font-semibold mr-2">Horário:</span>
                  <span>Segunda a Sexta, 8h às 20h</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-white ${link.color} transition-all`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
