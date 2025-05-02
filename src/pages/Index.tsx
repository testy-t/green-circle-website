
import { useState } from 'react';

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-yellow-600">Жёлтый круг</h1>
        <p className="text-xl text-gray-600">Символ радости и оптимизма</p>
      </div>
      
      <div 
        className={`w-64 h-64 rounded-full bg-yellow-400 shadow-lg transition-all duration-300 ${isHovered ? 'scale-110 bg-yellow-300' : ''}`}
        style={{
          backgroundImage: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      
      <div className="mt-8 max-w-md text-center text-gray-600">
        <p>Нажмите на круг или наведите курсор, чтобы увидеть эффект.</p>
      </div>
    </div>
  );
};

export default Index;
