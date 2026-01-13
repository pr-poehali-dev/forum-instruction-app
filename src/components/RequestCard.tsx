import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

interface RequestCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  onClick?: () => void;
}

export function RequestCard({ title, description, icon, color, onClick }: RequestCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'p-4 rounded-lg text-left hover:opacity-90 transition-opacity w-full',
        color
      )}
    >
      <div className="flex items-start gap-3">
        <Icon name={icon} size={40} className="flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-base mb-1">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </button>
  );
}
