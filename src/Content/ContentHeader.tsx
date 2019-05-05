import React from "react";
import faker from "faker";
import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
import Select, { IOption } from "./Select";
import SummaryItem from "./SummaryItem";
import "./ContentHeader.css";

const ContentHeader: React.FC = () => {
  const getLocations = () => {
    let locations: Array<IOption> = [];

    for (let i = 0; i < 10; i++) {
      const location = faker.address.streetName();

      locations.push({
        value: location,
        display: location
      });
    }

    return locations;
  };

  const getDoctors = () => {
    let names: Array<IOption> = [];

    for (let i = 0; i < 5; i++) {
      const name = faker.name.findName();

      names.push({
        value: name,
        display: name
      });
    }

    return names;
  };

  return (
    <div className="content__header">
      <div className="filters">
        <div className="filters__left">
          <h3>Appointments</h3>
          <div style={{ paddingRight: "16px" }}>
            <Select icon={faClinicMedical} options={getLocations()} />
          </div>
          <Select icon={faClinicMedical} options={getDoctors()} />
        </div>
        <div className="filters__right">
          <Select
            icon={faClinicMedical}
            options={[
              { value: "Today", display: "Today" },
              { value: "Tomorrow", display: "Tomorrow" }
            ]}
          />
        </div>
      </div>
      <ul>
        <SummaryItem title="Appointments" snapshotText="+30%" color="green" />
        <SummaryItem title="Consultations" snapshotText="-05%" color="orange" />
        <SummaryItem title="Urgent" snapshotText="3 Resolved" color="red" />
      </ul>
    </div>
  );
};

export default ContentHeader;
