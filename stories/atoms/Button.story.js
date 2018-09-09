//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Button, Icon, Link } from '../../src/index'

storiesOf('Atoms > Buttons', module)
  .add('Basic Buttons',
    withInfo('')(
      () => (
        <div>
          <Link href="#">Save File</Link>
          <Button>Edit Account</Button>
          <Button type="submit">Create User</Button>
          <Button type="submit">Download</Button> 
        </div>
      )
    )
  )

  .add('Button sizes',
    withInfo('')(
      () => (
        <div>
          <Button large>Large Button</Button>
          <Button>Normal Button</Button>
          <Button small>Small Button</Button>
        </div>
      )
    )
  )

  .add('Button options',
    withInfo('')(
      () => (
        <div>
          <Button primary>Primary Button</Button>
          <Button destroy>Destroy Button</Button>
          <Button active>Active Button</Button>
          <Button disabled>Disabled Button</Button>
          <Button nofocus>Button without focus</Button>
        </div>
      )
    )
  )

  .add('Link options',
    withInfo('')(
      () => (
        <div>
          <Button link>Button Link</Button>
          <Button link destroy>Destroy Button</Button>

          <Button link disabled>Disabled Button</Button>
          <Button link nofocus>Button without focus</Button>
        </div>
      )
    )
  )

  .add('Button Block',
    withInfo('')(
      () => (
        <div>
          <Button block>Button Block</Button>
        </div>
      )
    )
  )

  .add('Button with Icons',
    withInfo('')(
      () => (
        <div>
          <Button><Icon id="history" button/></Button>
          <Button primary><Icon id="pencil" button/></Button>
          <Button>Undo <Icon id="undo" button left/></Button>
          <Button disabled>Redo <Icon id="redo" button right/></Button>
          <Button destroy><Icon id="trash" button/></Button>

          <Button small>Redo <Icon id="redo" button left small/></Button>
          <Button destroy large>Lock <Icon id="lock" button right large/></Button>
        </div>
      )
    )
  )


  .add('Link with Icons',
    withInfo('')(
      () => (
        <div>
          <Button link><Icon id="history" button/></Button>
          <Button link>Undo <Icon id="undo" button left/></Button>
          <Button link disabled>Redo <Icon id="redo" button right/></Button>
          <Button link destroy><Icon id="trash" button/></Button>

          <Button link small>Redo <Icon id="redo" button left small/></Button>
          <Button link destroy large>Lock <Icon id="lock" button right large/></Button>
        </div>
      )
    )
  )
