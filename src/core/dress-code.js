//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//

export const dc = (props, klass, f) => (
   Object.keys(props).map(
      (key) => 
         props[key] !== false ? f(key, props[key]) : ''
   ).concat([klass]).join(' ').trim()
)

