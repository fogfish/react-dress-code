import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { LoadingBar } from '../../src/index'

storiesOf('Atoms > Progress Indicators', module)
  .add('Loading bar',
    withInfo('')(
      () => (
        <div>
          <LoadingBar />
        </div>
      )
    )
  )
