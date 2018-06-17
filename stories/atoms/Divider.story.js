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

import { Divider } from '../../src/index'

storiesOf('Atoms > Divider', module)
  .add('Primary Divider',
    withInfo('')(
      () => (
        <div>
          <Divider />
        </div>
      )
    )
  )

  .add('Secondary Divider',
    withInfo('')(
      () => (
        <div>
          <Divider secondary />
        </div>
      )
    )
  )
