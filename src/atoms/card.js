//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'

export const Card = ({ className, children, ...props }) => (
  <div className="dc-card" { ...props }>
    {children}
  </div>
)
