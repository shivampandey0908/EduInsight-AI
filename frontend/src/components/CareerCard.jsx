import { FaLaptopCode } from "react-icons/fa";

function CareerCard({ career }) {

  return (

    <div className="career-card">

      <FaLaptopCode size={30} />

      <h3>{career}</h3>

    </div>

  );

}

export default CareerCard;