export default function acceptanceOfBid(data) {
  return `
<div class="a4-page">

  <!-- WATERMARK -->
  <div class="doc-watermark">
    <img src="/watermark.png" />
  </div>

  <table class="doc-table">
    
    <!-- HEADER -->
    <thead>
      <tr>
        <td>
          <div class="doc-header">
            <img src="/header.png" />
          </div>
        </td>
      </tr>
    </thead>

    <!-- CONTENT -->
    <tbody>
      <tr>
        <td class="doc-content">

          <h2 style="text-align:center;">
            Acceptance of Bid Terms and Conditions (ATC)
          </h2>

          <p>
            We, <strong>${data.companyName}</strong>, hereby confirm that we have
            carefully read and fully accept all the terms and conditions
            mentioned in the tender document.
          </p>

          <ul>
            <li><strong>Bid Number:</strong> ${data.bidNumber || "BID-XXXX-001"}</li>
            <li><strong>Company Name:</strong> ${data.companyName}</li>
            <li><strong>Date:</strong> ${data.date}</li>
          </ul>

          <p>
            We agree that any deviation from the stated terms may result in
            rejection of our bid.
          </p>

          <br/><br/>

          <p><strong>Authorized Signatory</strong></p>
          <p>${data.authority || "Authorized Signatory"}</p>

        </td>
      </tr>
    </tbody>

    <!-- FOOTER (ALWAYS BOTTOM NOW) -->
    <tfoot>
      <tr>
        <td>
          <div class="doc-footer">
            <img src="/footer.png" />
          </div>
        </td>
      </tr>
    </tfoot>

  </table>
</div>
`;
}
