import { useState } from "react";
import { NewIncidentsCardData } from "../../lib/db";
import NewIncident from "../../shared/NewIncident";
import NewIncidentsCard from "./NewIncidentsCard";
import { useNavigate } from "react-router-dom";

const NewIncidents = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const nextStep = () => {
    navigate("/incidents/stepbar/newIncidents/describeIncidents");
  };
  const stepBack = () => {
    navigate("/incidents/stepbar");
  };

  return (
    <div>
      <NewIncident
        btnText="Next step"
        btnBack="Back"
        welcome="Home - incidents - NewIncidents"
        heading="Incidents"
        onClick={nextStep}
        stepBackClick={stepBack}
      />
      <div>
        <h1 className="font-bold text-2xl text-blackBold text-center mt-10">
          Which of these best describes the incident?
        </h1>
      </div>
      <div className="w-[70%] mx-auto my-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 justify-center items-center">
        {NewIncidentsCardData.map((details, i) => (
          <div key={i} className="grid justify-center items-center ">
            <NewIncidentsCard
              onClick={() => {
                setActive(i);
              }}
              isActive={active === i}
              {...details}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewIncidents;