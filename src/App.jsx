import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./Context";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navigation";
import { Home } from "./pages/Home";
import { ContactUs } from "./pages/ContactUs";
import { About } from "./pages/About";
import { SingleCocktail } from "./pages/SingleCocktail";

import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Navbar />
      <main id="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
