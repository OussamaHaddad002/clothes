import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">
            {product.name}
            {!product.inStock && (
              <span className="ml-2 text-sm text-destructive">(Out of Stock)</span>
            )}
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onEdit(product)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => onDelete(product.id)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-bold">${product.price}</p>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-sm"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color.hex }}
              />
              <span>{color.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;