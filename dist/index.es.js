function __$$styleInject(css, ref) {
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

import React from 'react';
import ReactDOM from 'react-dom';

//

var H1 = function H1(_ref) {
   var children = _ref.children;
   return React.createElement(
      "h1",
      { className: "dc-h1" },
      children
   );
};

var H2 = function H2(_ref2) {
   var children = _ref2.children;
   return React.createElement(
      "h2",
      { className: "dc-h2" },
      children
   );
};

var H3 = function H3(_ref3) {
   var children = _ref3.children;
   return React.createElement(
      "h3",
      { className: "dc-h3" },
      children
   );
};

var H4 = function H4(_ref4) {
   var children = _ref4.children;
   return React.createElement(
      "h4",
      { className: "dc-h4" },
      children
   );
};

var Text = function Text(_ref5) {
   var small = _ref5.small,
       children = _ref5.children;
   return React.createElement(
      "p",
      { className: small ? 'dc--text-small' : 'dc-p' },
      children
   );
};

//

var Page = function Page(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    { className: 'dc-page' },
    children
  );
};

var Container = function Container(_ref2) {
  var limited = _ref2.limited,
      children = _ref2.children;
  return React.createElement(
    'div',
    { className: 'dc-container' + (limited ? ' dc-container-limited' : '') },
    children
  );
};

//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//

var dc = function dc(props, klass, f) {
   return Object.keys(props).map(function (key) {
      return props[key] !== false ? f(key, props[key]) : '';
   }).concat([klass]).join(' ').trim();
};

//
// Math.random should be unique because of its seeding algorithm.
// Convert it to base 36 (numbers + letters), and grab the first 9 characters
// after the decimal.
//
// see https://gist.github.com/gordonbrander/2230317
var id = function id() {
   return Math.random().toString(36).substr(2, 9);
};

//

var dc_row = function dc_row(props) {
  return dc(props, 'dc-row', function (key, val) {
    switch (key) {
      case 'collapse':
        return 'dc-row--collapse';
      default:
        return '';
    }
  });
};

var Row = function Row(props) {
  return React.createElement(
    'div',
    { className: dc_row(props) },
    props.children
  );
};

var dc_column = function dc_column(props) {
  return dc(props, 'dc-column', function (key, val) {
    switch (key) {
      case 'small':
        return 'dc-column--small-' + val;
      case 'medium':
        return 'dc-column--medium-' + val;
      case 'large':
        return 'dc-column--large-' + val;
      case 'huge':
        return 'dc-column--huge-' + val;
      case 'shrink':
        return 'dc-column--shrink';
      default:
        return '';
    }
  });
};

var dc_column_contents = function dc_column_contents(props) {
  return dc(props, 'dc-column__contents', function (key, _) {
    switch (key) {
      case 'center':
        return 'dc-column__contents--center';
      default:
        return '';
    }
  });
};

var Column = function Column(props) {
  return React.createElement(
    'div',
    { className: dc_column(props) },
    React.createElement(
      'div',
      { className: dc_column_contents(props) },
      props.children
    )
  );
};

var _extends = Object.assign || function (target) {
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

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

//

//
//
var dc_btn = function dc_btn(props) {
  return dc(props, 'dc-btn', function (key, _) {
    switch (key) {
      case 'large':
        return 'dc-btn--large';
      case 'small':
        return 'dc-btn--small';
      case 'primary':
        return 'dc-btn--primary';
      case 'destroy':
        return 'dc-btn--destroy';
      case 'active':
        return 'dc-btn--active';
      case 'disabled':
        return 'dc-btn--disabled';
      case 'link':
        return 'dc-btn--link';
      case 'nofocus':
        return 'dc-btn--no-focus';
      case 'block':
        return 'dc-btn--block';
      case 'in-group':
        return 'dc-btn--in-input-group';
      case 'with-text':
        return 'dc-btn--in-input-text-group';
      case 'in-message':
        return 'dc-msg__bd__link';
      default:
        return '';
    }
  });
};

var dc_btn_props = function dc_btn_props(_ref) {
  var large = _ref.large,
      small = _ref.small,
      primary = _ref.primary,
      destroy = _ref.destroy,
      active = _ref.active,
      disabled = _ref.disabled,
      link = _ref.link,
      nofocus = _ref.nofocus,
      block = _ref.block,
      ingroup = _ref['in-group'],
      withtext = _ref['with-text'],
      inmessage = _ref['in-message'],
      props = objectWithoutProperties(_ref, ['large', 'small', 'primary', 'destroy', 'active', 'disabled', 'link', 'nofocus', 'block', 'in-group', 'with-text', 'in-message']);
  return props;
};

var Button = function Button(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = objectWithoutProperties(_ref2, ['className', 'children']);
  return React.createElement(
    'button',
    _extends({ className: dc_btn(props) }, dc_btn_props(props)),
    children
  );
};
var dc_link = function dc_link(props) {
  return dc(props, 'dc-link', function (key, _) {
    switch (key) {
      case 'in-message':
        return 'dc-msg__bd__link';
      default:
        return '';
    }
  });
};

var Link = function Link(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = objectWithoutProperties(_ref3, ['className', 'children']);
  return React.createElement(
    'a',
    _extends({ className: dc_link(props) }, dc_btn_props(props)),
    children
  );
};

//

var Card = function Card(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["className", "children"]);
  return React.createElement(
    "div",
    _extends({ className: "dc-card" }, props),
    children
  );
};

//

//
//
var dc_divider = function dc_divider(props) {
  return dc(props, 'dc-divider', function (key, _) {
    switch (key) {
      case 'secondary':
        return 'dc-divider--secondary';
      default:
        return '';
    }
  });
};

var dc_divider_props = function dc_divider_props(_ref) {
  var secondary = _ref.secondary,
      props = objectWithoutProperties(_ref, ['secondary']);
  return props;
};

var Divider = function Divider(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = objectWithoutProperties(_ref2, ['className', 'children']);
  return React.createElement('hr', _extends({ className: dc_divider(props) }, dc_divider_props(props)));
};

//

//
//
var dc_icon = function dc_icon(props) {
  return dc(props, 'dc-icon', function (key, val) {
    switch (key) {
      case 'id':
        return 'dc-icon--' + val;
      case 'button':
        return 'dc-icon--btn';
      case 'right':
        return 'dc-icon--btn--right';
      case 'left':
        return 'dc-icon--btn--left';
      case 'small':
        return 'dc-icon--btn-small';
      case 'large':
        return 'dc-icon--btn-large';
      case 'spin':
        return 'dc-icon--spin';
      default:
        return '';
    }
  });
};

var Icon = function Icon(props) {
  return React.createElement('i', { className: dc_icon(props) });
};

