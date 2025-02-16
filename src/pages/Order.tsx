import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Order = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    apartment: "",
    city: "",
    zipCode: "",
    phone: "",
    saveInfo: false,
    billingAddress: "same",
  });

  const cartItems = [
    { name: "Classic White T-Shirt", quantity: 2, price: 29.99 },
    { name: "Denim Jeans", quantity: 1, price: 89.99 },
    { name: "Leather Jacket", quantity: 1, price: 199.99 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 7.99;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase. We'll send you a confirmation email shortly.",
    });
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-6">Complete Your Order</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Contact</h2>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  name="newsletter"
                />
                <label htmlFor="newsletter" className="text-sm">
                  Email me with news and offers
                </label>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Delivery</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Apartment, suite, etc. (optional)"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <Input
                  placeholder="ZIP code"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Billing Address</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="same-address"
                    name="billingAddress"
                    value="same"
                    checked={formData.billingAddress === "same"}
                    onChange={handleChange}
                  />
                  <label htmlFor="same-address">Same as shipping address</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="different-address"
                    name="billingAddress"
                    value="different"
                    checked={formData.billingAddress === "different"}
                    onChange={handleChange}
                  />
                  <label htmlFor="different-address">Use a different billing address</label>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Complete Order
            </Button>
          </form>
        </div>

        <div className="md:col-span-1">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-16 bg-gray-100 rounded"></div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>${shipping.toFixed(2)}</p>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Order;