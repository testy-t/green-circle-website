
import { useState } from 'react';

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-red-700">Красный круг</h1>
        <p className="text-xl text-gray-600">Символ энергии и страсти</p>
      </div>
      
      <div 
        className={`w-64 h-64 rounded-full bg-red-500 shadow-lg transition-all duration-300 ${isHovered ? 'scale-110 bg-red-400' : ''}`}
        style={{
          backgroundImage: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)'
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
