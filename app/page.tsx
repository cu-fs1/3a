import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StockBadge } from "@/components/stock-badge";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    originalPrice: 179.99,
    inStock: true,
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 89.99,
    originalPrice: 89.99,
    inStock: false,
    url: "https://images.unsplash.com/photo-1626958390898-162d3577f293?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    originalPrice: 249.99,
    inStock: true,
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div className="relative bg-gray-200 h-64 overflow-hidden">
                  <Image
                    src={product.url}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                  {product.originalPrice > product.price && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-red-500 hover:bg-red-600 text-white">
                        Sale
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
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
                  <StockBadge inStock={product.inStock} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
