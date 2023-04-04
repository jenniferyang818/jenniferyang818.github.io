import "./App.css";
import Landing from "./pages/Landing.js";
import Experience from "./pages/Experience"
import About from "./pages/About"
import { Route, Routes, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
