import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HelloWorld from "./pages/HelloWorld";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import SEOUpdate from "./components/Seo/SeoUpdate";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <SEOUpdate />
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}

          <Route path="/helloworld" element={<HelloWorld />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
