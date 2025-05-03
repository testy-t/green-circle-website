
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram, MessageCircle, TrendingUp, BarChart3, Users, Video } from 'lucide-react';

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
    <CardHeader>
      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardContent>
  </Card>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <Instagram className="text-purple-600 w-7 h-7" />,
      title: 'ВКонтакте и Instagram*',
      description: 'Создание и ведение аккаунтов, таргетированная реклама, работа с блогерами и лидерами мнений.'
    },
    {
      icon: <MessageCircle className="text-blue-600 w-7 h-7" />,
      title: 'Telegram-маркетинг',
      description: 'Создание и продвижение каналов, настройка ботов, работа с аудиторией и интерактивный контент.'
    },
    {
      icon: <Video className="text-red-500 w-7 h-7" />,
      title: 'Продвижение в RuTube и Дзен',
      description: 'Создание видеоконтента, ведение каналов, привлечение подписчиков и монетизация.'
    },
    {
      icon: <TrendingUp className="text-green-600 w-7 h-7" />,
      title: 'Аналитика и отчетность',
      description: 'Регулярный мониторинг эффективности, подробные отчеты, корректировка стратегии для достижения максимальных результатов.'
    },
    {
      icon: <BarChart3 className="text-orange-600 w-7 h-7" />,
      title: 'Контент-стратегия',
      description: 'Разработка уникальной стратегии контента, планирование публикаций, создание визуального стиля под российскую аудиторию.'
    },
    {
      icon: <Users className="text-indigo-600 w-7 h-7" />,
      title: 'Управление репутацией',
      description: 'Мониторинг упоминаний бренда в российских соцсетях, работа с отзывами, формирование положительного образа компании.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы помогаем брендам развиваться в российских социальных сетях и достигать своих бизнес-целей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="text-xs text-gray-500 mt-8 text-center">
          * Instagram принадлежит компании Meta, признанной экстремистской организацией и запрещенной на территории РФ
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
