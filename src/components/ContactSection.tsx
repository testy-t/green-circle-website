
import LeadForm from "@/components/LeadForm";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const ContactItem = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) => (
  <div className="flex items-start mb-6">
    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-lg">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Заполните форму или свяжитесь с нами напрямую
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="p-8 bg-gray-50 rounded-xl h-full">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <ContactItem 
                icon={<Mail className="text-purple-600 w-6 h-6" />}
                title="Email"
                content={<a href="mailto:info@mrkt-agency.ru" className="hover:text-purple-600 transition-colors">info@mrkt-agency.ru</a>}
              />
              
              <ContactItem 
                icon={<Phone className="text-purple-600 w-6 h-6" />}
                title="Телефон"
                content={<a href="tel:+74951234567" className="hover:text-purple-600 transition-colors">+7 (495) 123-45-67</a>}
              />
              
              <ContactItem 
                icon={<Clock className="text-purple-600 w-6 h-6" />}
                title="Режим работы"
                content={<span>Пн-Пт: 9:00 - 18:00<br />Сб-Вс: Выходной</span>}
              />
              
              <ContactItem 
                icon={<MapPin className="text-purple-600 w-6 h-6" />}
                title="Адрес офиса"
                content={<span>Москва, ул. Маркетинговая, 42<br />БЦ "Цифровой", 7 этаж</span>}
              />
              
              <div className="mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3884767269273!2d37.6172443!3d55.7539496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzI0LjIiTiAzN8KwMzYnNTguMSJF!5e0!3m2!1sru!2sru!4v1620144460489!5m2!1sru!2sru" 
                  className="w-full h-64 rounded-lg" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Карта расположения офиса"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
