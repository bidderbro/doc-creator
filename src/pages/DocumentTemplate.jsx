export default function DocumentTemplate({ data }) {
  return (
    <div className="doc-page">

      {/* HEADER */}
      <div className="doc-header">
        <img src="/logo.png" className="logo" />
        <div className="date">Date: {data.date}</div>
      </div>

      {/* BODY */}
      <div className="doc-body">
        <p><strong>To,</strong><br />
          {data.to}<br />
          {data.organization}<br />
          {data.address}
        </p>

        <p><strong>
          Bid Ref No. {data.bidRef}
        </strong></p>

        <h3 className="subject">
          Sub – {data.subject}
        </h3>

        <p>Dear Sir/Madam,</p>

        <p>{data.content}</p>

        {data.points?.map((p, i) => (
          <p key={i}><strong>{i + 1}. {p.title}</strong><br />{p.text}</p>
        ))}

      </div>

      {/* FOOTER */}
      <div className="doc-footer">
        <p><strong>For {data.company}</strong></p>
        <img src="/stamp.png" className="stamp" />
        <p>
          Authorized Signatory<br />
          {data.signatory}<br />
          {data.designation}
        </p>
      </div>

    </div>
  );
}
