import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthState } from "./context/AuthContext";
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
  const {
    state: { isLogin },
  } = AuthState();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/collections" exact element={<Collections />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route
          path="/login"
          exact
          element={isLogin ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/bag"
          exact
          element={isLogin ? <Bag /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          exact
          element={isLogin ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}
