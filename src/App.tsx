import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import { Services } from "./pages/Services";
import { SharePoint } from "./pages/SharePoint";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sharepoint" element={<SharePoint />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
