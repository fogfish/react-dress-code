//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { dc } from '../core/dress-code' 


export const Row = ({children}) => (
  <div className="dc-row">   
    {children}
  </div>
)

const dc_column = (props) =>
  dc(props, 'dc-column',
    (key, val) => {
      switch (key) {
        case 'small':
          return `dc-column--small-${val}`
        case 'medium':
          return `dc-column--medium-${val}`
        case 'large':
          return `dc-column--large-${val}`
        case 'huge': 
          return `dc-column--huge-${val}`
        default:
          return ''
      }
    }
  )

const dc_column_contents = (props) =>
  dc(props, 'dc-column__contents',
    (key, _) => {
      switch (key) {
        case 'center':
          return 'dc-column__contents--center'
        default:
          return ''
      }
    }
  )

export const Column = (props) => (
  <div className={dc_column(props)}>
    <div className={dc_column_contents(props)}>
      {props.children}
    </div>
  </div>  
)
