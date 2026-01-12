export default function performanceStatement(data = {}) {
  const company = data.company || { name: data.companyName || "Demo Company", signatory: data.authority || "Authorized Signatory" };
  const bid = data.bid || { number: data.bidNumber || "BID-XXXX-001" };

  return `
<div class="performance-statement">
  <h2 style="text-align:center;">PERFORMANCE STATEMENT OF BIDDER</h2>
  
  <p><strong>Bid No:</strong> ${bid.number}</p>
  
  <p>
    We, <strong>${company.name}</strong>, hereby declare that we have successfully
    executed similar works in the past and possess adequate
    technical and financial capability to execute the above bid.
  </p>
  
  <br/><br/>
  
  <p><strong>Authorized Signatory</strong></p>
  <p>${company.signatory}</p>
  
  <p><strong>Date:</strong> ${data.date || new Date().toLocaleDateString()}</p>
</div>
`;
}
