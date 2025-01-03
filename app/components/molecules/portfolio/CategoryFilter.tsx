'use client';

import { Category } from '@/types/category';
import { cn } from '@/lib/utils';
import { Button } from '../../atoms/Button';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-4 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          size="lg"
          onClick={() => onCategoryChange(category.name)}
          className={cn(
            'px-4 py-2 rounded-full transition-colors',
            activeCategory === category.name
              ? 'bg-[#05C7AE] duration shadow hover:bg-[#25B5A2] rounded-xl text-h6'
              : 'bg-transparent shadow-none hover:bg-transparent rounded-xl text-h6'
          )}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}