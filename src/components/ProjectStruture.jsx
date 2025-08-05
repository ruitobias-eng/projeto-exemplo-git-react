import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Folder, FileText, Code, Image, Settings } from 'lucide-react';

const ProjectStructure = () => {
  const fileStructure = [
    {
      name: 'projeto-exemplo-git-react/',
      type: 'folder',
      icon: Folder,
      children: [
        {
          name: 'public/',
          type: 'folder',
          icon: Folder,
          children: [
            { name: 'favicon.ico', type: 'file', icon: Image },
          ]
        },
        {
          name: 'src/',
          type: 'folder',
          icon: Folder,
          children: [
            {
              name: 'assets/',
              type: 'folder',
              icon: Folder,
              children: [
                { name: 'react.svg', type: 'file', icon: Image },
              ]
            },
            {
              name: 'components/',
              type: 'folder',
              icon: Folder,
              children: [
                { name: 'Header.jsx', type: 'file', icon: Code },
                { name: 'InteractiveButton.jsx', type: 'file', icon: Code },
                { name: 'GitCommands.jsx', type: 'file', icon: Code },
                {
                  name: 'ui/',
                  type: 'folder',
                  icon: Folder,
                  children: [
                    { name: 'button.jsx', type: 'file', icon: Code },
                    { name: 'card.jsx', type: 'file', icon: Code },
                  ]
                }
              ]
            },
            { name: 'App.jsx', type: 'file', icon: Code },
            { name: 'App.css', type: 'file', icon: Code },
            { name: 'main.jsx', type: 'file', icon: Code },
          ]
        },
        { name: 'package.json', type: 'file', icon: Settings },
        { name: 'vite.config.js', type: 'file', icon: Settings },
        { name: 'README.md', type: 'file', icon: FileText },
        { name: '.gitignore', type: 'file', icon: FileText },
      ]
    }
  ];

  const renderFileTree = (items, level = 0) => {
    return items.map((item, index) => {
      const IconComponent = item.icon;
      const indent = level * 24;

      return (
        <div key={index}>
          <div 
            className="flex items-center py-1 hover:bg-gray-50 rounded"
            style={{ paddingLeft: `${indent + 8}px` }}
          >
            <IconComponent 
              className={`h-4 w-4 mr-2 ${
                item.type === 'folder' 
                  ? 'text-blue-600' 
                  : item.name.endsWith('.jsx') || item.name.endsWith('.js')
                    ? 'text-yellow-600'
                    : item.name.endsWith('.css')
                    ? 'text-purple-600'
                    : item.name.endsWith('.json')
                    ? 'text-green-600'
                    : 'text-gray-600'
              }`} 
            />
            <span className={`text-sm ${
              item.type === 'folder' ? 'font-medium text-gray-800' : 'text-gray-700'
            }`}>
              {item.name}
            </span>
          </div>
          {item.children && renderFileTree(item.children, level + 1)}
        </div>
      );
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Folder className="h-5 w-5 text-blue-600" />
          <span>Estrutura do Projeto React</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
          {renderFileTree(fileStructure)}
        </div>
        
        <div className="mt-6 space-y-3">
          <h4 className="font-semibold text-gray-800">Principais Diretórios:</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-start space-x-2">
              <Folder className="h-4 w-4 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">src/components/</p>
                <p className="text-xs text-gray-600">Componentes React reutilizáveis</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Folder className="h-4 w-4 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">src/assets/</p>
                <p className="text-xs text-gray-600">Imagens e recursos estáticos</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Code className="h-4 w-4 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">App.jsx</p>
                <p className="text-xs text-gray-600">Componente principal da aplicação</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Settings className="h-4 w-4 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">package.json</p>
                <p className="text-xs text-gray-600">Dependências e scripts do projeto</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectStructure;