var css = "/*\n// Copyright (C) 2018 Dmitry Kolesnikov\n//\n// This file may be modified and distributed under the terms\n// of the MIT license. See the LICENSE file for details.\n// https://github.com/fogfish/react-dress-code\n//\n*/\n.dc-static\n{\n   display: inline-block;\n   margin: 0;\n   padding: .9rem .8rem;\n   border: 1px solid white;\n   font-size: 1.4rem;\n   font-weight: 300;\n   line-height: normal;\n   min-height: 3.7rem;\n   border-radius: 2px;\n}\n\n.dc-static:hover\n{\n   border: 1px solid #029cfe;\n   box-shadow: inset 0 1px 1px #d1d1d1;\n}\n\n.dc-static--is-error\n{\n   border: 1px solid #ff4a25;   \n}\n\n.dc-static--disabled:hover\n{\n   border: 1px solid white;\n   box-shadow: none;\n}\n\n.dc-static--placeholder\n{\n   color: #aaa;\n}\n\n.dc-static--in-input-group:first-child\n{\n   border-top-left-radius: 2px;\n   border-bottom-left-radius: 2px;\n}\n\n\n.dc-static-text\n{\n   display: inline-block;\n   margin: 0;\n   padding: .7rem .8rem;\n\n   border: 1px solid white;\n\n   font-size: 1.4rem;\n   font-weight: 300;\n   line-height: normal;\n   min-height: 8rem;\n   width: 100%;\n}\n\n\n.dc-static-text:hover\n{\n   border: 1px solid #029cfe;\n   box-shadow: inset 0 1px 1px #d1d1d1;\n}\n\n.dc-static-text--disabled:hover\n{\n   border: 1px solid white;\n   box-shadow: none;\n}\n\n.dc-static-text--is-error\n{\n   border: 1px solid #ff4a25;   \n}\n\n.dc-static-text--placeholder\n{\n   color: #aaa;\n}\n\n\n.dc-textarea--in-input-group\n{\n   margin-right: 0;\n   margin-bottom: 0;\n   margin-left: 0;\n   border-radius: 0;\n}\n\n.dc-btn--in-input-text-group\n{\n   max-height: 4rem;\n}\n\n.dc-btn--in-input-text-group:first-child\n{\n   border-top-right-radius: 2px;\n   border-top-left-radius: 0px;\n   border-bottom-right-radius: 0px;\n   border-bottom-left-radius: 0px;\n   border-left-width: 0px;\n   border-right-width: 0px;\n}\n\n.dc-btn--in-input-text-group:last-child\n{\n   border-top-right-radius: 0px;\n   border-top-left-radius: 0px;\n   border-bottom-right-radius: 2px !important;\n   border-bottom-left-radius: 0px;\n   border-left-width: 0px;\n   border-right-width: 0px;\n}\n";
__$$styleInject(css);

//

//
//
var dc_checkbox = function dc_checkbox(props) {
  return dc(props, 'dc-checkbox', function (key, _) {
    switch (key) {
      default:
        return '';
    }
  });
};

var CheckboxWithId = function CheckboxWithId(_ref) {
  var type = _ref.type,
      className = _ref.className,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ['type', 'className', 'children']);
  return React.createElement(
    'span',
    null,
    React.createElement('input', _extends({ type: 'checkbox', className: dc_checkbox(props), name: props.id }, props)),
    React.createElement(
      'label',
      { className: 'dc-label', htmlFor: props.id },
      children
    )
  );
};

var Checkbox = function Checkbox(props) {
  return React.createElement(CheckboxWithId, _extends({ id: props.id ? props.id : id() }, props));
};

//
//
var dc_switchbox = function dc_switchbox(props) {
  return dc(props, 'dc-checkbox dc-checkbox--alt', function (key, _) {
    switch (key) {
      default:
        return '';
    }
  });
};

var SwitchboxWithId = function SwitchboxWithId(_ref2) {
  var type = _ref2.type,
      className = _ref2.className,
      children = _ref2.children,
      props = objectWithoutProperties(_ref2, ['type', 'className', 'children']);
  return React.createElement(
    'span',
    null,
    React.createElement('input', _extends({ type: 'checkbox', className: dc_switchbox(props), name: props.id }, props)),
    React.createElement(
      'label',
      { className: 'dc-label', htmlFor: props.id },
      children
    )
  );
};

var Switchbox = function Switchbox(props) {
  return React.createElement(SwitchboxWithId, _extends({ id: props.id ? props.id : id() }, props));
};

//
//
var dc_label = function dc_label(props) {
  return dc(props, 'dc-label', function (key, _) {
    switch (key) {
      case 'disabled':
        return 'dc-label--disabled';
      default:
        return '';
    }
  });
};

var Label = function Label(props) {
  return React.createElement(
    'label',
    { className: dc_label(props) },
    props.children,
    props.sub && React.createElement(
      'span',
      { className: 'dc-label__sub' },
      props.sub
    )
  );
};

//
//
var dc_input = function dc_input(props) {
  return dc(props, 'dc-input', function (key, _) {
    switch (key) {
      case 'disabled':
        return 'dc-input--disabled';
      case 'small':
        return 'dc-input--small';
      case 'is-error':
        return 'dc-input--is-error';
      case 'in-group':
        return 'dc-input--in-input-group';
      default:
        return '';
    }
  });
};

var dc_input_props = function dc_input_props(_ref3) {
  var disabled = _ref3.disabled,
      small = _ref3.small,
      ingroup = _ref3['in-group'],
      iserror = _ref3['is-error'],
      props = objectWithoutProperties(_ref3, ['disabled', 'small', 'in-group', 'is-error']);
  return props;
};

var Input = function Input(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      props = objectWithoutProperties(_ref4, ['className', 'children']);
  return React.createElement('input', _extends({ className: dc_input(props), name: props.id }, dc_input_props(props)));
};
var dc_textarea = function dc_textarea(props) {
  return dc(props, 'dc-textarea', function (key, _) {
    switch (key) {
      case 'disabled':
        return 'dc-textarea--disabled';
      case 'small':
        return 'dc-textarea--small';
      case 'is-error':
        return 'dc-textarea--is-error';
      case 'in-group':
        return 'dc-textarea--in-input-group';
      default:
        return '';
    }
  });
};

var dc_textarea_props = function dc_textarea_props(_ref5) {
  var disabled = _ref5.disabled,
      small = _ref5.small,
      ingroup = _ref5['in-group'],
      iserror = _ref5['is-error'],
      props = objectWithoutProperties(_ref5, ['disabled', 'small', 'in-group', 'is-error']);
  return props;
};

var TextArea = function TextArea(_ref6) {
  var className = _ref6.className,
      props = objectWithoutProperties(_ref6, ['className']);
  return React.createElement('textarea', _extends({ className: dc_textarea(props), name: props.id }, dc_textarea_props(props)));
};
var dc_select = function dc_select(props) {
  return dc(props, 'dc-select', function (key, _) {
    switch (key) {
      case 'disabled':
        return 'dc-select--disabled';
      case 'small':
        return 'dc-select--small';
      case 'is-error':
        return 'dc-select--is-error';
      default:
        return '';
    }
  });
};

var dc_select_props = function dc_select_props(_ref7) {
  var small = _ref7.small,
      ingroup = _ref7['in-group'],
      iserror = _ref7['is-error'],
      props = objectWithoutProperties(_ref7, ['small', 'in-group', 'is-error']);
  return props;
};

var Select = function Select(_ref8) {
  var className = _ref8.className,
      children = _ref8.children,
      props = objectWithoutProperties(_ref8, ['className', 'children']);
  return React.createElement(
    'select',
    _extends({ className: dc_select(props), name: props.id }, dc_select_props(props)),
    children
  );
};
var InputStack = function InputStack(_ref9) {
  var children = _ref9.children;
  return React.createElement(
    'div',
    { 'class': 'dc-input-stack' },
    children
  );
};

//
//
var dc_static = function dc_static(props) {
  return dc(props, 'dc-static', function (key, _) {
    switch (key) {
      case 'in-group':
        return 'dc-static--in-input-group';
      case 'is-error':
        return 'dc-static--is-error';
      case 'disabled':
        return 'dc-static--disabled';
      default:
        return '';
    }
  });
};

