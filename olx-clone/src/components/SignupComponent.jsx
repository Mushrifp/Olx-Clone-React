import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/context";
import { toast } from "react-toastify";
import olx from "../assets/olx.png";

function SignupComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const { signIn, user } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signIn(email, password, username, number);  

      toast.success("Sign-up successful!");
      navigate("/");

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered!");
      } else {
        toast.error("Error during sign-up. Please try again.");
        console.log(error);
      }
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
        onSubmit={handleSignUp}
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

        <div className="mb-6">
          <input
            type="text"
            name="username"
            className="shadow-sm border border-black text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-white"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="number"
            name="Number"
            className="shadow-sm border border-black text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-white"
            placeholder="Enter your Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white border-2 border-black bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-4 py-3"
        >
          Sign Up
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-gray-500">
            Already Have an Account?
            <Link to="/login" className="text-black hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupComponent;
