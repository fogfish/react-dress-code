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
const dc_breadcrumbs = (props) => (
  dc(props, 'dc-breadcrumb',
    (key, _) => {
      switch(key) {
        default: 
          return ''
      }
    }    
  )
)

export const BreadCrumbs = ({ className, children, ...props }) => (
  <ul className={dc_breadcrumbs(props)}>
    {children}
  </ul>
)

//
//
const dc_breadcrumb = (props) => (
  dc(props, 'dc-breadcrumb__item',
    (key, _) => {
      switch(key) {
        default: 
          return ''
      }
    }    
  )
)

export const BreadCrumb = ({ href, children, ...props }) => (
  <li className={dc_breadcrumb(props)}>
    {href 
      ? <a href={href} class="dc-link">{children}</a>
      : children
    }
  </li>
)
