import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { usePerformance } from "./hooks/usePerformance";
import { useMobilePerformance } from "./hooks/useMobilePerformance";
import { SecurityProvider } from "./components/SecurityProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import { Services } from "./pages/Services";
import { SharePoint } from "./pages/SharePoint";
import { SharePointSetup } from "./pages/SharePointSetup";
import { SharePointMigration } from "./pages/SharePointMigration";
import { SharePointAutomation } from "./pages/SharePointAutomation";
import { SharePointTraining } from "./pages/SharePointTraining";
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
  usePerformance();
  const mobilePerformance = useMobilePerformance();

  useEffect(() => {
    // Apply mobile optimizations
    const cleanup = mobilePerformance.optimizeForMobile();
    
    // Add mobile-specific classes
    if (mobilePerformance.isMobile) {
      document.documentElement.classList.add('mobile-device');
    }
    
    if (mobilePerformance.shouldReduceAnimations()) {
      document.documentElement.classList.add('reduce-motion');
    }

    // Optimize for low-end devices
    if (mobilePerformance.isLowEndDevice) {
      document.documentElement.classList.add('low-end-device');
    }

    return () => {
      cleanup();
      document.documentElement.classList.remove('mobile-device', 'reduce-motion', 'low-end-device');
    };
  }, [mobilePerformance]);

  return (
    <ErrorBoundary>
      <SecurityProvider>
        <Router>
          <div className="App">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/sharepoint" element={<SharePoint />} />
              <Route path="/sharepoint/setup" element={<SharePointSetup />} />
              <Route path="/sharepoint/migration" element={<SharePointMigration />} />
              <Route path="/sharepoint/automation" element={<SharePointAutomation />} />
              <Route path="/sharepoint/training" element={<SharePointTraining />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </SecurityProvider>
    </ErrorBoundary>
  );
}

export default App;
