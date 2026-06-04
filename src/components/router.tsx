import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home.tsx";
import About from "../pages/about/About.tsx";
import SystemDesign from "../pages/system-design/SystemDesign.tsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/system-design" element={<SystemDesign />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
