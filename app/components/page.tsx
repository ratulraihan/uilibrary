import { Suspense } from "react";
import { Metadata } from "next";
import { components } from "@/lib/components";
import { ComponentCard } from "@/components/ComponentCard";
import { CategoryList } from "@/components/CategoryList";

export const metadata: Metadata = {
  title: "Components | UI Component Library",
  description: "Browse all UI components available in the library",
};

export default function ComponentsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/5 md:min-w-[200px]">
          <div className="sticky top-24 space-y-4">
            <h2 className="font-semibold text-lg">Categories</h2>
            <CategoryList />
          </div>
        </div>
        <div className="flex-1">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Components</h1>
              <p className="text-muted-foreground mt-2">
                Browse all the available UI components in the library.
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