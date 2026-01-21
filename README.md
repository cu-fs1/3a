# Product Listing Page

This is a [Next.js](https://nextjs.org) project that displays a product listing with product cards using [shadcn/ui](https://ui.shadcn.com) components and Tailwind CSS.

## Features

- Responsive product grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
- Product cards with images, prices, and stock status
- Sale badges for discounted items
- Stock status indicators (In Stock/Out of Stock)
- Hover effects and smooth transitions
- Optimized images with Next.js Image component

## Setup & Installation

### 1. Initialize shadcn/ui

To set up shadcn/ui in your Next.js project, run:

```bash
pnpm dlx shadcn@latest init -y
```

This command:
- Verifies your Next.js framework installation
- Validates Tailwind CSS configuration
- Creates `components.json` for shadcn configuration
- Updates `app/globals.css` with CSS variables
- Installs required dependencies
- Creates `lib/utils.ts` for utility functions

### 2. Add shadcn/ui Components

Add the specific components used in this project:

```bash
pnpm dlx shadcn@latest add card badge
```

This installs:
- **Card**: For the product card layout (CardContent, CardHeader, etc.)
- **Badge**: For status indicators (In Stock, Out of Stock, Sale)

### 3. Configure External Images

Update `next.config.ts` to allow images from external sources:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
```

## Code Explanation

### Imports

```typescript
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
```

- **Card, CardContent**: shadcn/ui components for structured card layout
- **Badge**: shadcn/ui component for status labels
- **Image**: Next.js optimized image component with lazy loading and responsive sizes

### Products Data

```typescript
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    originalPrice: 179.99,
    inStock: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
  },
  // ... more products
];
```

Each product object contains:
- `id`: Unique identifier for React key
- `name`: Product name displayed as heading
- `price`: Current/sale price
- `originalPrice`: Original price (shows strikethrough if on sale)
- `inStock`: Boolean for stock status
- `image`: URL to product image

### Layout Structure

```tsx
<div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
```

- Full viewport height background
- Gradient background from light gray to slightly darker gray
- Responsive padding that increases on larger screens

### Grid Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

Responsive grid that adapts to screen size:
- **Mobile**: 1 column (`grid-cols-1`)
- **Tablet**: 2 columns (`md:grid-cols-2`)
- **Desktop**: 3 columns (`lg:grid-cols-3`)
- **Gap**: 6 units of spacing between items

### Product Card Component

```tsx
<Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
  <CardContent className="p-0">
```

- `key={product.id}`: React key for efficient rendering
- `overflow-hidden`: Clips content to card boundaries
- `hover:shadow-lg`: Adds shadow on hover for depth
- `transition-shadow`: Smooth shadow animation
- `p-0`: Removes default padding for full-width image

### Image Section

```tsx
<div className="relative bg-gray-200 h-64 overflow-hidden">
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-cover hover:scale-105 transition-transform"
  />
```

- `relative`: Allows absolute positioning of badges
- `h-64`: Fixed height (256px) for consistent card sizing
- `fill`: Image fills the parent container
- `object-cover`: Crops image to fit without distortion
- `hover:scale-105`: Image zooms slightly on hover

### Sale Badge

```tsx
{product.originalPrice > product.price && (
  <div className="absolute top-3 right-3">
    <Badge className="bg-red-500 hover:bg-red-600 text-white">
      Sale
    </Badge>
  </div>
)}
```

- Conditionally renders only if there's a price discount
- `absolute top-3 right-3`: Positioned in top-right corner
- Red badge with white text to draw attention

### Price Section

```tsx
<div className="flex items-center gap-2 mb-4">
  <p className="text-3xl font-bold text-gray-900">
    ${product.price.toFixed(2)}
  </p>
  {product.originalPrice > product.price && (
    <p className="text-lg text-gray-500 line-through">
      ${product.originalPrice.toFixed(2)}
    </p>
  )}
</div>
```

- Current price in large bold text
- Original price shown as strikethrough only if discounted
- `toFixed(2)`: Ensures 2 decimal places for currency

### Stock Status Badge

```tsx
<Badge
  variant={product.inStock ? "default" : "destructive"}
  className={`text-sm font-semibold ${
    product.inStock
      ? "bg-green-100 text-green-800 hover:bg-green-100"
      : "bg-red-100 text-red-800 hover:bg-red-100"
  }`}
>
  {product.inStock ? "In Stock" : "Out of Stock"}
</Badge>
```

- Dynamic styling based on `inStock` status
- Green for in-stock items
- Red for out-of-stock items
- Shows appropriate text label

## Running the Project

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the product listing.

## Tailwind CSS

This project uses [Tailwind CSS](https://tailwindcss.com) for styling. The configuration is in `tailwind.config.js` and CSS variables are defined in `app/globals.css`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
