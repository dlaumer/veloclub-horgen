import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { ShoppingCart } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const availableSizes = Object.entries(product.stock)
    .filter(([_, stock]) => stock > 0)
    .map(([size]) => size);

  const maxQuantity = selectedSize ? product.stock[selectedSize] || 0 : 0;

  const handleAddToCart = () => {
    if (selectedSize && quantity > 0) {
      onAddToCart(product, selectedSize, quantity);
      onClose();
      setSelectedSize("");
      setQuantity(1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-card border-0 shadow-elevated">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">
                CHF {product.price.toFixed(2)}
              </p>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Available Sizes & Stock:</h4>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(product.stock).map(([size, stock]) => (
                  <div
                    key={size}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      stock > 0
                        ? selectedSize === size
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                        : "border-muted bg-muted/50 cursor-not-allowed"
                    }`}
                    onClick={() => stock > 0 && setSelectedSize(size)}
                  >
                    <div className="text-center">
                      <div className="font-semibold">{size}</div>
                      <Badge variant={stock > 0 ? "secondary" : "destructive"} className="mt-1">
                        {stock > 0 ? `${stock} left` : "Out of stock"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {selectedSize && (
              <div className="space-y-3">
                <div>
                  <label className="font-semibold mb-2 block">Quantity:</label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="font-semibold px-4">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
                      disabled={quantity >= maxQuantity}
                    >
                      +
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Max: {maxQuantity} available
                  </p>
                </div>
                
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart - CHF {(product.price * quantity).toFixed(2)}
                </Button>
              </div>
            )}
            
            {!selectedSize && availableSizes.length > 0 && (
              <p className="text-center text-muted-foreground">
                Please select a size to continue
              </p>
            )}
            
            {availableSizes.length === 0 && (
              <div className="text-center py-4">
                <Badge variant="destructive" className="text-lg px-4 py-2">
                  Currently Out of Stock
                </Badge>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;