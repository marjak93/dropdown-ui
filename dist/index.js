'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Modulo operation. Operates differently to the remainder (%) JS
 * operator when n is negative.
 * @param {number} n Quotient.
 * @param {number} m Dividend.
 *
 * @example
 * -1 % 4 = -1
 * mod(-1, 4) = 3
 */
const mod = (n, m) => (n % m + m) % m;

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

if (process.env.NODE_ENV !== 'production') {
  // All bundlers will remove this block in the production bundle.
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    !self.crypto
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
      'If you don’t need unpredictable IDs, you can use `nanoid/non-secure`. ' +
      'For secure IDs, import `react-native-get-random-values` before Nano ID.'
    )
  }
  if (typeof self !== 'undefined' && self.msCrypto && !self.crypto) {
    throw new Error(
      'Add self.crypto = self.msCrypto before Nano ID to fix IE 11 support'
    )
  }
  if (typeof self === 'undefined' || !self.crypto) {
    throw new Error(
      'Your browser does not have secure random generator. ' +
      'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

let nanoid = (size = 21) => {
  let id = '';
  let bytes = crypto.getRandomValues(new Uint8Array(size));

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63;
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36);
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte < 63) {
      id += '_';
    } else {
      id += '-';
    }
  }
  return id
};

/**
 * Generates a random unique id.
 * @param {string} prefix String to prefix id with.
 */

const uniqueId = prefix => `${prefix}${nanoid(5)}`;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* Color variables. IE11 support through PostCSS. */\n\n/* Main component wrapper */\n.style_wrapper__22ube {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-width: 240px;\n}\n\n/* Components */\n.style_listbox__3i3dw {\n  list-style: none;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  padding: 0px;\n  margin: 0;\n  margin-top: 1px;\n}\n\n.style_option__2lqQO {\n  background-color: transparent;\n  position: relative;\n  text-align: left;\n}\n\n.style_option__2lqQO:first-child {\n  border-radius: 4px 4px 0px 0px;\n}\n\n.style_option__2lqQO:last-child {\n  border-radius: 0px 0px 4px 4px;\n}\n\n.style_option__2lqQO:hover,\n.style_option__2lqQO:focus {\n  background-color: #eee;\n  cursor: pointer;\n  outline: 0;\n}\n\n.style_option__2lqQO,\n.style_button__1u04R {\n  padding: 10px 42px 8px 42px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.style_button__1u04R {\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  background-color: #fff;\n  position: relative;\n  text-align: left;\n}\n\n.style_option__2lqQO::before,\n.style_button__1u04R::before {\n  width: 16px;\n  height: 16px;\n  background-color: #aaa;\n  content: \" \";\n  position: absolute;\n  left: 12px;\n  top: 10px;\n  border-radius: 50%;\n}\n\n.style_button__1u04R::after {\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 8px solid #aaa;\n  content: \" \";\n  position: absolute;\n  right: 12px;\n  top: 14px;\n}\n\n.style_button__1u04R:hover {\n  cursor: pointer;\n}\n\n.style_label__3AkGW {\n  margin-bottom: 8px;\n}\n\n/* Helpers */\n.style_hidden__1AZ7T {\n  display: none;\n}\n\n.style_nowrap__2P5ZP {\n  white-space: nowrap;\n}\n\n.style_wrap__2Ce6s {\n  white-space: normal;\n}\n\n/* Adornment colors */\n.style_green__35Sx3::before {\n  background-color: rgba(166, 226, 130, 1) !important;\n}\n\n.style_blue__3BC7U::before {\n  background-color: rgba(14, 156, 219, 1) !important;\n}\n\n.style_orange__3qZGa::before {\n  background-color: rgba(243, 154, 45, 1) !important;\n}\n\n.style_red__1bgJd::before {\n  background-color: rgba(255, 96, 95, 1) !important;\n}\n\n.style_gray__3mOhC::before {\n  background-color: black !important;\n}\n";
var style = {"wrapper":"style_wrapper__22ube","listbox":"style_listbox__3i3dw","option":"style_option__2lqQO","button":"style_button__1u04R","label":"style_label__3AkGW","hidden":"style_hidden__1AZ7T","nowrap":"style_nowrap__2P5ZP","wrap":"style_wrap__2Ce6s","green":"style_green__35Sx3","blue":"style_blue__3BC7U","orange":"style_orange__3qZGa","red":"style_red__1bgJd","gray":"style_gray__3mOhC"};
styleInject(css_248z);

/**
 *
 * @param {string} color Color of circle adornment.
 * @param {bool} textWrap Whether button can expand vertically to allow text wrapping. Defaults to false.
 */

const Button = ({
  children,
  color = "gray",
  textWrap = false,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-haspopup": "listbox",
    title: children,
    className: `${style.button} ${style[color]} ${textWrap ? style.wrap : style.nowrap}`
  }, props), children);
};

