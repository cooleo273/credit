import { Routes, Route } from "react-router-dom";
import { AuthGuard, DashboardLayout } from "./components/layout";
import Login from "./Pages/auth/login/page";
import Contact from "./Pages/contacts/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <AuthGuard>
            <DashboardLayout />
          </AuthGuard>
        }
      >
        <Route path="contacts" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;