import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Checkbox, Switchbox, Label, Input, Select } from '../../src/index'

storiesOf('Atoms > Forms', module)
  .add('Checkbox',
    withInfo('')(
      () => (
        <div>
          <Checkbox id="c1">Check this</Checkbox>
          <Checkbox id="c2" defaultChecked>Check that</Checkbox>
          <Checkbox id="c3" defaultChecked disabled>Check Disabled</Checkbox>
        </div>
      )
    )
  )

  .add('Switchbox',
    withInfo('')(
      () => (
        <div>
          <Switchbox id="c4">Check this</Switchbox>
          <Switchbox id="c5" defaultChecked>Check that</Switchbox>
          <Switchbox id="c6" defaultChecked disabled>Check Disabled</Switchbox>
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
          <Input id="errInput" type="text" placeholder="e.g. give an example" iserror />

          <Label disabled>Disabled input</Label>
          <Input id="offInput" type="text" placeholder="e.g. give an example" disabled />

          <Label>Small input</Label>
          <Input id="lowInput" type="text" placeholder="e.g. give an example" small />
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

          <Select iserror>
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


