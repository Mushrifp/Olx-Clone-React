import React from "react";
import { useNavigate } from "react-router-dom";

function Errors() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-xl mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2">
          It seems like the page has been moved or deleted.
        </p>

        <button
          onClick={handleHomeClick}
          className="mt-6 py-2 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}

export default Errors;
