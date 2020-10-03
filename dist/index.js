'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
var mod = function mod(n, m) {
  return (n % m + m) % m;
};

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

var uniqueId = function uniqueId(prefix) {
  return "".concat(prefix).concat(nanoid(5));
};

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

var css_248z = "/* CSS variables. IE11 support through PostCSS. */\n\n/* Main component wrapper */\n.style_wrapper__22ube {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  margin: 8px 0;\n}\n\n/* Components */\n.style_listbox__3i3dw {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  list-style: none;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  padding: 0px;\n  margin: 0;\n  margin-top: 1px;\n  position: absolute;\n  top: 100%;\n  max-width: 100%;\n  min-width: 240px;\n  z-index: 1000;\n}\n\n.style_option__2lqQO {\n  background-color: #fff;\n  position: relative;\n  text-align: left;\n}\n\n.style_option__2lqQO:first-child {\n  border-radius: 4px 4px 0px 0px;\n}\n\n.style_option__2lqQO:last-child {\n  border-radius: 0px 0px 4px 4px;\n}\n\n.style_option__2lqQO:hover,\n.style_option__2lqQO:focus {\n  background-color: #eee;\n  cursor: pointer;\n  outline: 0;\n}\n\n.style_option__2lqQO,\n.style_button__1u04R {\n  padding: 10px 42px 8px 42px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.style_button__1u04R {\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  background-color: #fff;\n  position: relative;\n  text-align: left;\n  max-width: 240px;\n}\n\n.style_option__2lqQO::before,\n.style_button__1u04R::before {\n  width: 16px;\n  height: 16px;\n  background-color: #aaa;\n  content: \" \";\n  position: absolute;\n  left: 12px;\n  top: 10px;\n  border-radius: 50%;\n}\n\n.style_button__1u04R::after {\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 8px solid #aaa;\n  content: \" \";\n  position: absolute;\n  right: 12px;\n  top: 14px;\n}\n\n.style_button__1u04R:hover {\n  cursor: pointer;\n}\n\n.style_label__3AkGW {\n  margin-bottom: 8px;\n}\n\n/* Helpers */\n.style_hidden__1AZ7T {\n  display: none;\n}\n\n.style_nowrap__2P5ZP {\n  white-space: nowrap;\n}\n\n.style_wrap__2Ce6s {\n  white-space: normal;\n}\n\n/* Adornment colors */\n.style_green__35Sx3::before {\n  background-color: rgba(166, 226, 130, 1) !important;\n}\n\n.style_blue__3BC7U::before {\n  background-color: rgba(14, 156, 219, 1) !important;\n}\n\n.style_orange__3qZGa::before {\n  background-color: rgba(243, 154, 45, 1) !important;\n}\n\n.style_red__1bgJd::before {\n  background-color: rgba(255, 96, 95, 1) !important;\n}\n\n.style_gray__3mOhC::before {\n  background-color: gray !important;\n}\n";
var style = {"wrapper":"style_wrapper__22ube","listbox":"style_listbox__3i3dw","option":"style_option__2lqQO","button":"style_button__1u04R","label":"style_label__3AkGW","hidden":"style_hidden__1AZ7T","nowrap":"style_nowrap__2P5ZP","wrap":"style_wrap__2Ce6s","green":"style_green__35Sx3","blue":"style_blue__3BC7U","orange":"style_orange__3qZGa","red":"style_red__1bgJd","gray":"style_gray__3mOhC"};
styleInject(css_248z);

/**
 *
 * @param {string} color Color of circle adornment.
 * @param {bool} textWrap Whether button can expand vertically to allow text wrapping. Defaults to false.
 */

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "gray" : _ref$color,
      _ref$textWrap = _ref.textWrap,
      textWrap = _ref$textWrap === void 0 ? false : _ref$textWrap,
      props = _objectWithoutProperties(_ref, ["children", "color", "textWrap"]);

  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-haspopup": "listbox",
    title: children,
    className: "".concat(style.button, " ").concat(style[color], " ").concat(textWrap ? style.wrap : style.nowrap)
  }, props), children);
};

