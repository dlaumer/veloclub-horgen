import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type Category = 'all' | 'men' | 'women' | 'kids' | 'other';

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  productCounts: Record<Category, number>;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange, productCounts }: CategoryFilterProps) => {
  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Products' },
    { key: 'men', label: 'Men' },
    { key: 'women', label: 'Women' },
    { key: 'kids', label: 'Kids' },
    { key: 'other', label: 'Other' },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map(({ key, label }) => (
        <Button
          key={key}
          variant={selectedCategory === key ? "default" : "outline"}
          onClick={() => onCategoryChange(key)}
          className={`relative transition-all duration-300 ${
            selectedCategory === key
              ? "bg-primary text-primary-foreground shadow-elevated"
              : "hover:shadow-card hover:bg-muted"
          }`}
        >
          {label}
          <Badge
            variant="secondary"
            className="ml-2 bg-background/80 text-foreground"
          >
            {productCounts[key]}
          </Badge>
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;