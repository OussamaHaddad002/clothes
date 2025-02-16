import { Link } from "react-router-dom";
import { ShoppingBag, User, Search, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img src="/logo.svg" alt="LAMSA" className="h-8 w-auto" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <button className="nav-link">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="nav-link">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <Link to="/dashboard" className="nav-link">
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      
      {/* Social Media Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-semibold text-center mb-4">Follow Us On Social media</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Lamsa ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <img src="/images/fashion-1.jpg" alt="Fashion" className="w-full h-64 object-cover" />
            <img src="/images/fashion-2.jpg" alt="Fashion" className="w-full h-64 object-cover" />
            <img src="/images/fashion-3.jpg" alt="Fashion" className="w-full h-64 object-cover" />
            <img src="/images/fashion-4.jpg" alt="Fashion" className="w-full h-64 object-cover" />
            <img src="/images/fashion-5.jpg" alt="Fashion" className="w-full h-64 object-cover" />
            <img src="/images/fashion-6.jpg" alt="Fashion" className="w-full h-64 object-cover" />
            <img src="/images/fashion-7.jpg" alt="Fashion" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="container py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About LAMSA</h3>
            <p className="text-sm text-muted-foreground">
              Premium clothing brand focused on quality and style.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="nav-link">Shop</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shipping" className="nav-link">Shipping Info</Link></li>
              <li><Link to="/returns" className="nav-link">Returns</Link></li>
              <li><Link to="/faq" className="nav-link">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get special offers and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
              />
              <button className="button-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="container py-6 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} LAMSA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
