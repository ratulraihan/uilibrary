import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Documentation | UI Component Library",
  description: "Learn how to use the UI Component Library in your projects",
};

export default function DocumentationPage() {
  const installCode = `npm install @ui-library/react`;
  
  const setupCode = `// app/providers.tsx
"use client";

import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}`;

  const rootLayoutCode = `// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}`;

  const themeToggleCode = `// components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle theme
    </button>
  );
}`;

  const usingComponentsCode = `import { Button } from "@ui-library/react";

export default function Page() {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}`;

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Learn how to use the UI Component Library in your projects.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
          <p className="text-muted-foreground">
            Install the UI Component Library from npm:
          </p>
          <CodeBlock code={installCode} language="bash" />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Theme Setup</h2>
          <p className="text-muted-foreground">
            The UI Component Library uses next-themes for theme management. Set up the theme provider in your application:
          </p>
          <Tabs defaultValue="setup">
            <TabsList>
              <TabsTrigger value="setup">Provider Setup</TabsTrigger>
              <TabsTrigger value="layout">Root Layout</TabsTrigger>
              <TabsTrigger value="toggle">Theme Toggle</TabsTrigger>
            </TabsList>
            <TabsContent value="setup" className="mt-4">
              <CodeBlock code={setupCode} />
            </TabsContent>
            <TabsContent value="layout" className="mt-4">
              <CodeBlock code={rootLayoutCode} />
            </TabsContent>
            <TabsContent value="toggle" className="mt-4">
              <CodeBlock code={themeToggleCode} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Using Components</h2>
          <p className="text-muted-foreground">
            Import and use components in your application:
          </p>
          <CodeBlock code={usingComponentsCode} />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Component Variants</h2>
          <p className="text-muted-foreground">
            Most components support multiple variants and sizes:
          </p>
          <div className="mt-4 rounded-lg border p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Variants</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>default - Primary action</li>
                  <li>outline - Secondary action</li>
                  <li>ghost - Subtle action</li>
                  <li>link - Navigation action</li>
                  <li>destructive - Dangerous action</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Sizes</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>default - Standard size</li>
                  <li>sm - Small size</li>
                  <li>lg - Large size</li>
                  <li>icon - Icon button (square)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Consistency</h3>
              <p className="text-muted-foreground mt-2">
                All components follow the same design language and interaction patterns.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Accessibility</h3>
              <p className="text-muted-foreground mt-2">
                Components are built with accessibility in mind, following WAI-ARIA guidelines.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Composability</h3>
              <p className="text-muted-foreground mt-2">
                Components are designed to work together and can be combined to create complex UIs.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Customization</h3>
              <p className="text-muted-foreground mt-2">
                Components can be easily customized to match your brand and design requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Design Tokens</h2>
          <p className="text-muted-foreground">
            The UI Component Library uses CSS variables for consistent design tokens across all components:
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary"></div>
                <span>Primary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-secondary"></div>
                <span>Secondary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-accent"></div>
                <span>Accent</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-muted"></div>
                <span>Muted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-card"></div>
                <span>Card</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-popover"></div>
                <span>Popover</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-border"></div>
                <span>Border</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-input"></div>
                <span>Input</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-destructive"></div>
                <span>Destructive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}