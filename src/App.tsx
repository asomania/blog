import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/Blog";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector(
    (state: { themePick: { theme: boolean } }) => state.themePick.theme
  );

  useEffect(() => {
    if (!theme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about/:id" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
