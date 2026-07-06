import { motion } from "framer-motion";

function SubjectProgress({ subject, marks }) {

  return (

    <div className="subject">

      <div className="subject-header">

        <span>{subject}</span>

        <span>{marks}%</span>

      </div>

      <div className="progress">

        <motion.div

          className="progress-fill"

          initial={{ width: 0 }}

          animate={{ width: `${marks}%` }}

          transition={{ duration: 1 }}

        />

      </div>

    </div>

  );

}

export default SubjectProgress;