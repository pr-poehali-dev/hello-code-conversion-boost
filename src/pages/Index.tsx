import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const courses = [
    {
      title: "Scratch Junior",
      description: "Первые шаги в программировании для самых маленьких",
      age: "5-7 лет",
      icon: "Sparkles",
      duration: "3 месяца",
      lessons: "24 урока",
      color: "from-purple-400 to-pink-400",
      detailedDescription: "Визуальное программирование для дошкольников. Ребёнок научится создавать интерактивные истории и простые игры, развивая логическое мышление и креативность через яркие блоки кода."
    },
    {
      title: "Scratch",
      description: "Создание игр и анимации в визуальной среде",
      age: "7-9 лет",
      icon: "Gamepad2",
      duration: "4 месяца",
      lessons: "32 урока",
      color: "from-blue-400 to-cyan-400",
      detailedDescription: "Создание полноценных 2D игр и анимаций. Изучаем циклы, условия, переменные через практику. Ваш ребёнок сделает портфолио из 8-10 собственных проектов."
    },
    {
      title: "Python для детей",
      description: "Основы текстового программирования",
      age: "10-12 лет",
      icon: "Code2",
      duration: "6 месяцев",
      lessons: "48 уроков",
      color: "from-orange-400 to-red-400",
      detailedDescription: "Первый настоящий язык программирования! Создаём консольные игры, чат-ботов, работаем с данными. Python — идеальный старт для будущих разработчиков и data-аналитиков."
    },
    {
      title: "Веб-разработка",
      description: "Создание сайтов: HTML, CSS, JavaScript",
      age: "12-14 лет",
      icon: "Globe",
      duration: "6 месяцев",
      lessons: "48 уроков",
      color: "from-green-400 to-emerald-400",
      detailedDescription: "Создание полноценных сайтов с нуля. Изучаем HTML разметку, CSS стили, JavaScript интерактивность. К концу курса ребёнок запустит свой личный сайт-портфолио в интернете."
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
    { value: "2500+", label: "Счастливых учеников", icon: "Users" },
    { value: "25+", label: "Опытных педагогов", icon: "GraduationCap" },
    { value: "15", label: "Курсов программирования", icon: "BookOpen" },
    { value: "99%", label: "Довольных родителей", icon: "Heart" }
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
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
    },
    {
      name: "Дмитрий Волков",
      role: "Папа Софии, 11 лет",
      text: "Отличная школа! Дочь научилась программировать на Python и участвовала в хакатоне. Очень довольны результатами.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry"
    },
    {
      name: "Елена Петрова",
      role: "Мама Максима, 8 лет",
      text: "Ребёнок ждёт каждое занятие с нетерпением! Преподаватели умеют найти подход к детям. Видим реальный прогресс.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    }
  ];

  const teachers = [
    {
      name: "Анна Сергеева",
      role: "Scratch и Scratch Junior",
      experience: "5 лет опыта",
      description: "Магистр педагогики, специалист по раннему обучению программированию",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna"
    },
    {
      name: "Михаил Иванов",
      role: "Python разработчик",
      experience: "8 лет опыта",
      description: "Senior Python Developer, участник хакатонов",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mikhail"
    },
    {
      name: "Екатерина Смирнова",
      role: "Веб-разработка",
      experience: "6 лет опыта",
      description: "Fullstack разработчик, автор курсов по веб-технологиям",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ekaterina"
    }
  ];

  const benefits = [
    {
      title: "Индивидуальный подход",
      description: "Учитываем интересы и темп каждого ребёнка",
      icon: "UserCheck"
    },
    {
      title: "Игровой формат",
      description: "Обучение через создание игр и проектов",
      icon: "Gamepad2"
    },
    {
      title: "Развитие логики",
      description: "Улучшение аналитических способностей",
      icon: "BrainCircuit"
    },
    {
      title: "Портфолио проектов",
      description: "Реальные работы для будущего резюме",
      icon: "Folder"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-pink-50 border-b border-pink-200 py-3 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-xs md:text-sm gap-2">
          <div className="flex flex-wrap items-center gap-3 md:gap-8">
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <Icon name="Phone" size={16} />
              <span className="font-medium hidden sm:inline">+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <Icon name="Mail" size={16} />
              <span className="font-medium hidden md:inline">info@hellocode.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span className="font-medium hidden lg:inline">Mon-Fri: 8 am - 2pm</span>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <Icon name="Facebook" size={18} className="cursor-pointer hover:text-primary transition-all hover:scale-110" />
            <svg className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-primary transition-all hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <Icon name="Instagram" size={18} className="cursor-pointer hover:text-primary transition-all hover:scale-110" />
          </div>
        </div>
      </div>

      <header className="sticky top-0 bg-secondary z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl md:text-3xl font-black text-white flex items-center gap-2">
              <Icon name="Code2" size={28} className="md:w-8 md:h-8" />
              <span className="hidden sm:inline">Hello Code</span>
              <span className="sm:hidden">HC</span>
            </div>
            <nav className="hidden lg:flex gap-4 xl:gap-8 items-center">
              <a href="#home" className="text-white hover:text-pink-100 transition-all font-semibold hover:scale-105 hover:underline decoration-4 text-sm xl:text-base">Home</a>
              <a href="#classes" className="text-white hover:text-pink-100 transition-all font-semibold hover:scale-105 hover:underline decoration-4 text-sm xl:text-base">Classes</a>
              <a href="#about" className="text-white hover:text-pink-100 transition-all font-semibold hover:scale-105 hover:underline decoration-4 text-sm xl:text-base">About Us</a>
              <a href="#gallery" className="text-white hover:text-pink-100 transition-all font-semibold hover:scale-105 hover:underline decoration-4 text-sm xl:text-base">Gallery</a>
              <a href="#contact" className="text-white hover:text-pink-100 transition-all font-semibold hover:scale-105 hover:underline decoration-4 text-sm xl:text-base">Contact</a>
            </nav>
            <Button className="lg:hidden bg-primary hover:bg-primary/90 text-white font-bold text-sm px-4 py-2 rounded-full border-2 border-black">
              Меню
            </Button>
          </div>
        </div>
      </header>

      <section id="about" className="relative bg-secondary py-12 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,200,100,0.4) 2px, transparent 2px)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="absolute top-10 md:top-20 left-4 md:left-12 animate-float hidden sm:block">
          <img src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/76514d28-43be-4fb3-a11f-2bed35ef632a.jpg" alt="Pencil" className="w-12 h-12 md:w-20 md:h-20 object-contain drop-shadow-2xl" />
        </div>
        <div className="absolute top-20 md:top-40 left-16 md:left-32 animate-float" style={{ animationDelay: '0.5s' }}>
          <Icon name="Star" size={20} className="md:w-8 md:h-8 text-purple-500 fill-purple-500 drop-shadow-lg" />
        </div>
        <div className="absolute top-8 md:top-16 left-1/4 animate-float hidden md:block" style={{ animationDelay: '1s' }}>
          <Icon name="Star" size={24} className="text-purple-600 fill-purple-600" />
        </div>
        <div className="absolute bottom-16 md:bottom-32 left-8 md:left-20 animate-float hidden sm:block" style={{ animationDelay: '1.5s' }}>
          <Icon name="Paperclip" size={40} className="md:w-14 md:h-14 text-orange-500 drop-shadow-lg" />
        </div>

        <div className="absolute top-12 md:top-24 right-12 md:right-32 animate-float" style={{ animationDelay: '0.3s' }}>
          <Icon name="Star" size={24} className="md:w-9 md:h-9 text-purple-500 fill-purple-500 drop-shadow-lg" />
        </div>
        <div className="absolute top-8 md:top-16 right-1/4 animate-float hidden md:block" style={{ animationDelay: '1.2s' }}>
          <img src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/44dfbc85-1d0b-4bf7-be34-15ab0659c76e.jpg" alt="Notebook" className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-16 md:bottom-32 right-16 md:right-40 animate-float hidden sm:block" style={{ animationDelay: '0.7s' }}>
          <Icon name="AlarmClock" size={40} className="md:w-14 md:h-14 text-cyan-400 drop-shadow-lg" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-4 md:space-y-8 animate-fade-in text-center md:text-left">
              <div className="inline-block bg-white rounded-[2rem] md:rounded-[3rem] px-6 py-3 md:px-10 md:py-5 border-3 md:border-4 border-black shadow-xl transform hover:scale-105 transition-all">
                <h2 className="text-4xl md:text-6xl font-black text-accent">About Us</h2>
              </div>
              <p className="text-base md:text-xl leading-relaxed text-gray-900 max-w-xl font-medium">
                Hello Code — это онлайн-школа программирования для детей от 5 до 14 лет. 
                Мы учим создавать игры, сайты и приложения через игру и творчество. 
                Наша миссия — вдохновить следующее поколение разработчиков!
              </p>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-xl px-8 md:px-12 py-5 md:py-7 rounded-full border-3 md:border-4 border-black shadow-xl hover:scale-105 transition-all"
              >
                Записаться бесплатно
              </Button>
            </div>

            <div className="relative animate-fade-in mt-8 md:mt-0" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -top-6 md:-top-12 left-4 md:left-8 w-24 h-24 md:w-40 md:h-40 animate-float hidden sm:block" style={{ animationDelay: '0.5s' }}>
                <img src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/25466d6e-4e74-4448-b6dd-0b5fbd54c588.jpg" alt="Calendar" className="w-full h-full object-contain drop-shadow-2xl" />
              </div>
              
              <div className="absolute -top-4 md:-top-8 right-8 md:right-12 w-20 h-20 md:w-32 md:h-32 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
                <Icon name="BookOpen" size={80} className="md:w-30 md:h-30 text-purple-400 drop-shadow-2xl" />
              </div>

              <div className="absolute bottom-12 md:bottom-24 -left-6 md:-left-12 w-28 h-28 md:w-44 md:h-44 animate-float hidden sm:block" style={{ animationDelay: '1.5s' }}>
                <img src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/7323de3a-130a-4e08-bbe3-bb763cda4581.jpg" alt="Backpack" className="w-full h-full object-contain drop-shadow-2xl" />
              </div>

              <div className="absolute bottom-4 md:bottom-8 left-20 md:left-36 w-24 h-24 md:w-36 md:h-36 animate-float hidden sm:block" style={{ animationDelay: '0.8s' }}>
                <img src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/db0ef4fd-6396-48a9-aa1d-1f19385f95a5.jpg" alt="Envelope" className="w-full h-full object-contain drop-shadow-2xl" />
              </div>

              <div className="relative mx-auto md:ml-32 w-64 md:w-80">
                <div className="w-64 h-80 md:w-80 md:h-96 rounded-[6rem] md:rounded-[8rem] overflow-hidden border-4 md:border-8 border-black shadow-2xl transform hover:scale-105 transition-all">
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

      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-gray-800">Почему Hello Code?</h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium">
              Мы создаём идеальные условия для обучения программированию
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-4 border-gray-800 hover:shadow-2xl transition-all duration-300 rounded-3xl bg-white hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 border-4 border-gray-800 shadow-lg">
                    <Icon name={feature.icon} className="text-white" size={40} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="classes" className="py-12 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-gray-800">Наши курсы</h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium">
              Программы для каждого возраста и уровня подготовки
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="perspective-1000 animate-fade-in" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div 
                  className={`relative w-full transition-all duration-500 transform-style-3d cursor-pointer ${
                    flippedCards[index] ? 'rotate-y-180' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  <Card className="border-4 border-gray-800 rounded-3xl bg-white overflow-hidden shadow-lg backface-hidden flex flex-col h-full" style={{ backfaceVisibility: 'hidden' }}>
                    <div className={`h-24 md:h-32 flex items-center justify-center bg-gradient-to-br ${course.color}`}>
                      <Icon name={course.icon} className="text-white drop-shadow-lg" size={48} />
                    </div>
                    <div className="flex-grow flex flex-col">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg md:text-xl font-bold leading-tight flex-1 h-14 md:h-12">{course.title}</CardTitle>
                          <Badge className="bg-secondary text-white border-2 border-gray-800 text-xs px-2 py-1 whitespace-nowrap ml-2 h-fit">{course.age}</Badge>
                        </div>
                        <CardDescription className="text-sm md:text-base font-medium text-gray-700 h-12 md:h-12">{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2 pb-3 mt-auto">
                        <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                          <Icon name="Clock" size={16} className="text-primary flex-shrink-0" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                          <Icon name="BookOpen" size={16} className="text-primary flex-shrink-0" />
                          <span>{course.lessons}</span>
                        </div>
                      </CardContent>
                    </div>
                    <CardFooter className="pt-0 mt-auto">
                      <Button 
                        onClick={() => toggleCard(index)}
                        className="w-full bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-bold text-sm md:text-base border-2 border-gray-800 rounded-full py-4 md:py-6 hover:scale-105 transition-all"
                      >
                        Узнать больше
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card 
                    className="absolute top-0 left-0 w-full h-full border-4 border-gray-800 rounded-3xl bg-white overflow-hidden shadow-lg backface-hidden" 
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className={`h-16 md:h-20 flex items-center justify-center bg-gradient-to-br ${course.color}`}>
                      <CardTitle className="text-white text-lg md:text-xl font-bold text-center px-4">{course.title}</CardTitle>
                    </div>
                    <CardContent className="p-4 md:p-6 flex flex-col justify-between h-[calc(100%-4rem)] md:h-[calc(100%-5rem)]">
                      <div>
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                          <Badge className="bg-secondary text-white border-2 border-gray-800 text-xs">{course.age}</Badge>
                          <div className="text-xs md:text-sm text-gray-600 font-semibold">{course.duration}</div>
                        </div>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                          {course.detailedDescription}
                        </p>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <Icon name="BookOpen" size={14} className="text-primary" />
                          <span className="font-medium">{course.lessons}</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => toggleCard(index)}
                        className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold text-sm md:text-base border-2 border-gray-800 rounded-full py-3 md:py-4 mt-3 md:mt-4"
                      >
                        Назад
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in hover:scale-110 transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center border-3 md:border-4 border-gray-800 shadow-lg">
                    <Icon name={stat.icon} size={28} className="md:w-9 md:h-9 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-6xl font-black text-primary mb-2 md:mb-3">{stat.value}</div>
                <div className="text-sm md:text-xl font-bold text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-gray-800">Преимущества обучения</h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium">
              Что получит ваш ребёнок в Hello Code
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-pink-50 border-4 border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 border-4 border-gray-800 shadow-lg">
                  <Icon name={benefit.icon} size={44} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-lg text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-gray-800">Наши преподаватели</h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium">
              Опытные специалисты с любовью к детям
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {teachers.map((teacher, index) => (
              <Card key={index} className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all shadow-lg bg-white animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <img src={teacher.avatar} alt={teacher.name} className="w-32 h-32 rounded-full border-4 border-white shadow-xl" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{teacher.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">{teacher.role}</CardDescription>
                  <Badge className="w-fit bg-secondary text-white border-2 border-gray-800 mt-2">{teacher.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-700">{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-12 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-gray-800">Галерея работ учеников</h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium">
              Посмотрите, какие крутые проекты создают наши студенты!
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all shadow-lg animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/9e261ce0-2dc6-4546-920e-bf5fd25d8243.jpg"
                alt="Scratch game"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Игра "Космическое приключение"</CardTitle>
                <CardDescription className="text-base">Создана на Scratch · Артём, 9 лет</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/8b165a4e-2aa8-4fa0-9daf-6f900c081e5b.jpg"
                alt="Website"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Сайт о любимых животных</CardTitle>
                <CardDescription className="text-base">HTML/CSS · София, 12 лет</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/b2e8b4f7-7056-4c9e-813c-5cf6af45fffb.jpg"
                alt="Python code"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Игра "Змейка" на Python</CardTitle>
                <CardDescription className="text-base">Python · Максим, 11 лет</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/9e3842c9-e584-43c5-8e1c-8b5810745b1a.jpg"
                alt="Mobile app"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Мобильное приложение-квест</CardTitle>
                <CardDescription className="text-base">App Design · Алиса, 13 лет</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/36b4b239-c0be-482a-9211-8ce50f111341.jpg"
                alt="Game character"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Дизайн персонажа для игры</CardTitle>
                <CardDescription className="text-base">Game Design · Даша, 10 лет</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all shadow-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/5badf01e-c7f1-4012-a914-9d72e4a7ea48/files/a47279de-6e38-46d4-bc7b-d7ec06fe1421.jpg"
                alt="Hackathon"
                className="w-full h-56 object-cover"
              />
              <CardHeader className="bg-white">
                <CardTitle className="text-xl font-bold">Хакатон Hello Code 2024</CardTitle>
                <CardDescription className="text-base">Командный проект · Группа 12-14 лет</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-bold text-xl px-12 py-7 rounded-full border-4 border-gray-800 hover:scale-105 transition-all shadow-xl">
              Смотреть все проекты
              <Icon name="ArrowRight" className="ml-2" size={24} />
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-12 md:py-24 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-gray-800">Тарифные планы</h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium">
              Выберите удобный формат обучения для вашего ребёнка
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border-4 border-gray-800 transition-all duration-300 rounded-3xl overflow-hidden ${
                  plan.popular ? 'scale-105 shadow-2xl' : 'hover:scale-105 shadow-lg'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-primary to-orange-500 text-white text-center py-4 font-bold text-xl border-b-4 border-gray-800">
                    🔥 Самый популярный
                  </div>
                )}
                <CardHeader className="bg-white pb-4">
                  <CardTitle className="text-3xl font-black">{plan.name}</CardTitle>
                  <div className="mt-6">
                    {plan.price === "Бесплатно" ? (
                      <span className="text-5xl font-black text-primary">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-6xl font-black text-primary">{plan.price}</span>
                        <span className="text-3xl text-muted-foreground ml-2">₽</span>
                      </>
                    )}
                  </div>
                  <CardDescription className="text-xl font-semibold mt-3">{plan.period}</CardDescription>
                </CardHeader>
                <CardContent className="bg-gradient-to-br from-orange-50 to-pink-50 pt-8 pb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={24} />
                        <span className="font-medium text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="bg-white pt-6">
                  <Button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full font-bold text-xl py-7 rounded-full border-4 border-gray-800 hover:scale-105 transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 text-white shadow-xl' 
                        : 'bg-white hover:bg-gray-50 text-gray-800 shadow-lg'
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

      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-gray-800">Отзывы родителей</h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium">
              Что говорят о нас родители наших учеников
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {reviews.map((review, index) => (
              <Card key={index} className="border-4 border-gray-800 hover:shadow-2xl transition-all duration-300 rounded-3xl bg-gradient-to-br from-yellow-50 to-orange-50 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={28} />
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full border-4 border-gray-800" />
                    <div>
                      <CardTitle className="text-xl font-bold">{review.name}</CardTitle>
                      <CardDescription className="text-sm font-semibold">{review.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic text-lg leading-relaxed">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-24 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-gray-800">Запишитесь на пробный урок</h2>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium">
              Бесплатное первое занятие для знакомства с платформой
            </p>
          </div>
          <Card className="border-4 border-gray-800 rounded-3xl overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-primary to-orange-500 p-12 text-white">
                <h3 className="text-4xl font-bold mb-8">Контактная информация</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 hover:translate-x-2 transition-all">
                    <Icon name="Phone" size={28} />
                    <div>
                      <div className="font-bold text-xl">Телефон</div>
                      <div className="text-pink-100 text-lg">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 hover:translate-x-2 transition-all">
                    <Icon name="Mail" size={28} />
                    <div>
                      <div className="font-bold text-xl">Email</div>
                      <div className="text-pink-100 text-lg">hello@hellocode.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 hover:translate-x-2 transition-all">
                    <Icon name="MessageCircle" size={28} />
                    <div>
                      <div className="font-bold text-xl">Telegram</div>
                      <div className="text-pink-100 text-lg">@hellocode_support</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 hover:translate-x-2 transition-all">
                    <Icon name="Clock" size={28} />
                    <div>
                      <div className="font-bold text-xl">Часы работы</div>
                      <div className="text-pink-100 text-lg">Пн-Вс: 10:00 - 20:00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-12">
                <div className="space-y-6">
                  <div>
                    <label className="text-base font-bold block mb-3">Имя ребёнка *</label>
                    <input 
                      type="text" 
                      placeholder="Введите имя"
                      className="w-full px-5 py-4 border-2 border-gray-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/30 text-base transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-base font-bold block mb-3">Возраст *</label>
                    <input 
                      type="number" 
                      placeholder="Сколько лет?"
                      className="w-full px-5 py-4 border-2 border-gray-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/30 text-base transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-base font-bold block mb-3">Телефон родителя *</label>
                    <input 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-5 py-4 border-2 border-gray-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/30 text-base transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-base font-bold block mb-3">Email *</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-5 py-4 border-2 border-gray-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/30 text-base transition-all"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-bold text-xl py-7 rounded-full border-4 border-gray-800 hover:scale-105 transition-all shadow-xl">
                    Записаться бесплатно 🚀
                  </Button>
                  <p className="text-sm text-center text-gray-600">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-4xl font-black mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent flex items-center gap-2">
                <Icon name="Code2" size={36} className="text-pink-400" />
                Hello Code
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Онлайн-школа программирования для детей от 5 до 14 лет. 
                Создаём будущее через код!
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl">Курсы</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors text-base">Scratch Junior</li>
                <li className="hover:text-white cursor-pointer transition-colors text-base">Scratch</li>
                <li className="hover:text-white cursor-pointer transition-colors text-base">Python</li>
                <li className="hover:text-white cursor-pointer transition-colors text-base">Веб-разработка</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl">Компания</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors text-base">О школе</li>
                <li className="hover:text-white cursor-pointer transition-colors text-base">Преподаватели</li>
                <li className="hover:text-white cursor-pointer transition-colors text-base">Отзывы</li>
                <li className="hover:text-white cursor-pointer transition-colors text-base">Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl">Социальные сети</h3>
              <div className="flex gap-4">
                <Icon name="Facebook" size={28} className="text-gray-400 hover:text-white cursor-pointer transition-all hover:scale-110" />
                <Icon name="Instagram" size={28} className="text-gray-400 hover:text-white cursor-pointer transition-all hover:scale-110" />
                <Icon name="Youtube" size={28} className="text-gray-400 hover:text-white cursor-pointer transition-all hover:scale-110" />
                <Icon name="MessageCircle" size={28} className="text-gray-400 hover:text-white cursor-pointer transition-all hover:scale-110" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="text-base">© 2024 Hello Code. Все права защищены. Создано с ❤️ для будущих программистов</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;