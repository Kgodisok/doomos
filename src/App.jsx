export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold mb-4">
          Website Under Development
        </h1>

        <p className="text-gray-400 text-lg">
          We're working hard to bring you something great.
          Please check back soon.
        </p>

        <div className="mt-8">
          <span className="text-sm text-gray-500">
            © 2026 All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

/*
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BrowseProperties from "./pages/BrowseProperties";
import PropertyDetails from "./pages/PropertyDetails";
import ListYourProperty from "./pages/ListYourProperty";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<BrowseProperties />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/list-your-property" element={<ListYourProperty />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
*/