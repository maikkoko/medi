import React from "react";
import ContentHeader from "./ContentHeader";
import ContentBody from "./ContentBody";
import "./index.css";

const Content: React.FC = () => {
  return (
    <div className="content">
      <ContentHeader />
      <ContentBody />
    </div>
  );
};

export default Content;
