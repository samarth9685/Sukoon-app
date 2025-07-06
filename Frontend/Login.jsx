import React from "react";
import { auth, provider } from "./firebase-config";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in user:", user);
      alert(`Welcome, ${user.displayName}`);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login to Sukoon</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;
