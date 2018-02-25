//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { dc } from '../core/dress-code' 


export const Dialog = ({children}) => (
  <div className="dc-dialog">
    {children}
  </div>
)

export const DialogContent = ({children}) => (
  <div className="dc-dialog__content">
    {children}
  </div>
)

export const DialogBody = ({children}) => (
  <div className="dc-dialog__body">
    {children}
  </div>
)

export const DialogTitle = ({children}) => (
  <div className="dc-dialog__title">
    {children}
  </div>
)

export const DialogSubTitle = ({children}) => (
  <div className="dc-dialog__subtitle">
    {children}
  </div>
)

const dc_dialog_action = (props) => (
  dc(props, 'dc-dialog__actions', 
    (key, _) => {
      switch (key) {
        case 'with-link':
          return 'dc-dialog__actions--with-link'
        default:
          return ''
      }
    }
  )
)

export const DialogActions = (props) => (
  <div className={dc_dialog_action(props)}>
    {props.children}
  </div>
)
