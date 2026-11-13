import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoreProjects from "./pages/MoreProjects";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<MoreProjects />} />
    </Routes>
  );
}
