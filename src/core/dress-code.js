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

//
// Math.random should be unique because of its seeding algorithm.
// Convert it to base 36 (numbers + letters), and grab the first 9 characters
// after the decimal.
//
// see https://gist.github.com/gordonbrander/2230317
export const id = () => (
   Math.random().toString(36).substr(2, 9)
)
