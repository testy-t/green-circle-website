
import { useState } from 'react';

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-purple-700">Фиолетовый круг</h1>
        <p className="text-xl text-gray-600">Символ творчества и вдохновения</p>
      </div>
      
      <div 
        className={`w-64 h-64 rounded-full bg-purple-500 shadow-lg transition-all duration-300 ${isHovered ? 'scale-110 bg-purple-400' : ''}`}
        style={{
          backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #7e22ce 100%)'
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
