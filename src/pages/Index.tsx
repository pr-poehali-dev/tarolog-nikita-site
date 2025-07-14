import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const reviews = [
    {
      name: "Ирина Соколова",
      initials: "ИС",
      text: "Никита – мастер своего дела! Пришла скептически настроенной, но его гадание по клитеру оказалось пугающе точным. У него действительно дар, и руки... такие сильные, будто через них проходит сама судьба. 4300 рублей – не такие уж большие деньги за такую ясность.",
      rating: 5
    },
    {
      name: "Ольга Зайцева",
      initials: "ОЗ",
      text: "Долго сомневалась, стоит ли идти к мужчине-торологу, но Никита переубедил с первых минут. 🔥 Молодой, приятный в общении, а его метод – это не эзотерика, а что-то на грани науки. За эти деньги получила разбор ситуации, который не сделал бы ни один психолог.",
      rating: 5
    },
    {
      name: "Екатерина Морозова",
      initials: "ЕМ",
      text: "После сеанса у Никиты я неделю ходила под впечатлением. Он не просто гадает – он будто видит тебя насквозь. И да, руки у него сильные, это правда чувствуется. Не знаю, как это работает, но работает.",
      rating: 5
    },
    {
      name: "Анна Ковалева",
      initials: "АК",
      text: "Мне понравилось. Очень.",
      rating: 5
    },
    {
      name: "Наталья Воронцова",
      initials: "НВ",
      text: "Я обычно не пишу отзывы, но тут не могу промолчать. Никита – первый, кто смог объяснить мне то, что годами не получалось понять самой. Да, способ необычный, но когда он начал раскладывать всё по полочкам, у меня мурашки пошли.",
      rating: 5
    },
    {
      name: "Марина Белова",
      initials: "МБ",
      text: "Ожидала шарлатанства, а получила... даже не знаю, как назвать. Это не гадание, это что-то глубже. Никита не просто предсказывает – он анализирует так, будто знает меня лучше, чем я сама.",
      rating: 5
    }
  ];

  const services = [
    {
      title: "Базовая консультация",
      description: "Анализ текущей ситуации и ближайшие перспективы",
      price: "3200 ₽",
      duration: "45 минут"
    },
    {
      title: "Углубленная сессия",
      description: "Полный анализ жизненной ситуации с прогнозом",
      price: "4300 ₽",
      duration: "90 минут"
    },
    {
      title: "Парная консультация",
      description: "Работа с отношениями для двоих",
      price: "6500 ₽",
      duration: "120 минут"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Icon name="Eye" className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-gray-900">Никита</h1>
                <p className="text-sm text-gray-600">Таролог-консультант</p>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl font-bold text-gray-900 mb-6">
            Уникальная методика <span className="text-purple-600">гадания</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Авторский подход к прогнозированию будущего через древнюю практику с современными техниками анализа
          </p>
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">95%</div>
              <div className="text-gray-600">Точность прогнозов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">3</div>
              <div className="text-gray-600">Года опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-4xl font-bold text-gray-900 mb-6">
                О мастере
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Никита практикует уникальную методику, которая сочетает в себе традиционные знания с современным подходом к анализу. Его консультации помогают людям найти ответы на самые сложные вопросы жизни.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Индивидуальный подход к каждому клиенту</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Научно обоснованная методика</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Конфиденциальность и профессионализм</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                <Icon name="User" className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-4xl font-bold text-gray-900 text-center mb-12">
            Услуги и цены
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-purple-200">
                <CardHeader>
                  <CardTitle className="font-display text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        {service.duration}
                      </Badge>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-4xl font-bold text-gray-900 text-center mb-12">
            Отзывы клиентов
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500">
                      <AvatarFallback className="text-white font-semibold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {review.name}
                      </CardTitle>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-display text-4xl font-bold text-white mb-6">
            Готовы узнать своё будущее?
          </h3>
          <p className="text-xl text-purple-100 mb-8">
            Запишитесь на консультацию прямо сейчас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Записаться на сеанс
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-display text-xl font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  <span>+7 (999) 123-45-67</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <span>nikita@tarot.ru</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-display text-xl font-semibold mb-4">Время работы</h4>
              <div className="space-y-2">
                <p>Пн-Пт: 10:00 - 20:00</p>
                <p>Сб-Вс: 12:00 - 18:00</p>
              </div>
            </div>
            <div>
              <h4 className="font-display text-xl font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="MessageCircle" className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Никита Таролог. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;