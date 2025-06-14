import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Questionnaire from "./pages/Questionnaire";
import Restaurant from "./pages/Restaurant";
import Barbershop from "./pages/Barbershop";
import Retail from "./pages/Retail";
import NotFound from "./pages/NotFound";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

// Redirect mapping object - all redirects go to root
const redirects: { [key: string]: string } = {
  '/web-design': '/',
  '/website-design': '/',
  '/business-website': '/',
  '/small-business-website': '/',
  '/affordable-website': '/',
  '/custom-website': '/',
  '/website-builder': '/',
  '/website-development': '/',
  '/web-development': '/',
  '/restaurant-website': '/',
  '/restaurant-websites': '/',
  '/restaurant-web-design': '/',
  '/barber-website': '/',
  '/barber-websites': '/',
  '/barbershop-websites': '/',
  '/barber-web-design': '/',
  '/get-started': '/',
  '/start-project': '/',
  '/request-quote': '/',
  '/quote': '/',
  '/pricing': '/',
  '/help': '/',
  '/support': '/',
  '/faqs': '/',
  '/questions': '/',
  '/company': '/',
  '/team': '/',
  '/our-story': '/',
  '/why-choose-us': '/',
  '/old-contact': '/',
  '/old-about': '/',
  '/old-faq': '/'
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Index />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/barbershop" element={<Barbershop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          
          {/* Legal pages */}
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Redirect routes */}
          {Object.entries(redirects).map(([from, to]) => (
            <Route
              key={from}
              path={from}
              element={<Navigate to={to} replace />}
            />
          ))}

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
