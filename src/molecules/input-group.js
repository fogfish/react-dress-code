//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { dc } from '../core/dress-code'
import './input-group.css'

export const InputGroup = ({ children }) => (
   <div className="dc-input-group">
      {children}
   </div>
)

export const AddOn = ({ children }) => (
   <div className="dc-input-addon">{children}</div>
)

export const VerticalButtons = ({ children }) => (
   <div className="dc-input-group--vertical-buttons">
      {children}
   </div>
)