
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-24 right-1/3 w-72 h-72 bg-indigo-300 rounded-full filter blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Создаем <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">цифровые</span> истории, которые продают
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              MRKT — маркетинговое агентство полного цикла. Мы помогаем брендам захватывать внимание в российских социальных сетях и конвертировать его в продажи.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline">
                Смотреть кейсы
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-bold text-black">20+</span> довольных клиентов за последний год
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl transform rotate-3 shadow-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <img 
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&q=85&w=1920&h=1080&crop=entropy&cs=srgb" 
                  alt="Маркетинг в социальных сетях" 
                  className="w-72 h-72 md:w-88 md:h-88 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
