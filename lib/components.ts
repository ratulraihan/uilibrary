export interface Component {
  name: string;
  slug: string;
  description: string;
  category: "inputs" | "display" | "layout" | "navigation" | "feedback" | "data" | "overlay";
  preview: string;
}

export const categoryNames = {
  inputs: "Input Components",
  display: "Display Components",
  layout: "Layout Components",
  navigation: "Navigation Components",
  feedback: "Feedback Components",
  data: "Data Components",
  overlay: "Overlay Components",
};

export const components: Component[] = [
  {
    name: "Accordion",
    slug: "accordion",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    category: "display",
    preview: "/previews/accordion.webp",
  },
  {
    name: "Alert",
    slug: "alert",
    description: "Displays a callout for user attention.",
    category: "feedback",
    preview: "/previews/alert.webp",
  },
  {
    name: "Alert Dialog",
    slug: "alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    category: "overlay",
    preview: "/previews/alert-dialog.webp",
  },
  {
    name: "Aspect Ratio",
    slug: "aspect-ratio",
    description: "Displays content within a desired ratio.",
    category: "layout",
    preview: "/previews/aspect-ratio.webp",
  },
  {
    name: "Avatar",
    slug: "avatar",
    description: "An image element with a fallback for representing the user.",
    category: "display",
    preview: "/previews/avatar.webp",
  },
  {
    name: "Badge",
    slug: "badge",
    description: "Displays a small count or status indicator.",
    category: "display",
    preview: "/previews/badge.webp",
  },
  {
    name: "Button",
    slug: "button",
    description: "Allows users to take actions with a single click or tap.",
    category: "inputs",
    preview: "/previews/button.webp",
  },
  {
    name: "Calendar",
    slug: "calendar",
    description: "A date field component that allows users to enter and edit date values.",
    category: "inputs",
    preview: "/previews/calendar.webp",
  },
  {
    name: "Card",
    slug: "card",
    description: "Displays content and actions about a single subject.",
    category: "layout",
    preview: "/previews/card.webp",
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    description: "A control that allows the user to toggle between checked and unchecked states.",
    category: "inputs",
    preview: "/previews/checkbox.webp",
  },
  {
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    description: "Displays a menu when triggered by a button.",
    category: "overlay",
    preview: "/previews/dropdown-menu.webp",
  },
  {
    name: "Input",
    slug: "input",
    description: "Allows users to input text data.",
    category: "inputs",
    preview: "/previews/input.webp",
  },
  {
    name: "Tabs",
    slug: "tabs",
    description: "A set of layered sections of content that display one panel at a time.",
    category: "navigation",
    preview: "/previews/tabs.webp",
  },
  {
    name: "Toast",
    slug: "toast",
    description: "A succinct message that is displayed temporarily.",
    category: "feedback",
    preview: "/previews/toast.webp",
  },
  {
    name: "Toggle",
    slug: "toggle",
    description: "A two-state button that can be either on or off.",
    category: "inputs",
    preview: "/previews/toggle.webp",
  }
];

export const categorizedComponents = components.reduce((acc, component) => {
  if (!acc[component.category]) {
    acc[component.category] = [];
  }
  acc[component.category].push(component);
  return acc;
}, {} as Record<string, Component[]>);

// Initialize empty arrays for categories that don't have components yet
Object.keys(categoryNames).forEach(category => {
  if (!categorizedComponents[category]) {
    categorizedComponents[category] = [];
  }
});