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
const dc_table = (props) => (
  dc(props, 'dc-table',
    (key, _) => {
      switch(key) {
        case 'responsive': 
          return 'dc-table--responsive'
        default: 
          return ''
      }
    }    
  )
)

export const Table = ({ className, children, ...props }) => (
  <table className={dc_table(props)}>
    {children}
  </table>
)

export const THead = ({children}) => (
  <thead className="dc-table__thead">{children}</thead>
)

export const TBody = ({children}) => (
  <tbody className="dc-table__tbody">{children}</tbody>
)


const dc_tr = (props) => (
  dc(props, 'dc-table__tr',
    (key, _) => {
      switch (key) {
        case 'interactive':
          return 'dc-table__tr--interactive'
        case 'tight':
          return 'dc-table__tr--tight'
        case 'comfortable':
          return 'dc-table__tr--comfortable'
        case 'spacious':
          return 'dc-table__tr--spacious'
        default:
          return ''
      }
    }
  )
)

const dc_tr_props = ({ interactive, tight, comfortable, spacious, ...props }) => (props)

export const TR = ({ className, children, ...props }) => (
  <tr className={dc_tr(props)} {...dc_tr_props(props)}>{children}</tr>
)

export const TH = ({ className, children, ...props }) => (
  <th className="dc-table__th">{children}</th>
)

export const TD = ({ className, children, ...props }) => (
  <td className="dc-table__td">{children}</td>
)