var dc_static_props = function dc_static_props(_ref10) {
  var ingroup = _ref10['in-group'],
      isError = _ref10['is-error'],
      disabled = _ref10.disabled,
      props = objectWithoutProperties(_ref10, ['in-group', 'is-error', 'disabled']);
  return props;
};

var Static = function Static(_ref11) {
  var children = _ref11.children,
      placeholder = _ref11.placeholder,
      props = objectWithoutProperties(_ref11, ['children', 'placeholder']);
  return React.createElement(
    'div',
    _extends({ className: dc_static(props) + ' ' + (children ? '' : 'dc-static--placeholder') }, dc_static_props(props)),
    children || placeholder
  );
};
var dc_static_text = function dc_static_text(props) {
  return dc(props, 'dc-static-text', function (key, _) {
    switch (key) {
      case 'in-group':
        return 'dc-static-text--in-input-group';
      case 'is-error':
        return 'dc-static-text--is-error';
      case 'disabled':
        return 'dc-static-text--disabled';
      default:
        return '';
    }
  });
};

var StaticText = function StaticText(_ref12) {
  var children = _ref12.children,
      placeholder = _ref12.placeholder,
      props = objectWithoutProperties(_ref12, ['children', 'placeholder']);
  return React.createElement(
    'div',
    _extends({ className: dc_static_text(props) + ' ' + (children ? '' : 'dc-static-text--placeholder') }, props),
    children || placeholder
  );
};

//

var LoadingBar = function LoadingBar() {
  return React.createElement(
    "div",
    { className: "dc-loading-bar" },
    React.createElement("div", { className: "dc-loading-bar__bar" }),
    React.createElement("div", { className: "dc-loading-bar__fill" })
  );
};

//

//
//
var dc_status = function dc_status(props) {
  return dc(props, 'dc-status', function (key, _) {
    switch (key) {
      case 'active':
        return 'dc-status--active';
      case 'inactive':
        return 'dc-status--inactive';
      case 'disabled':
        return 'dc-status--inactive';
      case 'new':
        return 'dc-status--new';
      case 'warning':
        return 'dc-status--new';
      case 'error':
        return 'dc-status--error';
      default:
        return '';
    }
  });
};

var Status = function Status(props) {
  return React.createElement(
    'span',
    { className: dc_status(props) },
    props.children
  );
};

var css$1 = "\n.dc-tab\n{\n  display: flex;\n}\n\n.dc-tab-group\n{\n  margin-left: auto;\n}";
__$$styleInject(css$1);

//

//
//
var dc_tab = function dc_tab(props) {
  return dc(props, 'dc-tab', function (key, _) {
    switch (key) {
      case 'vertical':
        return 'dc-tab--vertical';
      default:
        return '';
    }
  });
};

var Tab = function Tab(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ['className', 'children']);
  return React.createElement(
    'ul',
    { className: dc_tab(props) },
    children
  );
};
var dc_tab_element = function dc_tab_element(props) {
  return dc(props, 'dc-tab__element', function (key, _) {
    switch (key) {
      case 'header':
        return 'dc-tab__element--header';
      case 'active':
        return 'dc-tab__element--active';
      case 'disabled':
        return 'dc-tab__element--disabled';
      case 'right':
        return 'dc-tab__element--right';
      default:
        return '';
    }
  });
};

var dc_tab_element_props = function dc_tab_element_props(_ref2) {
  var header = _ref2.header,
      active = _ref2.active,
      disabled = _ref2.disabled,
      right = _ref2.right,
      props = objectWithoutProperties(_ref2, ['header', 'active', 'disabled', 'right']);
  return props;
};

var TabElement = function TabElement(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = objectWithoutProperties(_ref3, ['className', 'children']);
  return React.createElement(
    'li',
    _extends({ className: dc_tab_element(props) }, dc_tab_element_props(props)),
    children
  );
};
var TabGroup = function TabGroup(_ref4) {
  var children = _ref4.children;
  return React.createElement(
    'div',
    { className: 'dc-tab-group' },
    children
  );
};

//

//
//
var dc_table = function dc_table(props) {
  return dc(props, 'dc-table', function (key, _) {
    switch (key) {
      case 'responsive':
        return 'dc-table--responsive';
      default:
        return '';
    }
  });
};

var Table = function Table(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ['className', 'children']);
  return React.createElement(
    'table',
    { className: dc_table(props) },
    children
  );
};
var THead = function THead(_ref2) {
  var children = _ref2.children;
  return React.createElement(
    'thead',
    { className: 'dc-table__thead' },
    children
  );
};

var TBody = function TBody(_ref3) {
  var children = _ref3.children;
  return React.createElement(
    'tbody',
    { className: 'dc-table__tbody' },
    children
  );
};

var dc_tr = function dc_tr(props) {
  return dc(props, 'dc-table__tr', function (key, _) {
    switch (key) {
      case 'interactive':
        return 'dc-table__tr--interactive';
      case 'tight':
        return 'dc-table__tr--tight';
      case 'comfortable':
        return 'dc-table__tr--comfortable';
      case 'spacious':
        return 'dc-table__tr--spacious';
      default:
        return '';
    }
  });
};

var dc_tr_props = function dc_tr_props(_ref4) {
  var interactive = _ref4.interactive,
      tight = _ref4.tight,
      comfortable = _ref4.comfortable,
      spacious = _ref4.spacious,
      props = objectWithoutProperties(_ref4, ['interactive', 'tight', 'comfortable', 'spacious']);
  return props;
};

var TR = function TR(_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      props = objectWithoutProperties(_ref5, ['className', 'children']);
  return React.createElement(
    'tr',
    _extends({ className: dc_tr(props) }, dc_tr_props(props)),
    children
  );
};
var TH = function TH(_ref6) {
  var className = _ref6.className,
      children = _ref6.children,
      props = objectWithoutProperties(_ref6, ['className', 'children']);
  return React.createElement(
    'th',
    { className: 'dc-table__th' },
    children
  );
};
var TD = function TD(_ref7) {
  var className = _ref7.className,
      children = _ref7.children,
      props = objectWithoutProperties(_ref7, ['className', 'children']);
  return React.createElement(
    'td',
    { className: 'dc-table__td' },
    children
  );
};

var css$2 = "/*\n// Copyright (C) 2018 Dmitry Kolesnikov\n//\n// This file may be modified and distributed under the terms\n// of the MIT license. See the LICENSE file for details.\n// https://github.com/fogfish/react-dress-code\n//\n*/\n\n.dc-input-group--vertical-buttons\n{\n  display: flex;\n  flex-direction: column;\n}\n";
__$$styleInject(css$2);

//

var InputGroup = function InputGroup(_ref) {
   var children = _ref.children;
   return React.createElement(
      'div',
      { className: 'dc-input-group' },
      children
   );
};

var AddOn = function AddOn(_ref2) {
   var children = _ref2.children;
   return React.createElement(
      'div',
      { className: 'dc-input-addon' },
      children
   );
};

var VerticalButtons = function VerticalButtons(_ref3) {
   var children = _ref3.children;
   return React.createElement(
      'div',
      { className: 'dc-input-group--vertical-buttons' },
      children
   );
};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var identity_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
/**
 * This method is similar to lodash `identity`. It returns the first argument it receives.
 *
 * @static
 * @category Utilities
 * @param {*} value Any value
 * @returns {*} Returns `value`
 * @see https://lodash.com/docs/master#identity
 * @example
 *
 * identity(Component) === Component
 */
var identity = function identity(x) {
  return x;
};

