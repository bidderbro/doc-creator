import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { generateWithGemini } from "../utils/gemini";

export default function GenerateDocument() {
  const { docName } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const prompt = `Create a professional ${docName} document for government tender.`;

    generateWithGemini(prompt)
      .then(setContent)
      .catch(() => setError("AI generation failed. Check API key / internet"));
  }, [docName]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Generate Page</h1>

      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      {content && (
        <>
          <pre style={{ whiteSpace: "pre-wrap" }}>{content}</pre>
          <br />
          <button>Download PDF</button>
          <button style={{ marginLeft: 10 }}>Download Word</button>
        </>
      )}
    </div>
  );
}
