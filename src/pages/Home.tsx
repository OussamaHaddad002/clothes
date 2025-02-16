import { Link } from "react-router-dom";
import { ArrowRight, Truck, RefreshCw, Clock, Shield } from "lucide-react";
import { products } from "@/data/products";

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="container">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Discover Your Style
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium clothing that combines comfort with contemporary design.
            </p>
            <Link to="/shop" className="button-primary inline-flex items-center">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <Truck className="h-8 w-8 mb-2" />
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $100</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <RefreshCw className="h-8 w-8 mb-2" />
              <h3 className="font-semibold">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Clock className="h-8 w-8 mb-2" />
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Shield className="h-8 w-8 mb-2" />
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group cursor-pointer card-hover"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-2">{product.category}</p>
                <p className="font-medium">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;