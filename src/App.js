import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Collections from "./components/Collections/Collections";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/collections" exact element={<Collections />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
  );
}
