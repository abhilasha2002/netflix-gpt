import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  console.log("header user", user);
  const handleButtonClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate('/error');
      });
  };
  return (
    <div className="absolute flex z-10 px-16 py-2 bg-gradient-to-b from-black w-screen justify-between items-center">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex center">
          <img className="w-[40px] h-[40px] rounded" src={user?.photoURL} />
          <button className="text-white" onClick={handleButtonClick}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
