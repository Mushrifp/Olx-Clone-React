import React from "react";
import { useProducts } from "../context/products";
import { Link } from "react-router-dom";

function Recommendations() {
  const { products } = useProducts(); 

  return (
    <>
      <div className="mt-2 text-2xl font-bold text-start ml-20">
        Recommendations
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-20">
        {products.length > 0 ? (
          products.map((product) => (
           <Link to={`/view/${product.id}`} key={product.id}>
           
           <div
              className="w-60 min-w-0 rounded overflow-hidden  bg-white mt-4 border"
            >

              <img
                className="w-full h-48 object-cover"
                src={product.imageUrl} 
                alt={product.productName}
              />


              <div className="px-6 py-4">
                <p className="text-xl font-medium text-gray-800">
                  ₹ {product.price}
                </p>
                <p className="text-sm font-light text-gray-600 mt-2">
                  {product.productName}
                </p>
              </div>
            </div>
           
           
           
           
           
           </Link>
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
