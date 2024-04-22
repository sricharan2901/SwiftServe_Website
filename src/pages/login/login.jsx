import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; 
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const db = getFirestore();  

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const email = result.user.email;
        const uid = result.user.uid;

        await setDoc(doc(db, "login", email), {
          email: email,
          id : uid,
        });

        alert("Successful Login!");
        navigate('/shop');
      }).catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <button className="login-btn google" onClick={handleGoogleSignIn}>
          <i className="fab fa-google"></i> Sign in with Google
        </button>
      </div>
    </div>
  );
};
