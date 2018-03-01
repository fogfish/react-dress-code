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
const dc_label = (props) => (
  dc(props, 'dc-label',
    (key, _) => {
      switch(key) {
        case 'disabled': 
          return 'dc-label--disabled'
        default: 
          return ''
      }
    }    
  )
)

export const Label = (props) => (
  <label className={dc_label(props)}>
    {props.children}
    {props.sub && <span className="dc-label__sub">{props.sub}</span>}
  </label>
)

//
//
const dc_input = (props) => (
  dc(props, 'dc-input',
    (key, _) => {
      switch(key) {
        case 'disabled': 
          return 'dc-input--disabled'
        case 'small': 
          return 'dc-input--small'
        case 'iserror':
          return 'dc-input--is-error'
        default: 
          return ''
      }
    }
  )
)

const dc_input_props = ({ disabled, small, iserror, ...props }) => (props)

export const Input = ({ className, children, ...props }) => (
  <input className={dc_input(props)} name={props.id} { ...dc_input_props(props) } />
)


//
//
const dc_select = (props) => (
  dc(props, 'dc-select',
    (key, _) => {
      switch(key) {
        case 'disabled': 
          return 'dc-select--disabled'
        case 'small': 
          return 'dc-select--small'
        case 'iserror':
          return 'dc-select--is-error'
        default: 
          return ''
      }
    }
  )
)

export const Select = ({ className, children, ...props }) => (
  <select className={dc_select(props)} name={props.id} { ...dc_input_props(props) }>
    {children}
  </select>

)


