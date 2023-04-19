// import logo from "./logo.svg";
import "./App.css";
import "./default.css";
import React from "react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Construction from "./elements/Construction";
import Sidebar from "./elements/sidebar/Sidebar";

Amplify.configure(awsExports);

const App = () => {
  return (
    <div className="App">
      <Construction />
      <div className="main-layut">
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
