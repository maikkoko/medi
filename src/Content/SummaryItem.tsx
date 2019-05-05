import React from "react";
import "./SummaryItem.css";
import { ReactComponent as Graph } from "../assets/graph.svg";

interface SummaryItemProps {
  title: string;
  color?: "green" | "orange" | "red";
  snapshotText: string;
}

const SummaryItem: React.FC<SummaryItemProps> = ({
  color,
  title,
  snapshotText
}) => {
  const getsnaphopStyle = () => {
    switch (color) {
      case "green":
        return {
          backgroundColor: "rgba(61, 217, 84, 1)",
          boxShadow: "0 8px 16px 0 rgba(61, 217, 84, 0.15)"
        };

      case "orange":
        return {
          backgroundColor: "rgba(237, 156, 62, 1)",
          boxShadow: "0 8px 16px 0 rgba(237, 156, 62, 0.15)"
        };

      case "red":
      default:
        return {
          backgroundColor: "rgba(255, 74, 108, 1)",
          boxShadow: "0 8px 16px 0 rgba(255, 74, 108, 0.15)"
        };
    }
  };

  return (
    <li className="summary-item">
      <div className="graph">
        <Graph width={80} height={80} />
      </div>
      <div className="details">
        <p>{title}</p>
        <div>
          <h3>08</h3> <span>Today</span>
        </div>
      </div>
      <div className="snapshot" style={getsnaphopStyle()}>
        {snapshotText}
      </div>
    </li>
  );
};

export default SummaryItem;
