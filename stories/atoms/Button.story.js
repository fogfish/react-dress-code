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

import { Button, Link } from '../../src/index'

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
