// src/Routes.jsx
import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

// Pages
import LoginRegistration from "./pages/login-registration";
import AIFashionGenerationStudio from "./pages/ai-fashion-generation-studio";
import PrivacyPolicyTermsOfService from "./pages/privacy-policy-terms-of-service";
import CustomerPortal from "./pages/customer-portal";
import InvoiceManagement from "./pages/invoice-management";
import UsageAnalyticsReporting from "./pages/usage-analytics-reporting";
import BillingDashboard from "./pages/billing-dashboard";
import SubscriptionManagement from "./pages/subscription-management";
import DunningManagement from "./pages/dunning-management";
import PaymentGatewayConfiguration from "./pages/payment-gateway-configuration";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Authentication */}
          <Route path="/" element={<LoginRegistration />} />
          <Route path="/login" element={<LoginRegistration />} />
          
          {/* Main Application - AI Fashion Generation Studio */}
          <Route path="/ai-fashion-generation-studio" element={<AIFashionGenerationStudio />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy-terms-of-service" element={<PrivacyPolicyTermsOfService />} />
          
          {/* Customer Portal */}
          <Route path="/customer-portal" element={<CustomerPortal />} />
          
          {/* Business Management */}
          <Route path="/invoice-management" element={<InvoiceManagement />} />
          <Route path="/usage-analytics-reporting" element={<UsageAnalyticsReporting />} />
          <Route path="/billing-dashboard" element={<BillingDashboard />} />
          <Route path="/subscription-management" element={<SubscriptionManagement />} />
          <Route path="/dunning-management" element={<DunningManagement />} />
          <Route path="/payment-gateway-configuration" element={<PaymentGatewayConfiguration />} />
          
          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;