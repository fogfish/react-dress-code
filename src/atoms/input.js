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
        case 'is-error':
          return 'dc-input--is-error'
        default: 
          return ''
      }
    }
  )
)

export const Input = (props) => (
  <input 
    className={dc_input(props)}
    id={props.id}
    name={props.id}
    type={props.type}  
    placeholder={props.placeholder} 
    disabled={props.disabled}
    autoFocus={props.autoFocus}
    required={props.required} />
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
        case 'is-error':
          return 'dc-select--is-error'
        default: 
          return ''
      }
    }
  )
)

export const Select = (props) => (
  <select
    className={dc_select(props)}
    id={props.id}
    disabled={props.disabled}
    onChange={props.onChange}>
    {props.children}
  </select>

)


