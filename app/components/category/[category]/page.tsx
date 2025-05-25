import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { categorizedComponents, categoryNames } from "@/lib/components";
import { ComponentCard } from "@/components/ComponentCard";
import { CategoryList } from "@/components/CategoryList";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(categoryNames).map((category) => ({
    category: category,
  }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = params.category;
  
  if (!(category in categoryNames)) {
    return {
      title: "Category Not Found",
    };
  }
  
  return {
    title: `${categoryNames[category as keyof typeof categoryNames]} | UI Component Library`,
    description: `Browse all ${categoryNames[category as keyof typeof categoryNames]} in the UI library`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  
  if (!(category in categoryNames)) {
    notFound();
  }
  
  const components = categorizedComponents[category] || [];
  
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/5 md:min-w-[200px]">
          <div className="sticky top-24 space-y-4">
            <h2 className="font-semibold text-lg">Categories</h2>
            <CategoryList activeCategory={category} />
          </div>
        </div>
        <div className="flex-1">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {categoryNames[category as keyof typeof categoryNames]}
              </h1>
              <p className="text-muted-foreground mt-2">
                Browse all {categoryNames[category as keyof typeof categoryNames]} in the library.
              </p>
            </div>
            <Suspense fallback={<div>Loading components...</div>}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {components.map((component) => (
                  <ComponentCard key={component.slug} component={component} />
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}