export default function genericTemplate(data = {}) {
  const title = data.title || "Document Declaration";
  const companyName = data.companyName || "Demo Company";
  const bidNumber = data.bidNumber || "BID-XXXX-001";
  const date = data.date || new Date().toLocaleDateString();
  const signatory = data.authority || "Authorized Signatory";

  return `
<div class="generic-declaration">
  <h2 style="text-align:center;">${title}</h2>
  
  <p><strong>Date:</strong> ${date}</p>
  <p><strong>Bid Number:</strong> ${bidNumber}</p>
  
  <p>
    We, <strong>${companyName}</strong>, hereby submit this declaration in respect of the above-mentioned bid. 
    We confirm that we comply with all the requirements and conditions specified in the tender document 
    pertaining to <strong>${title}</strong>.
  </p>
  
  <p>
    We further declare that all information provided herein is true and correct to the best of our knowledge. 
    Any misrepresentation may lead to the rejection of our bid or termination of the contract.
  </p>
  
  <br/><br/>
  
  <p><strong>Authorized Signatory</strong></p>
  <p>${signatory}</p>
  <p>${companyName}</p>
</div>
`;
}
