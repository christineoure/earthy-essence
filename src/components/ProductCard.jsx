import React from "react";
import Reviews from "./Reviews";
import { Heart } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

const ProductCard = ({ product, theme }) => {
  const reviews = [
    { name: "Alice", comment: "Great product!", rating: 5 },
    { name: "Bob", comment: "Works well, but a bit pricey.", rating: 4 },
  ];

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg">
      {/* Product Image */}
      <CardHeader>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t"
        />
      </CardHeader>

      {/* Product Details */}
      <CardContent>
        <CardTitle className="text-lg font-bold text-neutral-800">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm text-neutral-600 mb-2">
          {product.description || "No detailed description available."}
        </CardDescription>
        <p className="text-lg font-semibold" style={{ color: theme.primary }}>
          ${product.price.toFixed(2)}
        </p>
      </CardContent>

      {/* Add to Cart and Wishlist */}
      <CardFooter className="flex justify-between items-center">
        <button
          className="bg-primary text-white px-4 py-2 rounded hover:bg-neutral transition-colors"
          style={{ backgroundColor: theme.primary }}
        >
          Add to Cart
        </button>
        <button
          className="text-neutral hover:text-primary transition-colors"
          style={{ color: theme.neutral }}
        >
          <Heart size={24} />
        </button>
      </CardFooter>

      {/* Reviews Section */}
      <div className="mt-4 px-4">
        <Reviews reviews={reviews} />
      </div>
    </Card>
  );
};

export default ProductCard;
