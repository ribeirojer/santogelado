import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Servicos from "./pages/Servicos";
import NotFound from "./pages/NotFound";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
