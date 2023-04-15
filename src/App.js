import logo from "./logo.svg";
import "./App.css";
import "./default.css";
import React, { useEffect, useState } from "react";
import { Amplify, API } from "aws-amplify";
import awsExports from "./aws-exports";

import CheckBox from "./elements/CheckBox";
import Construction from "./elements/Construction";
import DropdownButton from "./elements/DropdownButton";
import RadioButton from "./elements/RadioButton";
import Rating from "./elements/Rating";
import Slider from "./elements/Slider";
import TextInput from "./elements/TextInput";
import ToggleSwitch from "./elements/ToggleSwitch";
import News from "./News";

Amplify.configure(awsExports);

const myAPI = "api949e256f";
const path = "/customers";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [sliderValue, setSliderValue] = useState(50);
  const [ratingValue, setRatingValue] = useState(0);
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    console.log("Star rating: ", ratingValue);
    // Do whatever you want with the input and rating values here
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleRatingChange = (event) => {
  //   setRatingValue(event.target.value);
  // };

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

  const [input, setInput] = useState("");
  const [customers, setCustomers] = useState([]);

  //Function to fetch from our backend and update customers array
  function getCustomer(e) {
    let customerId = e.input;
    API.get(myAPI, path + "/" + customerId)
      .then((response) => {
        console.log(response);
        let newCustomers = [...customers];
        newCustomers.push(response);
        setCustomers(newCustomers);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      {Construction}
      <h1>Super Simple React App</h1>
      <div>
        <input
          placeholder="customer id"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <br />
      <button onClick={() => getCustomer({ input })}>
        Get Customer From Backend
      </button>

      <h2 style={{ visibility: customers.length > 0 ? "visible" : "hidden" }}>
        Response
      </h2>
      {customers.map((thisCustomer, index) => {
        return (
          <div key={thisCustomer.customerId}>
            <span>
              <b>CustomerId:</b> {thisCustomer.customerId} - <b>CustomerName</b>
              : {thisCustomer.customerName}
            </span>
          </div>
        );
      })}

      <form onSubmit={handleSubmit}>
        <Slider
          value={sliderValue}
          onChange={(event) => {
            setSliderValue(event.target.value);
          }}
        />

        <Rating value={ratingValue} setValue={setRatingValue} />

        <DropdownButton
          options={[
            {
              option: "Option 1",
              onClick: () => {
                console.log("skskssk");
              },
            },
            {
              option: "Option 2",
              href: "https://www.google.com/",
              onClick: () => {
                console.log("pspsps");
              },
            },
            {
              option: "Option 3",
              href: "https://www.google.com/",
              onClick: () => {
                console.log("grgrgr");
              },
            },
          ]}
        />
        <DropdownButton
          centered={true}
          options={[
            {
              option: "Option 1 center",
              onClick: () => {
                console.log("skskssk");
              },
            },
            {
              option: "Option 2",
              href: "https://www.google.com/",
              onClick: () => {
                console.log("pspsps");
              },
            },
            {
              option: "Option 3",
              href: "https://www.google.com/",
              onClick: () => {
                console.log("grgrgr");
              },
            },
          ]}
        />
        <DropdownButton
          selectable={true}
          options={[
            {
              option: "Option 1 center",
              onClick: () => {
                console.log("skskssk");
              },
            },
            {
              option: "Option 2",
              href: "https://www.google.com/",
              onClick: () => {
                console.log("pspsps");
              },
            },
            {
              option: "Option 3",
              href: "https://www.google.com/",
              onClick: () => {
                console.log("grgrgr");
              },
            },
          ]}
        />

        <ToggleSwitch
          label="Toggle Theme"
          id="theme-toggle"
          checked={checked}
          onChange={toggleChecked}
        />

        <ToggleSwitch label="Toggle Switch" id="switch-toggle" />
        <RadioButton />

        <CheckBox />

        <TextInput
          label="Name:"
          placeholder="Enter your name"
          value={inputValue}
          onChange={handleInputChange}
        />

        <input type="submit" value="Submit" />
      </form>
      <h1 id="text-output"></h1>

      <News />

      <h2 className="xl">1920 (xl)</h2>
      <h2 className="md">1440 (md)</h2>
      <h2 className="sm">960 (sm)</h2>

      <p>
        Normal <a href="#">Strong</a> p text and{" "}
        <a className="disabled">disabled</a> hyperlink
      </p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p>
        Normal <strong>Strong</strong> p text
      </p>
      <p className="caption">Caption text</p>
    </div>
  );
};

export default App;