exports.default = identity;
});

unwrapExports(identity_1);

var compose_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _identity2 = _interopRequireDefault(identity_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is similar to lodash `flowRight`. It permits to easily compose
 * several high order components.
 *
 * @static
 * @category Utilities
 * @param {...Function} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see https://lodash.com/docs/master#flowRight
 * @example
 *
 * const enhance = compose(pure, withProps({foo: 'bar'}));
 * const Component = enhance(MyComponent);
 */
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return _identity2.default;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

exports.default = compose;
});

var compose = unwrapExports(compose_1);

var createEagerElementUtil_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _react2 = _interopRequireDefault(React);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type(_extends({}, props, { children: children }));
    }
    return type(props);
  }

  var Component = type;

  if (children) {
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  }

  return _react2.default.createElement(Component, props);
};

exports.default = createEagerElementUtil;
});

unwrapExports(createEagerElementUtil_1);

var isClassComponent_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Returns true if the given value is a React component class.
 *
 * @static
 * @category Utilities
 * @param {*} value Any value
 * @returns {Boolean} Returns true if the given value is a React component class.
 * @see https://lodash.com/docs/master#identity
 * @example
 *
 * const Nothing = () => null;
 * const Nothing2 = class extends Component { render() { return null; } };
 * const Nothing3 = React.createClass({ render() { return null; } });
 * isClassComponent(Nothing); // false
 * isClassComponent(Nothing2); // true
 * isClassComponent(Nothing3); // true
 */
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
};

exports.default = isClassComponent;
});

unwrapExports(isClassComponent_1);

var isReferentiallyTransparentFunctionComponent_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _isClassComponent2 = _interopRequireDefault(isClassComponent_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if the given value is a referentially transparent function component.
 * A referentially transparent function component is a component without any other
 * thing expect taking some props and returning a component.
 *
 * This method is useful to apply some optimization.
 *
 * @static
 * @category Utilities
 * @param {*} value Any value
 * @returns {Boolean} Returns true if the given value is a referentially
 * transparent function component.
 * @example
 *
 * const Button = () => <button />;
 * isReferentiallyTransparentFunctionComponent(Button); // true
 */
var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && (process.env.NODE_ENV === 'production' || !Component.propTypes));
};

exports.default = isReferentiallyTransparentFunctionComponent;
});

unwrapExports(isReferentiallyTransparentFunctionComponent_1);

var createEagerFactory_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _createEagerElementUtil2 = _interopRequireDefault(createEagerElementUtil_1);



var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(isReferentiallyTransparentFunctionComponent_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The factory form of `createEagerElement()`.
 * Given a component, it returns a [factory](https://facebook.github.io/react/docs/react-api.html#createfactory).
 *
 * @static
 * @category Utilities
 * @param {ReactClass|ReactFunctionalComponent|String} type The type of component to render.
 * @returns {Function} Returns a function that take two arguments (props, children) and create
 * an element of the given type.
 * @example
 *
 * const div = createFactory('div');
 * div({className: 'foo'});
 */
var createEagerFactory = function createEagerFactory(type) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  return function (props, children) {
    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, props, children);
  };
};

exports.default = createEagerFactory;
});

unwrapExports(createEagerFactory_1);

var getDisplayName_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
/**
 * Returns the display name of a React component. Falls back to 'Component'.
 *
 * @static
 * @category Utilities
 * @param {ReactClass|ReactFunctionalComponent} component
 * @returns {String} Returns the display name of the provided component.
 * @example
 *
 * const MyButton = () => <button />;
 * MyButton.displayName = 'MyButton';
 *
 * getDisplayName(MyComponent); // Will return "MyButton"
 */
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;
});

unwrapExports(getDisplayName_1);

var wrapDisplayName_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _getDisplayName2 = _interopRequireDefault(getDisplayName_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a wrapped version of a React component's display name. For instance,
 * if the display name of `component` is `'Post'`, and `wrapperName` is `'mapProps'`,
 * the return value is `'mapProps(Post)'`. Most Recompose higher-order components
 * use `wrapDisplayName()`.
 *
 * @static
 * @category Higher-order-components
 * @param {ReactClass|ReactFunctionalComponent} component Component
 * @param {String} wrapperName Wrapper name
 * @returns {String} Returns a wrapped displayName of the component.
 * @example
 *
 * // Create a hoc that will log when a component will mount
 * wrapDisplayName(Button, 'wrap'); // will return wrap(Button)
 */
var wrapDisplayName = function wrapDisplayName(BaseComponent, wrapperName) {
  return wrapperName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;
});

unwrapExports(wrapDisplayName_1);

var createHelper_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
/**
 * Utility method that gives to higher-order components a comprehensive display name.
 *
 * @static
 * @category Utilities
 * @param {HigherOrderComponent} hoc Higher-order component to wrap.
 * @param {String} helperName Name used to create displayName.
 * @param {Boolean} [noArgs=false] Indicate if the higher-order component has some arguments.
 * @returns {HigherOrderComponent} Returns a wrapped hoc.
 * @example
 *
 * const pluckOnChangeTargetValue = createHelper(
 *   withHandlers({
 *     onChange: ({onChange}) => ({target: {value}}) => onChange(value),
 *   }),
 *   'pluckOnChangeTargetValue',
 * );
 *
 * const Input = pluckOnChangeTargetValue('input');
 * <Input /> // Will have "pluckOnChangeTargetValue(input)" as displayName
 */
var createHelper = function createHelper(hoc, helperName) {
  var setDisplayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var noArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
    /* eslint-disable global-require */
    var wrapDisplayName = wrapDisplayName_1.default;
    /* eslint-enable global-require */

    if (noArgs) {
      return function (BaseComponent) {
        var Component = hoc(BaseComponent);
        Component.displayName = wrapDisplayName(BaseComponent, helperName);
        return Component;
      };
    }

    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return function (BaseComponent) {
        var Component = hoc.apply(undefined, args)(BaseComponent);
        Component.displayName = wrapDisplayName(BaseComponent, helperName);
        return Component;
      };
    };
  }

  return hoc;
};

exports.default = createHelper;
});

unwrapExports(createHelper_1);

var lifecycle_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var _createEagerFactory2 = _interopRequireDefault(createEagerFactory_1);



var _createHelper2 = _interopRequireDefault(createHelper_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LIFECYCLE_METHODS = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

/**
 * A higher-order component that permits to hook a lifecycle method. Available methods are:
 * - componentWillMount
 * - componentDidMount
 * - componentWillReceiveProps
 * - shouldComponentUpdate
 * - componentWillUpdate
 * - componentDidUpdate
 * - componentWillUnmount
 * You should use this helper as an escape hatch, in
 * case you need to access component lifecycle methods.
 *
 * @static
 * @category Higher-order-components
 * @param {Object} spec Lifecycle spec
 * @returns {HigherOrderComponent} A function that takes a component and returns a new component.
 * @example
 *
 * // Create a hoc that will log when a component will mount
 * const logWhenMount = lifecycle({componentWillMount: () => console.log('will mount')});
 */
var lifecycle = function lifecycle(spec) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);

    if (process.env.NODE_ENV !== 'production' && Object.prototype.hasOwnProperty.call(spec, 'render')) {
      /* eslint-disable no-console */
      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
      /* eslint-enable no-console */
    }

    var Lifecycle = function (_Component) {
      _inherits(Lifecycle, _Component);

      function Lifecycle() {
        _classCallCheck(this, Lifecycle);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      Lifecycle.prototype.render = function render() {
        return factory(_extends({}, this.props, this.state));
      };

      return Lifecycle;
    }(React.Component);

    Object.entries(spec).forEach(function (_ref) {
      var name = _ref[0],
          impl = _ref[1];

      if (!LIFECYCLE_METHODS.includes(name)) {
        /* eslint-disable no-console */
        console.error('lifecycle() does not support "' + name + '" method, only lifecycle methods are supported.');
        /* eslint-enable no-console */
      } else {
        Lifecycle.prototype[name] = impl;
      }
    });

    return Lifecycle;
  };
};

