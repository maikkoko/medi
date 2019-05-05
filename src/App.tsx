import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
