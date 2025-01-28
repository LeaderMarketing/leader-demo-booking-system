import { Card } from "@/components/ui/card";
import { Monitor, Headphones, Phone, Wifi, Tv } from "lucide-react";

interface Product {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const products: Product[] = [
  { id: "uc-video", name: "UC Video & Collab", icon: <Monitor className="h-8 w-8" /> },
  { id: "uc-headset", name: "UC Headset", icon: <Headphones className="h-8 w-8" /> },
  { id: "uc-phones", name: "UC Phones", icon: <Phone className="h-8 w-8" /> },
  { id: "ubiquiti", name: "Ubiquiti", icon: <Wifi className="h-8 w-8" /> },
  { id: "commercial-panel", name: "Commercial Panel", icon: <Tv className="h-8 w-8" /> },
  { id: "brateck", name: "Brateck Modern Work Solutions", icon: <Monitor className="h-8 w-8" /> },
];

interface ProductSelectorProps {
  selectedProduct: string;
  onSelect: (productId: string) => void;
}

const ProductSelector = ({ selectedProduct, onSelect }: ProductSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
            selectedProduct === product.id
              ? "border-primary border-2"
              : "hover:border-accent"
          }`}
          onClick={() => onSelect(product.id)}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="text-primary">{product.icon}</div>
            <h3 className="font-semibold text-center">{product.name}</h3>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductSelector;