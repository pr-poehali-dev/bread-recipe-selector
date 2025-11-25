import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'recipes' | 'tips'>('recipes');

  const recipes = [
    {
      id: 1,
      title: 'Классический домашний хлеб',
      description: 'Ароматный хлеб с хрустящей корочкой и мягким мякишем. Идеален для завтрака с маслом и джемом.',
      time: '3 часа',
      difficulty: 'Средне',
      image: 'https://cdn.poehali.dev/projects/c076827b-3010-4779-8139-57da334bf85d/files/1ab50615-df17-422e-b8b2-413d3d28a7e5.jpg',
    },
    {
      id: 2,
      title: 'Французские круассаны',
      description: 'Воздушные круассаны со слоёным тестом и золотистой корочкой. Настоящий вкус Парижа у вас дома.',
      time: '4 часа',
      difficulty: 'Сложно',
      image: 'https://cdn.poehali.dev/projects/c076827b-3010-4779-8139-57da334bf85d/files/19b79b9d-966d-4dd9-a893-21ad1c88257f.jpg',
    },
    {
      id: 3,
      title: 'Плетёная хала',
      description: 'Традиционный праздничный хлеб с нежной текстурой. Красивый и невероятно вкусный.',
      time: '2.5 часа',
      difficulty: 'Средне',
      image: 'https://cdn.poehali.dev/projects/c076827b-3010-4779-8139-57da334bf85d/files/58144f3a-714e-43e2-9904-cffc213c71af.jpg',
    },
  ];

  const tips = [
    {
      id: 1,
      icon: 'Thermometer',
      title: 'Правильная температура',
      description: 'Используйте тёплую воду (35-40°C) для активации дрожжей. Слишком горячая вода убьёт дрожжи, холодная — замедлит процесс.',
    },
    {
      id: 2,
      icon: 'Timer',
      title: 'Время на расстойку',
      description: 'Не торопитесь! Дайте тесту достаточно времени подняться. Обычно это 1-2 часа в тёплом месте.',
    },
    {
      id: 3,
      icon: 'Hand',
      title: 'Замес теста',
      description: 'Месите тесто не менее 10 минут. Оно должно стать гладким, эластичным и немного липким к рукам.',
    },
    {
      id: 4,
      icon: 'Flame',
      title: 'Секрет хрустящей корочки',
      description: 'Поставьте в духовку ёмкость с водой — пар создаст идеальную хрустящую корочку на хлебе.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Wheat" size={32} className="text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Домашняя Выпечка</h1>
            </div>
            <nav className="flex gap-2">
              <button
                onClick={() => setActiveSection('recipes')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeSection === 'recipes'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Рецепты
              </button>
              <button
                onClick={() => setActiveSection('tips')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeSection === 'tips'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Советы
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'recipes' && (
          <div className="animate-fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold mb-3 text-foreground">Лучшие рецепты выпечки</h2>
              <p className="text-lg text-muted-foreground">
                Проверенные рецепты для создания ароматного хлеба и выпечки дома
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {recipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{recipe.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{recipe.description}</p>
                    <Separator className="my-4" />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{recipe.time}</span>
                      </div>
                      <Badge
                        variant={recipe.difficulty === 'Сложно' ? 'destructive' : 'secondary'}
                        className="font-medium"
                      >
                        {recipe.difficulty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'tips' && (
          <div className="animate-fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold mb-3 text-foreground">Полезные советы</h2>
              <p className="text-lg text-muted-foreground">
                Секреты идеальной выпечки от опытных пекарей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
              {tips.map((tip) => (
                <Card
                  key={tip.id}
                  className="hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-primary/50"
                >
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={tip.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">{tip.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            Создано с любовью к домашней выпечке 🥖
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
