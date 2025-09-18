import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { usePerformance } from "./hooks/usePerformance";
import { SecurityProvider } from "./components/SecurityProvider";
import "./App.css";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const SharePoint = lazy(() => import("./pages/SharePoint"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">Loading Velora Tek...</p>
    </div>
  </div>
);

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  usePerformance();

  return (
    <SecurityProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/sharepoint" element={<SharePoint />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </SecurityProvider>
  );
}

export default App;