exports.default = (0, _createHelper2.default)(lifecycle, 'lifecycle');
});

var lifecycle = unwrapExports(lifecycle_1);

var callOrUse = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (fnOrObject, a, b, c) {
  return typeof fnOrObject === 'function' ? fnOrObject(a, b, c) : fnOrObject;
};
});

unwrapExports(callOrUse);

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

var es = /*#__PURE__*/Object.freeze({
   default: result
});

var setObservableConfig = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
/* eslint-disable no-underscore-dangle */

var _config = {
  fromESObservable: null,
  toESObservable: null
};

var configureObservable = function configureObservable(c) {
  _config = c;
};

var config = exports.config = {
  fromESObservable: function fromESObservable(observable) {
    return typeof _config.fromESObservable === 'function' ? _config.fromESObservable(observable) : observable;
  },
  toESObservable: function toESObservable(stream) {
    return typeof _config.toESObservable === 'function' ? _config.toESObservable(stream) : stream;
  }
};

exports.default = configureObservable;
});

unwrapExports(setObservableConfig);
var setObservableConfig_1 = setObservableConfig.config;

var _symbolObservable = ( es && result ) || es;

var createObservable_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _symbolObservable2 = _interopRequireDefault(_symbolObservable);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
var createObservable = function createObservable(subscribe) {
  var _obsConfig$fromESObse;

  return setObservableConfig.config.fromESObservable((_obsConfig$fromESObse = {
    subscribe: subscribe
  }, _obsConfig$fromESObse[_symbolObservable2.default] = function () {
    return this;
  }, _obsConfig$fromESObse));
};

exports.default = createObservable;
});

unwrapExports(createObservable_1);

var createChangeEmitter_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
var createChangeEmitter = function createChangeEmitter() {
  var currentListeners = [];
  var nextListeners = currentListeners;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  function listen(listener) {
    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function () {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  function emit(value) {
    currentListeners = nextListeners;
    var listeners = currentListeners;
    for (var i = 0; i < listeners.length; i += 1) {
      listeners[i](value);
    }
  }

  return { listen: listen, emit: emit };
};

exports.default = createChangeEmitter;
});

unwrapExports(createChangeEmitter_1);

var createBehaviorSubject_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _createChangeEmitter2 = _interopRequireDefault(createChangeEmitter_1);



var _createObservable2 = _interopRequireDefault(createObservable_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
var noop = function noop() {};

var createBehaviorSubject = function createBehaviorSubject(initial) {
  var last = initial;
  var emitter = (0, _createChangeEmitter2.default)();
  var complete = noop;
  var observable = (0, _createObservable2.default)(function (observer) {
    var unsubscribe = emitter.listen(function (value) {
      last = value;
      observer.next(value);
    });
    observer.next(last);
    complete = observer.complete ? observer.complete.bind(observer) : complete;
    return { unsubscribe: unsubscribe };
  });
  observable.next = emitter.emit;
  observable.complete = function () {
    complete();
  };
  return observable;
};

exports.default = createBehaviorSubject;
});

unwrapExports(createBehaviorSubject_1);

var createSymbol = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (name) {
  return typeof Symbol === 'function' ? Symbol(name) : '@@recompact/' + name;
};
});

unwrapExports(createSymbol);

var _WeakMap = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */
var NonTrackingDummyWeakMap = function () {
  function NonTrackingDummyWeakMap() {
    _classCallCheck(this, NonTrackingDummyWeakMap);
  }

  NonTrackingDummyWeakMap.prototype.get = function get() {};

  NonTrackingDummyWeakMap.prototype.set = function set() {
    return this;
  };

  NonTrackingDummyWeakMap.prototype.has = function has() {
    return false;
  };

  return NonTrackingDummyWeakMap;
}();

exports.default = typeof WeakMap === 'undefined' ? NonTrackingDummyWeakMap : WeakMap;
});

unwrapExports(_WeakMap);

var asyncThrow_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = asyncThrow;
function asyncThrow(errorOrMessage) {
  var error = errorOrMessage instanceof Error ? errorOrMessage : new Error(errorOrMessage);
  setTimeout(function () {
    throw error;
  });
}
});

unwrapExports(asyncThrow_1);

var setConfig_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
var config = {
  observablesKey: 'observables'

  /**
   * Set the config of Recompact.
   *
   * @static
   * @category Config
   * @param {Object} options
   * @example
   *
   * setConfig({observablesKey: 'observables'});
   */
};var setConfig = function setConfig(_config) {
  config = _config;
};

var getConfig = exports.getConfig = function getConfig() {
  return config;
};

exports.default = setConfig;
});

unwrapExports(setConfig_1);
var setConfig_2 = setConfig_1.getConfig;

var createHOCFromMapper = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.isMapperComponent = undefined;



var _react2 = _interopRequireDefault(React);



var _createBehaviorSubject2 = _interopRequireDefault(createBehaviorSubject_1);



var _createSymbol2 = _interopRequireDefault(createSymbol);



var _WeakMap2 = _interopRequireDefault(_WeakMap);



var _asyncThrow2 = _interopRequireDefault(asyncThrow_1);



var _createEagerFactory2 = _interopRequireDefault(createEagerFactory_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */


var MAPPERS_INFO = (0, _createSymbol2.default)('mappersInfo');
var observablePropType = function observablePropType() {};

var allMapperComponents = new _WeakMap2.default();
var setMapperComponent = function setMapperComponent(Component) {
  return allMapperComponents.set(Component, true);
};
var isMapperComponent = exports.isMapperComponent = function isMapperComponent(BaseComponent) {
  return allMapperComponents.has(BaseComponent);
};

var createComponentFromMappers = function createComponentFromMappers(mappers, childFactory) {
  var _CONTEXT_TYPES, _class, _temp2;

  var _getConfig = (0, setConfig_1.getConfig)(),
      OBSERVABLES = _getConfig.observablesKey;

  var CONTEXT_TYPES = (_CONTEXT_TYPES = {}, _CONTEXT_TYPES[OBSERVABLES] = observablePropType, _CONTEXT_TYPES);

  var Component = (_temp2 = _class = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component() {
      var _temp, _this, _ret;

      _classCallCheck(this, Component);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.props$ = (0, _createBehaviorSubject2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Component.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this,
          _childContext;

      var childProps$ = this.props$;
      var childObservables = this.context[OBSERVABLES];
      for (var i = 0; i < mappers.length; i += 1) {
        var _mappers$i = mappers[i](childProps$, childObservables);

        childProps$ = _mappers$i[0];
        childObservables = _mappers$i[1];
      }

      this.childPropsSubscription = setObservableConfig.config.toESObservable(childProps$).subscribe({
        next: function next(childProps) {
          _this2.setState({ childProps: childProps });
        },
        error: function error(_error) {
          (0, _asyncThrow2.default)(_error);
          _this2.setState({
            childProps: _this2.state ? _this2.state.childProps : {}
          });
        }
      });

      this.childContext = (_childContext = {}, _childContext[OBSERVABLES] = childObservables, _childContext);
    };

    Component.prototype.getChildContext = function getChildContext() {
      return this.childContext;
    };

    Component.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      this.props$.next(nextProps);
    };

    Component.prototype.componentWillUnmount = function componentWillUnmount() {
      this.childPropsSubscription.unsubscribe();
    };

    Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
      return nextState && (!this.state || this.state.childProps !== nextState.childProps);
    };

    Component.prototype.render = function render() {
      return this.state ? this.constructor[MAPPERS_INFO].childFactory(this.state.childProps) : null;
    };

    return Component;
  }(_react2.default.Component), _class[MAPPERS_INFO] = { mappers: mappers, childFactory: childFactory }, _class.contextTypes = CONTEXT_TYPES, _class.childContextTypes = CONTEXT_TYPES, _temp2);

  setMapperComponent(Component);

  return Component;
};

