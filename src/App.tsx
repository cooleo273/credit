import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthGuard, DashboardLayout } from "./components/layout";
import Login from "./Pages/auth/login/page";
import Contact from "./Pages/contacts/page";
import Dashboard from "./Pages/dashboard/page";

// Create a client instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Route for dashboard with nested routes */}
        <Route path="/dashboard" element={<AuthGuard><DashboardLayout /></AuthGuard>}>
          <Route index element={<Dashboard />} />
        </Route>
        
        {/* Route for contacts */}
        <Route path="/contacts" element={<AuthGuard><DashboardLayout /></AuthGuard>}>
          <Route index element={<Contact/>} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
