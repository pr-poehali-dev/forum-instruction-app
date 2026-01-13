import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface Task {
  id: string;
  title: string;
  description: string;
  steps: string[];
  completed: boolean;
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
  const [sections, setSections] = useState<TimeSection[]>([
    {
      id: 'month',
      title: 'За месяц до форума',
      period: '30 дней',
      icon: 'Calendar',
      tasks: [
        {
          id: 'venue',
          title: 'Выбор и бронирование площадки',
          description: 'Подготовка пространства для проведения форума',
          steps: [
            'Составить список требований к площадке (количество участников, технические требования)',
            'Провести осмотр потенциальных площадок',
            'Согласовать договор аренды',
            'Внести предоплату за бронирование',
          ],
          completed: false,
        },
        {
          id: 'speakers',
          title: 'Формирование списка спикеров',
          description: 'Приглашение экспертов и подтверждение участия',
          steps: [
            'Составить список потенциальных спикеров',
            'Отправить приглашения с описанием темы',
            'Согласовать даты выступлений',
            'Получить подтверждения участия',
          ],
          completed: false,
        },
        {
          id: 'budget',
          title: 'Утверждение бюджета',
          description: 'Планирование финансовых расходов мероприятия',
          steps: [
            'Собрать смету по всем направлениям',
            'Согласовать бюджет с финансовым отделом',
            'Определить источники финансирования',
            'Получить финальное одобрение',
          ],
          completed: false,
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
          id: 'promotion',
          title: 'Запуск рекламной кампании',
          description: 'Продвижение мероприятия и привлечение участников',
          steps: [
            'Разработать креативы для соцсетей',
            'Запустить таргетированную рекламу',
            'Разослать email-рассылку базе контактов',
            'Организовать PR-поддержку в СМИ',
          ],
          completed: false,
        },
        {
          id: 'materials',
          title: 'Подготовка печатных материалов',
          description: 'Создание брендированных раздаточных материалов',
          steps: [
            'Разработать дизайн программы форума',
            'Согласовать макеты бейджей и сертификатов',
            'Отправить в печать тираж материалов',
            'Проверить качество готовой продукции',
          ],
          completed: false,
        },
        {
          id: 'tech',
          title: 'Техническая подготовка',
          description: 'Настройка оборудования и коммуникаций',
          steps: [
            'Согласовать технический райдер со спикерами',
            'Заказать аренду звукового и проекционного оборудования',
            'Проверить качество интернет-соединения на площадке',
            'Подготовить резервные варианты оборудования',
          ],
          completed: false,
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
          id: 'final-check',
          title: 'Финальная проверка площадки',
          description: 'Последний осмотр и согласование деталей',
          steps: [
            'Провести финальную встречу с администрацией площадки',
            'Проверить работу всего оборудования',
            'Согласовать схему расстановки мебели',
            'Убедиться в готовности зон питания и отдыха',
          ],
          completed: false,
        },
        {
          id: 'briefing',
          title: 'Проведение брифинга команды',
          description: 'Инструктаж волонтёров и организаторов',
          steps: [
            'Провести общее собрание команды',
            'Распределить зоны ответственности',
            'Выдать форму и бейджи волонтёрам',
            'Ответить на все вопросы команды',
          ],
          completed: false,
        },
        {
          id: 'checklist',
          title: 'Подготовка чек-листов',
          description: 'Создание списков для контроля в день мероприятия',
          steps: [
            'Составить чек-лист регистрации участников',
            'Подготовить список контактов всех подрядчиков',
            'Создать тайминг мероприятия по минутам',
            'Распечатать и распределить чек-листы по зонам',
          ],
          completed: false,
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

  return (
    <div className="min-h-screen flex">
      <aside className="w-80 bg-sidebar text-sidebar-foreground p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-sidebar-primary flex items-center justify-center">
            <Icon name="Rocket" size={24} className="text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-sidebar-foreground">Forum Guide</h1>
            <p className="text-xs text-sidebar-foreground/60">Инструкции организатора</p>
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

        <div className="mt-auto pt-6 border-t border-sidebar-border">
          <div className="flex items-center gap-3 text-sm text-sidebar-foreground/60">
            <Icon name="Info" size={16} />
            <span>Фотографии и детали будут добавлены позже</span>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
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

          <div className="mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Общий прогресс</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={calculateProgress(activeData)} className="h-3" />
                <p className="text-sm text-muted-foreground mt-2">
                  Выполнено {activeData.tasks.filter((t) => t.completed).length} из {activeData.tasks.length} задач
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {activeData.tasks.map((task) => (
              <Card key={task.id} className="overflow-hidden transition-shadow hover:shadow-lg">
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
                      </div>
                      <CardDescription>{task.description}</CardDescription>
                    </div>
                    <Badge variant={task.completed ? 'default' : 'secondary'}>
                      {task.completed ? 'Выполнено' : 'В работе'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="steps" className="border-none">
                      <AccordionTrigger className="text-sm font-medium hover:no-underline">
                        <div className="flex items-center gap-2">
                          <Icon name="ListChecks" size={16} />
                          Шаги выполнения ({task.steps.length})
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ol className="space-y-3 mt-2">
                          {task.steps.map((step, idx) => (
                            <li key={idx} className="flex gap-3 text-sm">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
                                {idx + 1}
                              </span>
                              <span className="text-muted-foreground pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
