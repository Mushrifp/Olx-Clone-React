import React, { useEffect, useState } from "react";
import { useAuth } from "../context/context";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import olx from "../assets/olx.png";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
 
    try {
      await logIn(email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Invalid email or password!");
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      <form
        onSubmit={handleLogin}
        className="w-96 bg-white p-10 shadow-lg rounded-lg mb-20"
      >
        <div className="mb-10 text-center">
          <img className="w-32 mx-auto" src={olx} alt="OLX Logo" />
        </div>

        <div className="mb-6">
          <input
            type="email"
            name="email"
            className="shadow-sm border border-black text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-white"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            name="password"
            className="shadow-sm border border-black text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-white"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white border-2 border-black bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-4 py-3"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-gray-500">
            Don't have an account?
            <Link to="/signup" className="text-black hover:underline ml-1">
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginComponent;
