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
const dc_divider = (props) => (
  dc(props, 'dc-divider', 
    (key, _) => {
      switch (key) {
        case 'secondary':
          return 'dc-divider--secondary'
        default:
          return ''
      }
    }
  )
)

const dc_divider_props = ({ secondary, ...props }) => (props)

export const Divider = ({ className, children, ...props }) => (
  <hr className={dc_divider(props)} { ...dc_divider_props(props) }/>
)

