import Link from "next/link";
import { cn } from "@/lib/utils";
import { categoryNames } from "@/lib/components";

interface CategoryListProps {
  activeCategory?: string;
  className?: string;
}

export function CategoryList({ activeCategory, className }: CategoryListProps) {
  const categories = Object.keys(categoryNames) as Array<keyof typeof categoryNames>;

  return (
    <div className={cn("space-y-1", className)}>
      <Link 
        href="/components"
        className={cn(
          "block rounded-md px-3 py-2 text-sm hover:bg-accent",
          !activeCategory && "bg-accent font-medium"
        )}
      >
        All Components
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          href={`/components/category/${category}`}
          className={cn(
            "block rounded-md px-3 py-2 text-sm hover:bg-accent",
            activeCategory === category && "bg-accent font-medium"
          )}
        >
          {categoryNames[category]}
        </Link>
      ))}
    </div>
  );
}