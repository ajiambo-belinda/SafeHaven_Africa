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

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream dark:bg-charcoal transition-colors">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/emergency-requests" element={<EmergencyRequests />} />
          <Route path="/dashboard/shelters" element={<Shelters />} />
          <Route path="/dashboard/volunteers" element={<Volunteers />} />
          <Route path="/dashboard/legal-aid" element={<LegalAid />} />
          <Route path="/dashboard/counseling" element={<Counseling />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;