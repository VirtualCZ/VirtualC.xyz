// import logo from "./logo.svg";
import "./default.css";
import React from "react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Sidebar from "./elements/sidebar/Sidebar";

Amplify.configure(awsExports);

const App = () => {
  return (
    <div className="App">
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
