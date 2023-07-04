import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import HeadstoneCleaningArticle from "./routes/HeadstoneCleaningArticle";
import HeadstoneTechniquesArticle from "./routes/HeadstoneTechniquesArticle";
import HeadstoneStepArticle from "./routes/HeadstoneStepArticle";
import Faq from "./routes/Faq";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/headstone-cleaning-benefits"
          element={<HeadstoneCleaningArticle />}
        />
        <Route
          path="/headstone-cleaning-techniques"
          element={<HeadstoneTechniquesArticle />}
        />
        <Route
          path="/headstone-cleaning-step-by-step"
          element={<HeadstoneStepArticle />}
        />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}
