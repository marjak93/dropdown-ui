import React from "react";
import ReactDOM from "react-dom";

import { Dropdown } from "../src/components";

import "normalize.css";
import style from "./demo.css";

const App = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = (v) => {
    setValue(v);
  };

  return (
    <div className={style.container}>
      <h1>Dropdown Demo</h1>
      <Dropdown.Select
        label="Task status"
        value={value}
        defaultValue="option2"
        onChange={handleChange}
      >
        <Dropdown.Option value="option1" id="0" color="green">
          Option 1
        </Dropdown.Option>
        <Dropdown.Option value="option2" id="1" color="blue">
          Option 2
        </Dropdown.Option>
        <Dropdown.Option value="option3" id="2" color="yellow">
          Option 3
        </Dropdown.Option>
        <Dropdown.Option value="option4" id="3" color="red">
          Veldig veldig veldig veldig veldig veldig veldig veldig veldig lang
          option text!! abcewfuoiwenhtpouwe
        </Dropdown.Option>
      </Dropdown.Select>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
