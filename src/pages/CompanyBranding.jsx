import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyBranding() {
  const navigate = useNavigate();
  const [branding, setBranding] = useState({
    companyName: "",
    header: "",
    footer: "",
    watermark: "",
    signature: "",
    stamp: "", // Added stamp field
  });

  useEffect(() => {
    const saved = localStorage.getItem("companyBranding");
    if (saved) {
      setBranding(JSON.parse(saved));
    }
  }, []);

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBranding((prev) => ({ ...prev, [key]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("companyBranding", JSON.stringify(branding));
    alert("Branding saved successfully!");
    navigate("/");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <button 
        onClick={() => navigate("/")} 
        style={{ marginBottom: "20px", padding: "8px 16px", cursor: "pointer", borderRadius: "4px", border: "1px solid #ccc" }}
      >
        ← Back to Dashboard
      </button>
      
      <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <h2 style={{ marginTop: 0, borderBottom: "2px solid #eee", paddingBottom: "10px" }}>Company Branding</h2>
        
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Company Name</label>
          <input 
            type="text" 
            value={branding.companyName} 
            onChange={(e) => setBranding(prev => ({...prev, companyName: e.target.value}))}
            placeholder="Enter Company Name"
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ddd", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <UploadSection 
            title="Letterhead Header" 
            description="Recommended: 210mm x 40mm"
            image={branding.header} 
            onChange={(e) => handleFileChange(e, "header")} 
          />
          <UploadSection 
            title="Letterhead Footer" 
            description="Recommended: 210mm x 40mm"
            image={branding.footer} 
            onChange={(e) => handleFileChange(e, "footer")} 
          />
          <UploadSection 
            title="Watermark Logo" 
            description="Centered background image"
            image={branding.watermark} 
            onChange={(e) => handleFileChange(e, "watermark")} 
          />
          <UploadSection 
            title="Signature & Stamp" 
            description="Combined image (Signature + Stamp)"
            image={branding.signature} 
            onChange={(e) => handleFileChange(e, "signature")} 
          />
        </div>

        <button 
          onClick={handleSave}
          style={{ 
            width: "100%", 
            marginTop: "30px",
            padding: "15px", 
            background: "#2563eb", 
            color: "white", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer", 
            fontWeight: "bold",
            fontSize: "16px"
          }}
        >
          Save Branding & Update Documents
        </button>
      </div>
    </div>
  );
}

function UploadSection({ title, description, image, onChange }) {
  return (
    <div style={{ border: "1px solid #eee", padding: "15px", borderRadius: "8px", background: "#fafafa" }}>
      <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>{title}</p>
      <p style={{ margin: "0 0 10px 0", fontSize: "12px", color: "#666" }}>{description}</p>
      <input type="file" accept="image/*" onChange={onChange} style={{ width: "100%", fontSize: "12px" }} />
      {image && (
        <div style={{ marginTop: "10px", textAlign: "center", background: "white", padding: "10px", borderRadius: "4px", border: "1px dashed #ccc" }}>
          <img src={image} alt="Preview" style={{ maxHeight: "60px", maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
}
