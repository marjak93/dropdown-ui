import React from "react";

import { uniqueId, mod } from "../../utils";

import style from "./style.css";

/**
 *
 * @param {string} color Color of circle adornment.
 * @param {bool} textWrap Whether button can expand vertically to allow text wrapping. Defaults to false.
 */
const Button = ({ children, color, textWrap = false, ...props }) => {
  return (
    <button
      aria-haspopup="listbox"
      title={children}
      className={`${style.button} ${style[color]} ${
        textWrap ? style.wrap : style.nowrap
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

const Label = ({ children, ...props }) => {
  return (
    <span className={style.label} {...props}>
      {children}
    </span>
  );
};

/**
 *
 * @param {bool} open Whether listbox should be displayed or not
 * @param {number} activeIndex Current active element index.
 * @param {number} focusedIndex Current focused element index.
 * @param {function} onChange Function to be fired when active element changes.
 */
const ListBox = ({
  children,
  open,
  activeIndex,
  focusedIndex,
  onChange,
  ...props
}) => {
  const refs = React.Children.map(children, () => React.useRef());

  React.useEffect(() => {
    refs[focusedIndex].current.focus();
  }, [focusedIndex, open]);

  return (
    <ul
      tabIndex="-1"
      role="listbox"
      className={`${style.listbox} ${open ? "" : style.hidden}`}
      {...props}
    >
      {/* Amends id, ref and handleChange to each child */}
      {React.Children.map(children, (child, i) => ({
        ...child,
        props: {
          ...child.props,
          id: `${props.id}-option-${i}`, // Use parent id
          ref: refs[i],
          handleChange: onChange,
        },
      }))}
    </ul>
  );
};

/**
 *
 * @param {string} label Label that appears above select. Optional.
 * @param {string} value Current selected value.
 * @param {string} placeholder Placeholder for when value is falsy.
 * @param {function} onChange Function that is fired when selected option is changed.
 */
const Select = ({
  children,
  label,
  value,
  placeholder = "Select...",
  onChange,
}) => {
  const getActiveIndex = () => {
    return children.findIndex((c) => c.props.value === value);
  };

  const [activeIndex, setActiveIndex] = React.useState(getActiveIndex());
  const [focusedIndex, setFocusedIndex] = React.useState(
    Math.max(activeIndex, 0) // Focus should be on first element if active is unset
  );
  const [id] = React.useState(() => uniqueId("select-"));
  const [open, setOpen] = React.useState(false);

  const unset = activeIndex === -1;

  React.useEffect(() => {
    setActiveIndex(getActiveIndex());
  }, [value]);

  const handleCloseList = () => {
    setOpen(false);
  };

  const handleToggleList = () => {
    setOpen(!open);
  };

  const handleChange = (v) => {
    onChange(v);
    handleCloseList();
  };

  const handleBlur = (e) => {
    // Only close list if current focus is outside list
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    const next = () => setFocusedIndex(mod(focusedIndex + 1, children.length));
    const prev = () => setFocusedIndex(mod(focusedIndex - 1, children.length));
    const first = () => setFocusedIndex(0);
    const last = () => setFocusedIndex(children.length - 1);

    // According to WAI-ARIA practices:
    // https://www.w3.org/TR/wai-aria-practices/#listbox_kbd_interaction
    switch (e.key) {
      case "ArrowDown":
        next();
        break;
      case "ArrowUp":
        prev();
        break;
      case "Home":
        first();
        break;
      case "End":
        last();
        break;
      case " ":
      case "Enter":
        if (open) handleChange(children[focusedIndex].props.value);
        break;
      case "Tab":
        if (e.shiftKey) prev();
        else next();
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={style.wrapper}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      {label && <Label id={`${id}-label`}>{label}</Label>}
      <Button
        id={`${id}-btn`}
        aria-labelledby={`${id}-label ${id}-btn`}
        color={unset ? "gray" : children[activeIndex].props.color}
        onClick={handleToggleList}
      >
        {unset ? placeholder : children[activeIndex].props.children}
      </Button>
      <ListBox
        id={`${id}-list`}
        aria-labelledby={`${id}-label`}
        aria-expanded={open}
        aria-activedescendant={`${id}-list-option-${activeIndex}`}
        open={open}
        activeIndex={activeIndex}
        focusedIndex={focusedIndex}
        onChange={handleChange}
      >
        {children}
      </ListBox>
    </div>
  );
};

export default Select;