const Label = ({
  children,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: style.label
  }, props), children);
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
  const refs = React.Children.map(children, () => React.useRef()); // Focus element when focusedIndex changes or listbox opens.

  React.useEffect(() => {
    refs[focusedIndex].current.focus();
  }, [focusedIndex, open]);
  return /*#__PURE__*/React.createElement("ul", _extends({
    tabIndex: "-1",
    role: "listbox",
    className: `${style.listbox} ${open ? "" : style.hidden}`
  }, props), React.Children.map(children, (child, i) => ({ ...child,
    props: { ...child.props,
      id: `${props.id}-option-${i}`,
      // Use parent id
      ref: refs[i],
      handleChange: onChange
    }
  })));
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
  onChange
}) => {
  // Return index of first element that has value equal to provided value
  const getActiveIndex = () => {
    return children.findIndex(c => c.props.value === value);
  };

  const [activeIndex, setActiveIndex] = React.useState(getActiveIndex());
  const [focusedIndex, setFocusedIndex] = React.useState(Math.max(activeIndex, 0) // Focus should be on first element if active is unset
  );
  const [id] = React.useState(() => uniqueId("select-"));
  const [open, setOpen] = React.useState(false); // True if no active index

  const unset = activeIndex === -1; // Change activeIndex when value changes

  React.useEffect(() => {
    setActiveIndex(getActiveIndex());
  }, [value]); // Close listbox

  const handleCloseList = () => {
    setOpen(false);
  }; // Toggle listbox visibility


  const handleToggleList = () => {
    setOpen(!open);
  }; // Fire onChange() and close listbox


  const handleChange = v => {
    onChange(v);
    handleCloseList();
  }; // Close list if current focus is outside list


  const handleBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false);
    }
  }; // Keyboard controls


  const handleKeyDown = e => {
    const next = () => setFocusedIndex(mod(focusedIndex + 1, children.length));

    const prev = () => setFocusedIndex(mod(focusedIndex - 1, children.length));

    const first = () => setFocusedIndex(0);

    const last = () => setFocusedIndex(children.length - 1); // According to WAI-ARIA practices:
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
        if (e.shiftKey) prev();else next();
        break;
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: style.wrapper,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur
  }, label && /*#__PURE__*/React.createElement(Label, {
    id: `${id}-label`
  }, label), /*#__PURE__*/React.createElement(Button, {
    id: `${id}-btn`,
    "aria-labelledby": `${id}-label ${id}-btn`,
    color: unset ? "gray" : children[activeIndex].props.color,
    onClick: handleToggleList
  }, unset ? placeholder : children[activeIndex].props.children), /*#__PURE__*/React.createElement(ListBox, {
    id: `${id}-list`,
    "aria-labelledby": `${id}-label`,
    "aria-expanded": open,
    "aria-activedescendant": `${id}-list-option-${activeIndex}`,
    open: open,
    activeIndex: activeIndex,
    focusedIndex: focusedIndex,
    onChange: handleChange
  }, children));
};

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
  color = "gray",
  textWrap = false,
  handleChange,
  ...props
}) => {
  // Fire handleChange() with this components value on click
  const handleClick = () => {
    handleChange(value);
  };

  return /*#__PURE__*/React.createElement("li", _extends({
    role: "option",
    tabIndex: "0",
    title: children,
    onClick: handleClick,
    className: `${style.option} ${style[color]} ${textWrap ? style.wrap : style.nowrap}`
  }, props), children);
};

var index = {
  Select,
  Option
};

exports.Dropdown = index;
