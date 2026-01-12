export default function datasheetDeclarationBid(data = {}) {
  const companyName = data.companyName || "Demo Company";
  const bidNumber = data.bidNumber || "BID-XXXX-001";
  const signatory = data.authority || data.authorizedPerson || "Authorized Signatory";
  const date = data.date || new Date().toLocaleDateString();

  return `
<div class="datasheet-declaration">
  <h2 style="text-align:center;">Datasheet Declaration for Bid</h2>
  
  <p>We hereby declare that the datasheet submitted for this bid is true, correct,
  and complies with all technical specifications mentioned in the tender document.</p>
  
  <ul>
    <li><strong>Bid Number:</strong> ${bidNumber}</li>
    <li><strong>Company Name:</strong> ${companyName}</li>
    <li><strong>Date:</strong> ${date}</li>
  </ul>
  
  <p>
  We understand that any incorrect information may lead to rejection of our bid.
  </p>
  
  <br/><br/>
  
  <p><strong>Authorized Signatory</strong></p>
  <p>${signatory}</p>
</div>
`;
}