var Label = function Label(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

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


var ListBox = function ListBox(_ref3) {
  var children = _ref3.children,
      open = _ref3.open,
      activeIndex = _ref3.activeIndex,
      focusedIndex = _ref3.focusedIndex,
      onChange = _ref3.onChange,
      props = _objectWithoutProperties(_ref3, ["children", "open", "activeIndex", "focusedIndex", "onChange"]);

  var refs = React.Children.map(children, function () {
    return React.useRef();
  }); // Focus/blur element when focusedIndex changes or listbox opens/closes.

  React.useEffect(function () {
    var ref = refs[focusedIndex].current;

    if (open) {
      ref.focus();
    } else {
      ref.blur();
    }
  }, [focusedIndex, open]);
  return /*#__PURE__*/React.createElement("ul", _extends({
    tabIndex: "-1",
    role: "listbox",
    className: "".concat(style.listbox, " ").concat(open ? "" : style.hidden)
  }, props), React.Children.map(children, function (child, i) {
    return _objectSpread2({}, child, {
      props: _objectSpread2({}, child.props, {
        id: "".concat(props.id, "-option-").concat(i),
        // Use parent id
        ref: refs[i],
        handleChange: onChange
      })
    });
  }));
};
/**
 *
 * @param {string} label Label that appears above select. Optional.
 * @param {string} value Current selected value.
 * @param {string} placeholder Placeholder for when value is falsy.
 * @param {function} onChange Function that is fired when selected option is changed.
 */


var Select = function Select(_ref4) {
  var native = _ref4.native,
      children = _ref4.children,
      label = _ref4.label,
      value = _ref4.value,
      _ref4$placeholder = _ref4.placeholder,
      placeholder = _ref4$placeholder === void 0 ? "Select..." : _ref4$placeholder,
      onChange = _ref4.onChange;

  // Return index of first element that has value equal to provided value
  var getActiveIndex = function getActiveIndex() {
    return children.findIndex(function (c) {
      return c.props.value === value;
    });
  };

  var _React$useState = React.useState(getActiveIndex()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveIndex = _React$useState2[1];

  var _React$useState3 = React.useState(Math.max(activeIndex, 0) // Focus should be on first element if active is unset
  ),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      focusedIndex = _React$useState4[0],
      setFocusedIndex = _React$useState4[1];

  var _React$useState5 = React.useState(function () {
    return uniqueId("select-");
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 1),
      id = _React$useState6[0];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      open = _React$useState8[0],
      setOpen = _React$useState8[1]; // True if no active index


  var unset = activeIndex === -1; // Change activeIndex when value changes

  React.useEffect(function () {
    setActiveIndex(getActiveIndex());
  }, [value]); // Close listbox

  var handleCloseList = function handleCloseList() {
    setOpen(false);
  }; // Toggle listbox visibility


  var handleToggleList = function handleToggleList() {
    setOpen(!open);
  }; // Fire onChange() and close listbox


  var handleChange = function handleChange(v) {
    onChange(v);
    handleCloseList();
  }; // Close list if current focus is outside list


  var handleBlur = function handleBlur(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false);
    }
  }; // Keyboard controls


  var handleKeyDown = function handleKeyDown(e) {
    if (open && ["ArrowDown", "ArrowUp", "Home", "End", " ", "Enter", "Tab", "Escape"].includes(e.key)) {
      e.preventDefault(); // Prevent default browser interactions
    }

    var next = function next() {
      return setFocusedIndex(mod(focusedIndex + 1, children.length));
    };

    var prev = function prev() {
      return setFocusedIndex(mod(focusedIndex - 1, children.length));
    };

    var first = function first() {
      return setFocusedIndex(0);
    };

    var last = function last() {
      return setFocusedIndex(children.length - 1);
    }; // According to WAI-ARIA practices:
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
        if (open) handleChange(children[focusedIndex].props.value); // else handleOpenList();

        break;

      case "Tab":
        if (e.shiftKey) prev();else next();
        break;

      case "Escape":
        handleCloseList();
        break;
    }
  };

  if (native) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "".concat(id, "-select")
    }, label), /*#__PURE__*/React.createElement("select", {
      id: "".concat(id, "-select"),
      onChange: function onChange(e) {
        return handleChange(e.target.value);
      }
    }, React.Children.map(children, function (c) {
      return React.cloneElement(c, {
        native: true
      });
    })));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: style.wrapper,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur
  }, label && /*#__PURE__*/React.createElement(Label, {
    id: "".concat(id, "-label")
  }, label), /*#__PURE__*/React.createElement(Button, {
    id: "".concat(id, "-btn"),
    "aria-labelledby": "".concat(id, "-label ").concat(id, "-btn"),
    color: unset ? "gray" : children[activeIndex].props.color,
    onClick: handleToggleList
  }, unset ? placeholder : children[activeIndex].props.children), /*#__PURE__*/React.createElement(ListBox, {
    id: "".concat(id, "-list"),
    "aria-labelledby": "".concat(id, "-label"),
    "aria-expanded": open,
    "aria-activedescendant": "".concat(id, "-list-option-").concat(activeIndex),
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

var Option = function Option(_ref) {
  var native = _ref.native,
      children = _ref.children,
      value = _ref.value,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "gray" : _ref$color,
      _ref$textWrap = _ref.textWrap,
      textWrap = _ref$textWrap === void 0 ? false : _ref$textWrap,
      handleChange = _ref.handleChange,
      props = _objectWithoutProperties(_ref, ["native", "children", "value", "color", "textWrap", "handleChange"]);

  // Fire handleChange() with this components value on click
  var handleClick = function handleClick() {
    handleChange(value);
  };

  if (native) {
    return /*#__PURE__*/React.createElement("option", {
      value: value
    }, children);
  }

  return /*#__PURE__*/React.createElement("li", _extends({
    role: "option",
    tabIndex: "0",
    title: children,
    onClick: handleClick,
    className: "".concat(style.option, " ").concat(style[color], " ").concat(textWrap ? style.wrap : style.nowrap)
  }, props), children);
};

var index = {
  Select: Select,
  Option: Option
};

exports.Dropdown = index;
