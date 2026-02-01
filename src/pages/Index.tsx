import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courses = [
    {
      title: "Scratch",
      description: "Создание игр и анимации",
      age: "7-9 лет",
      icon: "Gamepad2",
      color: "bg-gradient-to-br from-purple-400 to-pink-400"
    },
    {
      title: "Python",
      description: "Основы программирования",
      age: "10-12 лет",
      icon: "Code2",
      color: "bg-gradient-to-br from-blue-400 to-cyan-400"
    },
    {
      title: "Веб-разработка",
      description: "HTML, CSS, JavaScript",
      age: "12-14 лет",
      icon: "Globe",
      color: "bg-gradient-to-br from-orange-400 to-red-400"
    }
  ];

  const teachers = [
    {
      name: "Анна Петрова",
      role: "Senior преподаватель Python",
      experience: "8 лет опыта",
      image: "https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/e5adc7b5-0943-4ba8-a8b8-a9d8ce54a286.jpg"
    },
    {
      name: "Дмитрий Иванов",
      role: "Эксперт по Scratch",
      experience: "5 лет опыта",
      image: "https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/3d741dd4-b853-4fbd-a821-fe317e5139c4.jpg"
    }
  ];

  const plans = [
    {
      name: "Старт",
      price: "3 990",
      period: "4 занятия",
      features: [
        "1 занятие в неделю",
        "Группа до 8 детей",
        "Доступ к платформе",
        "Сертификат об окончании"
      ],
      popular: false
    },
    {
      name: "Оптимальный",
      price: "7 490",
      period: "8 занятий",
      features: [
        "2 занятия в неделю",
        "Группа до 6 детей",
        "Доступ к платформе",
        "Персональный проект",
        "Обратная связь от ментора",
        "Сертификат об окончании"
      ],
      popular: true
    },
    {
      name: "Профи",
      price: "13 990",
      period: "16 занятий",
      features: [
        "2 занятия в неделю",
        "Группа до 4 детей",
        "Безлимитный доступ к платформе",
        "3 персональных проекта",
        "Личный ментор",
        "Участие в хакатонах",
        "Сертификат об окончании"
      ],
      popular: false
    }
  ];

  const reviews = [
    {
      name: "Елена Смирнова",
      text: "Мой сын в восторге! За 2 месяца создал свою первую игру. Преподаватели умеют заинтересовать детей.",
      rating: 5
    },
    {
      name: "Александр Козлов",
      text: "Отличная школа! Дочь научилась программировать на Python и теперь хочет стать разработчиком.",
      rating: 5
    },
    {
      name: "Ирина Волкова",
      text: "Занятия проходят интересно, ребенок ждет каждый урок с нетерпением. Видим реальный прогресс!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hello Code
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-primary transition-colors">О школе</a>
              <a href="#courses" className="hover:text-primary transition-colors">Курсы</a>
              <a href="#teachers" className="hover:text-primary transition-colors">Преподаватели</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg4ODgiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
                Онлайн-школа программирования
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Научим вашего ребёнка{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  программировать
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Курсы для детей от 7 до 14 лет. Создавайте игры, сайты и приложения в игровой форме!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Записаться на пробный урок
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline">
                  Смотреть курсы
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Учеников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Преподавателей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных родителей</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/163df4af-f759-42b5-85e1-532d6bd0684c.jpg"
                alt="Дети учатся программировать"
                className="rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Почему Hello Code?</h2>
            <p className="text-lg text-muted-foreground">
              Мы делаем обучение программированию увлекательным и понятным для каждого ребёнка
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Sparkles",
                title: "Игровой формат",
                description: "Обучение через создание игр и интересных проектов"
              },
              {
                icon: "Users",
                title: "Маленькие группы",
                description: "До 8 человек — каждому ребёнку уделяется внимание"
              },
              {
                icon: "Trophy",
                title: "Реальные проекты",
                description: "Создавайте игры, сайты и приложения с нуля"
              },
              {
                icon: "Clock",
                title: "Гибкое расписание",
                description: "Выбирайте удобное время для занятий онлайн"
              },
              {
                icon: "Star",
                title: "Опытные педагоги",
                description: "Преподаватели с опытом работы с детьми от 5 лет"
              },
              {
                icon: "Award",
                title: "Сертификаты",
                description: "Документ об окончании курса для портфолио"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши курсы</h2>
            <p className="text-lg text-muted-foreground">
              Программы обучения для разных возрастов и уровней подготовки
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="border-0 overflow-hidden hover:shadow-2xl transition-all animate-fade-in">
                <div className={`${course.color} h-32 flex items-center justify-center`}>
                  <Icon name={course.icon} className="text-white" size={64} />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{course.title}</CardTitle>
                    <Badge variant="secondary">{course.age}</Badge>
                  </div>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>16 занятий по 60 минут</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>Личный проект в портфолио</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>Сертификат об окончании</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    Подробнее о курсе
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши преподаватели</h2>
            <p className="text-lg text-muted-foreground">
              Опытные специалисты, которые любят детей и своё дело
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in">
                <CardHeader>
                  <img 
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <CardTitle className="text-2xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="font-semibold text-primary mt-1">{teacher.role}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <Icon name="Briefcase" size={16} />
                      <span>{teacher.experience}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-lg text-muted-foreground">
              Выберите удобный пакет занятий для вашего ребёнка
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border-2 hover:shadow-2xl transition-all animate-fade-in ${
                  plan.popular ? 'border-primary shadow-xl scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-primary to-accent text-white text-center py-2 font-semibold">
                    Популярный выбор
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽</span>
                  </div>
                  <CardDescription className="text-base">{plan.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Отзывы родителей</h2>
            <p className="text-lg text-muted-foreground">
              Узнайте, что говорят о нас родители наших учеников
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all animate-fade-in">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-xl">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Ответим на все ваши вопросы и поможем выбрать курс
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">hello@hellocode.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MessageCircle" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-muted-foreground">@hellocode_support</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Часы работы</div>
                    <div className="text-muted-foreground">Пн-Вс: 10:00 - 20:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Запишитесь на пробный урок</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Имя ребёнка</label>
                    <input 
                      type="text" 
                      placeholder="Введите имя"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Возраст</label>
                    <input 
                      type="number" 
                      placeholder="Возраст ребёнка"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Телефон родителя</label>
                    <input 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    Записаться на пробный урок
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hello Code
              </div>
              <p className="text-gray-400">
                Онлайн-школа программирования для детей от 7 до 14 лет
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Scratch</li>
                <li>Python</li>
                <li>Веб-разработка</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li>О школе</li>
                <li>Преподаватели</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Youtube" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="MessageCircle" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Hello Code. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
