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
const dc_tab = (props) => (
  dc(props, 'dc-tab',
    (key, _) => {
      switch(key) {
        case 'vertical': 
          return 'dc-tab--vertical'
        default: 
          return ''
      }
    }    
  )
)

export const Tab = ({ className, children, ...props }) => (
  <ul className={dc_tab(props)}>
    {children}
  </ul>
)

//
//
const dc_tab_element = (props) => (
  dc(props, 'dc-tab__element',
    (key, _) => {
      switch(key) {
        case 'header': 
          return 'dc-tab__element--header'
        case 'active':
          return 'dc-tab__element--active'
        case 'disabled':
          return 'dc-tab__element--disabled'
        case 'right':
          return 'dc-tab__element--right'
        default: 
          return ''
      }
    }    
  )
)

const dc_tab_element_props = ({ header, active, disabled, right, ...props }) => (props)

export const TabElement = ({className, children, ...props }) => (
  <li className={dc_tab_element(props)} { ...dc_tab_element_props(props) }>
    {children}
  </li>
)
