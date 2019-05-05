import React from "react";
import "./SidebarItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faClock,
  faUserFriends,
  faUserMd,
  faClinicMedical
} from "@fortawesome/free-solid-svg-icons";

interface SidebarItemProps {
  label: string;
  active?: boolean;
  notifCount?: number;
  onClick: () => void;
}

const getIcon = (label: string) => {
  switch (label) {
    case "Dashboard":
      return faTh;

    case "Appointments":
      return faClock;

    case "Patients":
      return faUserFriends;

    case "Doctors":
      return faUserMd;

    case "Clinics":
    default:
      return faClinicMedical;
  }
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  active = false,
  notifCount = 0,
  onClick
}) => {
  const className = active ? "sidebar-item side-bar--active " : "sidebar-item";
  const icon = getIcon(label);
  const iconColor = active ? "#de4c34" : "#ccc";
  const notif = notifCount > 0 ? notifCount : "";

  return (
    <div className={className} onClick={onClick}>
      <div className="sidebar-item__icon">
        <FontAwesomeIcon icon={icon} color={iconColor} />
      </div>
      <div className="sidebar-item__label">{label}</div>
      <div className="sidebar-item__notif">{notif}</div>
    </div>
  );
};

export default SidebarItem;
