import {
  FaMedal,
  FaArrowUp,
  FaCheckCircle,
} from "react-icons/fa";

function PerformanceCard({ analysis }) {

  const percentage = analysis?.overallPercentage || 0;

  const performance =
    analysis?.overallPerformance || "Waiting for Analysis";

  const confidence = analysis?.aiConfidence || 98;

  const progressStyle = {
    background: `conic-gradient(
      #7c3aed ${percentage * 3.6}deg,
      #2563eb ${percentage * 3.6}deg,
      rgba(255,255,255,.12) 0deg
    )`,
  };

  return (
    <div className="performance-card">

      <h2>
        <FaMedal
          style={{
            color: "#FFD700",
            marginRight: "10px",
          }}
        />
        Overall Performance
      </h2>

      <div
        className="circle"
        style={progressStyle}
      >
        <div className="circle-inner">

          <h1>{percentage}%</h1>

          <span>Score</span>

        </div>
      </div>

      <div className="performance-status">

        <FaArrowUp />

        <span>{performance}</span>

      </div>

      <div className="confidence-box">

        <FaCheckCircle />

        <span>
          AI Confidence
        </span>

        <strong>{confidence}%</strong>

      </div>

      <p className="performance-text">

        {analysis
          ? "Your academic performance has been successfully analyzed by EduInsight AI. Continue improving your weaker subjects while maintaining consistency in your strongest areas."
          : "Upload a PDF result to generate an AI-powered performance analysis."}

      </p>

    </div>
  );
}

export default PerformanceCard;