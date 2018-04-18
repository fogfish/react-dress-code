//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { dc } from '../core/dress-code' 

//
//
const dc_status = (props) => (
  dc(props, 'dc-status',
    (key, _) => {
      switch(key) {
        case 'active': 
          return 'dc-status--active'
        case 'inactive': 
          return 'dc-status--inactive'
        case 'disabled': 
          return 'dc-status--inactive'
        case 'new': 
          return 'dc-status--new'
        case 'warning': 
          return 'dc-status--new'
        case 'error': 
          return 'dc-status--error'
        default: 
          return ''
      }
    }    
  )
)

export const Status = (props) => (
  <span className={dc_status(props)}>
    {props.children}
  </span>
)

