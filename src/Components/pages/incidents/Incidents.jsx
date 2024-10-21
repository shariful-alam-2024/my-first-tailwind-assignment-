import { CardDetails } from "../../lib/db";
import Filter from "../../shared/Filter";
import Card from "../dashboard/Card";

const Incidents = () => {
  return (
    <div>
      <Filter
        welcome="Home - Incidents"
        heading="Incidents"
        btnText="+ New Incidents"
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 lg:p-6 p-3">
        {CardDetails.map((cardDetails, i) => (
          <Card key={i} {...cardDetails} />
        ))}
      </div>
    </div>
  );
};

export default Incidents;