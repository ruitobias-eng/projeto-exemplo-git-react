import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Code, BookOpen, Mail, ExternalLink, Star, GitBranch, Terminal } from 'lucide-react';

import Header from './components/Header.jsx';
import InteractiveButton from './components/InteractiveButton';
import GitCommands from './components/GitCommands.jsx';
import ProjectStructure from './components/ProjectStructure';

import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="pt-20">
        {/* Seção Home */}
        <section id="home" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                  <Github className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Bem-vindo ao Meu Projeto
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> React + Git</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Este é um projeto de exemplo para demonstrar o uso do Git com React, 
                incluindo componentes modernos, hooks e integração com controle de versão.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Code className="h-4 w-4 mr-2" />
                  React 18
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <GitBranch className="h-4 w-4 mr-2" />
                  Git
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Terminal className="h-4 w-4 mr-2" />
                  Vite
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Star className="h-4 w-4 mr-2" />
                  Tailwind CSS
                </Badge>
              </div>
              
              <InteractiveButton />
            </div>
          </div>
        </section>

        {/* Seção Sobre */}
        <section id="sobre" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Este Projeto</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Aprenda como integrar Git com desenvolvimento React através de exemplos práticos
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="h-6 w-6 text-blue-600" />
                    <span>Componentes React</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Demonstra o uso de hooks, componentes funcionais e gerenciamento de estado
                    em uma aplicação React moderna.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GitBranch className="h-6 w-6 text-green-600" />
                    <span>Controle de Versão</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Mostra como usar Git efetivamente em projetos React, incluindo branches,
                    commits e colaboração.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-6 w-6 text-purple-600" />
                    <span>Boas Práticas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Implementa padrões modernos de desenvolvimento, estrutura de projeto
                    organizada e código limpo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção Recursos */}
        <section id="recursos" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Recursos e Comandos</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comandos Git essenciais e estrutura do projeto React
              </p>
            </div>

            <div className="space-y-12">
              <GitCommands />
              <ProjectStructure />
            </div>
          </div>
        </section>

        {/* Seção Contato */}
        <section id="contato" className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Entre em Contato</h2>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">
                Tem dúvidas sobre Git ou React? Entre em contato conosco!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Mail className="h-4 w-4 mr-2" />
                  engenharia@dibitech.com.br
                </Button>
                
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Meu Primeiro Projeto React com Git. Todos os direitos reservados.</p>
          <p className="text-gray-400 mt-2">Criado com React, Vite e muito ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
