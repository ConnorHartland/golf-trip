import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

import "./App.css";

import HomePage from "./views/home";
import styled from "@emotion/styled";
import Groceries from "./views/groceries";
import Login from "./views/login";

function AppWrapper() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user");
    const isLoginPage = location.pathname === "/login";

    if (!user && !isLoginPage) {
      // User not found in localStorage and not on login page, redirect to login page
      navigate("/login");
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/groceries" element={<Groceries />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#393646",
});
