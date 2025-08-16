import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const navItems = [
    { name: "Женское", href: "#women" },
    { name: "Мужское", href: "#men" },
    { name: "О нас", href: "#about" },
    { name: "Контакты", href: "#contact" },
    { name: "Доставка", href: "#delivery" },
    { name: "Блог", href: "#blog" }
  ];

  const collections = [
    {
      title: "Женская коллекция",
      description: "Изящные силуэты и современная элегантность",
      color: "bg-[#F0E6D2]",
      image: "/img/21b22278-a203-4475-8ec4-fc74d96da16d.jpg"
    },
    {
      title: "Мужская коллекция", 
      description: "Минимализм и безупречное качество",
      color: "bg-[#C8E6C9]",
      image: "/img/21b22278-a203-4475-8ec4-fc74d96da16d.jpg"
    },
    {
      title: "Аксессуары",
      description: "Завершающие штрихи вашего образа",
      color: "bg-[#F8BBD9]",
      image: "/img/21b22278-a203-4475-8ec4-fc74d96da16d.jpg"
    }
  ];

  const features = [
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставляем по всей России за 1-3 дня"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "100% оригинальные товары с гарантией"
    },
    {
      icon: "Heart",
      title: "Персональный подход",
      description: "Индивидуальные рекомендации стилистов"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold tracking-wider text-gray-900">
                CAPSULA
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B6B] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Cart & Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Icon name="ShoppingBag" size={20} />
                <span className="absolute -top-1 -right-1 bg-[#FF6B6B] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                  Твоя
                  <br />
                  <span className="font-semibold text-[#FF6B6B]">капсула</span>
                  <br />
                  стиля
                </h2>
                <p className="text-lg text-gray-600 max-w-md">
                  Тщательно отобранные вещи для создания идеального гардероба. 
                  Минимализм, качество и безупречный стиль.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8 py-3 rounded-none text-base font-medium tracking-wide transition-all duration-300 hover:scale-105"
                >
                  Get Your Capsule
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-none text-base font-medium tracking-wide"
                >
                  Смотреть коллекцию
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/img/21b22278-a203-4475-8ec4-fc74d96da16d.jpg"
                  alt="Fashion Hero"
                  className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Наши коллекции
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждая коллекция создана с вниманием к деталям и современным трендам, 
              сохраняя при этом вневременную элегантность.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card 
                key={index}
                className="group cursor-pointer border-0 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`h-64 ${collection.color} relative overflow-hidden`}>
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-xl font-medium text-gray-900">
                    {collection.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {collection.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none font-medium tracking-wide"
                  >
                    SHOP NOW
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm">
                  <Icon name={feature.icon} size={24} className="text-[#FF6B6B]" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center space-y-6">
            <h3 className="text-2xl font-light text-white">
              Будьте в курсе новинок
            </h3>
            <p className="text-gray-400 text-sm">
              Подпишитесь на рассылку и получайте информацию о новых коллекциях 
              и эксклюзивных предложениях.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FF6B6B] transition-colors rounded-none"
              />
              <Button 
                className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-6 rounded-none font-medium tracking-wide"
              >
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold tracking-wider text-gray-900">
                CAPSULA
              </h4>
              <p className="text-gray-600 text-sm">
                Создаем идеальные капсульные гардеробы для современных людей.
              </p>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-medium text-gray-900">Каталог</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Женское</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Мужское</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Аксессуары</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-medium text-gray-900">Информация</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Доставка</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Возврат</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-medium text-gray-900">Связаться с нами</h5>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">hello@capsula.com</p>
                <p className="text-gray-600 text-sm">+7 (999) 123-45-67</p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 CAPSULA. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}