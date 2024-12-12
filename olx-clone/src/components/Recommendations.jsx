import React from "react";
import { useProducts } from "../context/products"; // Use ProductsContext

function Recommendations() {
  const { products } = useProducts(); // Get the list of products from the context

  return (
    <>
      <div className="mt-2 text-2xl font-bold text-start ml-20">
        Recommendations
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-20">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="w-60 min-w-0 rounded overflow-hidden shadow-lg bg-white mt-4 border"
            >
              {/* Product Image */}
              <img
                className="w-full h-48 object-cover"
                src={product.imageUrl} // Image URL from the product
                alt={product.productName}
              />

              {/* Product Details */}
              <div className="px-6 py-4">
                <p className="text-xl font-medium text-gray-800">
                  ₹ {product.price}
                </p>
                <p className="text-sm font-light text-gray-600 mt-2">
                  {product.productName}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No products found.
          </p>
        )}
      </div>
    </>
  );
}

export default Recommendations;