exports.default = function (mapper) {
  return function (BaseComponent) {
    if (isMapperComponent(BaseComponent)) {
      return createComponentFromMappers([mapper].concat(BaseComponent[MAPPERS_INFO].mappers), BaseComponent[MAPPERS_INFO].childFactory);
    }

    return createComponentFromMappers([mapper], (0, _createEagerFactory2.default)(BaseComponent));
  };
};
});

unwrapExports(createHOCFromMapper);
var createHOCFromMapper_1 = createHOCFromMapper.isMapperComponent;

var updateProps_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _createObservable2 = _interopRequireDefault(createObservable_1);



var _createHOCFromMapper2 = _interopRequireDefault(createHOCFromMapper);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateProps = function updateProps(subscriber) {
  return (0, _createHOCFromMapper2.default)(function (props$, obs) {
    return [(0, _createObservable2.default)(function (observer) {
      return setObservableConfig.config.toESObservable(props$).subscribe({
        next: subscriber(function (value) {
          observer.next(value);
        }),
        error: typeof observer.error === 'function' ? function (error) {
          observer.error(error);
        } : undefined,
        complete: typeof observer.complete === 'function' ? function (value) {
          observer.complete(value);
        } : undefined
      });
    }), obs];
  });
};

exports.default = updateProps;
});

unwrapExports(updateProps_1);

var withState_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-use-before-define */




var _createHelper2 = _interopRequireDefault(createHelper_1);



var _callOrUse2 = _interopRequireDefault(callOrUse);



var _updateProps2 = _interopRequireDefault(updateProps_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Passes two additional props to the base component: a state value, and a function
 * to update that state value. The state updater has the following signature:
 *
 * ```js
 * stateUpdater<T>((prevValue: T) => T): void
 * stateUpdater(newValue: any): void
 * ```
 *
 * The first form accepts a function which maps the previous state value to a new
 * state value. You'll likely want to use this state updater along with `withHandlers()`
 * or `withProps()` to create specific updater functions. For example, to create an
 * HoC that adds basic counting functionality to a component:
 *
 * ```js
 * const addCounting = compose(
 *   withState('counter', 'setCounter', 0),
 *   withProps(({ setCounter }) => ({
 *     increment: () => setCounter(n => n + 1),
 *     decrement: () => setCounter(n => n - 1),
 *     reset: () => setCounter(0)
 *   }))
 * )
 * ```
 *
 * The second form accepts a single value, which is used as the new state.
 *
 * An initial state value is required. It can be either the state value itself,
 * or a function that returns an initial state given the initial props.
 *
 * @static
 * @category Higher-order-components
 * @param {String} stateName
 * @param {String} stateUpdaterName
 * @param {*|Function} initialState
 * @returns {HigherOrderComponent} A function that takes a component and returns a new component.
 */
var withState = function withState(stateName, stateUpdaterName, initialState) {
  return (0, _updateProps2.default)(function (next) {
    var props = void 0;
    var state = void 0;

    var stateUpdater = function stateUpdater(nextState, callback) {
      var _extends2;

      if (process.env.NODE_ENV !== 'production' && callback) {
        /* eslint-disable no-console */
        console.error("Warning: withState(): the state updater's callback is not supported." + 'See https://github.com/neoziro/recompact/issues/59 for more details.');
        /* eslint-enable no-console */
      }
      state = (0, _callOrUse2.default)(nextState, state);
      next(_extends({}, props, (_extends2 = {}, _extends2[stateName] = state, _extends2[stateUpdaterName] = stateUpdater, _extends2)));
    };

    return function (nextProps) {
      var _extends3;

      if (!props) state = (0, _callOrUse2.default)(initialState, nextProps);
      props = nextProps;
      next(_extends({}, props, (_extends3 = {}, _extends3[stateName] = state, _extends3[stateUpdaterName] = stateUpdater, _extends3)));
    };
  });
};

exports.default = (0, _createHelper2.default)(withState, 'withState');
});

var withState = unwrapExports(withState_1);

var mapValues = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (obj, fn) {
  return Object.keys(obj).reduce(function (result, key) {
    result[key] = fn(obj[key], key); // eslint-disable-line no-param-reassign
    return result;
  }, {});
};
});

unwrapExports(mapValues);

var withHandlers_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _createHelper2 = _interopRequireDefault(createHelper_1);



var _updateProps2 = _interopRequireDefault(updateProps_1);



var _callOrUse2 = _interopRequireDefault(callOrUse);



var _mapValues2 = _interopRequireDefault(mapValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes an object map of handler creators or a factory function. These are
 * higher-order functions that accept a set of props and return a function handler:
 *
 * This allows the handler to access the current props via closure, without needing
 * to change its signature.
 *
 * Handlers are passed to the base component as immutable props, whose identities
 * are preserved across renders. This avoids a common pitfall where functional
 * components create handlers inside the body of the function, which results in a
 * new handler on every render and breaks downstream `shouldComponentUpdate()`
 * optimizations that rely on prop equality.
 *
 * @static
 * @category Higher-order-components
 * @param {Object|Function} handlerFactories
 * @returns {HigherOrderComponent} A function that takes a component and returns a new component.
 * @example
 *
 * const enhance = compose(
 *   withState('value', 'updateValue', ''),
 *   withHandlers({
 *     onChange: props => event => {
 *       props.updateValue(event.target.value)
 *     },
 *     onSubmit: props => event => {
 *       event.preventDefault()
 *       submitForm(props.value)
 *     }
 *   })
 * )
 *
 * const Form = enhance(({ value, onChange, onSubmit }) =>
 *   <form onSubmit={onSubmit}>
 *     <label>Value
 *       <input type="text" value={value} onChange={onChange} />
 *     </label>
 *   </form>
 * )
 */
var withHandlers = function withHandlers(handlerFactories) {
  return (0, _updateProps2.default)(function (next) {
    var cachedHandlers = void 0;
    var handlers = void 0;
    var props = void 0;

    var createHandlers = function createHandlers(initialProps) {
      return (0, _mapValues2.default)((0, _callOrUse2.default)(handlerFactories, initialProps), function (createHandler, handlerName) {
        return function () {
          var cachedHandler = cachedHandlers[handlerName];
          if (cachedHandler) {
            return cachedHandler.apply(undefined, arguments);
          }

          var handler = createHandler(props);
          cachedHandlers[handlerName] = handler;

          /* eslint-disable no-console */
          if (process.env.NODE_ENV !== 'production' && typeof handler !== 'function') {
            console.error(
            // eslint-disable-line no-console
            'withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
          }
          /* eslint-enable no-console */

          return handler.apply(undefined, arguments);
        };
      });
    };

    return function (nextProps) {
      handlers = handlers || createHandlers(nextProps);
      cachedHandlers = {};
      props = nextProps;
      next(_extends({}, nextProps, handlers));
    };
  });
};

exports.default = (0, _createHelper2.default)(withHandlers, 'withHandlers');
});

