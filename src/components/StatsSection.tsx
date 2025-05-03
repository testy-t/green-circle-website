
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const StatsSection = () => {
  const stats = [
    { count: '300+', label: 'Успешных проектов', description: 'Завершенные маркетинговые кампании с измеримым результатом' },
    { count: '150%', label: 'Средний рост охвата', description: 'Увеличение органического охвата клиентов в первые 3 месяца' },
    { count: '30%', label: 'Рост конверсии', description: 'Среднее увеличение конверсии из социальных сетей' },
    { count: '45+', label: 'Постоянных клиентов', description: 'Компании, которые доверяют нам свой маркетинг на постоянной основе' }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div className="text-center cursor-help">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.count}</h3>
                  <p className="text-white text-opacity-80">{stat.label}</p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{stat.label}</h4>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
