//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { dc } from '../core/dress-code' 
import { Table, THead, TBody, TR, TH, TD } from '../atoms/table'


const Head = ({ children }) => (
  <THead>
    <TR>
      {React.Children.map(children, e => <TH>{e.props.title}</TH>)}
    </TR>
  </THead>
)

const Data = ({ children, json, onClick }) => (
  <TR
    interactive
    onClick={onClick && (() => onClick(json))}
  >
    {React.Children.map(children, e => (
      <TD><Schema { ...e.props } json={json} onClick={onClick} /></TD>
    ))}
  </TR>
)

const accessor = props => (
  props.format 
    ? props.format(props.json)
    : props.json[props.field] ? props.json[props.field] : ''
)

export const Schema = ({ Component, ...props }) => (
  Component 
    ? <Component { ...props }>{accessor(props)}</Component>
    : <React.Fragment>{accessor(props)}</React.Fragment>
)

export const Surface = props => (
  <Table responsive>
    <Head {...props} />
    <TBody>
      {props.data && props.data.map((json, id) => <Data key={json.id} json={json} {...props} />)}
    </TBody>
  </Table>
)
