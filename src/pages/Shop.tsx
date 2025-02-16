import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";

const Shop = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;