import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import MoreProjects from "./pages/MoreProjects";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<MoreProjects />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}
