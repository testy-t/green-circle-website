
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { CheckCircle } from "lucide-react";

// Схема валидации формы
const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  company: z.string().min(2, { message: "Название компании должно содержать минимум 2 символа" }),
  email: z.string().email({ message: "Введите корректный email" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  service: z.string({ required_error: "Выберите услугу" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Инициализация формы с обработчиком zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  // Обработка отправки формы
  const onSubmit = (data: FormValues) => {
    // В реальном проекте здесь был бы API-запрос
    console.log("Форма отправлена:", data);
    
    // Имитация отправки данных
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
    }, 1000);
  };

  // Список доступных услуг
  const serviceOptions = [
    { value: "vk_instagram", label: "ВКонтакте и Instagram*" },
    { value: "telegram", label: "Telegram-маркетинг" },
    { value: "rutube_dzen", label: "Продвижение в RuTube и Дзен" },
    { value: "analytics", label: "Аналитика и отчетность" },
    { value: "content", label: "Контент-стратегия" },
    { value: "reputation", label: "Управление репутацией" },
    { value: "complex", label: "Комплексное продвижение" },
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-none">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Оставьте заявку</CardTitle>
        <CardDescription className="text-white text-opacity-90">
          Заполните форму, и мы свяжемся с вами для обсуждения проекта
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Заявка успешно отправлена!</h3>
            <p className="text-gray-600 max-w-md">
              Спасибо за интерес к нашему агентству. Наш менеджер свяжется с вами в течение рабочего дня.
            </p>
            <Button 
              className="mt-6 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              onClick={() => setIsSubmitted(false)}
            >
              Отправить еще заявку
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ваше имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван Иванов" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Компания</FormLabel>
                      <FormControl>
                        <Input placeholder="ООО 'Компания'" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон</FormLabel>
                      <FormControl>
                        <Input placeholder="+7 (999) 123-45-67" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Интересующая услуга</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Сообщение</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Расскажите о вашем проекте или задайте вопрос" 
                        rows={4}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="text-xs text-gray-500 mt-2">
                * Instagram принадлежит компании Meta, признанной экстремистской организацией и запрещенной на территории РФ
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                Отправить заявку
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
};

export default LeadForm;
