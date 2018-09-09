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

import { InputGroup, AddOn, Input, Label, Button, Icon, Select, Static, TextArea, VerticalButtons} from '../../src/index'

//             


storiesOf('Molecules > Input Groups', module)
  .add('AddOn Append',
    withInfo('')(
      () => (
        <div>
          <Label>Addon - Appended</Label>
          <InputGroup>
            <Input in-group placeholder="e. g. 100" />
            <AddOn>&euro;</AddOn>
          </InputGroup>

          <Label>Addon - Prepended</Label>
          <InputGroup>
            <AddOn>http://</AddOn>
            <Input in-group placeholder="e. g. example.com" />
          </InputGroup>

          <Label>Addon - with Button</Label>
          <InputGroup>
            <Input in-group placeholder="e. g. story" />
            <Button primary in-group><Icon id="search"/></Button>
          </InputGroup>

          <Label>Addon - Prepended with Button</Label>
          <InputGroup>
            <AddOn>http://</AddOn>
            <Input in-group placeholder="e. g. example.com" />
            <Button primary in-group>Go</Button>
          </InputGroup>

          <Label>Addon - with Select</Label>
          <InputGroup>
            <AddOn>With</AddOn>
            <Select in-group>
              <option value="">Enabled</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
              <option value="">Option 4</option>
              <option value="">Option 5</option>
            </Select>
          </InputGroup>

          <Label>Addon - with Static</Label>
          <InputGroup>
            <Static in-group>100</Static>
            <AddOn>&euro;</AddOn>
          </InputGroup>

          <Label>Addon - Text Area</Label>
          <InputGroup>
            <TextArea in-group placeholder="e. g. my text" />
            <VerticalButtons>
              <Button primary in-group with-text><Icon id="undo"/></Button>
              <Button primary in-group with-text><Icon id="pencil"/></Button>
              <Button primary in-group with-text><Icon id="redo"/></Button>
            </VerticalButtons>
          </InputGroup>
        </div>
      )
    )
  )
