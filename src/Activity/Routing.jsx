
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "./components/Service";
import Feature from "./components/Feature";
import Product from "./components/Product";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Login from './components/Login'
import Navbar from "./Navbar";
import SignUp from "./components/SignUp"

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/service" element={<Service />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/product" element={<Product />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/faq" element={< FAQ/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  )
}

export default Routing