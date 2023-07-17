import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

//components
import NavBar from "./components/NavBar";

//style
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="login-page" element={<LoginPage />} />
          <Route path="signup-page" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
