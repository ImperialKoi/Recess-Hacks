import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Home";
import Schedule from "./pages/Timeline";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CodeOfConduct from "./pages/CodeOfConduct";
import Login from "./pages/LoginForm";
import Register from "./pages/RegistrationForm";
import Dashboard from "./pages/Hacker/Dashboard";
import QRCode from "./pages/Hacker/QRCode";
import Application from "./pages/Hacker/Application";
import AdminDashboard from "./pages/Admin/AdminDashboardTabs";
import NotFound from "./pages/NotFound";
import { QrCode } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Schedule />} />
          <Route path="/dashboard" element={<Schedule />} />
          <Route path="/dashboard/admin" element={<Schedule />} />
          <Route path="/dashboard/qr" element={<Schedule />} />
          <Route path="/dashboard/application" element={<Schedule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
