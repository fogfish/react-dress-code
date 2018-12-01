//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { dc } from '../core/dress-code' 

const dc_row = (props) =>
  dc(props, 'dc-row',
    (key, val) => {
      switch (key) {
        case 'collapse':
          return 'dc-row--collapse'
        case 'align':
          return `dc-row--align--${val}`
        default:
          return ''
      }
    }
  )

export const Row = (props) => (
  <div className={dc_row(props)}>
    {props.children}
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
        case 'shrink':
          return 'dc-column--shrink'
        case 'align':
          return `dc-column--align-self--${val}`
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
