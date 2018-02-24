//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { Button, Link, H1, H2, Divider, Card } from 'react-dress-code'

const BasicButtons = () => (
  <div className="item-group">
    <Link href="#">Save File</Link>
    <Button>Edit Account</Button>
    <Button type="submit">Create User</Button>
    <Button type="submit">Download</Button>      
  </div>
)

const ButtonSizes = () => (
  <div className="item-group">
    <Button large>Large Button</Button>
    <Button>Normal Button</Button>
    <Button small>Small Button</Button>
  </div>
)


const ButtonOptions = () => (
  <div className="item-group">
    <Button primary>Primary Button</Button>
    <Button destroy>Destroy Button</Button>
    <Button active>Active Button</Button>
    <Button disabled>Disabled Button</Button>
    <Button nofocus>Button without focus</Button>
  </div>
)

const LinkOptions = () => (
  <div className="item-group">
    <Button link>Button Link</Button>
    <Button link destroy>Destroy Button</Button>

    <Button link disabled>Disabled Button</Button>
    <Button link nofocus>Button without focus</Button>
  </div>
)


export const Buttons = () => (
  <Card>
    <H1>Buttons</H1>

    <H2>Basic Buttons</H2>
    <Divider/>
    <BasicButtons />

    <H2>Button sizes</H2>
    <Divider/>
    <ButtonSizes />

    <H2>Button options</H2>
    <Divider/>
    <ButtonOptions />
    <LinkOptions />
  </Card>
)

