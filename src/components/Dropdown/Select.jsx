import React from "react";

import { uniqueId } from "../../utils";

import style from "./style.css";

const Select = () => {
  const [id] = React.useState(() => uniqueId("select-"));

  console.log(id);

  return <div className={style.wrapper}></div>;
};

export default Select;
