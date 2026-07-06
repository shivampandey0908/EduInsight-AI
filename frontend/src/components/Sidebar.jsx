import {
  FaHome,
  FaUpload,
  FaChartBar,
  FaBrain,
  FaBriefcase,
  FaCog,
  FaGraduationCap,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-top">

        <div className="sidebar-logo">

          <FaGraduationCap />

        </div>

        <h2>EduInsight AI</h2>

        <p>Academic Intelligence Platform</p>

      </div>

      <div className="sidebar-menu">

        <div className="menu-item active">

          <FaHome />

          <span>Dashboard</span>

        </div>

        <div className="menu-item">

          <FaUpload />

          <span>Upload Result</span>

        </div>

        <div className="menu-item">

          <FaChartBar />

          <span>AI Report</span>

        </div>

        <div className="menu-item">

          <FaBrain />

          <span>Performance</span>

        </div>

        <div className="menu-item">

          <FaBriefcase />

          <span>Career Guide</span>

        </div>

      </div>

      <div className="sidebar-bottom">

        <div className="menu-item">

          <FaCog />

          <span>Settings</span>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;