var withHandlers = unwrapExports(withHandlers_1);

//
// Note: design is driven by
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component
// 
// A fully controlled component pattern is used.

var focus = function focus(props) {
  props.setEditing(true);
  props.setBuffer(props.defaultValue);
  props.onEdit ? props.onEdit(props.defaultValue) : null;
};

var blur = function blur(props) {
  props.setEditing(false);
  if (props.buffer === props.defaultValue) {
    props.setBuffer('');
    props.onCancel ? props.onCancel(props.defaultValue) : null;
  } else {
    props.setBuffer('');
    props.onCommit ? props.onCommit(props.buffer) : null;
  }
};

var cancel = function cancel(props) {
  props.setEditing(false);
  props.setBuffer('');
  props.onCancel ? props.onCancel(props.defaultValue) : null;
};

var edit_props = function edit_props(_ref) {
  var input = _ref.input,
      editing = _ref.editing,
      buffer = _ref.buffer,
      focus = _ref.focus,
      setInput = _ref.setInput,
      setEditing = _ref.setEditing,
      setValue = _ref.setValue,
      setBuffer = _ref.setBuffer,
      onEdit = _ref.onEdit,
      onCommit = _ref.onCommit,
      onCancel = _ref.onCancel,
      props = objectWithoutProperties(_ref, ['input', 'editing', 'buffer', 'focus', 'setInput', 'setEditing', 'setValue', 'setBuffer', 'onEdit', 'onCommit', 'onCancel']);
  return props;
};

var IEditor = function IEditor(_ref2) {
  var Static = _ref2.Static,
      Dynamic = _ref2.Dynamic,
      commitWithShift = _ref2.commitWithShift,
      commitWithButtons = _ref2.commitWithButtons,
      commitWithVerticalButtons = _ref2.commitWithVerticalButtons,
      props = objectWithoutProperties(_ref2, ['Static', 'Dynamic', 'commitWithShift', 'commitWithButtons', 'commitWithVerticalButtons']);
  return React.createElement(
    'div',
    { className: 'dc-inline-editor' },
    !props.editing && React.createElement(
      InputGroup,
      null,
      React.createElement(
        Static,
        _extends({ onClick: function onClick() {
            return focus(props);
          }, placeholder: props.placeholder }, edit_props(props)),
        props.defaultValue
      )
    ),
    props.editing && React.createElement(
      InputGroup,
      null,
      React.createElement(Dynamic, _extends({
        'in-group': true,
        ref: props.setInput,
        onChange: function onChange(e) {
          return props.setBuffer(e.target.value);
        },
        onBlur: function onBlur() {
          return !commitWithButtons && !commitWithVerticalButtons && blur(props);
        },
        onKeyDown: function onKeyDown(e) {
          if (e.keyCode === 13 && !commitWithShift) {
            blur(props);
          }

          if (e.keyCode === 13 && commitWithShift && e.shiftKey) {
            blur(props);
          }

          if (e.keyCode === 27) {
            cancel(props);
          }
        }
      }, edit_props(props))),
      commitWithButtons && React.createElement(
        React.Fragment,
        null,
        React.createElement(
          Button,
          { primary: true, 'in-group': true, onClick: function onClick() {
              return blur(props);
            } },
          React.createElement(Icon, { id: 'success' })
        ),
        React.createElement(
          Button,
          { destroy: true, 'in-group': true, onClick: function onClick() {
              return cancel(props);
            } },
          React.createElement(Icon, { id: 'undo' })
        )
      ),
      commitWithVerticalButtons && React.createElement(
        VerticalButtons,
        null,
        React.createElement(
          Button,
          { primary: true, 'in-group': true, onClick: function onClick() {
              return blur(props);
            } },
          React.createElement(Icon, { id: 'success' })
        ),
        React.createElement(
          Button,
          { destroy: true, 'in-group': true, onClick: function onClick() {
              return cancel(props);
            } },
          React.createElement(Icon, { id: 'undo' })
        )
      )
    )
  );
};

var IEditorWithFocus = lifecycle({
  componentDidUpdate: function componentDidUpdate(props) {
    props.focus();
  }
})(IEditor);

var IEditorWithState = compose(withState('input', 'setInput', null), withState('editing', 'setEditing', false), withState('buffer', 'setBuffer', ''), withHandlers({
  focus: function focus(_ref3) {
    var input = _ref3.input;
    return function () {
      return input ? ReactDOM.findDOMNode(input).focus() : null;
    };
  }
}))(IEditorWithFocus);

var toClass_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React);



var _getDisplayName2 = _interopRequireDefault(getDisplayName_1);



var _isClassComponent2 = _interopRequireDefault(isClassComponent_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Takes a function component and wraps it in a class. This can be used as a
 * fallback for libraries that need to add a ref to a component, like Relay.
 *
 * If the base component is already a class, it returns the given component.
 *
 * @static
 * @category Higher-order-components
 * @returns {HigherOrderComponent} A function that takes a component and returns a new component.
 * @example
 *
 * const Component = toClass(() => <div />);
 * <Component ref="foo" /> // A ref can be used because Component is a class
 */

var toClass = function toClass(BaseComponent) {
  if ((0, _isClassComponent2.default)(BaseComponent)) {
    return BaseComponent;
  }

  var ToClass = function (_Component) {
    _inherits(ToClass, _Component);

    function ToClass() {
      _classCallCheck(this, ToClass);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ToClass.prototype.render = function render() {
      if (typeof BaseComponent === 'string') {
        return _react2.default.createElement(BaseComponent, this.props);
      }

      return BaseComponent(this.props, this.context);
    };

    return ToClass;
  }(React.Component);

  ToClass.displayName = (0, _getDisplayName2.default)(BaseComponent);
  ToClass.propTypes = BaseComponent.propTypes;
  ToClass.contextTypes = BaseComponent.contextTypes;
  ToClass.defaultProps = BaseComponent.defaultProps;

  return ToClass;
};

exports.default = toClass;
});

var toClass = unwrapExports(toClass_1);

var Dynamic = toClass(Input);

var IEText = function IEText(props) {
  return React.createElement(IEditorWithState, _extends({
    Static: Static,
    Dynamic: Dynamic,
    commitWithShift: false
  }, props));
};

var Dynamic$1 = toClass(TextArea);

var IETextArea = function IETextArea(props) {
  return React.createElement(IEditorWithState, _extends({
    Static: StaticText,
    Dynamic: Dynamic$1,
    commitWithShift: true
  }, props));
};

var Static$1 = function Static$$1(props) {
  return React.createElement('img', { src: props.children || props.placeholder, onClick: props.onClick });
};

var Dynamic$2 = toClass(Input);

var IEImage = function IEImage(props) {
  return React.createElement(IEditorWithState, _extends({
    Static: Static$1,
    Dynamic: Dynamic$2,
    commitWithShift: false
  }, props));
};

//

//
//
var dc_breadcrumbs = function dc_breadcrumbs(props) {
  return dc(props, 'dc-breadcrumb', function (key, _) {
    switch (key) {
      default:
        return '';
    }
  });
};

