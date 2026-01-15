import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface InstructionStep {
  text: string;
  link?: string;
  linkText?: string;
  image?: string;
  imageCaption?: string;
  images?: string[];
}

interface InstructionVariant {
  title: string;
  steps: InstructionStep[];
  contact?: string;
}

interface InstructionCategory {
  title: string;
  variants: InstructionVariant[];
}

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  daysBeforeForum: number;
  hasInstruction?: boolean;
  instructionVariants?: InstructionVariant[];
  instructionCategories?: InstructionCategory[];
}

interface TimeSection {
  id: string;
  title: string;
  period: string;
  icon: string;
  tasks: Task[];
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('month');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [forumDate, setForumDate] = useState<Date | null>(null);

  const [sections, setSections] = useState<TimeSection[]>([
    {
      id: 'month',
      title: 'За месяц до форума',
      period: '30 дней',
      icon: 'Calendar',
      tasks: [
        {
          id: 'schedule',
          title: 'Составление расписания',
          description: 'Создание программы мероприятия',
          completed: false,
          daysBeforeForum: 30,
          hasInstruction: true,
          instructionVariants: [
            {
              title: 'Инструкция',
              steps: [
                {
                  text: 'Перейдите в WEB-приложение "Конструктор форума"',
                  link: 'https://forumstartkonstruktor.ru/',
                  linkText: 'forumstartkonstruktor.ru',
                },
                {
                  text: 'Из предложенных вариантов мероприятий выберите понравившиеся. После выбора нажмите на кнопку "Создать расписание"',
                  image: 'https://cdn.poehali.dev/files/Расписание шаг 1.jpg',
                },
                {
                  text: 'Отредактируйте время начала мероприятий, при необходимости добавьте дополнительные мероприятия, нажав на кнопку "Добавить элемент"',
                  image: 'https://cdn.poehali.dev/files/Расписание шаг 2.jpg',
                },
                {
                  text: 'После редактирования нажмите на кнопку "Сформировать расписание"',
                  image: 'https://cdn.poehali.dev/files/Расписание шаг 4.jpg',
                },
                {
                  text: 'Сформированное расписание можно сохранить или скачать в формате XSLX или JPG файла',
                  image: 'https://cdn.poehali.dev/files/Расписание шаг 5.jpg',
                },
              ],
            },
          ],
        },
        {
          id: 'food',
          title: 'Еда',
          description: 'Организация питания участников',
          completed: false,
          daysBeforeForum: 30,
          hasInstruction: true,
          instructionVariants: [
            {
              title: 'Якитория',
              steps: [
                {
                  text: 'Для оформления заказа еды обратитесь к @yakitoriya90',
                  contact: '@yakitoriya90',
                },
                {
                  text: 'Предоставьте информацию: 1) ФИО и номер телефона ответственного по мероприятию; 2) Дата проведения; 3) Причина проведения; 4) Подразделение ответственное за мероприятие; 5) Форма документа (заявка или отчет); 6) ФИО и номер телефона ответственного за распоряжение; 7) ТЗ (Меню)',
                  image: 'https://cdn.poehali.dev/files/Якитория меню.jpg',
                  imageCaption: 'Пример составленного меню (ТЗ)',
                },
                {
                  text: 'В конце месяца в 1С вам направляется документ, в котором необходимо подготовить 5 пунктов по этому письму.\n\n\nОбразец заполнения:\n\n1) Причина мероприятия (полное название)\n\n2) Ответственных по подготовки документов.\n\n3) Вид закрывающих документов-распоряжение или отчет по представительских расходах.\n\n4) Подразделение\n\n5) Ответственное лицо за мероприятие.\n\n\nПример заполнения:\n\n1) Встреча представителя программы "Алабуга Старт" для обсуждения работы в 1 квартале 2026 года\n\n2) Токсарова Елена Владимировна, ведущий специалист Управления HR\n\n3) Распоряжение\n\n4) Управление HR\n\n5) Токсарова Елена Владимировна, ведущий специалист Управления HR',
                },
                {
                  text: 'Документ на оплату передается старшему специалисту для оплаты по распоряжению',
                  contact: '@Alsu_AlabugaStart',
                },
              ],
            },
            {
              title: 'Шоколадница',
              steps: [
                {
                  text: 'Для оформления заказа еды обратитесь к Гузель Баевой (Старший менеджер Блока питания)',
                  contact: '@Guzel_Marina +7 939 383 0619',
                },
                {
                  text: 'Предоставьте информацию: 1) ФИО и номер телефона ответственного по мероприятию; 2) Дата проведения; 3) Причина проведения; 4) Подразделение ответственное за мероприятие; 5) Форма документа (заявка или отчет); 6) ФИО и номер телефона ответственного за распоряжение',
                },
                {
                  text: 'В конце месяца в 1С вам направляется документ, в котором необходимо подготовить 5 пунктов по этому письму.\n\n\nОбразец заполнения:\n\n1) Причина мероприятия (полное название)\n\n2) Ответственных по подготовки документов.\n\n3) Вид закрывающих документов-распоряжение или отчет по представительских расходах.\n\n4) Подразделение\n\n5) Ответственное лицо за мероприятие.\n\n\nПример заполнения:\n\n1) Встреча представителя программы "Алабуга Старт" для обсуждения работы в 1 квартале 2026 года\n\n2) Токсарова Елена Владимировна, ведущий специалист Управления HR\n\n3) Распоряжение\n\n4) Управление HR\n\n5) Токсарова Елена Владимировна, ведущий специалист Управления HR',
                },
                {
                  text: 'Документ на оплату передается старшему специалисту для оплаты по распоряжению',
                  contact: '@Alsu_AlabugaStart',
                },
              ],
            },
          ],
        },
        {
          id: 'upi',
          title: 'УПИ',
          description: 'Видеосъемка и фотосессия',
          completed: false,
          daysBeforeForum: 30,
          hasInstruction: true,
          instructionVariants: [
            {
              title: 'Инструкция',
              steps: [
                {
                  text: 'Заранее (в начале месяца, в котором планируется проведение форума) разработайте ТЗ на видеосъемку мероприятия и фотосессию',
                },
                {
                  text: 'Согласуйте ТЗ с Катериной',
                  contact: 'ТГ - @kathathaway',
                },
                {
                  text: 'Сопровождайте операторов на протяжении всего форума',
                },
              ],
            },
          ],
        },

      ],
    },
    {
      id: 'weeks',
      title: 'За 2-3 недели до форума',
      period: '14-21 день',
      icon: 'CalendarClock',
      tasks: [
        {
          id: 'passes',
          title: 'Пропуска и Face ID',
          description: 'Оформление доступа для участников',
          completed: false,
          daysBeforeForum: 14,
          hasInstruction: true,
          instructionCategories: [
            {
              title: 'Граждане РФ',
              variants: [
                {
                  title: 'Пропуска',
                  steps: [
                    {
                      text: 'Соберите документы: паспорт, согласие на обработку персональных данных',
                    },
                    {
                      text: 'Создайте заявку на пропуск на сайте',
                      link: 'https://rs.alabuga.ru/login',
                      linkText: 'rs.alabuga.ru',
                    },
                    {
                      text: 'На сайте нажмите "Создать заявку на физ. лицо", выберите "Гражданин РФ". Заполните заявку, обязательно прикрепите сканы паспорта и согласия на обработку данных',
                      images: [
                        'https://cdn.poehali.dev/files/Пропуск Граждане РФ шаг 3.jpg',
                        'https://cdn.poehali.dev/files/Пропуск Граждане РФ шаг 4.jpg'
                      ],
                    },
                    {
                      text: 'Пример заполнения заявки:',
                      image: 'https://cdn.poehali.dev/files/Пропуск Граждане РФ заявка.jpg',
                    },
                    {
                      text: 'Нажмите "Создать" и зафиксируйте номер заявки',
                    },
                    {
                      text: 'Передайте номер заявки доверенному лицу (сотрудник, отвечающий за оформление пропусков и Face ID)',
                    },
                    {
                      text: 'После согласования пропусков, заберите их в АДЦ, бюро пропусков 105 кабинет',
                    },
                  ],
                },
                {
                  title: 'Face ID',
                  steps: [
                    {
                      text: 'Доступ к Face ID оформляется на пешем КПП. Оформление возможно только в случае, если будет присутствовать сотрудник, на которого оформлена и согласована СБ внутренняя доверенность на оформление пропусков и Face ID. Участницам при себе необходимо иметь паспорт и согласие на обработку данных.',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Иностранные граждане',
              variants: [
                {
                  title: 'Пропуска',
                  steps: [
                    {
                      text: 'Соберите документы: паспорт, согласие на обработку персональных данных, виза, ВНЖ',
                    },
                    {
                      text: 'Создайте заявку на пропуск на сайте',
                      link: 'https://rs.alabuga.ru/login',
                      linkText: 'rs.alabuga.ru',
                    },
                    {
                      text: 'На сайте нажмите "Создать заявку на физ. лицо", выберите "Иностранное лицо". Заполните заявку, обязательно прикрепите сканы паспорта, согласия на обработку данных, визы',
                      images: [
                        'https://cdn.poehali.dev/files/Пропуск иностранные граждане шаг 3.jpg',
                        'https://cdn.poehali.dev/files/Пропуск иностранные граждане шаг 4.jpg'
                      ],
                    },
                    {
                      text: 'Пример заполнения заявки:',
                      image: 'https://cdn.poehali.dev/files/Пропуск иностранные граждане заявка.jpg',
                    },
                    {
                      text: 'Нажмите "Создать" и зафиксируйте номер заявки',
                    },
                    {
                      text: 'Передайте номер заявки доверенному лицу (сотрудник, отвечающий за оформление пропусков и Face ID)',
                    },
                    {
                      text: 'После согласования пропусков, заберите их в АДЦ, бюро пропусков 105 кабинет',
                    },
                  ],
                },
                {
                  title: 'Face ID',
                  steps: [
                    {
                      text: 'Доступ к Face ID оформляется на пешем КПП. Оформление возможно только в случае, если будет присутствовать сотрудник, на которого оформлена и согласована СБ внутренняя доверенность на оформление пропусков и Face ID. Участницам при себе необходимо иметь паспорт и согласие на обработку данных.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'housing',
          title: 'Жилье',
          description: 'Организация размещения участников',
          completed: false,
          daysBeforeForum: 14,
          hasInstruction: true,
          instructionVariants: [
            {
              title: 'Инструкция',
              steps: [
                {
                  text: 'Для массового заселения участниц в корпоративное жилье необходимо в системе 1С:ДО 3.0. запустить документ "Заявка на жилье". Документ заполняется по образцу, на каждую участницу необходимо прикрепить паспорт: страница с фото + прописка. После заполнения заявки, необходимо запустить процесс согласования документа. Процесс может запуститься автоматически если нажать на копку "Записать и закрыть", а после подтвердить запуск. Также процесс можно запустить вручную, нажав на кнопку "Отправить", запуск также необходимо подтвердить.',
                  images: [
                    'https://cdn.poehali.dev/files/Жилье скрин 1.jpg',
                    'https://cdn.poehali.dev/files/Жилье скрин 2.jpg',
                    'https://cdn.poehali.dev/files/Жилье скрин 3.jpg'
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'excursions',
          title: 'Экскурсии',
          description: 'Организация экскурсий для участников',
          completed: false,
          daysBeforeForum: 14,
          hasInstruction: true,
          instructionCategories: [
            {
              title: 'Обзорная экскурсия по "Алабуга Политех"',
              variants: [
                {
                  title: 'Инструкция',
                  steps: [
                    {
                      text: 'Инструкция будет добавлена позже',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Обзорная экскурсия по Международной Школе "Три Медведя"',
              variants: [
                {
                  title: 'Инструкция',
                  steps: [
                    {
                      text: 'Инструкция будет добавлена позже',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Обзорная экскурсия по Штаб-квартире "Алабуга Политех" (Пирамида)',
              variants: [
                {
                  title: 'Инструкция',
                  steps: [
                    {
                      text: 'Инструкция будет добавлена позже',
                    },
                  ],
                },
              ],
            },
          ],
        },

      ],
    },
    {
      id: 'week',
      title: 'За неделю до форума',
      period: '7 дней',
      icon: 'Clock',
      tasks: [
        {
          id: 'transport',
          title: 'Транспорт',
          description: 'Организация автобусов',
          completed: false,
          daysBeforeForum: 7,
          hasInstruction: true,
          instructionVariants: [
            {
              title: 'Инструкция',
              steps: [
                {
                  text: 'Для организации автобусов оставьте заявку на сайте',
                  link: 'https://support.alabuga.ru/',
                  linkText: 'support.alabuga.ru',
                },
                {
                  text: 'На главной странице, в списке в левом верхнем углу, выберите вкладку «Обратиться за помощью»',
                  image: 'https://cdn.poehali.dev/files/Транспорт шаг 1.jpg',
                },
                {
                  text: 'Из приведенного списка выберите «Создать заявку на автотранспорт»',
                  image: 'https://cdn.poehali.dev/files/Транспорт шаг 2.jpg',
                },
                {
                  text: 'Заполните и отправьте заявку. В заявке необходимо полностью прописать весь маршрут с указанием времени',
                  image: 'https://cdn.poehali.dev/files/Транспорт шаг 3.jpg',
                },
              ],
            },
          ],
        },
        {
          id: 'rooms',
          title: 'Бронирование',
          description: 'Резервирование помещений',
          completed: false,
          daysBeforeForum: 7,
          hasInstruction: true,
          instructionCategories: [
            {
              title: 'Переговорные',
              variants: [
                {
                  title: 'Переговорные',
              steps: [
                {
                  text: 'Бронирование переговорных происходит на сайте',
                  link: 'https://support.alabuga.ru/',
                  linkText: 'support.alabuga.ru',
                },
                {
                  text: 'На главной странице, в левом верхнем углу выберите вкладку "Бронирование"',
                  image: 'https://cdn.poehali.dev/files/Бронирование Переговорные шаг 1.jpg',
                },
                {
                  text: 'Из предложенного списка переговорных выберите нужную вам. Нажмите на знак плюса справа от выбранной переговорной',
                  image: 'https://cdn.poehali.dev/files/Бронирование Переговорные шаг 2.jpg',
                },
                {
                  text: 'В правом верхнем углу выберите вкладку "Месяц"',
                  image: 'https://cdn.poehali.dev/files/Бронирование Переговорные шаг 3.jpg',
                },
                {
                  text: 'Выберите необходимую дату и нажмите на нее',
                  image: 'https://cdn.poehali.dev/files/Бронирование Переговорные шаг 4.jpg',
                },
                {
                  text: 'Заполните появившееся окно, нажмите кнопку добавить',
                  image: 'https://cdn.poehali.dev/files/Бронирование Переговорные шаг 5.jpg',
                },
              ],
            }],
            },
            {
              title: 'Конференц-залы',
              variants: [
                {
                  title: 'Конференц-зал "Курчатов"',
              steps: [
                {
                  text: 'Бронирование происходит на сайте',
                  link: 'https://support.alabuga.ru/',
                  linkText: 'support.alabuga.ru',
                },
                {
                  text: 'На главной странице, в левом верхнем углу выберите вкладку "Бронирование"',
                  image: 'https://cdn.poehali.dev/files/Бронирование Конференц-залы Курчатов шаг 1.jpg',
                },
                {
                  text: 'Из предложенного списка выберите "Alabuga - Курчатов Конгресс-зал". Нажмите на знак плюса справа',
                  image: 'https://cdn.poehali.dev/files/Бронирование Конференц-залы Курчатов шаг 2.jpg',
                },
                {
                  text: 'В правом верхнем углу выберите вкладку "Месяц"',
                  image: 'https://cdn.poehali.dev/files/Бронирование Конференц-залы Курчатов шаг 3.jpg',
                },
                {
                  text: 'Выберите необходимую дату и нажмите на нее',
                  image: 'https://cdn.poehali.dev/files/Бронирование Конференц-залы Курчатов шаг 4.jpg',
                },
                {
                  text: 'Заполните окно, в комментариях укажите: ответственное лицо, контактные данные (ТГ, тел.), цель бронирования, кол-во человек. Нажмите кнопку добавить',
                  image: 'https://cdn.poehali.dev/files/Бронирование Конференц-залы Курчатов шаг 5.jpg',
                },
              ],
            },
            {
              title: 'Конференц-зал "Яковлев"',
              steps: [
                {
                  text: 'Для бронирования напишите в Телеграм. Шаблон сообщения: Добрый день, меня зовут Иван, являюсь специалистом Управления HR. 25.12.2025 мы планируем проведение форума "Алабуга Старт ВУЗы". В рамках данного мероприятия нам необходим конференц-зал в Синергии 13.2 "Яковлев", 25.12.2025 с 12:00 до 16:00. Просим вас зарегистрировать бронь',
                  contact: '@SamatNeVk',
                },
              ],
            }],
            },
            {
              title: 'Спортзалы',
              variants: [
                {
                  title: 'Спортзал "Алабуга Политех"',
              steps: [
                {
                  text: 'Бронирование спортзала происходит на сайте',
                  link: 'https://support.alabuga.ru/',
                  linkText: 'support.alabuga.ru',
                },
                {
                  text: 'На главной странице, в левом верхнем углу выберите вкладку "Бронирование"',
                  image: 'https://cdn.poehali.dev/files/Бронирование Спортзалы Алабуга Политех.jpg',
                },
                {
                  text: 'Из предложенного списка выберите "Alabuga - Спортзал (учебный класс)". Нажмите на знак плюса справа',
                  image: 'https://cdn.poehali.dev/files/Бронирование Спортзалы Алабуга Политех шаг 4.jpg',
                },
                {
                  text: 'В правом верхнем углу выберите вкладку "Месяц"',
                  image: 'https://cdn.poehali.dev/files/Бронирование Спортзалы Алабуга Политех шаг 2.jpg',
                },
                {
                  text: 'Выберите необходимую дату и нажмите на нее',
                  image: 'https://cdn.poehali.dev/files/Бронирование Спортзалы Алабуга Политех шаг 3.jpg',
                },
                {
                  text: 'Заполните окно, в комментариях укажите: ответственное лицо, контактные данные (ТГ, тел.), цель бронирования, кол-во человек. Нажмите кнопку добавить',
                  image: 'https://cdn.poehali.dev/files/Бронирование Спортзалы Алабуга Политех шаг 6.jpg',
                },
              ],
            },
            {
              title: 'Спортзал "Пирамида"',
              steps: [
                {
                  text: 'Для бронирования напишите в Телеграм. Предоставьте информацию: дата и время мероприятия, ФИО ответственного, количество человек, цель брони. Бронь доступна только для совершеннолетних лиц',
                  contact: '@PiramidaHostel',
                },
              ],
            }],
            },
          ],
        },
        {
          id: 'tech-support',
          title: 'Специалист тех. поддержки',
          description: 'Помощь в настройке оборудования',
          completed: false,
          daysBeforeForum: 7,
          hasInstruction: true,
          instructionVariants: [
            {
              title: 'Инструкция',
              steps: [
                {
                  text: 'Для помощи в настройке оборудования необходимо пригласить специалиста ОАТИС',
                },
                {
                  text: 'Перейдите на сайт',
                  link: 'https://support.alabuga.ru/',
                  linkText: 'support.alabuga.ru',
                },
                {
                  text: 'На главной странице, в левом верхнем углу выберите вкладку "Обратиться за помощью"',
                  image: 'https://cdn.poehali.dev/files/Специалист тех. поддержки шаг 1.jpg',
                },
                {
                  text: 'Из приведенного списка выберите "Создать заявку"',
                  image: 'https://cdn.poehali.dev/files/Специалист тех. поддержки шаг 2.jpg',
                },
                {
                  text: 'Заполните заявку согласно приведенному примеру',
                  image: 'https://cdn.poehali.dev/files/Специалист тех. поддержки шаг 3.jpg',
                },
              ],
            },
          ],
        },

      ],
    },
  ]);

  const toggleTaskCompletion = (sectionId: string, taskId: string) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            tasks: section.tasks.map((task) =>
              task.id === taskId ? { ...task, completed: !task.completed } : task
            ),
          };
        }
        return section;
      })
    );
  };

  const calculateProgress = (section: TimeSection) => {
    const completedTasks = section.tasks.filter((task) => task.completed).length;
    return (completedTasks / section.tasks.length) * 100;
  };

  const activeData = sections.find((s) => s.id === activeSection)!;

  const openInstruction = (task: Task) => {
    setSelectedTask(task);
    setCurrentStep(0);
    setActiveVariant(0);
    setActiveCategory(0);
  };

  const closeInstruction = () => {
    setSelectedTask(null);
    setCurrentStep(0);
    setActiveVariant(0);
    setActiveCategory(0);
  };

  const nextStep = () => {
    if (selectedTask) {
      if (selectedTask.instructionCategories) {
        const maxSteps = selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps.length;
        if (currentStep < maxSteps - 1) {
          setCurrentStep(currentStep + 1);
        }
      } else if (selectedTask.instructionVariants) {
        const maxSteps = selectedTask.instructionVariants[activeVariant].steps.length;
        if (currentStep < maxSteps - 1) {
          setCurrentStep(currentStep + 1);
        }
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleVariantChange = (value: string) => {
    setActiveVariant(parseInt(value));
    setCurrentStep(0);
  };

  const handleCategoryChange = (value: string) => {
    setActiveCategory(parseInt(value));
    setActiveVariant(0);
    setCurrentStep(0);
  };

  const getDaysUntilForum = (daysBeforeForum: number): number | null => {
    if (!forumDate) return null;
    const today = new Date();
    const deadlineDate = new Date(forumDate);
    deadlineDate.setDate(deadlineDate.getDate() - daysBeforeForum);
    const daysUntil = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntil;
  };

  const isDeadlineUrgent = (task: Task): boolean => {
    const daysUntil = getDaysUntilForum(task.daysBeforeForum);
    if (daysUntil === null) return false;
    return daysUntil <= 3 && daysUntil >= 0;
  };

  const isDeadlinePassed = (task: Task): boolean => {
    const daysUntil = getDaysUntilForum(task.daysBeforeForum);
    if (daysUntil === null) return false;
    return daysUntil < 0;
  };

  return (
    <div className="min-h-screen flex">
      <aside className="w-80 bg-sidebar text-sidebar-foreground p-6 flex flex-col gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="https://cdn.poehali.dev/files/лого алабуга.png" alt="Alabuga Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-sidebar-foreground">"Alabuga Start" Forum Guide</h1>
            </div>
          </div>
          
          <div className="bg-sidebar-accent/50 p-3 rounded-lg">
            <label className="text-xs text-sidebar-foreground/80 mb-2 block">Дата форума</label>
            <input
              type="date"
              value={forumDate ? forumDate.toISOString().split('T')[0] : ''}
              onChange={(e) => setForumDate(e.target.value ? new Date(e.target.value) : null)}
              className="w-full bg-sidebar text-sidebar-foreground px-3 py-2 rounded-md text-sm border border-sidebar-border focus:outline-none focus:ring-2 focus:ring-sidebar-primary"
            />
          </div>

          <a 
            href="https://cdn.poehali.dev/projects/21cf3ca2-3f81-47e1-b1b8-de5640882039/bucket/Дорожная карта организации форума АС.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-2 bg-sidebar hover:bg-sidebar-accent text-sidebar-foreground border-sidebar-border"
            >
              <Icon name="FileText" size={16} />
              <span className="text-sm">Маршрутная карта.PDF</span>
            </Button>
          </a>
        </div>

        <div className="flex flex-col gap-2">
          {sections.map((section) => {
            const progress = calculateProgress(section);
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-4 rounded-lg text-left transition-all ${
                  activeSection === section.id
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'hover:bg-sidebar-accent/50 text-sidebar-foreground/80'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon name={section.icon as any} size={20} />
                  <span className="font-medium text-sm">{section.title}</span>
                </div>
                <div className="ml-8">
                  <Progress value={progress} className="h-1.5 mb-1" />
                  <p className="text-xs text-sidebar-foreground/60">
                    {section.tasks.filter((t) => t.completed).length} из {section.tasks.length} задач
                  </p>
                </div>
              </button>
            );
          })}
        </div>


      </aside>

      <main className="flex-1 p-8 overflow-y-auto bg-background">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Icon name={activeData.icon as any} size={32} className="text-primary" />
              <h2 className="text-3xl font-bold text-foreground">{activeData.title}</h2>
            </div>
            <p className="text-muted-foreground flex items-center gap-2">
              <Icon name="Clock" size={16} />
              Период подготовки: {activeData.period}
            </p>
          </div>

          <div className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border-2 border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Icon name="TrendingUp" size={28} className="text-primary" />
                Общий прогресс
              </h3>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{Math.round(calculateProgress(activeData))}%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {activeData.tasks.filter((t) => t.completed).length} из {activeData.tasks.length}
                </p>
              </div>
            </div>
            <Progress value={calculateProgress(activeData)} className="h-4" />
          </div>

          <div className="space-y-4">
            {activeData.tasks.map((task) => {
              const isUrgent = isDeadlineUrgent(task);
              const isPassed = isDeadlinePassed(task);
              const daysUntil = getDaysUntilForum(task.daysBeforeForum);
              
              return (
              <Card key={task.id} className={`overflow-hidden transition-all hover:shadow-lg border-2 ${
                isUrgent ? 'border-orange-500 bg-orange-950/40 dark:bg-orange-950/60' : isPassed ? 'border-red-500 bg-red-950/40 dark:bg-red-950/60' : 'border-white/30'
              }`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <Checkbox
                          checked={task.completed}
                          onCheckedChange={() => toggleTaskCompletion(activeData.id, task.id)}
                        />
                        <CardTitle className={task.completed ? 'line-through text-muted-foreground' : ''}>
                          {task.title}
                        </CardTitle>
                        {isUrgent && (
                          <Badge variant="destructive" className="ml-2 bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white">
                            <Icon name="AlertTriangle" size={14} className="mr-1" />
                            Срочно!
                          </Badge>
                        )}
                        {isPassed && (
                          <Badge variant="destructive" className="ml-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white">
                            <Icon name="XCircle" size={14} className="mr-1" />
                            Просрочено
                          </Badge>
                        )}
                      </div>
                      <CardDescription>
                        {task.description}
                        {forumDate && daysUntil !== null && (
                          <span className={`ml-2 text-xs ${
                            isUrgent ? 'text-orange-400 dark:text-orange-300 font-medium' : isPassed ? 'text-red-400 dark:text-red-300 font-medium' : 'text-muted-foreground'
                          }`}>
                            {daysUntil > 0 ? `(осталось ${daysUntil} дн.)` : daysUntil === 0 ? '(сегодня!)' : `(просрочено ${Math.abs(daysUntil)} дн.)`}
                          </span>
                        )}
                      </CardDescription>
                    </div>
                    <Badge variant={task.completed ? 'default' : 'secondary'}>
                      {task.completed ? 'Выполнено' : 'В работе'}
                    </Badge>
                  </div>
                </CardHeader>
                {task.hasInstruction && (
                  <CardContent>
                    <Button onClick={() => openInstruction(task)} className="w-full" variant="outline">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Открыть инструкцию
                    </Button>
                  </CardContent>
                )}
              </Card>
            )})}
          </div>
        </div>
      </main>

      <Dialog open={!!selectedTask} onOpenChange={closeInstruction}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col border-2 border-primary/50 bg-gradient-to-br from-card via-card to-primary/5">
          <DialogHeader className="border-b-2 border-primary/30 pb-4">
            <DialogTitle className="text-3xl flex items-center gap-3 font-bold">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Icon name="BookOpen" size={28} className="text-white" />
              </div>
              {selectedTask?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedTask && selectedTask.instructionCategories && (
            <div className="flex-1 overflow-y-auto">
              <Tabs value={activeCategory.toString()} onValueChange={handleCategoryChange} className="mb-4">
                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${selectedTask.instructionCategories.length}, 1fr)` }}>
                  {selectedTask.instructionCategories.map((category, idx) => (
                    <TabsTrigger key={idx} value={idx.toString()}>
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {selectedTask.instructionCategories[activeCategory].variants.length > 1 && (
                <Tabs value={activeVariant.toString()} onValueChange={handleVariantChange} className="mb-6">
                  <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${selectedTask.instructionCategories[activeCategory].variants.length}, 1fr)` }}>
                    {selectedTask.instructionCategories[activeCategory].variants.map((variant, idx) => (
                      <TabsTrigger key={idx} value={idx.toString()}>
                        {variant.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                      {currentStep + 1}
                    </div>
                    <div>
                      <p className="text-base text-muted-foreground">
                        Шаг {currentStep + 1} из {selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps.length}
                      </p>
                      <Progress
                        value={((currentStep + 1) / selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps.length) * 100}
                        className="w-72 h-2.5 mt-1"
                      />
                    </div>
                  </div>
                </div>

                <Card className="bg-muted/50 border-2">
                  <CardContent className="pt-8 pb-8 px-8">
                    <p className="text-xl leading-relaxed whitespace-pre-line">
                      {selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].text}
                    </p>
                    {selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].link && (
                      <a
                        href={selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-primary hover:underline font-medium text-lg"
                      >
                        <Icon name="ExternalLink" size={20} />
                        {selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].linkText}
                      </a>
                    )}
                    {selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].contact && (
                      <div className="mt-6 flex items-center gap-2 text-base bg-primary/10 px-5 py-3 rounded-lg">
                        <Icon name="User" size={18} className="text-primary" />
                        <span className="font-medium">
                          {selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].contact}
                        </span>
                      </div>
                    )}
                    {selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].image && (
                      <div className="mt-6">
                        <img 
                          src={selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].image} 
                          alt={`Шаг ${currentStep + 1}`}
                          className="w-full rounded-lg border-2 border-border shadow-lg"
                        />
                        {selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].imageCaption && (
                          <p className="mt-2 text-sm text-muted-foreground text-center italic">
                            {selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].imageCaption}
                          </p>
                        )}
                      </div>
                    )}
                    {selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].images && (
                      <div className="mt-6 space-y-4">
                        {selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps[currentStep].images.map((img, idx) => (
                          <img 
                            key={idx}
                            src={img} 
                            alt={`Шаг ${currentStep + 1} - Изображение ${idx + 1}`}
                            className="w-full rounded-lg border-2 border-border shadow-lg"
                          />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="flex justify-between pt-6">
                  <Button onClick={prevStep} disabled={currentStep === 0} variant="outline" size="lg">
                    <Icon name="ChevronLeft" size={20} className="mr-2" />
                    Назад
                  </Button>
                  {currentStep < selectedTask.instructionCategories[activeCategory].variants[activeVariant].steps.length - 1 ? (
                    <Button onClick={nextStep} size="lg">
                      Далее
                      <Icon name="ChevronRight" size={20} className="ml-2" />
                    </Button>
                  ) : (
                    <Button onClick={closeInstruction} variant="default" size="lg">
                      <Icon name="Check" size={20} className="mr-2" />
                      Завершить
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {selectedTask && selectedTask.instructionVariants && !selectedTask.instructionCategories && (
            <div className="flex-1 overflow-y-auto">
              {selectedTask.instructionVariants.length > 1 && (
                <Tabs value={activeVariant.toString()} onValueChange={handleVariantChange} className="mb-6">
                  <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${selectedTask.instructionVariants.length}, 1fr)` }}>
                    {selectedTask.instructionVariants.map((variant, idx) => (
                      <TabsTrigger key={idx} value={idx.toString()}>
                        {variant.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                      {currentStep + 1}
                    </div>
                    <div>
                      <p className="text-base text-muted-foreground">
                        Шаг {currentStep + 1} из {selectedTask.instructionVariants[activeVariant].steps.length}
                      </p>
                      <Progress
                        value={((currentStep + 1) / selectedTask.instructionVariants[activeVariant].steps.length) * 100}
                        className="w-72 h-2.5 mt-1"
                      />
                    </div>
                  </div>
                </div>

                <Card className="bg-muted/50 border-2">
                  <CardContent className="pt-8 pb-8 px-8">
                    <p className="text-xl leading-relaxed whitespace-pre-line">
                      {selectedTask.instructionVariants[activeVariant].steps[currentStep].text}
                    </p>
                    {selectedTask.instructionVariants[activeVariant].steps[currentStep].link && (
                      <a
                        href={selectedTask.instructionVariants[activeVariant].steps[currentStep].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-primary hover:underline font-medium text-lg"
                      >
                        <Icon name="ExternalLink" size={20} />
                        {selectedTask.instructionVariants[activeVariant].steps[currentStep].linkText}
                      </a>
                    )}
                    {selectedTask.instructionVariants[activeVariant].steps[currentStep].contact && (
                      <div className="mt-6 flex items-center gap-2 text-base bg-primary/10 px-5 py-3 rounded-lg">
                        <Icon name="User" size={18} className="text-primary" />
                        <span className="font-medium">
                          {selectedTask.instructionVariants[activeVariant].steps[currentStep].contact}
                        </span>
                      </div>
                    )}
                    {selectedTask.instructionVariants[activeVariant].steps[currentStep].image && (
                      <div className="mt-6">
                        <img 
                          src={selectedTask.instructionVariants[activeVariant].steps[currentStep].image} 
                          alt={`Шаг ${currentStep + 1}`}
                          className="w-full rounded-lg border-2 border-border shadow-lg"
                        />
                        {selectedTask.instructionVariants[activeVariant].steps[currentStep].imageCaption && (
                          <p className="mt-2 text-sm text-muted-foreground text-center italic">
                            {selectedTask.instructionVariants[activeVariant].steps[currentStep].imageCaption}
                          </p>
                        )}
                      </div>
                    )}
                    {selectedTask.instructionVariants[activeVariant].steps[currentStep].images && (
                      <div className="mt-6 space-y-4">
                        {selectedTask.instructionVariants[activeVariant].steps[currentStep].images.map((img, idx) => (
                          <img 
                            key={idx}
                            src={img} 
                            alt={`Шаг ${currentStep + 1} - Изображение ${idx + 1}`}
                            className="w-full rounded-lg border-2 border-border shadow-lg"
                          />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="flex justify-between pt-6">
                  <Button onClick={prevStep} disabled={currentStep === 0} variant="outline" size="lg">
                    <Icon name="ChevronLeft" size={20} className="mr-2" />
                    Назад
                  </Button>
                  {currentStep < selectedTask.instructionVariants[activeVariant].steps.length - 1 ? (
                    <Button onClick={nextStep} size="lg">
                      Далее
                      <Icon name="ChevronRight" size={20} className="ml-2" />
                    </Button>
                  ) : (
                    <Button onClick={closeInstruction} variant="default" size="lg">
                      <Icon name="Check" size={20} className="mr-2" />
                      Завершить
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;