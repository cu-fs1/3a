import { Badge } from "@/components/ui/badge";

interface StockBadgeProps {
  inStock: boolean;
}

export function StockBadge({ inStock }: StockBadgeProps) {
  return (
    <Badge
      className={`text-sm font-semibold ${
        inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {inStock ? "In Stock" : "Out of Stock"}
    </Badge>
  );
}
