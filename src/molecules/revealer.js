//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { dc } from '../core/dress-code' 


export const SideRevealer = (props) => (
  <div className="dc-side-revealer"> 
    {props.children}

    <input className="dc-side-revealer__toggle dc-icon" type="checkbox" />
    <div className="dc-side-revealer__content dc-card">
      <div className="dc-side-revealer__content__card dc-card">
        {props.side()}
      </div>
    </div>
  </div>
)

