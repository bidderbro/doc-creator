// src/utils/printStyles.js

const PRINT_STYLES = `
@page {
  size: A4;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f0f0;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.page {
  width: 210mm;
  height: 297mm;
  margin-bottom: 20px;
  background: white;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

@media print {
  body {
    background-color: white;
  }
  .page-container {
    padding: 0;
  }
  .page {
    margin: 0;
    box-shadow: none;
    page-break-after: always;
  }
}

.header {
  width: 100%;
  height: 120px;
  flex-shrink: 0;
}

.footer {
  width: 100%;
  height: 120px;
  flex-shrink: 0;
  margin-top: auto;
}

.content {
  padding: 20px 60px;
  flex-grow: 1;
  position: relative;
  z-index: 2;
  font-size: 11pt;
  line-height: 1.5;
  color: #333;
}

.watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  opacity: 0.05;
  width: 80%;
  z-index: 1;
  pointer-events: none;
}

.document-title {
  text-align: center;
  text-decoration: underline;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 14pt;
}

.date-section {
  text-align: right;
  margin-bottom: 20px;
}

.to-section {
  margin-bottom: 20px;
}

.subject-section {
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 20px;
}

.signature-section {
  margin-top: 40px;
}

.signature-image {
  width: 150px;
  height: auto;
  margin-bottom: 5px;
}

.signatory-details {
  font-weight: bold;
}
`;

export default PRINT_STYLES;
