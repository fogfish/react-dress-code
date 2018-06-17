//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

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
