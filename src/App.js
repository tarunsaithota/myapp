import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";

const App = () => {
  return (
    <>
      <div className="app-layout">
        <Header />
        <Body />
        {/* <SideNav /> */}
      </div>
    </>
  );
};

export default App;