var BreadCrumbs = function BreadCrumbs(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ['className', 'children']);
  return React.createElement(
    'ul',
    { className: dc_breadcrumbs(props) },
    children
  );
};
var dc_breadcrumb = function dc_breadcrumb(props) {
  return dc(props, 'dc-breadcrumb__item', function (key, _) {
    switch (key) {
      default:
        return '';
    }
  });
};

var BreadCrumb = function BreadCrumb(_ref2) {
  var href = _ref2.href,
      children = _ref2.children,
      props = objectWithoutProperties(_ref2, ['href', 'children']);
  return React.createElement(
    'li',
    { className: dc_breadcrumb(props) },
    href ? React.createElement(
      'a',
      { href: href, className: 'dc-link' },
      children
    ) : children
  );
};

//

var Dialog = function Dialog(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    { className: 'dc-dialog' },
    children
  );
};

var DialogContent = function DialogContent(_ref2) {
  var children = _ref2.children;
  return React.createElement(
    'div',
    { className: 'dc-dialog__content' },
    children
  );
};

var DialogBody = function DialogBody(_ref3) {
  var children = _ref3.children;
  return React.createElement(
    'div',
    { className: 'dc-dialog__body' },
    children
  );
};

var DialogTitle = function DialogTitle(_ref4) {
  var children = _ref4.children;
  return React.createElement(
    'div',
    { className: 'dc-dialog__title' },
    children
  );
};

var DialogSubTitle = function DialogSubTitle(_ref5) {
  var children = _ref5.children;
  return React.createElement(
    'div',
    { className: 'dc-dialog__subtitle' },
    children
  );
};

var dc_dialog_action = function dc_dialog_action(props) {
  return dc(props, 'dc-dialog__actions', function (key, _) {
    switch (key) {
      case 'with-link':
        return 'dc-dialog__actions--with-link';
      default:
        return '';
    }
  });
};

var DialogActions = function DialogActions(props) {
  return React.createElement(
    'div',
    { className: dc_dialog_action(props) },
    props.children
  );
};

//

//
//
var dc_message = function dc_message(props) {
  return dc(props, 'dc-msg', function (key, _) {
    switch (key) {
      case 'info':
        return 'dc-msg--info';
      case 'success':
        return 'dc-msg--success';
      case 'warning':
        return 'dc-msg--warning';
      case 'error':
        return 'dc-msg--error';
      default:
        return '';
    }
  });
};

var Message = function Message(_ref) {
  var children = _ref.children,
      title = _ref.title,
      icon = _ref.icon,
      onClick = _ref.onClick,
      props = objectWithoutProperties(_ref, ['children', 'title', 'icon', 'onClick']);
  return React.createElement(
    'div',
    { className: dc_message(props) },
    React.createElement(
      'div',
      { className: 'dc-msg__inner' },
      icon && React.createElement(
        'div',
        { className: 'dc-msg__icon-frame' },
        React.createElement('i', { className: 'dc-icon dc-msg__icon dc-icon--' + icon })
      ),
      React.createElement(
        'div',
        { className: 'dc-msg__bd' },
        React.createElement(
          'h1',
          { className: 'dc-msg__title' },
          title
        ),
        React.createElement(
          'p',
          { className: 'dc-msg__text' },
          children
        )
      ),
      onClick && React.createElement(
        'div',
        { className: 'dc-msg__close', onClick: onClick },
        React.createElement('i', { className: 'dc-icon dc-icon--close dc-msg__close__icon' })
      )
    )
  );
};

//

var SideRevealer = function SideRevealer(props) {
  return React.createElement(
    'div',
    { className: 'dc-side-revealer' },
    props.children,
    React.createElement('input', { className: 'dc-side-revealer__toggle dc-icon', type: 'checkbox' }),
    React.createElement(
      'div',
      { className: 'dc-side-revealer__content dc-card' },
      React.createElement(
        'div',
        { className: 'dc-side-revealer__content__card dc-card' },
        props.side()
      )
    )
  );
};

//

var Head = function Head(_ref) {
  var children = _ref.children;
  return React.createElement(
    THead,
    null,
    React.createElement(
      TR,
      null,
      React.Children.map(children, function (e) {
        return React.createElement(
          TH,
          null,
          e.props.title
        );
      })
    )
  );
};

var Data = function Data(_ref2) {
  var children = _ref2.children,
      json = _ref2.json,
      onClick = _ref2.onClick;
  return React.createElement(
    TR,
    {
      interactive: true,
      onClick: onClick && function () {
        return onClick(json);
      }
    },
    React.Children.map(children, function (e) {
      return React.createElement(
        TD,
        null,
        React.createElement(Schema, _extends({}, e.props, { json: json, onClick: onClick }))
      );
    })
  );
};

var accessor = function accessor(props) {
  return props.format ? props.format(props.json) : props.json[props.field] ? props.json[props.field] : '';
};

var Schema = function Schema(_ref3) {
  var Component = _ref3.Component,
      props = objectWithoutProperties(_ref3, ['Component']);
  return Component ? React.createElement(
    Component,
    props,
    accessor(props)
  ) : React.createElement(
    React.Fragment,
    null,
    accessor(props)
  );
};
var Surface = function Surface(props) {
  return React.createElement(
    Table,
    { responsive: true },
    React.createElement(Head, props),
    React.createElement(
      TBody,
      null,
      props.data && props.data.map(function (json, id$$1) {
        return React.createElement(Data, _extends({ key: json.id, json: json }, props));
      })
    )
  );
};

//

//
//
var dc_toasts = function dc_toasts(props) {
  return dc(props, 'dc-toast-container', function (key, _) {
    switch (key) {
      case 'top':
        return 'dc-toast-container--top';
      case 'bottom':
        return 'dc-toast-container--bottom';
      default:
        return '';
    }
  });
};

var Toasts = function Toasts(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);
  return React.createElement(
    'div',
    { className: dc_toasts(props) },
    children
  );
};
var dc_toast = function dc_toast(props) {
  return dc(props, 'dc-toast', function (key, _) {
    switch (key) {
      case 'top':
        return 'dc-toast--top';
      case 'bottom':
        return 'dc-toast--bottom';
      default:
        return '';
    }
  });
};

var dc_toast_content = function dc_toast_content(props) {
  return dc(props, 'dc-toast__content', function (key, _) {
    switch (key) {
      case 'info':
        return 'dc-toast__content--info';
      case 'success':
        return 'dc-toast__content--success';
      case 'warning':
        return 'dc-toast__content--warning';
      case 'error':
        return 'dc-toast__content--error';
      default:
        return '';
    }
  });
};

var Toast = function Toast(_ref2) {
  var children = _ref2.children,
      props = objectWithoutProperties(_ref2, ['children']);
  return React.createElement(
    'div',
    { className: dc_toast(props) },
    React.createElement(
      'div',
      { className: dc_toast_content(props) },
      children
    )
  );
};

//

export { H1, H2, H3, H4, Text, Page, Container, Row, Column, Button, Link, Card, Divider, Icon, Checkbox, Switchbox, Label, Input, TextArea, Select, InputStack, Static, StaticText, LoadingBar, Status, Tab, TabElement, TabGroup, Table, THead, TBody, TR, TH, TD, IEText, IETextArea, IEImage, BreadCrumbs, BreadCrumb, Dialog, DialogContent, DialogBody, DialogTitle, DialogSubTitle, DialogActions, InputGroup, AddOn, VerticalButtons, Message, SideRevealer, Schema, Surface, Toasts, Toast };
