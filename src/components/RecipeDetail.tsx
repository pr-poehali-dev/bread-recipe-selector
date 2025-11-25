import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface RecipeDetailProps {
  recipe: {
    id: number;
    title: string;
    description: string;
    time: string;
    difficulty: string;
    image: string;
    servings: string;
    ingredients: string[];
    steps: string[];
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const RecipeDetail = ({ recipe, onBack, isFavorite, onToggleFavorite }: RecipeDetailProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <Button
          onClick={onBack}
          variant="secondary"
          className="absolute top-6 left-6 shadow-lg"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад
        </Button>
        <Button
          onClick={onToggleFavorite}
          variant="secondary"
          className="absolute top-6 right-6 shadow-lg"
        >
          <Icon 
            name="Heart" 
            size={20} 
            className={isFavorite ? 'fill-red-500 text-red-500' : ''}
          />
        </Button>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <Card className="bg-card/95 backdrop-blur-sm shadow-xl border-border">
          <CardContent className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">{recipe.title}</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {recipe.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg">
                <Icon name="Clock" size={20} className="text-primary" />
                <span className="font-medium">{recipe.time}</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg">
                <Icon name="Users" size={20} className="text-primary" />
                <span className="font-medium">{recipe.servings}</span>
              </div>
              <Badge
                variant={recipe.difficulty === 'Сложно' ? 'destructive' : 'secondary'}
                className="px-4 py-2 text-sm font-medium"
              >
                {recipe.difficulty}
              </Badge>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                  <Icon name="Calculator" size={24} className="text-primary" />
                  Пищевая ценность на 1 порцию
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Icon name="Flame" size={24} className="text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{recipe.calories}</div>
                    <div className="text-sm text-muted-foreground">ккал</div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Icon name="Beef" size={24} className="text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{recipe.protein}г</div>
                    <div className="text-sm text-muted-foreground">Белки</div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Icon name="Wheat" size={24} className="text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{recipe.carbs}г</div>
                    <div className="text-sm text-muted-foreground">Углеводы</div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Icon name="Droplet" size={24} className="text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{recipe.fat}г</div>
                    <div className="text-sm text-muted-foreground">Жиры</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                  <Icon name="ShoppingBasket" size={24} className="text-primary" />
                  Ингредиенты
                </h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                  <Icon name="ChefHat" size={24} className="text-primary" />
                  Приготовление
                </h2>
                <div className="space-y-6">
                  {recipe.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground pt-1 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="bg-accent/30 p-6 rounded-lg border border-accent">
              <div className="flex items-start gap-3">
                <Icon name="Lightbulb" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Совет от пекаря</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Для получения более хрустящей корочки, поставьте в духовку ёмкость с водой
                    на нижний уровень. Пар создаст идеальные условия для выпечки!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto px-4 py-8 flex gap-4 flex-wrap">
        <Button onClick={onBack} variant="outline" size="lg">
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Вернуться к рецептам
        </Button>
        <Button onClick={onToggleFavorite} variant="default" size="lg">
          <Icon 
            name="Heart" 
            size={20} 
            className={`mr-2 ${isFavorite ? 'fill-current' : ''}`}
          />
          {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        </Button>
      </div>
    </div>
  );
};

export default RecipeDetail;
