import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import GenerateDocument from "./pages/GenerateDocumentt";
import CompanyBranding from "./pages/CompanyBranding";

export default function App() {
  return (
    <BrowserRouter basename="/doc-creator">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/generate/:docType" element={<GenerateDocument />} />
        <Route path="/branding" element={<CompanyBranding />} />

        {/* fallback */}
        <Route
          path="*"
          element={
            <div style={{ padding: "40px", fontSize: "20px" }}>
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
