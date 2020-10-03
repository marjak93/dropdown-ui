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
  native,
  children,
  value,
  color = "gray",
  textWrap = false,
  handleChange,
  ...props
}) => {
  // Fire handleChange() with this components value on click
  const handleClick = () => {
    handleChange(value);
  };

  if (native) {
    return <option value={value}>{children}</option>;
  }

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
