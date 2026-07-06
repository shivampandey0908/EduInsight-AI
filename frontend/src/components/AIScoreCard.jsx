import {
  FaBrain,
  FaBullseye,
  FaTrophy,
  FaArrowDown,
  FaLaptopCode,
} from "react-icons/fa";

function AIScoreCard({ analysis }) {
  return (
    <div className="ai-score-card">

      <div className="score-header">
        <FaBrain size={28} />
        <h2>AI Score Card</h2>
      </div>

      <div className="score-grid">

        <div className="score-item">
          <FaBullseye className="score-icon" />
          <h3>Overall %</h3>
          <h1>{analysis?.overallPercentage || "--"}%</h1>
        </div>

        <div className="score-item">
          <FaTrophy className="score-icon" />
          <h3>Highest Subject</h3>
          <h2>{analysis?.highestSubject || "--"}</h2>
          <p>{analysis?.highestMarks || "--"} Marks</p>
        </div>

        <div className="score-item">
          <FaArrowDown className="score-icon" />
          <h3>Performance</h3>
          <h2>{analysis?.overallPerformance || "--"}</h2>
        </div>

        <div className="score-item">
          <FaLaptopCode className="score-icon" />
          <h3>Career Match</h3>
          <h2>
            {analysis?.careerSuggestions?.[0] || "--"}
          </h2>
        </div>

      </div>

    </div>
  );
}

export default AIScoreCard;