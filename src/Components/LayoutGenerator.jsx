/** @format */

import { useState } from "react";
import Generator from "./Elemets/Generator";
import { Styles } from "./Styles/StaticStyles";

const LayoutGenerator = () => {
  const options = [
    "",
    "XL",
    "2XL",
    "4L",
    "XL/2L",
    "XL/L/2SM",
    "2L/2XL/5SM",
    "4SM/3L/2XL",
    //and extra options
  ];
  const [selected, setSelected] = useState("");
  return (
    <>
      <h2 style={Styles?.header}>Layout Generator</h2>
      <p>Select: </p>
      <select onChange={(e) => setSelected(e.target.value)} value={selected}>
        {options.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
      <Generator selected={selected} />
    </>
  );
};

export default LayoutGenerator;
