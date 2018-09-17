//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { dc, id } from '../core/dress-code'

//
//
const dc_message = (props) => (
  dc(props, 'dc-msg',
    (key, _) => {
      switch(key) {
        case 'info': 
          return 'dc-msg--info'
        case 'success': 
          return 'dc-msg--success'
        case 'warning': 
          return 'dc-msg--warning'
        case 'error': 
          return 'dc-msg--error'          
        default: 
          return ''
      }
    }
  )
)

export const Message = ({ children, title, icon, onClick, ...props }) => (
  <div className={dc_message(props)}>
    <div className="dc-msg__inner">

      {icon &&
        <div className="dc-msg__icon-frame">
          <i className={`dc-icon dc-msg__icon dc-icon--${icon}`}></i>
        </div>
      }

      <div className="dc-msg__bd">
        <h1 className="dc-msg__title">{title}</h1>
        <p className="dc-msg__text">
          {children}
        </p>
      </div>

      {onClick &&
        <div className="dc-msg__close" onClick={onClick}>
          <i className="dc-icon dc-icon--close dc-msg__close__icon"></i>
        </div>
      }
    </div>
  </div>
)