import React, { useState } from "react";
import { useProducts } from "../context/products";
import axios from "axios";
import { toast } from "react-toastify";

function SellComponent() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const { addProduct } = useProducts();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Olx-Prodcuts");
    formData.append("cloud_name", "dquwvlarx");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dquwvlarx/image/upload`,
        formData
      );

      const imageUrl = response.data.secure_url;

      await addProduct({ productName, price, imageUrl });

      toast.success("Product successfully added!");
      setProductName("");
      setPrice("");
      setImage(null);
      setImagePreview("");
    } catch (error) {
      toast.error("Error adding product!");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white p-10 shadow-lg rounded-lg mb-20"
      >
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold">Sell Your Product</h2>
        </div>

        <div className="mb-6">
          <input
            type="text"
            name="productName"
            className="shadow-sm border border-black text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-white"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="number"
            name="price"
            className="shadow-sm border border-black text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-white"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            name="productImage"
            className="shadow-sm border border-black text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-white"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="mb-6 text-center mt-6">
          {imagePreview ? (
            <div className="w-48 h-48 mx-auto">
              <img
                src={imagePreview}
                alt="Product Preview"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-48 h-48 mx-auto border-2 border-dashed border-gray-400 flex items-center justify-center">
              <span className="text-gray-500">Select an image</span>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full text-white border-2 border-black bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-4 py-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SellComponent;
