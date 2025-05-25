import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/CodeBlock";

export function InstallationGuide() {
  const npmInstall = `npm install @ui-library/react`;
  const yarnInstall = `yarn add @ui-library/react`;
  const pnpmInstall = `pnpm add @ui-library/react`;

  const usageExample = `import { Button } from '@ui-library/react';

export default function App() {
  return (
    <Button variant="default">
      Click me
    </Button>
  );
}`;

  const tailwindConfig = `// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@ui-library/react/dist/**/*.{js,ts,jsx,tsx}',
  ],
  // ...rest of your config
}`;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <p className="text-muted-foreground mt-2">
          Install the UI Library package from npm:
        </p>
        <Tabs defaultValue="npm" className="mt-4">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-2">
            <CodeBlock code={npmInstall} language="bash" />
          </TabsContent>
          <TabsContent value="yarn" className="mt-2">
            <CodeBlock code={yarnInstall} language="bash" />
          </TabsContent>
          <TabsContent value="pnpm" className="mt-2">
            <CodeBlock code={pnpmInstall} language="bash" />
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <p className="text-muted-foreground mt-2">
          Import components directly from the package:
        </p>
        <div className="mt-4">
          <CodeBlock code={usageExample} />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Tailwind CSS Setup</h2>
        <p className="text-muted-foreground mt-2">
          Configure your Tailwind CSS to include the UI Library components:
        </p>
        <div className="mt-4">
          <CodeBlock code={tailwindConfig} language="js" />
        </div>
      </div>
    </div>
  );
}