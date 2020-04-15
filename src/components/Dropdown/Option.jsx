import React from "react";

import style from "./style.css";

/**
 *
 * @param {string} value Value of option.
 * @param {string} color Color of circle adornment.
 * @param {bool} textWrap Whether text can wrap. Defaults to false.
 * @param {function} handleChange Function to be fired when clicked.
 */
const Option = ({
  children,
  value,
  color,
  textWrap = false,
  handleChange,
  ...props
}) => {
  const handleClick = () => {
    handleChange(value);
  };

  return (
    <li
      role="option"
      tabIndex="0"
      title={children}
      onClick={handleClick}
      className={`${style.option} ${style[color]} ${
        textWrap ? style.wrap : style.nowrap
      }`}
      {...props}
    >
      {children}
    </li>
  );
};

export default Option;
