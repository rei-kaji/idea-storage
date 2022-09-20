import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";

function Navbar({ isAuth, setIsAuth }) {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/addidea");
      })
      .catch((reject) => {
        console.log("isAuth");
      });
  };

  const logout = () => {
    // Logout from Google
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {!isAuth ? (
        <a onClick={loginInWithGoogle}>Login</a>
      ) : (
        <>
          <Link to="/addidea">Add idea</Link>
          <a onClick={logout}>Logout</a>
        </>
      )}
    </nav>
  );
}

export default Navbar;
