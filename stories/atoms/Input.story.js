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

import { Checkbox, Switchbox, Label, Input, TextArea, Select } from '../../src/index'

storiesOf('Atoms > Forms', module)
  .add('Checkbox',
    withInfo('')(
      () => (
        <div>
          <Checkbox >Check this</Checkbox>
          <Checkbox defaultChecked>Check that</Checkbox>
          <Checkbox defaultChecked disabled>Check Disabled</Checkbox>
        </div>
      )
    )
  )

  .add('Switchbox',
    withInfo('')(
      () => (
        <div>
          <Switchbox>Check this</Switchbox>
          <Switchbox defaultChecked>Check that</Switchbox>
          <Switchbox defaultChecked disabled>Check Disabled</Switchbox>
        </div>
      )
    )
  )

  .add('Text input',
    withInfo('')(
      () => (
        <div>
          <Label>Text input</Label>
          <Input id="optInput" type="text" placeholder="e.g. give an example" />

          <Label sub="optional">Number input</Label>
          <Input id="intInput" type="number" placeholder="e.g. 100" />

          <Label sub="required">Required input</Label>
          <Input id="reqInput" type="text" placeholder="e.g. give an example" />

          <Label sub="required">Required input</Label>
          <Input id="errInput" type="text" placeholder="e.g. give an example" is-error />

          <Label disabled>Disabled input</Label>
          <Input id="offInput" type="text" placeholder="e.g. give an example" disabled />

          <Label>Small input</Label>
          <Input id="lowInput" type="text" placeholder="e.g. give an example" small />
        </div>
      )
    )
  )

  .add('Text Area',
    withInfo('')(
      () => (
        <div>
          <Label>Text area</Label>
          <TextArea cols="30" rows="3" />

          <Label sub="required">Text area</Label>
          <TextArea cols="30" rows="3" is-error/>
        </div>
      )
    )
  )

  .add('Select',
    withInfo('')(
      () => (
        <div>
          <Select>
            <option value="">Enabled</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
          </Select>

          <Select disabled>
            <option value="">Disabled</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
          </Select>

          <Select is-error>
            <option value="">Enabled</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
          </Select>

          <Select small>
            <option value="">Enabled</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
          </Select>
        </div>
      )
    )
  )


