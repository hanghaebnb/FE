import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../components/pages/Main";
import { Header } from "../components/layout/Header";
import Home from "../components/layout/Home";

export default function Hompage() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
