//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'

export const H1 = ({children}) => (
   <h1 className="dc-h1">{children}</h1>
)

export const H2 = ({children}) => (
   <h2 className="dc-h2">{children}</h2>
)

export const H3 = ({children}) => (
   <h3 className="dc-h3">{children}</h3>
)

export const H4 = ({children}) => (
   <h4 className="dc-h4">{children}</h4>
)

export const Text = ({small, children}) => (
   <p className={small ? 'dc--text-small' : 'dc-p'}>{children}</p> 
)
