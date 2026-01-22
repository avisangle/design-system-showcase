# Shadcn UI Component Library - Free Tailwind CSS Components

A comprehensive, open-source **UI component library** built with **shadcn/ui**, **Radix UI**, **Tailwind CSS**, and **Next.js**. This free **React component library** provides production-ready, accessible components that you can copy and paste into your apps. Perfect for building modern web applications with **TypeScript** support.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://templates.avinashsangle.com)
[![GitHub](https://img.shields.io/github/stars/avisangle/design-system-showcase?style=social)](https://github.com/avisangle/design-system-showcase)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **50+ Components**: Buttons, badges, cards, alerts, accordions, tabs, tables, charts, forms, and more
- **Fully Accessible**: Built on Radix UI primitives with WCAG compliance
- **Dark Mode**: Native dark mode support with next-themes
- **Type Safe**: Written in TypeScript with full type definitions
- **Customizable**: Easy to customize with Tailwind CSS utility classes
- **Copy-Paste**: No package installation required - copy components directly
- **Production Ready**: Used in real-world applications
- **Responsive**: Mobile-first design with responsive breakpoints

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (React 19)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Quick Start

### Download Template

[Download ZIP](https://github.com/avisangle/design-system-showcase/archive/refs/heads/main.zip)

### Installation

```bash
# Clone the repository
git clone https://github.com/avisangle/design-system-showcase.git

# Navigate to project directory
cd design-system-showcase

# Install dependencies
npm install
# or
pnpm install
# or
bun install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Component Categories

### UI Components
- **Buttons**: Primary, secondary, outline, ghost, destructive variants with sizes
- **Badges**: Default, secondary, outline, destructive variants
- **Cards**: Content containers with header, body, and footer
- **Alerts**: Info, success, warning, error notifications
- **Avatars**: Profile images with fallback support

### Interactive Components
- **Accordions**: Expandable/collapsible content sections
- **Tabs**: Tabbed navigation and content switching
- **Dialogs**: Modal windows and alerts
- **Popovers**: Floating content containers
- **Dropdowns**: Menu and select components

### Form Components
- **Inputs**: Text, email, password, number fields
- **Textareas**: Multi-line text inputs
- **Select**: Dropdown selection
- **Checkboxes**: Single and multiple selections
- **Radio Groups**: Single choice selections
- **Switches**: Toggle controls
- **Date Pickers**: Calendar date selection

### Data Display
- **Tables**: Sortable, filterable data tables
- **Charts**: Line, bar, area, pie charts with Recharts
- **Progress**: Progress bars and indicators
- **Skeletons**: Loading placeholders

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── showcases/         # Component demos
│   ├── navbar.tsx         # Navigation bar
│   ├── hero-section.tsx   # Hero section
│   └── footer.tsx         # Footer
├── lib/
│   └── utils.ts           # Utility functions
├── hooks/                 # Custom React hooks
├── public/                # Static assets
└── styles/               # Global styles
```

## Customization

All components are built with Tailwind CSS and can be easily customized:

```tsx
// Example: Customize button colors
<Button className="bg-purple-600 hover:bg-purple-700">
  Custom Button
</Button>
```

Modify `tailwind.config.js` to change theme colors, fonts, and other design tokens.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created by [Avinash Sangle](https://avinashsangle.com)

- Twitter: [@avi_sangle](https://x.com/avi_sangle)
- GitHub: [@avisangle](https://github.com/avisangle)

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - For the amazing component library
- [Radix UI](https://www.radix-ui.com/) - For accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first styling
- [Vercel](https://vercel.com) - For hosting and deployment

## Frequently Asked Questions (FAQ)

### What is shadcn/ui?

shadcn/ui is a collection of re-usable components built with Radix UI and Tailwind CSS. Unlike traditional component libraries, you copy and paste the components directly into your project, giving you full control and ownership of the code.

### How do I install shadcn/ui components?

You don't install shadcn/ui as a dependency. Instead, you copy the component code from this repository into your project. Each component is standalone and can be customized to fit your needs.

### Can I use this template for commercial projects?

Yes! This template is licensed under the MIT License, which means you can use it for personal and commercial projects for free.

### Is this component library accessible?

Absolutely! All components are built on Radix UI primitives, which follow WAI-ARIA design patterns and provide full keyboard navigation support out of the box.

### How do I customize the colors and styling?

You can customize the design system by modifying the `tailwind.config.js` file. All components use Tailwind CSS utility classes, making them easy to customize without touching the component logic.

### Does this work with Next.js 14 and 15?

Yes, this template is compatible with Next.js 14, 15, and 16. It uses the App Router and modern React features like Server Components.

### Can I use this with other React frameworks?

While this template is built for Next.js, the components can be adapted to work with other React frameworks like Remix, Vite, or Create React App with minimal modifications.

### How do I add dark mode support?

Dark mode is already included! This template uses `next-themes` for theme switching. The theme toggle is available in the navigation bar.

### What's the difference between this and other UI libraries?

Unlike libraries like Material-UI or Ant Design, you copy the component code directly into your project. This gives you full control, no vendor lock-in, and smaller bundle sizes since you only include what you need.

### Is TypeScript required?

TypeScript is recommended for the best developer experience, but you can convert the components to JavaScript if needed by removing type annotations.

### How do I update the components?

Since you own the code, you manually update components by copying new versions from this repository. This gives you control over when and how to update.

### Can I contribute new components?

Yes! Contributions are welcome. Please submit a Pull Request with your component, following the existing code style and including documentation.

## Related Projects

- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

If you find this project helpful, please give it a ⭐ on [GitHub](https://github.com/avisangle/design-system-showcase)!
