import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, X, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

const Cart = () => {
  const navigate = useNavigate();
  
  const cartItems = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 73000,
      quantity: 2,
      color: "White",
      size: "S",
      image: "/placeholder.svg",
      stock: 3
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 7000;
  const total = subtotal + shipping;

  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  return (
    <div className="container max-w-[1200px] py-8 animate-fade-in">
      <h1 className="text-2xl font-bold mb-8">YOUR CART ({cartItems.length} ARTICLES NOT RESERVED)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex gap-4">
                <div className="relative">
                  <button className="absolute top-0 left-0 p-2">
                    <X className="h-4 w-4" />
                  </button>
                  <button className="absolute top-0 right-0 p-2">
                    <Heart className="h-4 w-4" />
                  </button>
                  <img src={item.image} alt={item.name} className="w-32 h-32 object-cover" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Only {item.stock} left</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button className="text-red-500 text-sm">Delete</button>
                      <button className="text-sm">MODIFY</button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-medium">{item.price.toLocaleString()} TND</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6">
            <h2 className="text-xl font-medium mb-4">Summary</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Enter Promo Code"
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <Button variant="outline">Apply</Button>
              </div>
              
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>TND {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>TND {shipping.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>TND {total.toLocaleString()}</span>
              </div>
              <Button 
                className="w-full bg-black text-white hover:bg-black/90" 
                onClick={() => navigate("/order")}
              >
                Checkout
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Favorites Section */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Favorites</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all">
              <div className="relative aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="mt-2 font-medium">{product.price.toLocaleString()} DT</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">YOU MAY ALSO LIKE</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all">
              <div className="relative aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="mt-2 font-medium">{product.price.toLocaleString()} DT</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;