// import logo from "./logo.svg";
import "./App.css";
import "./default.css";
import React from "react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigator from "./elements/navbar/Navbar";
import NotFound from "./pages/NotFound";

Amplify.configure(awsExports);

const App = () => {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
