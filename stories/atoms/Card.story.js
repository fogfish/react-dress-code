import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Card, Text } from '../../src/index'

storiesOf('Atoms > Cards', module)
  .add('Cards',
    withInfo('')(
      () => (
        <div>
          <Card>
            <Text>
              Cards are the basic building blocks of a page. Usually all content should be inside one or more card. For example, in this demo, every section or element is inside a card. We don't recommend nesting cards, such as in this example, but it's technically possible.
            </Text>
          </Card>
        </div>
      )
    )
  )