import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Star, Zap, Coffee } from 'lucide-react';

const InteractiveButton = () => {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const messages = [
    { text: 'Ótimo! Você clicou no botão!', icon: Sparkles },
    { text: 'React + Git = Combinação perfeita!', icon: Heart },
    { text: 'Continue explorando o desenvolvimento!', icon: Star },
    { text: 'Componentes React são incríveis!', icon: Zap },
    { text: 'Parabéns por aprender React com Git!', icon: Coffee },
  ];

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
    setShowMessage(true);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const IconComponent = message.icon;

  return (
    <div className="space-y-4">
      <Button
        onClick={handleClick}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
      >
        <Sparkles className="h-5 w-5 mr-2" />
        Clique em mim! ({clickCount})
      </Button>

      {showMessage && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="flex items-center space-x-2">
            {IconComponent && <IconComponent className="h-5 w-5" />}
            <span className="font-medium">{message.text}</span>
          </div>
          <p className="text-sm mt-1 opacity-90">Clique #{clickCount}</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveButton;

