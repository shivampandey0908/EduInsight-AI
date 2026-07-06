import ReactMarkdown from "react-markdown";

function ReportCard({ report }) {
  return (
    <div className="report-card">

      <h2>📑 AI Academic Report</h2>

      <div className="report-content">
        <ReactMarkdown>
          {report}
        </ReactMarkdown>
      </div>

    </div>
  );
}

export default ReportCard;