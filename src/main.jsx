import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuPage from "./Components/MenuPage.jsx";
import { LandingPageProvider } from "./Components/LandingPageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LandingPageProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/men" element={<MenuPage />} />
        </Routes>
      </LandingPageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
