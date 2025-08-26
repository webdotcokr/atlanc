# Design System Rules for Figma Integration

## Project Overview
- **Framework**: Next.js 15.5.0 with React 19.1.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **Language**: TypeScript
- **Build**: Next.js Turbopack

## Design System Structure

### 1. Token Definitions
Design tokens are defined in `app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

**Token Structure Guidelines:**
- Use CSS custom properties (variables) for design tokens
- Follow `--color-{name}`, `--font-{name}`, `--spacing-{size}` naming convention
- Support both light and dark themes using CSS media queries
- Store tokens in `app/globals.css` with `@theme inline` for Tailwind v4

### 2. Component Architecture
- **Location**: Components should be created in `app/components/` directory
- **Pattern**: Use functional React components with TypeScript
- **Styling**: Use Tailwind CSS classes with design tokens
- **File Structure**: 
  ```
  app/
    components/
      ui/           # Basic UI components
      layout/       # Layout components
      [feature]/    # Feature-specific components
  ```

### 3. Styling Approach
- **Primary**: Tailwind CSS v4 with design tokens
- **Global Styles**: Defined in `app/globals.css`
- **Responsive**: Use Tailwind's responsive prefixes
- **Dark Mode**: Automatic system preference detection

### 4. Asset Management
- **Images**: Store in `/public/` directory
- **SVG Icons**: Store in `/public/` with descriptive names
- **Optimization**: Next.js automatic image optimization

### 5. Typography
- **Fonts**: Geist Sans and Geist Mono (via CSS variables)
- **Implementation**: Use `--font-sans` and `--font-mono` tokens
- **Fallback**: Arial, Helvetica, sans-serif

### 6. Color System
- **Background**: `var(--background)` - #ffffff (light), #0a0a0a (dark)
- **Foreground**: `var(--foreground)` - #171717 (light), #ededed (dark)
- **Usage**: Access via Tailwind's `bg-background`, `text-foreground` classes

## Figma to Code Guidelines

### When extracting from Figma:
1. **Colors**: Convert Figma color variables to CSS custom properties
2. **Typography**: Map Figma text styles to Tailwind typography classes
3. **Spacing**: Use Tailwind's spacing scale (px-4, py-8, etc.)
4. **Components**: Create reusable React components in `app/components/ui/`
5. **Layouts**: Use CSS Grid and Flexbox via Tailwind utilities

### Code Generation Patterns:
```tsx
// Example component structure
interface ComponentProps {
  className?: string;
  children: React.ReactNode;
}

export default function Component({ className, children }: ComponentProps) {
  return (
    <div className={`base-styles ${className}`}>
      {children}
    </div>
  );
}
```

### Token Usage in Components:
```tsx
// Use semantic tokens from Tailwind config
<div className="bg-background text-foreground">
  <h1 className="font-sans">Title</h1>
  <p className="font-mono">Code text</p>
</div>
```

## Development Commands
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## File Organization
```
my-app/
├── app/
│   ├── components/     # Reusable components
│   ├── globals.css     # Design tokens & global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Pages
├── public/             # Static assets
└── package.json        # Dependencies
```

## Integration Notes
- Always check existing token definitions before adding new ones
- Use Tailwind's utility classes over custom CSS
- Maintain consistent spacing using Tailwind's scale
- Follow Next.js app router conventions
- Ensure TypeScript types for all props and components