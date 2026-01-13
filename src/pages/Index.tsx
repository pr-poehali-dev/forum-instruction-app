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
                },
                {
                  text: 'Отредактируйте время начала мероприятий, при необходимости добавьте дополнительные мероприятия, нажав на кнопку "Добавить элемент"',
                },
                {
                  text: 'После редактирования нажмите на кнопку "Сформировать расписание"',
                },
                {
                  text: 'Сформированное расписание можно сохранить или скачать в формате PDF-файла',
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
                  text: 'Предоставьте информацию: 1) ФИО и номер телефона ответственного по мероприятию; 2) Дата проведения; 3) Причина проведения; 4) Подразделение ответственное за мероприятие; 5) Форма документа (заявка или отчет); 6) ФИО и номер телефона ответственного за распоряжение',
                },
                {
                  text: 'В конце месяца в 1С вам направляется документ, в котором необходимо подготовить 5 пунктов по этому письму (будут примеры)',
                },
                {
                  text: 'Документ на оплату передается старшему специалисту для оплаты по распоряжению',
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
                  text: 'В конце месяца в 1С вам направляется документ, в котором необходимо подготовить 5 пунктов по этому письму (будут примеры)',
                },
                {
                  text: 'Документ на оплату передается старшему специалисту для оплаты по распоряжению',
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
          instructionVariants: [
            {
              title: 'Граждане РФ',
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
                  text: 'На сайте нажмите "Создать заявку на физ. лицо", выберите "Гражданин РФ"',
                },
                {
                  text: 'Заполните заявку, обязательно прикрепите сканы паспорта и согласия на обработку данных',
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
                {
                  text: 'Доступ к Face ID оформляется на пешем КПП. Оформление возможно только в присутствии сотрудника с внутренней доверенностью СБ',
                },
              ],
            },
            {
              title: 'Иностранные граждане',
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
                  text: 'На сайте нажмите "Создать заявку на физ. лицо", выберите "Иностранное лицо"',
                },
                {
                  text: 'Заполните заявку, обязательно прикрепите сканы паспорта, согласия на обработку данных, визы',
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
                {
                  text: 'Доступ к Face ID оформляется на пешем КПП. Оформление возможно только в присутствии сотрудника с внутренней доверенностью СБ',
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
                  text: 'Для массового заселения участниц в корп. жилье запустите документ "Заявка на жилье" в системе 1С:ДО 3.0',
                },
                {
                  text: 'Заполните документ по образцу, на каждую участницу прикрепите паспорт: страница с фото + прописка',
                },
                {
                  text: 'После заполнения заявки, запустите процесс согласования документа',
                },
                {
                  text: 'Процесс можно запустить автоматически, нажав на кнопку "Записать и закрыть", а после подтвердить запуск',
                },
                {
                  text: 'Также процесс можно запустить вручную, нажав на кнопку "Отправить", запуск также необходимо подтвердить',
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
                },
                {
                  text: 'Из приведенного списка выберите «Создать заявку на автотранспорт»',
                },
                {
                  text: 'Заполните и отправьте заявку',
                },
                {
                  text: 'В заявке необходимо полностью прописать весь маршрут с указанием времени',
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
                },
                {
                  text: 'Из предложенного списка переговорных выберите нужную вам. Нажмите на знак плюса справа от выбранной переговорной',
                },
                {
                  text: 'В правом верхнем углу выберите вкладку "Месяц"',
                },
                {
                  text: 'Выберите необходимую дату и нажмите на нее',
                },
                {
                  text: 'Заполните появившееся окно, нажмите кнопку добавить',
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
                },
                {
                  text: 'Из предложенного списка выберите "Alabuga - Курчатов Конгресс-зал". Нажмите на знак плюса справа',
                },
                {
                  text: 'В правом верхнем углу выберите вкладку "Месяц"',
                },
                {
                  text: 'Выберите необходимую дату и нажмите на нее',
                },
                {
                  text: 'Заполните окно, в комментариях укажите: ответственное лицо, контактные данные (ТГ, тел.), цель бронирования, кол-во человек. Нажмите кнопку добавить',
                },
              ],
            },
            {
              title: 'Конференц-зал "Яковлев"',
              steps: [
                {
                  text: 'Для бронирования напишите в Телеграм',
                  contact: '@SamatNeVk',
                },
                {
                  text: 'Шаблон сообщения: Добрый день, меня зовут Иван, являюсь специалистом Управления HR. 25.12.2025 мы планируем проведение форума "Алабуга Старт ВУЗы". В рамках данного мероприятия нам необходим конференц-зал в Синергии 13.2 "Яковлев", 25.12.2025 с 12:00 до 16:00. Просим вас зарегистрировать бронь',
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
                },
                {
                  text: 'Из предложенного списка выберите "Alabuga - Спортзал (учебный класс)". Нажмите на знак плюса справа',
                },
                {
                  text: 'В правом верхнем углу выберите вкладку "Месяц"',
                },
                {
                  text: 'Выберите необходимую дату и нажмите на нее',
                },
                {
                  text: 'Заполните окно, в комментариях укажите: ответственное лицо, контактные данные (ТГ, тел.), цель бронирования, кол-во человек. Нажмите кнопку добавить',
                },
              ],
            },
            {
              title: 'Спортзал "Пирамида"',
              steps: [
                {
                  text: 'Для бронирования напишите в Телеграм',
                  contact: '@PiramidaHostel',
                },
                {
                  text: 'Предоставьте информацию: дата и время мероприятия, ФИО ответственного, количество человек, цель брони',
                },
                {
                  text: 'Бронь доступна только для совершеннолетних лиц',
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
                },
                {
                  text: 'Из приведенного списка выберите "Создать заявку"',
                },
                {
                  text: 'Заполните заявку согласно приведенному примеру',
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
                isUrgent ? 'border-orange-500 bg-orange-50/50' : isPassed ? 'border-red-500 bg-red-50/50' : 'border-white/30'
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
                          <Badge variant="destructive" className="ml-2 bg-orange-500">
                            <Icon name="AlertTriangle" size={14} className="mr-1" />
                            Срочно!
                          </Badge>
                        )}
                        {isPassed && (
                          <Badge variant="destructive" className="ml-2">
                            <Icon name="XCircle" size={14} className="mr-1" />
                            Просрочено
                          </Badge>
                        )}
                      </div>
                      <CardDescription>
                        {task.description}
                        {forumDate && daysUntil !== null && (
                          <span className={`ml-2 text-xs ${
                            isUrgent ? 'text-orange-600 font-medium' : isPassed ? 'text-red-600 font-medium' : 'text-muted-foreground'
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
                    <p className="text-xl leading-relaxed">
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
                    <p className="text-xl leading-relaxed">
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