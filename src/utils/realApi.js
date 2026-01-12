export async function generateDocument(documentType, company) {
  const API_URL = import.meta.env.VITE_API_URL || "/api";
  const res = await fetch(`${API_URL}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      documentType,
      company,
    }),
  });

  if (!res.ok) {
    throw new Error("Backend error");
  }

  return res.json();
}
