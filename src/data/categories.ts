import { Category } from '@/types/booking';

export const categories: Category[] = [
  {
    id: 'agd',
    name: 'АГД',
    description: 'Заявки по АГД',
    icon: 'Building2',
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 'alabuga-politech',
    name: 'Алабуга Политех',
    description: 'Заявки по Алабуга Политех',
    icon: 'GraduationCap',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'atc',
    name: 'АТЦ',
    description: 'Заявки по АТЦ',
    icon: 'Car',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    id: 'dab',
    name: 'ДАБ',
    description: 'Заявки по ДАБ',
    icon: 'Home',
    color: 'bg-orange-100 text-orange-700'
  },
  {
    id: 'oaits',
    name: 'ОАИТС',
    description: 'Служба поддержки ОАИТС',
    icon: 'Monitor',
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 'omts',
    name: 'ОМТС',
    description: 'Заявки по ОМТС',
    icon: 'Package',
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    id: 'saazh',
    name: 'СААЖ',
    description: 'Служба поддержки СААЖ',
    icon: 'Home',
    color: 'bg-pink-100 text-pink-700'
  },
  {
    id: 'security',
    name: 'Системы безопасности',
    description: 'Заявки по безопасности',
    icon: 'Shield',
    color: 'bg-red-100 text-red-700'
  },
  {
    id: 'security-service',
    name: 'Служба безопасности и ...',
    description: 'Служба безопасности',
    icon: 'ShieldAlert',
    color: 'bg-red-100 text-red-700'
  },
  {
    id: 'uks-odt',
    name: 'УКС ОЦТ',
    description: 'Заявки УКС ОЦТ',
    icon: 'Building',
    color: 'bg-teal-100 text-teal-700'
  }
];

export const requestTypes = [
  {
    id: 'it-support',
    title: 'Создать заявку',
    description: 'Создайте заявку в службу поддержки отдела администрирования инф. технических систем (ОАИТС)',
    icon: 'Monitor',
    color: 'bg-green-400'
  },
  {
    id: 'geodesy',
    title: 'Создать заявку в Службу геодезии',
    description: 'Создать заявку в Службу геодезии',
    icon: 'Map',
    color: 'bg-green-400'
  },
  {
    id: 'transport',
    title: 'Создать заявку на автотранспорт',
    description: 'Создать заявку на автотранспорт',
    icon: 'Truck',
    color: 'bg-green-400'
  },
  {
    id: '1c-support',
    title: 'Заявка на поддержку 1С',
    description: 'КРI, WEB-КРI, УХ, БП, ЗУП, ТОИР, Документооборот ОЭЗ и Производство, Алабуга Персонал, ERP Машинери, Отчетность по резидентам, БИТ Строительство',
    icon: 'Database',
    color: 'bg-yellow-400'
  },
  {
    id: 'agd-mbo',
    title: 'Создать заявку в АГД МВО',
    description: 'Создайте заявку для настройки прав подчинения в 1С КРI, добавления участника в систему оценок 1С.КРI',
    icon: 'Users',
    color: 'bg-green-400'
  },
  {
    id: 'saazh',
    title: 'Создать заявку в СААЖ',
    description: 'Создайте заявку в службу поддержки СААЖ',
    icon: 'Home',
    color: 'bg-green-400'
  },
  {
    id: 'device-security',
    title: 'Создать заявку на Безопасность устройств',
    description: 'Создайте заявку в службу ОМИТС по Системам Безопасности: Face ID, АПС, СКУД, СОТ, СОТС, СОФ9',
    icon: 'ShieldAlert',
    color: 'bg-pink-400'
  },
  {
    id: 'omts',
    title: 'Создать заявку в ОМТС',
    description: 'Создать заявку в ОМТС на внеплановую закупку',
    icon: 'ShoppingCart',
    color: 'bg-green-400'
  },
  {
    id: 'alabuga-politech-excursion',
    title: 'Создать заявку в "Алабуга Политех"',
    description: 'Создать заявку на проведение экскурсии в "Алабуга Политех"',
    icon: 'GraduationCap',
    color: 'bg-green-400'
  },
  {
    id: 'uks-odt',
    title: 'Создать заявку в УКС ОЦТ',
    description: 'Создать заявки в службу поддержки Exon',
    icon: 'Building',
    color: 'bg-green-400'
  },
  {
    id: 'agd-investments',
    title: 'Создать заявку Инвестпроекты АГД',
    description: 'Создать заявку в Инвестпроекты АГД',
    icon: 'TrendingUp',
    color: 'bg-green-200'
  },
  {
    id: 'jira-confluence',
    title: 'Служба поддержки Jira и Confluence',
    description: 'Служба поддержки Jira и Confluence',
    icon: 'Workflow',
    color: 'bg-green-400'
  },
  {
    id: 'info-security',
    title: 'Создать заявку в Информационную безопасность',
    description: 'Создать заявку в Информационную безопасность',
    icon: 'ShieldCheck',
    color: 'bg-red-400'
  },
  {
    id: 'agreement',
    title: 'Создать заявку на добавление согласующего лица',
    description: 'Создать заявку на добавление согласующего лица',
    icon: 'CheckCircle',
    color: 'bg-purple-400'
  },
  {
    id: 'dashboard-dev',
    title: 'Создать заявку на разработку дашборда',
    description: 'Создать заявку на разработку дашборда',
    icon: 'BarChart3',
    color: 'bg-green-400'
  }
];
