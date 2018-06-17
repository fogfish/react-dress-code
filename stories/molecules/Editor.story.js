import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action, configureActions } from '@storybook/addon-actions'

import { EInput, ETextArea, Label } from '../../src/index'

storiesOf('Molecules > Editor', module)
  .add('Inline input editor',
    withInfo('')(
      () => (
        <div>
          <Label sub="click on text to edit, Shift + Enter to save, Esc to cancel">Text input</Label>
          <EInput 
            id="optInput" 
            type="text" 
            defaultValue="Give An Example" 
            onEdit={action("edit")}
            onCommit={action("commit")}
            onCancel={action("cancel")}
          />
        </div>
      )
    )
  )

  .add('Inline textarea editor',
    withInfo('')(
      () => (
        <div>
          <Label sub="click on text to edit, Shift + Enter to save, Esc to cancel">Text area</Label>
          <ETextArea
            cols="30" rows="3"
            defaultValue="Give An Example" 
            onEdit={action("edit")}
            onCommit={action("commit")}
            onCancel={action("cancel")}
          />
        </div>
      )
    )
  )
