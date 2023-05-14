import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./views/home";
import styled from "@emotion/styled";
import Groceries from "./views/groceries";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/schedule" element={<HomePage />} />
        </Routes>
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
