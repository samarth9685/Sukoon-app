import React, { useEffect } from "react";
import { auth, provider } from "./firebase-config";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";

function Login() {
  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          const user = result.user;
          console.log("User logged in (redirect):", user);
          alert(`Welcome, ${user.displayName}`);
        }
      })
      .catch((error) => {
        console.error("Redirect login error:", error.message);
        alert("Login failed: " + error.message);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login to Sukoon</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;
