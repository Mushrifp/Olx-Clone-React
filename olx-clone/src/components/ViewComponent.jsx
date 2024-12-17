import React, { useEffect, useState } from "react";
import { useProducts } from "../context/products";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

function ViewComponent() {
  const { products } = useProducts();
  const { id } = useParams();

  const singleProduct = products.find((item) => item.id === id);

  const [sellerDetails, setSellerDetails] = useState(null);

  useEffect(() => {
    async function fetchSellerDetails() {
      if (singleProduct) {
        try {
          const sellerId = singleProduct.useRId;

          const sellerDocRef = doc(db, "users", sellerId);

          const sellerDocSnap = await getDoc(sellerDocRef);

          if (sellerDocSnap.exists()) {
            setSellerDetails(sellerDocSnap.data());
          } else {
            console.log("Seller not found!");
          }
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchSellerDetails();
  }, []);

  return (
    <>
      <div className="flex min-h-[87vh] w-full">
        <div className="w-3/5 p-8 flex items-center justify-center bg-gray-100">
          <img
            src={singleProduct.imageUrl}
            alt={singleProduct.productName}
            className="w-full h-[500px] object-contain"
          />
        </div>

        <div className="w-2/5 p-8 bg-white flex flex-col">
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {singleProduct.productName}
              </h1>
              <p className="text-xl text-gray-700 mt-2">
                {`₹ ${singleProduct.price}`}
              </p>
              <p className="text-xl text-gray-700 mt-2">
                This is a great product, really amazing for everyday use! It’s
                perfect for anyone who needs a high-quality, reliable item.
                Whether you're using it daily or just for special occasions,
                this product will definitely get the job done. Highly
                recommended for people who want something that's both functional
                and stylish. Don’t miss out on this awesome item!
              </p>
            </div>

            <div className="mt-6 pt-4 border-t">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                Seller Information
              </h2>
              {sellerDetails ? (
                <div className="text-gray-700 space-y-2">
                  <p className="text-lg">
                    <span className="font-semibold">Name:</span>
                    {sellerDetails.username}
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold">Contact:</span>
                    {sellerDetails.number}
                  </p>
                </div>
              ) : (
                <p className="text-lg text-gray-500">
                  Loading seller details...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewComponent;
