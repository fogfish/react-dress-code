//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { dc, id } from '../core/dress-code' 
import './input.css'

//
//
const dc_checkbox = (props) => (
  dc(props, 'dc-checkbox',
    (key, _) => {
      switch(key) {
        default: 
          return ''
      }
    }
  )
)

const CheckboxWithId = ({ type, className, children, ...props }) => (
  <span>
    <input type="checkbox" className={dc_checkbox(props)} name={props.id} { ...props } />
    <label className="dc-label" htmlFor={props.id}>
      {children}
    </label>
  </span>
)

export const Checkbox = props => (
  <CheckboxWithId id={props.id ? props.id : id()} { ...props } />
)

//
//
const dc_switchbox = (props) => (
  dc(props, 'dc-checkbox dc-checkbox--alt',
    (key, _) => {
      switch(key) {
        default: 
          return ''
      }
    }
  )
)

const SwitchboxWithId = ({ type, className, children, ...props }) => (
  <span>
    <input type="checkbox" className={dc_switchbox(props)} name={props.id} { ...props } />
    <label className="dc-label" htmlFor={props.id}>
      {children}
    </label>
  </span>
)

export const Switchbox = props => (
  <SwitchboxWithId id={props.id ? props.id : id()} { ...props } />
)


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
        case 'in-group':
          return 'dc-input--in-input-group'
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
const dc_textarea = (props) => (
  dc(props, 'dc-textarea',
    (key, _) => {
      switch(key) {
        case 'disabled': 
          return 'dc-textarea--disabled'
        case 'small': 
          return 'dc-textarea--small'
        case 'iserror':
          return 'dc-textarea--is-error'
        case 'in-group':
          return 'dc-textarea--in-input-group'
        default: 
          return ''
      }
    }
  )
)

const dc_textarea_props = ({ disabled, small, iserror, ...props }) => (props)

export const TextArea = ({ className, ...props }) => (
  <textarea className={dc_textarea(props)} name={props.id} { ...dc_textarea_props(props) } />
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

const dc_select_props = ({ small, iserror, ...props }) => (props)


export const Select = ({ className, children, ...props }) => (
  <select className={dc_select(props)} name={props.id} { ...dc_select_props(props) }>
    {children}
  </select>

)

//
//
export const InputStack = ({ children }) => (
  <div class="dc-input-stack">
    {children}
  </div>
)


//
//
const dc_static = (props) => (
  dc(props, 'dc-static',
    (key, _) => {
      switch(key) {
        case 'in-group': 
          return 'dc-static--in-input-group'
        default: 
          return ''
      }
    }
  )
)


export const Static = ({ children, ...props }) => (
  <div className={dc_static(props)} {...props}>
    {children}
  </div>
)


//
//
const dc_static_text = (props) => (
  dc(props, 'dc-static-text',
    (key, _) => {
      switch(key) {
        case 'in-group': 
          return 'dc-static-text--in-input-group'
        default: 
          return ''
      }
    }
  )
)

export const StaticText = ({ children, ...props }) => (
  <div className={dc_static_text(props)} {...props}>
    {children}
  </div>
)

