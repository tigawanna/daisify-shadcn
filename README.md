# `daisify-shadcn`

A tailwind plugin for `shadcn/ui` project that houses all the default tailwind configs for `shadcn/ui` adapted to work with daisy ui themes

## installation

```bash
 npm i daisify-shadcn tailwindcss-animate
 yarn add daisify-shadcn tailwindcss-animate
 pnpm add daisify-shadcn tailwindcss-animate
```

and add it into your `tailwind.config`

```ts
export default {
  content: [
    // vite
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
        // next
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],

plugins: [
    require("tailwindcss-animate"),
    require("daisify-shadcn")
  ],
};

```

then update your shadcncss variables to 

```css
@layer base {
  :root {
    /* 
    use your editor's find and replace to edit these values
    primary-foreground -> primary-content
    secondary-foreground -> secondary-content
    accent-foreground ->accent-content 
    
    */

    --popover:theme(colors.base-200);
    --popover-foreground:theme(colors.base-content);

    --background:theme(colors.base-100);
    --foreground: theme(colors.base-content);
 
    --muted:theme(colors.base-100);
    --muted-foreground:theme(colors.base-content);
 
    --border: theme(colors.base-300);
    --input: theme(colors.base-300);
 
    --card:theme(colors.base-300);
    --card-foreground: theme(colors.base-content);
 
    --destructive: theme(colors.error);
    --destructive-foreground:theme(colors.error-content);
 
    --ring: theme(colors.accent);
 
    --radius: 0.5rem;
  }
 
  .dark {
    /* 
        use your editor's find and replace to edit these values
    primary-foreground -> primary-content
    secondary-foreground -> secondary-content
    accent-foreground ->accent-content 
    
    */

    --popover:theme(colors.base-200);
    --popover-foreground:theme(colors.base-content);

    --background:theme(colors.base-100);
    --foreground: theme(colors.base-content);
 
    --muted:theme(colors.base-100);
    --muted-foreground:theme(colors.base-content);
 
    --border: theme(colors.base-300);
    --input: theme(colors.base-300);
 
    --card:theme(colors.base-300);
    --card-foreground: theme(colors.base-content);
 
    --destructive: theme(colors.error);
    --destructive-foreground:theme(colors.error-content);
 
    --ring: theme(colors.accent);
 
    --radius: 0.5rem;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}


```
