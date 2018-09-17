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

import { LoadingBar, Icon, Column, Row } from '../../src/index'

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

  .add('Icon spinners',
    withInfo('')(
      () => (
        <div style={{'fontSize': '32px'}}>
          <Icon id="add" spin/><span> Add</span><br/><br/>
          <Icon id="cog" spin/><span> Cog</span><br/><br/>
          <Icon id="open-circle" spin/><span> Open Circle</span><br/><br/>
          <Icon id="spinner" spin/><span> Spinner</span><br/><br/>
          <Icon id="history" spin/><span> History</span><br/><br/>
        </div>
      )
    )
  )
