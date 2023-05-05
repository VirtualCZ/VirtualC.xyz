// import logo from "./logo.svg";
import "./default.css";
import React, { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Sidebar from "./elements/sidebar/Sidebar";
import Blender from "./pages/Blender";
import ReactPage from "./pages/ReactWeb";
import ReactApp from "./pages/ReactApp";
import ReactWeb from "./pages/ReactWeb";
import Contact from "./pages/Contact";
import NicCalc from "./pages/Niccalc";

Amplify.configure(awsExports);

const App = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleChecked = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    const themeHref = document.getElementById("theme-style");
    if (checked) {
      themeHref.setAttribute("href", "themes/dark-mode.css");
      localStorage.setItem("theme", "dark");
    } else {
      themeHref.setAttribute("href", "themes/light-mode.css");
      localStorage.setItem("theme", "light");
    }
  }, [checked]);

  return (
    <div className="App">
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<Home checked={checked} toggleChecked={toggleChecked} />}
            />
            <Route path="/Blender" element={<Blender />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/React" element={<ReactWeb />} />
            <Route path="/ReactNative" element={<ReactApp />} />
            <Route path="/Niccalc" element={<NicCalc />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
