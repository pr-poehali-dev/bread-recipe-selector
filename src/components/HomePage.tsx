import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigateToRecipes: () => void;
}

const HomePage = ({ onNavigateToRecipes }: HomePageProps) => {
  const famousBakers = [
    {
      id: 1,
      name: 'Поль Боркюз',
      title: 'Мастер французской выпечки',
      period: '1926-2018',
      achievement: 'Легенда мировой кулинарии, создатель революционной "новой кухни". Боркюз возвёл французскую выпечку на новый уровень, соединив традиции с инновациями.',
      legacy: 'Автор более 30 кулинарных книг, наставник поколений шеф-поваров по всему миру.',
    },
    {
      id: 2,
      name: 'Пьер Эрме',
      title: 'Пикассо кондитерского искусства',
      period: '1961-н.в.',
      achievement: 'Революционер макарон, превративший простой французский десерт в произведение искусства. Его необычные сочетания вкусов изменили мир кондитерской выпечки.',
      legacy: 'Создал более 2000 уникальных рецептов, владеет сетью бутиков по всему миру.',
    },
    {
      id: 3,
      name: 'Лионель Пуалан',
      title: 'Хранитель французских традиций',
      period: '1945-2024',
      achievement: 'Основатель знаменитой парижской пекарни Poilâne. Возродил традиции приготовления хлеба на закваске и каменном поде, вернув моду на ремесленную выпечку.',
      legacy: 'Его круглый хлеб miche стал иконой французской гастрономии и поставляется в лучшие рестораны мира.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[600px] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/c076827b-3010-4779-8139-57da334bf85d/files/113ebc1e-23e5-47f9-8d11-6462ea055e7a.jpg"
          alt="Историческая пекарня"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
              Домашняя Выпечка
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              История искусства, передающегося из поколения в поколение
            </p>
            <Button 
              size="lg" 
              onClick={onNavigateToRecipes}
              className="animate-fade-in shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
            >
              <Icon name="BookOpen" size={24} className="mr-2" />
              Посмотреть рецепты
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">История выпечки</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              От древних печей до современных кондитерских — путешествие длиной в тысячелетия
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name="History" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">Древний мир</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Первые упоминания о хлебе датируются 8000 годом до н.э. Египтяне открыли процесс брожения, 
                  создав прародитель современного хлеба.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Castle" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">Средневековье</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Появление первых гильдий пекарей в Европе. Выпечка стала профессией, 
                  передающейся по наследству вместе с секретными рецептами.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">Новое время</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  XIX-XX века — золотой век французской выпечки. Круассаны, багеты, 
                  макароны становятся символами кулинарного искусства.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-accent/30 to-accent/10 border-accent/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Icon name="Quote" size={48} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-xl italic text-foreground leading-relaxed mb-4">
                    "Выпечка — это не просто смешивание ингредиентов. Это алхимия, превращающая 
                    простую муку в золото, это искусство, требующее терпения и любви."
                  </p>
                  <p className="text-muted-foreground font-medium">— Традиционная мудрость пекарей</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Легендарные мастера выпечки</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Люди, изменившие мир кулинарии и вдохновившие миллионы пекарей по всему миру
            </p>
          </div>

          <div className="space-y-8">
            {famousBakers.map((baker, index) => (
              <Card 
                key={baker.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border"
              >
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-5 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:col-start-4' : ''} aspect-square md:aspect-auto`}>
                      <img
                        src="https://cdn.poehali.dev/projects/c076827b-3010-4779-8139-57da334bf85d/files/2060a710-f165-4703-808a-4e628ec08c3b.jpg"
                        alt={baker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-3 p-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <h3 className="text-3xl font-bold text-foreground mb-2">{baker.name}</h3>
                        <div className="flex items-center gap-3 mb-1">
                          <Badge variant="secondary" className="text-sm">
                            {baker.title}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{baker.period}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Award" size={20} className="text-primary" />
                            <h4 className="font-bold text-foreground">Достижения</h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{baker.achievement}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Star" size={20} className="text-primary" />
                            <h4 className="font-bold text-foreground">Наследие</h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{baker.legacy}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-12">
              <Icon name="Heart" size={48} className="text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Станьте частью этой истории
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Каждый великий пекарь начинал с простого домашнего хлеба. 
                Начните свой путь с наших проверенных рецептов.
              </p>
              <Button 
                size="lg" 
                onClick={onNavigateToRecipes}
                className="text-lg px-8 py-6"
              >
                <Icon name="ChefHat" size={24} className="mr-2" />
                Начать готовить
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
