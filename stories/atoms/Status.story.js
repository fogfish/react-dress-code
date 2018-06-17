import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Status } from '../../src/index'

storiesOf('Atoms > Status', module)
  .add('Status',
    withInfo('')(
      () => (
        <div>
          <div><Status active>Active, on</Status></div>
          <div><Status inactive>Inactive, off</Status></div>
          <div><Status disabled>Disabled, off</Status></div>
          <div><Status new>New, Recent</Status></div>
          <div><Status warning>Warning, Issue</Status></div>
          <div><Status error>Error, Issue</Status></div>
        </div>
      )
    )
  )