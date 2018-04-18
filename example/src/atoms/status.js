//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { H1, Card, Status } from 'react-dress-code'

export const ExampleStatus = () => (
  <Card>
    <H1>Status</H1>

    <div><Status active>Active, on</Status></div>
    <div><Status inactive>Inactive, off</Status></div>
    <div><Status disabled>Disabled, off</Status></div>
    <div><Status new>New, Recent</Status></div>
    <div><Status warning>Warning, Issue</Status></div>
    <div><Status error>Error, Issue</Status></div>
  </Card>
)