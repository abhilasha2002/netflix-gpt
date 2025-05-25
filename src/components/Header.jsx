import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";


const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // if user is signed in
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  }, []);
  const handleButtonClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute flex z-10 px-16 py-2 bg-gradient-to-b from-black w-screen justify-between items-center">
      <img
        className="w-44"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
      />
      {user && (
        <div className="flex center">
          <img className="w-[40px] h-[40px] rounded" alt="user-avatar" src={user?.photoURL} />
          <button className="text-white" onClick={handleButtonClick}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
