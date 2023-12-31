import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import FooterMain from "./PortfolioContainer/Footer/FooterMain";
import NavBar from "./PortfolioContainer/Header/NavBar";
import Home from "./PortfolioContainer/Home/Home";
import Projects from "./PortfolioContainer/Projects/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>

      <FooterMain />
    </div>
  );
}

export default App;
