import {
  FaDownload,
  FaMoon,
  FaSun,
  FaGraduationCap,
} from "react-icons/fa";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <FaGraduationCap />
        </div>

        <div>
          <h1>EduInsight AI</h1>
          <p>
            AI Powered Academic Performance Analyzer
          </p>
        </div>
      </div>

      <div className="header-right">

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button className="download-btn">
          <FaDownload />
          Download Report
        </button>

      </div>
    </header>
  );
}

export default Header;