import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { components } from "@/lib/components";
import { CodeBlock } from "@/components/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ComponentPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return components.map((component) => ({
    slug: component.slug,
  }));
}

export function generateMetadata({ params }: ComponentPageProps): Metadata {
  const component = components.find((c) => c.slug === params.slug);
  
  if (!component) {
    return {
      title: "Component Not Found",
    };
  }
  
  return {
    title: `${component.name} | UI Component Library`,
    description: component.description,
  };
}

export default function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = params;
  const component = components.find((c) => c.slug === slug);
  
  if (!component) {
    notFound();
  }
  
  // Example usage code - this would typically be imported from a documentation file
  const exampleCode = `import { ${component.name} } from "@/components/ui/${component.slug}";

export function ${component.name}Example() {
  return (
    <${component.name}>
      {/* Component content */}
    </${component.name}>
  );
}`;

  const advancedExampleCode = `import { ${component.name} } from "@/components/ui/${component.slug}";

export function Advanced${component.name}Example() {
  return (
    <${component.name} variant="outline" className="custom-class">
      {/* Advanced component content */}
    </${component.name}>
  );
}`;

  return (
    <div className="container py-10">
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/components" className="hover:text-foreground">Components</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{component.name}</span>
      </div>

      <div className="space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{component.name}</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            {component.description}
          </p>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-2/3 p-6">
              <Suspense fallback={<div>Loading preview...</div>}>
                {/* This would be replaced with dynamic component imports */}
                <div className="flex items-center justify-center p-8 rounded-md border h-[300px]">
                  <span className="text-lg text-muted-foreground">
                    {component.name} Preview
                  </span>
                </div>
              </Suspense>
            </div>
            <div className="md:w-1/3 p-6 md:border-l md:min-h-[300px]">
              <h3 className="font-medium">Properties</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-medium">Variants</dt>
                  <dd className="text-sm mt-1 text-muted-foreground">
                    default, outline, ghost, link
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium">Sizes</dt>
                  <dd className="text-sm mt-1 text-muted-foreground">
                    default, sm, lg, icon
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium">Default CSS</dt>
                  <dd className="text-sm mt-1 text-muted-foreground">
                    className="rounded-md font-medium transition-colors"
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
          <Tabs defaultValue="basic">
            <TabsList>
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            <TabsContent value="basic" className="mt-4">
              <CodeBlock code={exampleCode} />
            </TabsContent>
            <TabsContent value="advanced" className="mt-4">
              <CodeBlock code={advancedExampleCode} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Accessibility</h2>
          <p className="text-muted-foreground">
            This component adheres to the WAI-ARIA design pattern. The component handles appropriate
            ARIA roles, states, and properties based on user interaction.
          </p>
          <h3 className="text-xl font-semibold mt-4">Keyboard Interactions</h3>
          <ul className="mt-2 space-y-2 text-muted-foreground">
            <li><kbd>Space</kbd> - Activates the component</li>
            <li><kbd>Enter</kbd> - Activates the component</li>
            <li><kbd>Tab</kbd> - Moves focus to the next focusable element</li>
            <li><kbd>Shift + Tab</kbd> - Moves focus to the previous focusable element</li>
          </ul>
        </div>
      </div>
    </div>
  );
}