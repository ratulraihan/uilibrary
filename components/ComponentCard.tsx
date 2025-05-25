import Link from "next/link";
import Image from "next/image";
import { type Component } from "@/lib/components";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ComponentCardProps {
  component: Component;
  className?: string;
}

export function ComponentCard({ component, className }: ComponentCardProps) {
  return (
    <Link href={`/components/${component.slug}`}>
      <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
        <CardContent className="p-0">
          <div className="aspect-video w-full overflow-hidden bg-muted/20">
            <div className="flex h-full items-center justify-center p-6">
              <span className="text-xl font-medium text-muted-foreground">{component.name}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <div>
            <h3 className="font-medium leading-none">{component.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {component.description}
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}