import React, { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export function Products({ children }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const productsCollection = collection(db, "users", "userUID", "products");
      const querySnapshot = await getDocs(productsCollection);
      const fetchedProducts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      const productsCollection = collection(db, "users", "userUID", "products");
      const docRef = await addDoc(productsCollection, newProduct);

      setProducts((prevProducts) => [
        ...prevProducts,
        { id: docRef.id, ...newProduct },
      ]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}
