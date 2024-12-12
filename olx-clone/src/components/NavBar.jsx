import React, { useEffect } from "react";
import olx from "../assets/olx.png";
import lens from "../assets/lens.png";
import arrow from "../assets/arrow.png";
import search from "../assets/search.png";
import sell from "../assets/sell.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NavBar() {
  const { user, userDetails, logOut } = useAuth();
  const navigate = useNavigate();

  const logOutHandle = async () => {
    try {
      await logOut();
      toast.success("LogOut Successful!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  function sellFunction(){
    if(user){
        navigate("/sell")
    }else{
        toast.error("Log In First")
        navigate("/login")
    }
  }

  console.log(userDetails);

  return (
    <>
      <div className="flex items-center p-4 bg-slate-100 shadow-md justify-between">
        <Link to="/">
          <img src={olx} alt="OLX Logo" className="ml-3 w-11 h-6" />
        </Link>

        <div className="flex items-center border-2 border-black rounded-md w-72 p-2 bg-white">
          <img src={lens} alt="Lens Icon" className="w-6 h-5" />
          <input placeholder="Location" className="ml-3 outline-none flex-1" />
          <img src={arrow} alt="Arrow Icon" className="w-5 h-5 " />
        </div>

        <div className="flex items-center h-12 border-2 border-black rounded-md bg-white w-full max-w-lg mx-4">
          <input
            placeholder="Find Cars, Mobile phones and more"
            className="ml-3 flex-1 outline-none"
          />
          <img src={search} alt="Search Icon" className="w-20 h-12 rounded" />
        </div>

        <div className="flex items-center cursor-pointer">
          <h1 className="font-semibold">ENGLISH</h1>
          <img src={arrow} alt="Arrow Icon" className="w-4 h-4 ml-2" />
        </div>

        {user && userDetails.username ? (
          <div className="flex items-center ml-6 cursor-pointer ">
            <h1 className="font-bold text-lg underline hover:no-underline">
              {userDetails.username}
            </h1>
            <h1
              className="font-bold text-lg text-red-600 ml-3"
              onClick={logOutHandle}
            >
              LogOut
            </h1>
          </div>
        ) : (
          <Link to="/login">
            <div className="flex items-center ml-6 cursor-pointer underline hover:no-underline">
              <h1 className="font-bold text-lg">Login</h1>
            </div>
          </Link>
        )}

        <div onClick={sellFunction} className="flex items-center justify-center w-28 h-12 ml-6 cursor-pointer rounded-full border">
          <img src={sell}  alt="Arrow Icon" className="w-72 h-12 " />
        </div>
      </div>
    </>
  );
}

export default NavBar;
