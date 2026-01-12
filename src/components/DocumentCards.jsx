import { useNavigate } from "react-router-dom";

const documents = [
  {
    title: "Acceptance of Bid Terms and Conditions (ATC)",
    slug: "acceptance_of_bid_atc",
    tag: "Tender",
  },
  {
    title: "Performance Statement of Bidder for Bid Number",
    slug: "performance_statement_bidder",
    tag: "Tender",
  },
  {
    title: "Warranty Declaration for Bid",
    slug: "warranty_declaration_bid",
    tag: "Tender",
  },
  {
    title: "Non-Blacklisting Declaration for Bid",
    slug: "non_blacklisting_declaration_bid",
    tag: "Tender",
  },
  {
  title: "Datasheet Declaration for Bid",
  slug: "datasheet_declaration_bid",
  tag: "Tender",
}
];

export default function DocumentCards() {
  const navigate = useNavigate();

  return (
    <div className="document-grid">
      {documents.map((doc, index) => (
        <div key={index} className="document-card">
          <span className="badge">{doc.tag}</span>

          <h3>{doc.title}</h3>

          <button
            className="quick-generate-btn"
            onClick={() => navigate(`/generate/${doc.slug}`)}
          >
            Quick Generate →
          </button>
        </div>
      ))}
    </div>
  );
}
