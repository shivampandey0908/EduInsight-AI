import { useState, useRef } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ReportCard from "../components/ReportCard";
import PerformanceCard from "../components/PerformanceCard";
import SubjectProgress from "../components/SubjectProgress";
import CareerCard from "../components/CareerCard";
import AIScoreCard from "../components/AIScoreCard";

import { uploadResult } from "../services/api";

import {
  FaBook,
  FaTrophy,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

function Dashboard() {

  const [darkMode, setDarkMode] = useState(true);

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {

    if (!selectedFile) {
      alert("Please choose a PDF first.");
      return;
    }

    try {

      setLoading(true);

      const data = await uploadResult(selectedFile);

      if (data.success) {
        setAnalysis(data.analysis);
      } else {
        alert(data.message);
      }

    } catch (err) {

      console.log(err);

      alert("Something went wrong.");

    }

    setLoading(false);

  };

  return (

    <div className={darkMode ? "dashboard dark" : "dashboard light"}>

      <Sidebar />

      <div className="main-content">

        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Upload */}

        <div className="upload-card">

          <h2>📄 Upload Academic Result</h2>

          <p>
            Upload your PDF marksheet and let AI generate
            a detailed academic report.
          </p>

          <input
            type="file"
            hidden
            accept=".pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          <button
            className="upload-btn"
            onClick={handleChooseFile}
          >
            📂 Browse PDF
          </button>

          {selectedFile && (

            <div className="selected-file">

              ✅ {selectedFile.name}

            </div>

          )}

          <button
            className="analyze-btn"
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading
              ? "🤖 AI is Analyzing..."
              : "🚀 Analyze Result"}
          </button>

        </div>

        {/* Welcome */}

        <div className="welcome-card">

          <h1>Hello Shivam 👋</h1>

          <p>

            Welcome to EduInsight AI.

            Upload your academic result and receive
            AI-powered insights.

          </p>

        </div>

        {/* AI Score */}

        <AIScoreCard analysis={analysis} />

        {/* Performance */}

        <div className="top-section">

          <PerformanceCard analysis={analysis} />

          <div className="stats">

            <StatCard
              title="Subjects"
              value={analysis?.subjects?.length || "--"}
              subtitle="Subjects"
              icon={<FaBook />}
            />

            <StatCard
              title="Highest Score"
              value={analysis?.highestMarks || "--"}
              subtitle={analysis?.highestSubject || ""}
              icon={<FaTrophy />}
            />

            <StatCard
              title="Average"
              value={analysis?.averageMarks || "--"}
              subtitle="Average"
              icon={<FaChartLine />}
            />

            <StatCard
              title="Performance"
              value={analysis?.overallPerformance || "--"}
              subtitle="AI Analysis"
              icon={<FaStar />}
            />

          </div>

        </div>

        {/* AI Report */}

        <ReportCard
          report={
            analysis
              ? `
# 📊 Overall Performance

**${analysis.overallPerformance}**

---

## 🏆 Highest Subject

${analysis.highestSubject} (${analysis.highestMarks})

---

## 📈 Average Marks

${analysis.averageMarks}

---

## 💪 Strengths

${analysis.strengths?.map(i => `- ${i}`).join("\n")}

---

## ⚠ Areas to Improve

${analysis.weaknesses?.map(i => `- ${i}`).join("\n")}

---

## 🎯 Career Suggestions

${analysis.careerSuggestions?.map(i => `- ${i}`).join("\n")}

---

## 📅 Study Plan

${analysis.studyPlan?.map(i => `- ${i}`).join("\n")}
`
              : "# Upload a PDF to generate AI Report."
          }
        />

        {/* Subject Analysis */}

        <div className="subjects">

          <h2>📚 Subject Analysis</h2>

          {analysis?.subjects?.map((subject, index) => (

            <SubjectProgress
              key={index}
              subject={subject.name}
              marks={subject.marks}
            />

          ))}

        </div>

        {/* Career */}

        <div className="career-grid">

          {analysis?.careerSuggestions?.map((career, index) => (

            <CareerCard
              key={index}
              career={career}
            />

          ))}

        </div>

      </div>

    </div>

  );

}

export default Dashboard;