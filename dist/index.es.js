import React from 'react';

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
      return f(key, props[key]);
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

//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
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
      case 'no-focus':
        return 'dc-btn--no-focus';
      default:
        return '';
    }
  });
};

var Button = function Button(props) {
  return React.createElement(
    'button',
    {
      className: dc_btn(props),
      type: props.type,
      onClick: props.onClick },
    props.children
  );
};

var Link = function Link(props) {
  return React.createElement(
    'a',
    {
      className: dc_btn(props),
      href: props.href,
      onClick: props.onClick },
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
var Card = function Card(_ref) {
  var children = _ref.children;
  return React.createElement(
    "div",
    { className: "dc-card" },
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
var Divider = function Divider(_ref) {
   var secondary = _ref.secondary;
   return React.createElement('hr', { className: 'dc-divider' + (secondary ? ' dc-divider--secondary' : '') });
};

//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
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
      default:
        return '';
    }
  });
};

var Input = function Input(props) {
  return React.createElement('input', {
    className: dc_input(props),
    id: props.id,
    name: props.id,
    type: props.type,
    placeholder: props.placeholder,
    disabled: props.disabled,
    autoFocus: props.autoFocus,
    required: props.required });
};

//
//
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

var Select = function Select(props) {
  return React.createElement(
    'select',
    {
      className: dc_select(props),
      id: props.id,
      disabled: props.disabled,
      onChange: props.onChange },
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
var Tab = function Tab(_ref) {
  var vertical = _ref.vertical,
      children = _ref.children;
  return React.createElement(
    'ul',
    { className: 'dc-tab' + (vertical ? ' dc-tab--vertical' : '') },
    children
  );
};

var TabElement = function TabElement(_ref2) {
  var header = _ref2.header,
      active = _ref2.active,
      disabled = _ref2.disabled,
      right = _ref2.right,
      children = _ref2.children;
  return React.createElement(
    'li',
    { className: 'dc-tab__element' + (header ? ' dc-tab__element--header' : '') + (active ? ' dc-tab__element--active' : '') + (disabled ? ' dc-tab__element--disabled' : '') + (right ? ' dc-tab__element--right' : '') },
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
var Table = function Table(_ref) {
  var responsive = _ref.responsive,
      children = _ref.children;
  return React.createElement(
    'table',
    { className: 'dc-table' + (responsive ? ' dc-table--responsive' : '') },
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

var TR = function TR(props) {
  return React.createElement(
    'tr',
    { className: dc_tr(props) },
    props.children
  );
};

var TH = function TH(_ref4) {
  var children = _ref4.children;
  return React.createElement(
    'th',
    { className: 'dc-table__th' },
    children
  );
};

var TD = function TD(_ref5) {
  var children = _ref5.children;
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

export { H1, H2, H3, H4, Text, Page, Container, Row, Column, Button, Link, Card, Divider, Label, Input, Select, LoadingBar, Tab, TabElement, Table, THead, TBody, TR, TH, TD, Dialog, DialogContent, DialogBody, DialogTitle, DialogSubTitle, DialogActions };
