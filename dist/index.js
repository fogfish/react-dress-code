'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
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
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
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
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
var Row = function Row(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    { className: 'dc-row' },
    children
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
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
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
      props = objectWithoutProperties(_ref, ['large', 'small', 'primary', 'destroy', 'active', 'disabled', 'link', 'nofocus']);
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

var Link = function Link(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = objectWithoutProperties(_ref3, ['className', 'children']);
  return React.createElement(
    'a',
    _extends({ className: dc_btn(props) }, dc_btn_props(props)),
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
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
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
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
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

var Checkbox = function Checkbox(_ref) {
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

var dc_switchbox = function dc_switchbox(props) {
  return dc(props, 'dc-checkbox dc-checkbox--alt', function (key, _) {
    switch (key) {
      default:
        return '';
    }
  });
};

var Switchbox = function Switchbox(_ref2) {
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
      case 'iserror':
        return 'dc-input--is-error';
      default:
        return '';
    }
  });
};

var dc_input_props = function dc_input_props(_ref3) {
  var disabled = _ref3.disabled,
      small = _ref3.small,
      iserror = _ref3.iserror,
      props = objectWithoutProperties(_ref3, ['disabled', 'small', 'iserror']);
  return props;
};

var Input = function Input(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      props = objectWithoutProperties(_ref4, ['className', 'children']);
  return React.createElement('input', _extends({ className: dc_input(props), name: props.id }, dc_input_props(props)));
};

var dc_select = function dc_select(props) {
  return dc(props, 'dc-select', function (key, _) {
    switch (key) {
      case 'disabled':
        return 'dc-select--disabled';
      case 'small':
        return 'dc-select--small';
      case 'iserror':
        return 'dc-select--is-error';
      default:
        return '';
    }
  });
};

var Select = function Select(_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      props = objectWithoutProperties(_ref5, ['className', 'children']);
  return React.createElement(
    'select',
    _extends({ className: dc_select(props), name: props.id }, dc_input_props(props)),
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
var LoadingBar = function LoadingBar() {
  return React.createElement(
    "div",
    { className: "dc-loading-bar" },
    React.createElement("div", { className: "dc-loading-bar__bar" }),
    React.createElement("div", { className: "dc-loading-bar__fill" })
  );
};

//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
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

//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
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

//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
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
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
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
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//

exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.Text = Text;
exports.Page = Page;
exports.Container = Container;
exports.Row = Row;
exports.Column = Column;
exports.Button = Button;
exports.Link = Link;
exports.Card = Card;
exports.Divider = Divider;
exports.Checkbox = Checkbox;
exports.Switchbox = Switchbox;
exports.Label = Label;
exports.Input = Input;
exports.Select = Select;
exports.LoadingBar = LoadingBar;
exports.Tab = Tab;
exports.TabElement = TabElement;
exports.Table = Table;
exports.THead = THead;
exports.TBody = TBody;
exports.TR = TR;
exports.TH = TH;
exports.TD = TD;
exports.Dialog = Dialog;
exports.DialogContent = DialogContent;
exports.DialogBody = DialogBody;
exports.DialogTitle = DialogTitle;
exports.DialogSubTitle = DialogSubTitle;
exports.DialogActions = DialogActions;
exports.SideRevealer = SideRevealer;
