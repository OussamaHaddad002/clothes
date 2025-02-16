import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";
import { useState } from "react";
import type { Color, ProductFormData } from "@/types/product";

interface ProductFormProps {
  initialData?: ProductFormData;
  onSubmit: (data: ProductFormData) => void;
}

const ProductForm = ({ initialData, onSubmit }: ProductFormProps) => {
  const [formData, setFormData] = useState<ProductFormData>(
    initialData || {
      name: "",
      description: "",
      price: 0,
      image: "",
      category: "",
      colors: [],
      sizes: [],
      inStock: true,
    }
  );

  const [newColor, setNewColor] = useState<Color>({ name: "", hex: "" });

  const handleAddColor = () => {
    if (newColor.name && newColor.hex) {
      setFormData({
        ...formData,
        colors: [...formData.colors, newColor],
      });
      setNewColor({ name: "", hex: "" });
    }
  };

  const handleRemoveColor = (index: number) => {
    setFormData({
      ...formData,
      colors: formData.colors.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: Number(e.target.value) })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Colors</Label>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Color name"
            value={newColor.name}
            onChange={(e) =>
              setNewColor({ ...newColor, name: e.target.value })
            }
          />
          <div className="flex gap-2">
            <Input
              type="color"
              value={newColor.hex}
              onChange={(e) =>
                setNewColor({ ...newColor, hex: e.target.value })
              }
              className="w-20"
            />
            <Button type="button" onClick={handleAddColor}>
              Add Color
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.colors.map((color, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-secondary p-2 rounded-md"
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color.hex }}
              />
              <span>{color.name}</span>
              <button
                type="button"
                onClick={() => handleRemoveColor(index)}
                className="text-destructive hover:text-destructive/80"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="inStock"
          checked={formData.inStock}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, inStock: checked })
          }
        />
        <Label htmlFor="inStock">In Stock</Label>
      </div>

      <Button type="submit">
        {initialData ? "Update Product" : "Add Product"}
      </Button>
    </form>
  );
};

export default ProductForm;