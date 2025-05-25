"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Playground | UI Component Library",
  description: "Test and experiment with UI components in real-time",
};

export default function PlaygroundPage() {
  const [variant, setVariant] = useState("default");
  const [size, setSize] = useState("default");
  const [disabled, setDisabled] = useState(false);
  const [label, setLabel] = useState("Button");
  
  const getButtonCode = () => {
    let code = `<Button`;
    
    if (variant !== "default") {
      code += ` variant="${variant}"`;
    }
    
    if (size !== "default") {
      code += ` size="${size}"`;
    }
    
    if (disabled) {
      code += ` disabled`;
    }
    
    code += `>${label}</Button>`;
    
    return code;
  };

  return (
    <div className="container py-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Component Playground</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Test and experiment with UI components in real-time.
          </p>
        </div>
        
        <Tabs defaultValue="button">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="button">Button</TabsTrigger>
            <TabsTrigger value="input">Input</TabsTrigger>
            <TabsTrigger value="card">Card</TabsTrigger>
          </TabsList>
          
          <TabsContent value="button" className="mt-6 space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Variant</h3>
                  <Select value={variant} onValueChange={setVariant}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select variant" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="outline">Outline</SelectItem>
                      <SelectItem value="secondary">Secondary</SelectItem>
                      <SelectItem value="ghost">Ghost</SelectItem>
                      <SelectItem value="link">Link</SelectItem>
                      <SelectItem value="destructive">Destructive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Size</h3>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="sm">Small</SelectItem>
                      <SelectItem value="lg">Large</SelectItem>
                      <SelectItem value="icon">Icon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Label</h3>
                  <Input 
                    value={label} 
                    onChange={(e) => setLabel(e.target.value)}
                    placeholder="Button label" 
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch 
                    checked={disabled} 
                    onCheckedChange={setDisabled} 
                    id="disabled-mode"
                  />
                  <Label htmlFor="disabled-mode">Disabled</Label>
                </div>
              </div>
              
              <div className="md:w-2/3 space-y-8">
                <div className="rounded-lg border p-8 flex items-center justify-center">
                  <Button
                    variant={variant as any}
                    size={size as any}
                    disabled={disabled}
                    className={cn(
                      size === "icon" && label.length > 1 && "h-10 w-10"
                    )}
                  >
                    {size === "icon" && label.length > 1 ? label[0] : label}
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Code</h3>
                  <CodeBlock code={getButtonCode()} />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="input" className="mt-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Coming soon</h3>
                  <p className="text-muted-foreground">
                    Input playground is under development.
                  </p>
                </div>
              </div>
              
              <div className="md:w-2/3 rounded-lg border p-8 flex items-center justify-center">
                <div className="space-y-2 w-full max-w-sm">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="card" className="mt-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Coming soon</h3>
                  <p className="text-muted-foreground">
                    Card playground is under development.
                  </p>
                </div>
              </div>
              
              <div className="md:w-2/3 rounded-lg border p-8 flex items-center justify-center">
                <div className="rounded-lg border p-6 w-full max-w-sm">
                  <h3 className="font-medium">Card Title</h3>
                  <p className="text-muted-foreground mt-2">Card content goes here.</p>
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm">Cancel</Button>
                    <Button size="sm" className="ml-2">Submit</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}