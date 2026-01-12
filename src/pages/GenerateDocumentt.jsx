import React, { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import templates from "../templates";
import PRINT_STYLES from "../utils/printStyles";

/* normalize helper */
const normalize = (s = "") =>
  s.replace(/[^a-z0-9]/gi, "").toLowerCase();

/* template resolver */
function resolveTemplateKey(templatesObj, raw) {
  const keys = Object.keys(templatesObj);
  const target = normalize(raw);

  return (
    keys.find(k => normalize(k) === target) ||
    keys.find(k => target.includes(normalize(k))) ||
    null
  );
}

export default function GenerateDocument() {
  const { docType } = useParams();
  const navigate = useNavigate();
  const decodedType = decodeURIComponent(docType || "");
  const [branding, setBranding] = useState({
    companyName: "Demo Company",
    header: "",
    footer: "",
    watermark: "",
    signature: "",
  });

  const [pages, setPages] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("companyBranding");
    if (saved) {
      setBranding(JSON.parse(saved));
    }
  }, []);

  const templateKey = useMemo(
    () => resolveTemplateKey(templates, decodedType),
    [decodedType]
  );

  const templateFn = templateKey ? templates[templateKey] : null;

  const templateData = useMemo(() => ({
    companyName: branding.companyName || "Demo Company",
    date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-'),
    authority: "Authorized Signatory",
    bidNumber: "BID-XXXX-001",
    bid: {
      number: "BID-XXXX-001",
      reference: "GEM/2025/B/7015966",
      date: "18-12-2025"
    },
    recipient: {
      name: "S Uma Sankara Ramesh",
      organization: "National Institute of Pharmaceutical Education and Reserach (NIPER) Sector 67,",
      address: "Mohali-160062"
    }
  }), [branding.companyName]);

  useEffect(() => {
    if (templateFn) {
      const content = templateFn(templateData);
      setPages([content]);
    }
  }, [templateFn, templateData]);

  if (!templateFn) {
    return (
      <div style={{ padding: 40 }}>
        <button onClick={() => navigate("/")} style={{ marginBottom: "20px" }}>← Back to Dashboard</button>
        <h1>Generate Page</h1>
        <p style={{ color: "red" }}>Template not found for this document type: {decodedType}</p>
      </div>
    );
  }

  const getFinalHtml = () => {
    return `
      <div class="page-container">
        ${pages.map((content, index) => `
          <div class="page">
            ${branding.header ? `<div class="header"><img src="${branding.header}" style="width:100%;height:100%;object-fit:contain" /></div>` : ""}
            ${branding.watermark ? `<img src="${branding.watermark}" class="watermark" />` : ""}
            <div class="content">
              ${index === 0 ? `
                <div class="date-section">Date: ${templateData.date}</div>
                <div class="to-section">
                  <strong>To,</strong><br />
                  <strong>${templateData.recipient.name}</strong><br />
                  <strong>${templateData.recipient.organization}</strong><br />
                  <strong>${templateData.recipient.address}</strong>
                </div>
                <div style="margin-bottom:20px;">
                  <strong>Bid Ref No. ${templateData.bid.reference} , Dated: ${templateData.bid.date}</strong>
                </div>
                <div class="subject-section">
                  Sub - ${decodedType}
                </div>
                <p>Dear Sir/Madam,</p>
                <p>We <strong>${templateData.companyName}</strong> are fulfilling and also complying with the additional term and condition specification:</p>
              ` : ""}
              ${content}
              ${index === pages.length - 1 ? `
                <div class="signature-section" style="margin-top: 40px; position: relative;">
                  <p style="margin-bottom: 10px;"><strong>For ${templateData.companyName}</strong></p>
                  <div style="position: relative; height: 100px; width: 200px;">
                    ${branding.signature ? `<img src="${branding.signature}" style="max-height: 100px; max-width: 200px; position: absolute; left: 0; top: 0; z-index: 2;" />` : ""}
                  </div>
                  <div class="signatory-details" style="margin-top: 10px;">
                    <p style="margin: 0; font-weight: bold;">Authorized Signatory</p>
                    <p style="margin: 0; font-weight: bold;">Ujjwal Kumar</p>
                    <p style="margin: 0; font-weight: bold;">Business Development Manager</p>
                  </div>
                </div>
              ` : ""}
            </div>
            ${branding.footer ? `<div class="footer"><img src="${branding.footer}" style="width:100%;height:100%;object-fit:contain" /></div>` : ""}
          </div>
        `).join("")}
      </div>
    `;
  };

  const downloadPdf = () => {
    const win = window.open("", "_blank");
    win.document.write(`
      <html>
        <head>
          <title>${decodedType}</title>
          <style>${PRINT_STYLES}</style>
        </head>
        <body>${getFinalHtml()}</body>
      </html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 500);
  };

  const downloadWord = () => {
    const html = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset="utf-8"/>
          <style>${PRINT_STYLES}</style>
        </head>
        <body>${getFinalHtml()}</body>
      </html>
    `;
    const blob = new Blob([html], { type: "application/msword" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${decodedType}.doc`;
    link.click();
  };

  return (
    <div style={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <button onClick={() => navigate("/")} className="bg-gray-500 text-white px-4 py-2 rounded">← Back to Dashboard</button>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={downloadPdf} className="bg-blue-600 text-white px-6 py-2 rounded font-bold">Download PDF</button>
            <button onClick={downloadWord} className="bg-green-600 text-white px-6 py-2 rounded font-bold">Download Word</button>
          </div>
        </div>

        <div style={{ background: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>
          <style>{PRINT_STYLES}</style>
          <div dangerouslySetInnerHTML={{ __html: getFinalHtml() }} />
        </div>
      </div>
    </div>
  );
}
