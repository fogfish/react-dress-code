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
const dc_icon = (props) => (
  dc(props, 'dc-icon', 
    (key, val) => {
      switch (key) {
        case 'id':
          return `dc-icon--${val}`
        case 'button':
          return 'dc-icon--btn'
        case 'right':
          return 'dc-icon--btn--right'
        case 'left':
          return 'dc-icon--btn--left'
        case 'small':
          return 'dc-icon--btn-small'
        case 'large':
          return 'dc-icon--btn-large'
        case 'spin':
          return 'dc-icon--spin'
        default:
          return ''
      }
    }
  )
)

export const Icon = props => (
   <i className={dc_icon(props)} />
)

