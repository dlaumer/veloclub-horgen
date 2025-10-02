import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Product, CartItem } from "@/types/product";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-cycling.jpg";

import WebshopHeader from "@/components/WebshopHeader";
import CategoryFilter, { Category } from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Filter products based on selected category
  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  // Calculate product counts for each category
  const productCounts = {
    all: products.length,
    men: products.filter(p => p.category === 'men').length,
    women: products.filter(p => p.category === 'women').length,
    kids: products.filter(p => p.category === 'kids').length,
    other: products.filter(p => p.category === 'other').length,
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product: Product, size: string, quantity: number) => {
    const existingItemIndex = cartItems.findIndex(
      item => item.id === product.id && item.size === size
    );

    if (existingItemIndex >= 0) {
      // Update existing item quantity
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
      const newItem: CartItem = { ...product, size, quantity };
      setCartItems([...cartItems, newItem]);
    }

    toast({
      title: "Added to cart!",
      description: `${product.name} (Size: ${size}) has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id, size);
      return;
    }

    setCartItems(items =>
      items.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (id: string, size: string) => {
    setCartItems(items =>
      items.filter(item => !(item.id === id && item.size === size))
    );
    
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    toast({
      title: "Checkout initiated",
      description: `TWINT payment for CHF ${total.toFixed(2)} would be processed here.`,
    });
    
    // In a real implementation, you would integrate with TWINT API here
    console.log("TWINT checkout for:", cartItems);
  };

  return (
    <div className="min-h-screen bg-gradient-alpine">
      <WebshopHeader
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div>
            <h2 className="text-5xl font-bold mb-4">Ride in Style</h2>
            <p className="text-xl opacity-90">
              Premium cycling apparel for the Swiss Alps
            </p>
          </div>
        </div>
      </section>

      {/* Main Shop Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Our Collection
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of high-quality cycling apparel designed for Swiss cyclists. 
            From professional racing gear to casual club wear, we have everything you need.
          </p>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          productCounts={productCounts}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </main>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        onAddToCart={handleAddToCart}
      />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Swiss Bike Club. All rights reserved.</p>
          <p className="text-sm opacity-80">
            Payment processed securely with TWINT
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
