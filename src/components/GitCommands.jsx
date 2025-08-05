import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Terminal, Copy, Check } from 'lucide-react';

const GitCommands = () => {
  const [copiedCommand, setCopiedCommand] = useState('');

  const gitCommands = [
    {
      category: 'Inicialização',
      commands: [
        { command: 'git init', description: 'Inicializa um novo repositório Git' },
        { command: 'git clone <url>', description: 'Clona um repositório remoto' },
      ]
    },
    {
      category: 'Básicos',
      commands: [
        { command: 'git add .', description: 'Adiciona todos os arquivos ao staging' },
        { command: 'git commit -m "mensagem"', description: 'Cria um commit com mensagem' },
        { command: 'git status', description: 'Mostra o status do repositório' },
        { command: 'git log', description: 'Exibe o histórico de commits' },
      ]
    },
    {
      category: 'Branches',
      commands: [
        { command: 'git branch', description: 'Lista todas as branches' },
        { command: 'git checkout -b <nome>', description: 'Cria e muda para nova branch' },
        { command: 'git merge <branch>', description: 'Mescla uma branch na atual' },
      ]
    },
    {
      category: 'Remotos',
      commands: [
        { command: 'git push origin main', description: 'Envia commits para o repositório remoto' },
        { command: 'git pull origin main', description: 'Puxa alterações do repositório remoto' },
      ]
    }
  ];

  const copyToClipboard = async (command) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(''), 2000);
    } catch (err) {
      console.error('Erro ao copiar comando:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Comandos Git Essenciais</h3>
        <p className="text-gray-600">Clique nos comandos para copiá-los</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {gitCommands.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Terminal className="h-5 w-5 text-blue-600" />
                <span>{category.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {category.commands.map((cmd, cmdIndex) => (
                <div key={cmdIndex} className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-blue-600">
                      {cmd.command}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(cmd.command)}
                      className="h-8 w-8 p-0"
                    >
                      {copiedCommand === cmd.command ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600">{cmd.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {copiedCommand && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center space-x-2">
            <Check className="h-4 w-4" />
            <span className="text-sm">Comando copiado!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitCommands;

