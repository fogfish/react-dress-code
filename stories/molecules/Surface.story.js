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
import { action } from '@storybook/addon-actions'

import { Surface, Schema, Status } from '../../src/index'

const data = [
  {id: 1, title: "One", description: "This is One", active: true},
  {id: 2, title: "Two", description: "This is Two", active: true},
  {id: 3, title: "Three", description: "This is Three", active: false}
]

const CustomCell = props => (
  <Status active={props.json.active}>Element</Status>
)

storiesOf('Molecules > Surface', module)
  .add('Data Surface',
    withInfo('')(
      () => (
        <div>
          <Surface data={data} onClick={action('data')}>
            <Schema title="ID" field="id" />
            <Schema title="Title" field="title" />
            <Schema title="Description" field="description" />
            <Schema title="Link" field="link" Component={CustomCell} />
          </Surface>
        </div>
      )
    )
  )