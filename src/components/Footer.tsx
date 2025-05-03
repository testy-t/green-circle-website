
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">MRKT</h3>
            <p className="mb-4">
              Маркетинговое агентство полного цикла. Специализируемся на продвижении и развитии брендов в социальных сетях.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Главная</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Услуги</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors duration-200">Проекты</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">О нас</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <span>info@mrkt-agency.ru</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-400" />
                <span>Москва, ул. Маркетинговая, 42</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Подписка на новости</h4>
            <p className="mb-4">Получайте наши полезные материалы о маркетинге в социальных сетях</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Ваш email" className="bg-gray-800 border-gray-700" />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} MRKT Agency. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
