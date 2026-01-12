import acceptance_of_bid_atc from "./acceptance_of_bid_atc";
import performance_statement_bidder from "./performance_statement_bidder";
import warranty_declaration_bid from "./warranty_declaration_bid";
import datasheet_declaration_bid from "./datasheet_declaration_bid";
import generic_template from "./generic_template";

const templates = {
  acceptance_of_bid_atc,
  performance_statement_bidder,
  warranty_declaration_bid,
  datasheet_declaration_bid,
  generic_template,
};

// List of all document titles from data.js
const documentTitles = [
  "OEM Authorization Certificate / Authorization Letter",
  "Acceptance of Bid Terms and Conditions (ATC)",
  "Performance Statement of Bidder for Bid Number",
  "Datasheet Declaration for Bid",
  "Scope of Supply and Cost Estimation Declaration for Bid",
  "Warranty Declaration for Bid",
  "Lowest Price Declaration for Bid",
  "Non-Blacklisting and Non-Debarred Declaration for Bid",
  "Non-Liquidation Declaration for Bid",
  "Declaration for Service, Repair, and Maintenance for Bid",
  "Declaration Regarding Insolvency for Bid",
  "Declaration Regarding Sample and Advance Sampling for Bid",
  "Declaration of Manufacturer Status for Bid",
  "Non-Relation Declaration for Bid",
  "MSME Exemption Declaration for EMD for Bid",
  "MSME Exemption Declaration for Turnover for Bid",
  "Declaration of Financial Capacity for Bid",
  "Declaration of Compliance with Make in India (MII) for Bid",
  "Declaration of Non-Corruption and Anti-Bribery Compliance for Bid",
  "Declaration of Compliance with Integrity Pact for Bid",
  "Declaration of Land Border Sharing Compliance for Bid",
  "Beneficial Ownership Declaration",
  "List of Partners",
  "List of Directors",
  "List of Shareholders",
  "RBI Approval",
  "JV Member Details and Joint Venture Agreement",
  "BEN-2 Filing Acknowledgement as per MCA Guidelines",
  "Authorization Letter in Favor of Signing Official",
  "Import Export Code (IEC)",
  "Declaration Regarding Debarment or Blacklisting Status",
  "Stage-wise / Component-wise Inspection Plan (Quality Assurance Plan)",
  "Approved Suppliers List",
  "Safety Standard Operating Procedures (SOP) Manual",
  "Manufacturer with Machines List"
];

// Map each title to a template function
documentTitles.forEach(title => {
  if (title.includes("Acceptance of Bid Terms and Conditions")) {
    templates[title] = acceptance_of_bid_atc;
  } else if (title.includes("Performance Statement of Bidder")) {
    templates[title] = performance_statement_bidder;
  } else if (title.includes("Warranty Declaration")) {
    templates[title] = warranty_declaration_bid;
  } else if (title.includes("Datasheet Declaration")) {
    templates[title] = datasheet_declaration_bid;
  } else {
    // Use generic template and wrap it to pass the title
    templates[title] = (data) => generic_template({ ...data, title });
  }
});

export default templates;
