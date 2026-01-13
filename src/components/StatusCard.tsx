import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

interface StatusCardProps {
  count: number;
  label: string;
  color: string;
  icon: string;
  loading?: boolean;
}

export function StatusCard({ count, label, color, icon, loading }: StatusCardProps) {
  return (
    <div className={cn('rounded-lg p-4 flex items-center justify-between', color)}>
      <div>
        <div className="text-3xl font-bold">
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
            </div>
          ) : (
            count
          )}
        </div>
        <div className="text-sm mt-1">{label}</div>
      </div>
      <Icon name={icon} size={32} className="opacity-70" />
    </div>
  );
}
