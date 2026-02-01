import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courses = [
    {
      title: "Scratch Junior",
      description: "Первые шаги в программировании",
      age: "5-7 лет",
      icon: "Sparkles",
      duration: "3 месяца",
      lessons: "24 урока"
    },
    {
      title: "Scratch",
      description: "Создание игр и анимации",
      age: "7-9 лет",
      icon: "Gamepad2",
      duration: "4 месяца",
      lessons: "32 урока"
    },
    {
      title: "Python для детей",
      description: "Основы программирования",
      age: "10-12 лет",
      icon: "Code2",
      duration: "6 месяцев",
      lessons: "48 уроков"
    },
    {
      title: "Веб-разработка",
      description: "HTML, CSS, JavaScript",
      age: "12-14 лет",
      icon: "Globe",
      duration: "6 месяцев",
      lessons: "48 уроков"
    }
  ];

  const plans = [
    {
      name: "Пробный урок",
      price: "Бесплатно",
      period: "1 занятие",
      features: [
        "Знакомство с платформой",
        "Оценка уровня ребёнка",
        "Индивидуальная консультация",
        "Подбор программы обучения"
      ],
      popular: false,
      cta: "Записаться бесплатно"
    },
    {
      name: "Стандарт",
      price: "6 990",
      period: "8 занятий / месяц",
      features: [
        "2 занятия в неделю по 60 мин",
        "Группа до 6 детей",
        "Доступ к платформе 24/7",
        "Домашние задания",
        "Обратная связь от педагога",
        "Сертификат об окончании"
      ],
      popular: true,
      cta: "Выбрать тариф"
    },
    {
      name: "Интенсив",
      price: "12 990",
      period: "16 занятий / месяц",
      features: [
        "4 занятия в неделю по 60 мин",
        "Мини-группа до 4 детей",
        "Доступ к платформе 24/7",
        "Персональные проекты",
        "Личный ментор",
        "Участие в хакатонах",
        "Приоритетная поддержка",
        "Сертификат об окончании"
      ],
      popular: false,
      cta: "Выбрать тариф"
    }
  ];

  const stats = [
    { value: "2500+", label: "Учеников" },
    { value: "25+", label: "Преподавателей" },
    { value: "15", label: "Курсов" },
    { value: "99%", label: "Довольных родителей" }
  ];

  const features = [
    {
      icon: "Laptop",
      title: "Онлайн-обучение",
      description: "Занимайтесь из любой точки мира в удобное время"
    },
    {
      icon: "Users",
      title: "Малые группы",
      description: "Максимум внимания каждому ребёнку"
    },
    {
      icon: "Trophy",
      title: "Реальные проекты",
      description: "Портфолио из собственных игр и приложений"
    },
    {
      icon: "Award",
      title: "Сертификаты",
      description: "Документ об окончании курса"
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Всегда на связи для помощи"
    },
    {
      icon: "Rocket",
      title: "Современные методы",
      description: "Игровой формат и геймификация"
    }
  ];

  const reviews = [
    {
      name: "Мария Соколова",
      role: "Мама Артёма, 9 лет",
      text: "Сын в восторге! За 3 месяца создал уже 5 игр в Scratch. Теперь мечтает стать разработчиком игр. Спасибо педагогам!",
      rating: 5
    },
    {
      name: "Дмитрий Волков",
      role: "Папа Софии, 11 лет",
      text: "Отличная школа! Дочь научилась программировать на Python и участвовала в хакатоне. Очень довольны результатами.",
      rating: 5
    },
    {
      name: "Елена Петрова",
      role: "Мама Максима, 8 лет",
      text: "Ребёнок ждёт каждое занятие с нетерпением! Преподаватели умеют найти подход к детям. Видим реальный прогресс.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-pink-50 border-b border-pink-100 py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={16} />
              <span>info@elemschool.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>Mon-Fri: 8 am - 2pm</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Icon name="Facebook" size={18} className="cursor-pointer hover:text-primary" />
            <svg className="w-4 h-4 cursor-pointer hover:text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <Icon name="Instagram" size={18} className="cursor-pointer hover:text-primary" />
          </div>
        </div>
      </div>

      <header className="sticky top-0 bg-secondary z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-black text-white">
              Hello Code
            </div>
            <nav className="hidden md:flex gap-8 items-center">
              <a href="#home" className="text-white hover:text-pink-100 transition-colors font-medium">Home</a>
              <a href="#classes" className="text-white hover:text-pink-100 transition-colors font-medium">Classes</a>
              <a href="#about" className="text-white hover:text-pink-100 transition-colors font-medium underline decoration-4">About Us</a>
              <a href="#gallery" className="text-white hover:text-pink-100 transition-colors font-medium">Gallery</a>
              <a href="#news" className="text-white hover:text-pink-100 transition-colors font-medium">News</a>
              <a href="#contact" className="text-white hover:text-pink-100 transition-colors font-medium">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <Icon name="User" size={24} className="text-white cursor-pointer" />
              <div className="text-white">
                <span className="hover:underline cursor-pointer font-medium">Sign up</span>
                <span className="mx-2">|</span>
                <span className="hover:underline cursor-pointer font-medium">Log in</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="relative bg-secondary py-20 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,140,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="absolute top-16 left-8 animate-float">
          <Icon name="Pencil" size={44} className="text-blue-500" />
        </div>
        <div className="absolute top-32 left-24 animate-float" style={{ animationDelay: '0.5s' }}>
          <Icon name="Star" size={28} className="text-purple-500 fill-purple-500" />
        </div>
        <div className="absolute top-12 left-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <Icon name="Star" size={24} className="text-purple-600 fill-purple-600" />
        </div>
        <div className="absolute bottom-24 left-16 animate-float" style={{ animationDelay: '1.5s' }}>
          <Icon name="Ruler" size={48} className="text-yellow-500" />
        </div>
        <div className="absolute top-1/2 left-12 animate-float" style={{ animationDelay: '0.8s' }}>
          <Icon name="Paperclip" size={40} className="text-orange-600" />
        </div>

        <div className="absolute top-20 right-24 animate-float" style={{ animationDelay: '0.3s' }}>
          <Icon name="Star" size={32} className="text-purple-500 fill-purple-500" />
        </div>
        <div className="absolute top-12 right-1/4 animate-float" style={{ animationDelay: '1.2s' }}>
          <Icon name="Paperclip" size={36} className="text-orange-500" />
        </div>
        <div className="absolute bottom-28 right-32 animate-float" style={{ animationDelay: '0.7s' }}>
          <Icon name="Alarm" size={52} className="text-cyan-500" />
        </div>
        <div className="absolute bottom-40 right-16 animate-float" style={{ animationDelay: '1.8s' }}>
          <Icon name="Bell" size={44} className="text-pink-500" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-white rounded-[2rem] px-8 py-4 border-4 border-black">
                <h2 className="text-5xl font-black text-accent">About Us</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-800 max-w-xl">
                Hello Code — это онлайн-школа программирования для детей от 5 до 14 лет. Мы учим создавать игры, сайты и приложения через игру и творчество. Наша миссия — вдохновить следующее поколение разработчиков!
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-full"
              >
                See More
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -top-8 left-4 w-36 h-36 animate-float" style={{ animationDelay: '0.5s' }}>
                <img src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/1f2eac2c-19c1-4af8-b62a-6ae8aab4df2b.jpg" alt="Coding" className="w-full h-full object-contain drop-shadow-xl" />
              </div>
              
              <div className="absolute -top-4 right-12 w-28 h-28 animate-float" style={{ animationDelay: '1s' }}>
                <Icon name="BookOpen" size={110} className="text-purple-400" />
              </div>

              <div className="absolute bottom-24 -left-8 w-40 h-40 animate-float" style={{ animationDelay: '1.5s' }}>
                <Icon name="Backpack" size={150} className="text-cyan-400" />
              </div>

              <div className="absolute bottom-8 left-36 w-32 h-32 animate-float" style={{ animationDelay: '0.8s' }}>
                <Icon name="Mail" size={120} className="text-yellow-400" />
              </div>

              <div className="relative ml-32">
                <div className="w-80 h-96 rounded-[8rem] overflow-hidden border-8 border-black shadow-2xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/53bb2540-7815-45d8-aacd-8768673be35b.jpg"
                    alt="Happy student"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-black mb-4 text-gray-800">Почему Hello Code?</h2>
            <p className="text-xl text-muted-foreground">
              Мы создаём идеальные условия для обучения программированию
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-4 border-gray-800 hover:shadow-2xl transition-all rounded-3xl bg-gradient-to-br from-orange-50 to-pink-50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 border-4 border-gray-800">
                    <Icon name={feature.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="classes" className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-black mb-4 text-gray-800">Наши курсы</h2>
            <p className="text-xl text-muted-foreground">
              Программы для каждого возраста и уровня подготовки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="border-4 border-gray-800 hover:scale-105 transition-all rounded-3xl bg-white overflow-hidden">
                <div className={`h-24 flex items-center justify-center ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-purple-400 to-pink-400' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-blue-400 to-cyan-400' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-orange-400 to-red-400' :
                  'bg-gradient-to-br from-green-400 to-emerald-400'
                }`}>
                  <Icon name={course.icon} className="text-white" size={48} />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                    <Badge className="bg-secondary text-white border-2 border-gray-800">{course.age}</Badge>
                  </div>
                  <CardDescription className="text-base font-medium">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BookOpen" size={16} className="text-primary" />
                    <span>{course.lessons}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-bold border-2 border-gray-800 rounded-full">
                    Узнать больше
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-black mb-4 text-gray-800">Галерея работ учеников</h2>
            <p className="text-xl text-muted-foreground">
              Посмотрите, какие крутые проекты создают наши студенты!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/9e261ce0-2dc6-4546-920e-bf5fd25d8243.jpg"
                alt="Scratch game"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Игра "Космическое приключение"</CardTitle>
                <CardDescription>Создана на Scratch · Артём, 9 лет</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/8b165a4e-2aa8-4fa0-9daf-6f900c081e5b.jpg"
                alt="Website"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Сайт о любимых животных</CardTitle>
                <CardDescription>HTML/CSS · София, 12 лет</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/b2e8b4f7-7056-4c9e-813c-5cf6af45fffb.jpg"
                alt="Python code"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Игра "Змейка" на Python</CardTitle>
                <CardDescription>Python · Максим, 11 лет</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/9e3842c9-e584-43c5-8e1c-8b5810745b1a.jpg"
                alt="Mobile app"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Мобильное приложение-квест</CardTitle>
                <CardDescription>App Design · Алиса, 13 лет</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/36b4b239-c0be-482a-9211-8ce50f111341.jpg"
                alt="Game character"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Дизайн персонажа для игры</CardTitle>
                <CardDescription>Game Design · Даша, 10 лет</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/a47279de-6e38-46d4-bc7b-d7ec06fe1421.jpg"
                alt="Hackathon"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Хакатон Hello Code 2024</CardTitle>
                <CardDescription>Командный проект · Группа 12-14 лет</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-bold text-lg px-10 py-6 rounded-full border-2 border-gray-800">
              Смотреть все проекты
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-black mb-4 text-gray-800">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground">
              Выберите удобный формат обучения для вашего ребёнка
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border-4 border-gray-800 transition-all rounded-3xl overflow-hidden ${
                  plan.popular ? 'scale-105 shadow-2xl' : 'hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-primary to-orange-500 text-white text-center py-3 font-bold text-lg border-b-4 border-gray-800">
                    🔥 Самый популярный
                  </div>
                )}
                <CardHeader className="bg-white">
                  <CardTitle className="text-3xl font-black">{plan.name}</CardTitle>
                  <div className="mt-4">
                    {plan.price === "Бесплатно" ? (
                      <span className="text-5xl font-black text-primary">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-5xl font-black text-primary">{plan.price}</span>
                        <span className="text-2xl text-muted-foreground ml-2">₽</span>
                      </>
                    )}
                  </div>
                  <CardDescription className="text-lg font-semibold mt-2">{plan.period}</CardDescription>
                </CardHeader>
                <CardContent className="bg-gradient-to-br from-orange-50 to-pink-50 pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="bg-white">
                  <Button 
                    className={`w-full font-bold text-lg py-6 rounded-full border-2 border-gray-800 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 text-white' 
                        : 'bg-white hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-black mb-4 text-gray-800">Отзывы родителей</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас родители наших учеников
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-4 border-gray-800 hover:shadow-xl transition-all rounded-3xl bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={24} />
                    ))}
                  </div>
                  <CardTitle className="text-xl font-bold">{review.name}</CardTitle>
                  <CardDescription className="text-sm font-semibold">{review.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-gray-800">Запишитесь на пробный урок</h2>
            <p className="text-xl text-muted-foreground">
              Бесплатное первое занятие для знакомства с платформой
            </p>
          </div>
          <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-primary to-orange-500 p-8 text-white">
                <h3 className="text-3xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} />
                    <div>
                      <div className="font-bold text-lg">Телефон</div>
                      <div className="text-pink-100">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} />
                    <div>
                      <div className="font-bold text-lg">Email</div>
                      <div className="text-pink-100">hello@hellocode.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MessageCircle" size={24} />
                    <div>
                      <div className="font-bold text-lg">Telegram</div>
                      <div className="text-pink-100">@hellocode_support</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} />
                    <div>
                      <div className="font-bold text-lg">Часы работы</div>
                      <div className="text-pink-100">Пн-Вс: 10:00 - 20:00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-bold block mb-2">Имя ребёнка *</label>
                    <input 
                      type="text" 
                      placeholder="Введите имя"
                      className="w-full px-4 py-3 border-2 border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold block mb-2">Возраст *</label>
                    <input 
                      type="number" 
                      placeholder="Сколько лет?"
                      className="w-full px-4 py-3 border-2 border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold block mb-2">Телефон родителя *</label>
                    <input 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 border-2 border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold block mb-2">Email *</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-bold text-lg py-6 rounded-full border-2 border-gray-800">
                    Записаться бесплатно 🚀
                  </Button>
                  <p className="text-xs text-center text-gray-600">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-black mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Hello Code
              </div>
              <p className="text-gray-400">
                Онлайн-школа программирования для детей от 5 до 14 лет
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Курсы</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">Scratch Junior</li>
                <li className="hover:text-white cursor-pointer">Scratch</li>
                <li className="hover:text-white cursor-pointer">Python</li>
                <li className="hover:text-white cursor-pointer">Веб-разработка</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">О школе</li>
                <li className="hover:text-white cursor-pointer">Преподаватели</li>
                <li className="hover:text-white cursor-pointer">Отзывы</li>
                <li className="hover:text-white cursor-pointer">Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Социальные сети</h3>
              <div className="flex gap-4">
                <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
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