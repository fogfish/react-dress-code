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
const dc_toasts = (props) => (
  dc(props, 'dc-toast-container',
    (key, _) => {
      switch(key) {
        case 'top': 
          return 'dc-toast-container--top'
        case 'bottom': 
          return 'dc-toast-container--bottom'
        default: 
          return ''
      }
    }
  )
)


export const Toasts = ({ children, ...props }) => (
  <div className={dc_toasts(props)}>
    {children}
  </div>
)


//
//
const dc_toast = (props) => (
  dc(props, 'dc-toast',
    (key, _) => {
      switch(key) {
        case 'top': 
          return 'dc-toast--top'
        case 'bottom': 
          return 'dc-toast--bottom'
        default: 
          return ''
      }
    }
  )
)

const dc_toast_content = (props) => (
  dc(props, 'dc-toast__content',
    (key, _) => {
      switch(key) {
        case 'info': 
          return 'dc-toast__content--info'
        case 'success': 
          return 'dc-toast__content--success'
        case 'warning': 
          return 'dc-toast__content--warning'
        case 'error': 
          return 'dc-toast__content--error'          
        default: 
          return ''
      }
    }
  )
)

export const Toast = ({ children, ...props }) => (
  <div className={dc_toast(props)}>
    <div className={dc_toast_content(props)}>
      {children}
    </div>
  </div>
)
