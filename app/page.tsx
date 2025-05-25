import Link from "next/link";
import { ArrowRight, Box, Code, Layers, Paintbrush, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstallationGuide } from "@/components/InstallationGuide";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Beautiful UI Components for React
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A professionally designed, accessible component library for building modern web applications.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/components">
                <Button>
                  Browse Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/documentation">
                <Button variant="outline">Documentation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Everything you need to build modern web applications.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Paintbrush className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Beautiful Design</h3>
              <p className="text-center text-muted-foreground">
                Professionally designed components with attention to detail.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Performance</h3>
              <p className="text-center text-muted-foreground">
                Optimized for speed and responsiveness across all devices.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Box className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Customizable</h3>
              <p className="text-center text-muted-foreground">
                Easily customize components to match your brand.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Developer Experience</h3>
              <p className="text-center text-muted-foreground">
                Intuitive APIs and excellent documentation for quick implementation.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Composition</h3>
              <p className="text-center text-muted-foreground">
                Build complex UIs by composing simple components.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  <path d="M12 2v2" />
                  <path d="M12 22v-2" />
                  <path d="m17 20.66-1-1.73" />
                  <path d="M11 10.27 7 3.34" />
                  <path d="m20.66 17-1.73-1" />
                  <path d="m3.34 7 1.73 1" />
                  <path d="M14 12h8" />
                  <path d="M2 12h2" />
                  <path d="m20.66 7-1.73 1" />
                  <path d="m3.34 17 1.73-1" />
                  <path d="m17 3.34-1 1.73" />
                  <path d="m7 20.66 1-1.73" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Accessibility</h3>
              <p className="text-center text-muted-foreground">
                Built with accessibility in mind for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <InstallationGuide />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to get started?</h2>
              <p className="mx-auto max-w-[600px] md:text-xl">
                Start building beautiful interfaces with our component library today.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/components">
                <Button variant="secondary">
                  Explore Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 UI Library. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                GitHub
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Twitter
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Discord
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}