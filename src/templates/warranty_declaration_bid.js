export default function warrantyDeclarationBid(data = {}) {
  const companyName = data.companyName || "Demo Company";
  const signatory = data.authority || data.signatory || "Authorized Signatory";
  const date = data.date || new Date().toLocaleDateString();

  return `
<div class="warranty-declaration">
  <h2 style="text-align:center;">WARRANTY DECLARATION</h2>
  
  <p><strong>Date:</strong> ${date}</p>
  
  <p>
    We, <strong>${companyName}</strong>, hereby declare that the goods supplied
    against the referenced bid are brand new, unused, and free from
    any manufacturing defects.
  </p>
  
  <p>
    We further confirm that the warranty shall be valid for the
    period specified in the bid document and any defects arising
    during the warranty period will be rectified by us at no extra cost.
  </p>
  
  <br/><br/>
  
  <p><strong>Authorized Signatory</strong></p>
  <p>${signatory}</p>
</div>
`;
}
