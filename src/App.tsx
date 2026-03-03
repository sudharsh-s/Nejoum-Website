import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { isRTL } from "@/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";

const queryClient = new QueryClient();

const PageTransition = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Navigate to="/services/auction-account-services" replace />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }

      const id = location.hash.replace("#", "");

      let attempts = 0;
      const maxAttempts = 20;

      const interval = setInterval(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          clearInterval(interval);
        }

        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }, 50);
    };

    scrollToHash();
  }, [location]);

  return null;
};

// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
//   return null;
// };

const RTLManager = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const rtl = isRTL(i18n.language);
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return null;
};

const AppContent = () => (
  <>
    <ScrollManager />
    <RTLManager />
    <Navbar />
    <PageTransition />
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
