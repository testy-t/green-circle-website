
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <path d="M12 0C5.37097 0 0 5.37097 0 12C0 18.629 5.37097 24 12 24C18.629 24 24 18.629 24 12C24 5.37097 18.629 0 12 0ZM18.9871 16.4516C18.9871 16.4516 18.5645 17.4194 17.7097 17.4194L15.4839 17.4677C15.4839 17.4677 13.1613 17.6129 11.0323 15.6774C8.70968 13.6452 6.62903 9.87097 6.62903 9.87097C6.62903 9.87097 6.43548 9.43548 6.67742 9.2129C6.87097 9.01935 7.4032 9.01935 7.4032 9.01935L9.91935 9.01213C9.91935 9.01213 10.2581 9.06452 10.5 9.23387C10.6935 9.38065 10.8 9.67742 10.8 9.67742C10.8 9.67742 11.1871 10.6452 11.7097 11.5161C12.7258 13.2 13.2 13.5484 13.5484 13.3548C14.0323 13.0645 13.8774 10.9161 13.8774 10.9161C13.8774 10.9161 13.8871 9.96774 13.5677 9.53226C13.3226 9.19355 12.8516 9.0871 12.6194 9.05806C12.4258 9.03871 12.6774 8.66129 13.0161 8.49194C13.5097 8.23226 14.4 8.21935 15.4645 8.2129C16.2774 8.20645 16.5484 8.25161 16.9161 8.33548C17.7097 8.5129 17.6903 9.15484 17.6516 10.529C17.6419 10.8968 17.629 11.329 17.629 11.8129C17.629 11.9032 17.6226 12 17.6161 12.1032C17.5871 12.6194 17.5548 13.2 18 13.3548C18.2419 13.4323 18.7097 13.3548 19.8387 11.5355C20.3806 10.6452 20.7871 9.58065 20.7871 9.58065C20.7871 9.58065 20.9419 9.38065 21.1419 9.2129C21.3226 9.04839 21.5613 9.01935 21.5613 9.01935L24.1935 9.01213C24.1935 9.01213 25.1032 8.90323 25.2774 9.2129C25.4645 9.53548 25.129 10.0645 24.0903 11.6452C23.0839 13.1613 22.629 13.7516 22.6613 14.1677C22.6935 14.5839 23.0452 14.9677 23.7097 15.5355C24.9871 16.6516 25.2774 17.2548 25.3677 17.4194C25.371 17.4226 25.3742 17.4226 25.3742 17.4258C26.0903 18.5613 24.4903 16.4516 18.9871 16.4516Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <MessageCircle />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <path d="M19.5462 3.70059H14.0596C14.3521 2.47881 15.4336 1.5625 16.7266 1.5625C17.1262 1.5625 17.4775 1.21118 17.4775 0.78125C17.4775 0.35132 17.1262 0 16.7266 0C14.599 0 12.8536 1.77259 12.8536 3.9466V3.95166C11.2501 4.15201 10 5.56216 10 7.27539V18.7246C10 20.6396 11.5159 22.1875 13.3902 22.1875H19.5462C21.4205 22.1875 22.9365 20.6396 22.9365 18.7246V7.16345C22.9365 5.24842 21.4205 3.70059 19.5462 3.70059ZM16.0928 13.3184H16.8437C17.2434 13.3184 17.5946 13.6697 17.5946 14.0996C17.5946 14.5296 17.2434 14.8809 16.8437 14.8809H16.0928C15.6929 14.8809 15.3418 14.5296 15.3418 14.0996C15.3418 13.6697 15.6929 13.3184 16.0928 13.3184Z" fill="currentColor"/>
                  <path d="M7.47241 3.70059H2.02435C0.149994 3.70059 -1.36588 5.24845 -1.36588 7.16345V18.7246C-1.36588 20.6396 0.149994 22.1875 2.02435 22.1875H8.18035C10.0547 22.1875 11.5707 20.6396 11.5707 18.7246V7.27539C11.5707 5.56216 10.3207 4.15201 8.71712 3.95166V3.9466C8.71712 1.77259 6.97208 0 4.84442 0C4.44482 0 4.09326 0.35132 4.09326 0.78125C4.09326 1.21118 4.44482 1.5625 4.84442 1.5625C6.1374 1.5625 7.2189 2.47881 7.51139 3.70059H7.47241ZM5.12079 13.3184H5.8717C6.27163 13.3184 6.62285 13.6697 6.62285 14.0996C6.62285 14.5296 6.27163 14.8809 5.8717 14.8809H5.12079C4.72086 14.8809 4.36963 14.5296 4.36963 14.0996C4.36963 13.6697 4.72086 13.3184 5.12079 13.3184Z" fill="currentColor"/>
                </svg>
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
          <p className="text-xs text-gray-500 mt-2">
            * Instagram принадлежит компании Meta, признанной экстремистской организацией и запрещенной на территории РФ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
