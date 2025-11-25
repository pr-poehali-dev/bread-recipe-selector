import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import RecipeDetail from '@/components/RecipeDetail';

interface Recipe {
  id: number;
  title: string;
  description: string;
  time: string;
  difficulty: string;
  image: string;
  servings: string;
  ingredients: string[];
  steps: string[];
}

const Index = () => {
  const [activeSection, setActiveSection] = useState<'recipes' | 'tips'>('recipes');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const recipes: Recipe[] = [
    {
      id: 1,
      title: 'Классический домашний хлеб',
      description: 'Ароматный хлеб с хрустящей корочкой и мягким мякишем. Идеален для завтрака с маслом и джемом.',
      time: '3 часа',
      difficulty: 'Средне',
      image: 'https://cdn.poehali.dev/projects/c076827b-3010-4779-8139-57da334bf85d/files/1ab50615-df17-422e-b8b2-413d3d28a7e5.jpg',
      servings: '1 буханка (8-10 порций)',
      ingredients: [
        '500 г пшеничной муки высшего сорта',
        '300 мл тёплой воды',
        '10 г сухих дрожжей (или 25 г свежих)',
        '1 ст.л. сахара',
        '1 ч.л. соли',
        '2 ст.л. растительного масла',
      ],
      steps: [
        'Растворите дрожжи и сахар в тёплой воде. Дайте постоять 10 минут до появления пены.',
        'Просейте муку в большую миску, добавьте соль. Влейте дрожжевую смесь и масло.',
        'Замесите тесто в течение 10-15 минут до гладкости и эластичности.',
        'Накройте миску полотенцем и оставьте в тёплом месте на 1-1.5 часа до увеличения в 2 раза.',
        'Обомните тесто, сформируйте батон. Выложите в смазанную форму.',
        'Дайте подойти ещё 30-40 минут. Сделайте надрезы на поверхности.',
        'Выпекайте при 200°C около 30-35 минут до золотистой корочки.',
      ],
    },
    {
      id: 2,
      title: 'Французские круассаны',
      description: 'Воздушные круассаны со слоёным тестом и золотистой корочкой. Настоящий вкус Парижа у вас дома.',
      time: '4 часа',
      difficulty: 'Сложно',
      image: 'https://cdn.poehali.dev/projects/c076827b-3010-4779-8139-57da334bf85d/files/19b79b9d-966d-4dd9-a893-21ad1c88257f.jpg',
      servings: '12 круассанов',
      ingredients: [
        '500 г пшеничной муки',
        '250 мл молока',
        '60 г сахара',
        '10 г соли',
        '20 г свежих дрожжей',
        '250 г сливочного масла (холодного)',
        '1 яйцо для смазывания',
      ],
      steps: [
        'Подогрейте молоко до 35°C, растворите дрожжи. Добавьте сахар и соль.',
        'Добавьте муку, замесите тесто. Охладите в холодильнике 30 минут.',
        'Раскатайте тесто в прямоугольник. Разложите на 2/3 поверхности масло тонкими пластами.',
        'Сделайте первое складывание: накройте масло тестом и раскатайте. Охладите 30 минут.',
        'Повторите складывание ещё 2 раза с охлаждением между ними.',
        'Раскатайте тесто толщиной 5 мм, нарежьте треугольники. Сверните в рулеты.',
        'Дайте подойти 1-2 часа. Смажьте яйцом и выпекайте при 190°C 15-18 минут.',
      ],
    },
    {
      id: 3,
      title: 'Плетёная хала',
      description: 'Традиционный праздничный хлеб с нежной текстурой. Красивый и невероятно вкусный.',
      time: '2.5 часа',
      difficulty: 'Средне',
      image: 'https://cdn.poehali.dev/projects/c076827b-3010-4779-8139-57da334bf85d/files/58144f3a-714e-43e2-9904-cffc213c71af.jpg',
      servings: '1 большая хала (10-12 порций)',
      ingredients: [
        '500 г пшеничной муки',
        '250 мл тёплой воды',
        '80 мл растительного масла',
        '2 яйца + 1 для смазывания',
        '80 г сахара',
        '10 г сухих дрожжей',
        '1 ч.л. соли',
        'Кунжут или мак для посыпки',
      ],
      steps: [
        'Растворите дрожжи в тёплой воде с 1 ч.л. сахара. Оставьте на 10 минут.',
        'Взбейте яйца с оставшимся сахаром и маслом. Добавьте дрожжевую смесь.',
        'Постепенно всыпьте муку и соль. Замесите мягкое тесто.',
        'Накройте и оставьте подходить 1 час в тёплом месте.',
        'Разделите тесто на 3-6 частей. Раскатайте в жгуты одинаковой длины.',
        'Сплетите косу, защипните концы. Выложите на противень.',
        'Дайте подойти 30 минут. Смажьте яйцом, посыпьте кунжутом.',
        'Выпекайте при 180°C 30-35 минут до золотистого цвета.',
      ],
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

  if (selectedRecipe) {
    return <RecipeDetail recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />;
  }

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
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border cursor-pointer"
                  onClick={() => setSelectedRecipe(recipe)}
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
                    <div className="flex justify-between items-center mb-4">
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
                    <Button className="w-full" variant="default">
                      <Icon name="ChefHat" size={18} className="mr-2" />
                      Смотреть рецепт
                    </Button>
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
