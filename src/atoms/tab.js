//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'

export const Tab = ({vertical, children}) => (
  <ul className={`dc-tab${vertical?' dc-tab--vertical':''}`}>
    {children}
  </ul>
)

export const TabElement = ({header, active, disabled, right, children}) => (
  <li className={`dc-tab__element${header?' dc-tab__element--header':''}${active?' dc-tab__element--active':''}${disabled?' dc-tab__element--disabled':''}${right?' dc-tab__element--right':''}`}>
    {children}
  </li>
)
