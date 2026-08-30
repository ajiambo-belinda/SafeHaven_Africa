import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Report } from "./pages/Report";
import { Register } from "./pages/Register";
import { Overview } from "./pages/dashboard/Overview";
import { EmergencyRequests } from "./pages/dashboard/EmergencyRequests";
import { Shelters } from "./pages/dashboard/Shelters";
import { Volunteers } from "./pages/dashboard/Volunteers";
import { LegalAid } from "./pages/dashboard/LegalAid";
import { Counseling } from "./pages/dashboard/Counseling";
import { CommunityReports } from "./pages/dashboard/CommunityReports";
import { Users } from "./pages/dashboard/Users";
import { Analytics } from "./pages/dashboard/Analytics";
import { Resources } from "./pages/dashboard/Resources";
import { Messages } from "./pages/dashboard/Messages";
import { Settings } from "./pages/dashboard/Settings";
import { Login } from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream dark:bg-charcoal transition-colors">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
          <Route path="/dashboard/emergency-requests" element={<ProtectedRoute><EmergencyRequests /></ProtectedRoute>} />
          <Route path="/dashboard/shelters" element={<ProtectedRoute><Shelters /></ProtectedRoute>} />
          <Route path="/dashboard/volunteers" element={<ProtectedRoute><Volunteers /></ProtectedRoute>} />
          <Route path="/dashboard/legal-aid" element={<ProtectedRoute><LegalAid /></ProtectedRoute>} />
          <Route path="/dashboard/counseling" element={<ProtectedRoute><Counseling /></ProtectedRoute>} />
          <Route path="/dashboard/community-reports" element={<ProtectedRoute><CommunityReports /></ProtectedRoute>} />
          <Route path="/dashboard/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
          <Route path="/dashboard/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
          <Route path="/dashboard/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
          <Route path="/dashboard/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
          <Route path="/dashboard/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;