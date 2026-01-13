import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'support', icon: 'Headphones', label: 'Обратиться за помощью' },
  { id: 'bookings', icon: 'Calendar', label: 'Бронирования' },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-16 bg-slate-700 flex flex-col items-center py-4 space-y-4">
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-8">
        <span className="text-2xl font-bold text-slate-700">G</span>
      </div>
      
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center transition-colors relative',
            activeTab === item.id
              ? 'bg-slate-800 text-white'
              : 'text-slate-400 hover:bg-slate-600 hover:text-white'
          )}
          title={item.label}
        >
          <Icon name={item.icon} size={24} />
          {activeTab === item.id && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-l-full" />
          )}
        </button>
      ))}
    </div>
  );
}
