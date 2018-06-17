import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { H1, H2, H3, H4, Text } from '../../src/index'

storiesOf('Core > Typography', module)
  .add('Font sizes',
    withInfo('')(
      () => (
        <div>
          <H1>Headline H1 is 34px and the line-height is 48px</H1>
          <H2>Headline H2 is 27px and the line-height is 36px</H2>
          <H3>Headline H3 is 22px and the line-height is 36px</H3>
          <H4>Headline H4 is 18px and the line-height is 24px</H4>
          <Text>Size for normal text is 14px and the line-height is 24px</Text>
          <Text small>Size for small copy is 11px and the line-height is 18px</Text>
        </div>
      )
    )
  )
