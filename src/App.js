import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Collections from "./components/Collections/Collections";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Page404 from "./components/Page404/Page404";
import Bag from "./components/Bag/Bag";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/collections" exact element={<Collections />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/bag" exact element={<Bag />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Router>
      <Footer />
    </Fragment>
  );
}
