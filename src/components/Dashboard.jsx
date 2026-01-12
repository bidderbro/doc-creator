import { useNavigate } from "react-router-dom";
import { documents } from "../data";
import Hero from "./Hero";
import "../styles.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="topbar">
        <div className="logo">Doc&apos;s Creator</div>
        <nav style={{ marginLeft: "auto" }}>
          <button className="link" onClick={() => navigate("/branding")}>Company Branding</button>
        </nav>
      </header>

      <Hero />

      <section className="dashboard">
        <div className="grid">
          {documents.map((doc, i) => (
            <div className="card" key={i}>
              <span className={`tag ${doc.tag}`}>
                {doc.tag.replace("_", " ")}
              </span>

              <h3>{doc.title}</h3>
              <p>{doc.templates} template(s) available</p>

              <button
                className="quick-generate-btn"
                style={{ marginTop: "10px", width: "100%" }}
                onClick={() => navigate(`/generate/${encodeURIComponent(doc.title)}`)}
              >
                Quick Generate →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
