import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Appointments");

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <SidebarItem
          label="Dashboard"
          active={activeItem === "Dashboard"}
          onClick={() => setActiveItem("Dashboard")}
        />
        <SidebarItem
          label="Appointments"
          notifCount={15}
          active={activeItem === "Appointments"}
          onClick={() => setActiveItem("Appointments")}
        />
        <SidebarItem
          label="Patients"
          notifCount={5}
          active={activeItem === "Patients"}
          onClick={() => setActiveItem("Patients")}
        />
        <SidebarItem
          label="Doctors"
          active={activeItem === "Doctors"}
          onClick={() => setActiveItem("Doctors")}
        />
        <SidebarItem
          label="Clinics"
          active={activeItem === "Clinics"}
          onClick={() => setActiveItem("Clinics")}
        />
      </div>
    </div>
  );
};

export default Sidebar;
