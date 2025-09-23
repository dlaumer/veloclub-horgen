import { Button } from "@/components/ui/button";
import ShoppingCart from "./ShoppingCart";
import { CartItem } from "@/types/product";
import { Bike, MapPin } from "lucide-react";

interface WebshopHeaderProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, size: string, quantity: number) => void;
  onRemoveItem: (id: string, size: string) => void;
  onCheckout: () => void;
}

const WebshopHeader = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }: WebshopHeaderProps) => {
  return (
    <header className="bg-white border-b border-border shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bike className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Swiss Bike Club</h1>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>Zürich, Switzerland</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-foreground hover:bg-muted transition-colors"
            >
              About Club
            </Button>
            <ShoppingCart
              items={cartItems}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
              onCheckout={onCheckout}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default WebshopHeader;