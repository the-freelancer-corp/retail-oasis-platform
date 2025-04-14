
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboardPage from "./pages/admin/DashboardPage";
import ProductsPage from "./pages/admin/ProductsPage";
import OrdersPage from "./pages/admin/OrdersPage";
import NotFound from "./pages/NotFound";

// Account pages
import ProfilePage from "./pages/account/ProfilePage";
import UserOrdersPage from "./pages/account/OrdersPage";
import AddressesPage from "./pages/account/AddressesPage";
import WishlistPage from "./pages/account/WishlistPage";

// Admin pages
import CustomersPage from "./pages/admin/CustomersPage";
import ReviewsPage from "./pages/admin/ReviewsPage";
import SettingsPage from "./pages/admin/SettingsPage";

// Static content pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import ShippingPage from "./pages/ShippingPage";
import SizingGuidePage from "./pages/SizingGuidePage";
import CareersPage from "./pages/CareersPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Store Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* User Account Routes */}
            <Route path="/account/profile" element={<ProfilePage />} />
            <Route path="/account/orders" element={<UserOrdersPage />} />
            <Route path="/account/addresses" element={<AddressesPage />} />
            <Route path="/account/wishlist" element={<WishlistPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/products" element={<ProductsPage />} />
            <Route path="/admin/orders" element={<OrdersPage />} />
            <Route path="/admin/customers" element={<CustomersPage />} />
            <Route path="/admin/reviews" element={<ReviewsPage />} />
            <Route path="/admin/settings" element={<SettingsPage />} />
            
            {/* Static Content Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/size-guide" element={<SizingGuidePage />} />
            <Route path="/careers" element={<CareersPage />} />
            
            {/* Catch-all Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
