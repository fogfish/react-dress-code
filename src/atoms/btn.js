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
const dc_btn = (props) => (
  dc(props, 'dc-btn', 
    (key, _) => {
      switch (key) {
        case 'large':
          return 'dc-btn--large'
        case 'small':
          return 'dc-btn--small'
        case 'primary':
          return 'dc-btn--primary'
        case 'destroy':
          return 'dc-btn--destroy'
        case 'active':
          return 'dc-btn--active'
        case 'disabled':
          return 'dc-btn--disabled'
        case 'link':
          return 'dc-btn--link'
        case 'nofocus': 
          return 'dc-btn--no-focus'
        default:
          return ''
      }
    }
  )
)

const dc_btn_props = ({ large, small, primary, destroy, active, disabled, link, nofocus, ...props }) => (props)

export const Button = ({ className, children, ...props }) => (
  <button className={dc_btn(props)} { ...dc_btn_props(props) }>
    {children}
  </button>
)

export const Link = ({ className, children, ...props }) => (
  <a className={dc_btn(props)} { ...dc_btn_props(props) }>
    {children}
  </a>
)
