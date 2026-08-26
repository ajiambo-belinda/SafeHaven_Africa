import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Report } from "./pages/Report";
import { Register } from "./pages/Register";
import { Overview } from "./pages/dashboard/Overview";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream dark:bg-charcoal transition-colors">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Overview />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;