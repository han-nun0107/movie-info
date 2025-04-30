import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MovieDetail from "../src/component/MovieDetail.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieCard from "./component/MovieCard.jsx";
import Layout from "./component/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="MovieCard" element={<MovieCard />} />
      <Route path="movie/:movieId" element={<MovieDetail />} />
    </Routes>
  </BrowserRouter>
);
