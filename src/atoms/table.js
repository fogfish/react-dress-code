//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { dc } from '../core/dress-code' 


export const Table = ({responsive, children}) => (
  <table className={`dc-table${responsive?' dc-table--responsive':''}`}>
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

export const TR = (props) => (
  <tr className={dc_tr(props)}>{props.children}</tr>
)

export const TH = ({children}) => (
  <th className="dc-table__th">{children}</th>
)

export const TD = ({children}) => (
  <td className="dc-table__td">{children}</td>
)
