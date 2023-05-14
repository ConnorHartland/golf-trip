import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Button } from "@mui/material";
import { db } from "../firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedIn(true);
    }
  }, []);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore
      const usersRef = collection(db, "users");
      const querySnapshot = await getDocs(usersRef);
      const users = querySnapshot.docs.map((doc) => doc.data());

      const existingUser = users.find((u) => u.email === user.email);

      // If user does not exist, add them to the list
      if (!existingUser) {
        await addDoc(usersRef, {
          email: user.email,
          displayName: user.displayName,
        });
      }

      // Save user credentials to localStorage
      localStorage.setItem("user", JSON.stringify(user));

      setLoggedIn(true);
      navigate("/"); // Redirect to "/"
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "1rem" }}>
      {loggedIn ? (
        <div>
          <h2>Welcome, {auth.currentUser?.displayName}!</h2>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div>
          <h2>Login with Google</h2>
          <Button variant="contained" onClick={handleGoogleSignIn}>
            Sign in with Google
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default Login;
