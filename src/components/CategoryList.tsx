import { categories } from '@/data/categories';
import { cn } from '@/lib/utils';

interface CategoryListProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryList({ activeCategory, onCategoryChange }: CategoryListProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="font-semibold text-lg mb-4">Категории</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              'w-full text-left px-4 py-2 rounded-md transition-colors',
              activeCategory === category.id
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-slate-600 hover:bg-slate-50'
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
