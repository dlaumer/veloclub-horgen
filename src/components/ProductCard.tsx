import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-gradient-card border-0"
      onClick={() => onClick(product)}
    >
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-primary">
              CHF {product.price.toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground capitalize">
              {product.category}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;