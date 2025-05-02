
import { useState } from 'react';

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-green-700">Зеленый круг</h1>
        <p className="text-xl text-gray-600">Символ гармонии и равновесия</p>
      </div>
      
      <div 
        className={`w-64 h-64 rounded-full bg-green-500 shadow-lg transition-all duration-300 ${isHovered ? 'scale-110 bg-green-400' : ''}`}
        style={{
          backgroundImage: 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)'
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
