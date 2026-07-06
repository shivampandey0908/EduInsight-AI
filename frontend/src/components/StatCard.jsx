import { motion } from "framer-motion";

function StatCard({ title, value, subtitle, icon }) {
  return (
    <motion.div
      className="stat-card"
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
    >
      <div className="icon">{icon}</div>

      <h3>{title}</h3>

      <h1>{value}</h1>

      <p>{subtitle}</p>
    </motion.div>
  );
}

export default StatCard;