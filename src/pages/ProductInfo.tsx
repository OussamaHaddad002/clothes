import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ProductInfo = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const product = products.find((p) => p.id === id);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [currentImage, setCurrentImage] = useState("");

  if (!product) {
    return <div className="container py-8">Product not found</div>;
  }

  // Set initial image if not set
  if (!currentImage && product.image) {
    setCurrentImage(product.image);
  }

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    const selectedColorObj = product.colors.find(c => c.name === color);
    if (selectedColorObj?.image) {
      setCurrentImage(selectedColorObj.image);
    }
  };

  const handleAddToBag = () => {
    if (!selectedColor || !selectedSize) {
      toast({
        title: "Please select options",
        description: "You need to select both color and size before adding to bag",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to bag",
      description: "Product has been added to your shopping bag",
    });
    // TODO: Implement add to cart functionality
  };

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={currentImage}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorChange(color.name)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color.name ? 'border-primary' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Size</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                <div className="flex gap-4">
                  {product.sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <RadioGroupItem value={size} id={`size-${size}`} />
                      <Label htmlFor={`size-${size}`}>{size}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <Button className="w-full" onClick={handleAddToBag}>
              Add to Bag
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;